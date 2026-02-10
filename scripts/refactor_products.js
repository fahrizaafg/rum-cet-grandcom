
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../app/(data)/products.ts');
const rawContent = fs.readFileSync(productsFilePath, 'utf8');

// Extract the products array
const match = rawContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
if (!match) {
    console.error("Could not find products array");
    process.exit(1);
}

// Function to parse the loose JSON (keys might not be quoted, but in the file they seem quoted)
// The file content is valid JS object literal syntax.
// We can use `eval` safely enough here since it's our own file, or strict JSON parse if keys are quoted.
// Looking at the file, keys are quoted: "id": "...", "name": "..."
// But let's check if there are unquoted keys.
// The snippet showed "id": "...", so it might be valid JSON.
// Let's try JSON.parse first, if it fails, we use a safer eval alternative or just regex.

let products = [];
try {
    // We need to clean trailing commas and maybe comments if any
    let jsonStr = match[1];
    // Remove trailing commas before closing braces/brackets
    jsonStr = jsonStr.replace(/,(\s*[\]}])/g, '$1');
    products = JSON.parse(jsonStr);
} catch (e) {
    console.log("JSON parse failed, trying eval approach (sandboxed). Error:", e.message);
    // Fallback: use Function to evaluate the array literal
    // We need to mock the environment if there are variables, but here it seems to be just data.
    try {
        products = eval(match[1]);
    } catch (e2) {
        console.error("Eval failed:", e2);
        process.exit(1);
    }
}

console.log(`Loaded ${products.length} products.`);

// Grouping Logic
const groupedProducts = [];
const processedIds = new Set();

// Helper to clean name for comparison
const cleanName = (name) => name.trim();

// Helper to find common prefix
const getCommonPrefix = (str1, str2) => {
    let i = 0;
    while(i < str1.length && i < str2.length && str1[i] === str2[i]) i++;
    return str1.substring(0, i);
}

// Sort products by name to make grouping easier
products.sort((a, b) => a.name.localeCompare(b.name));

for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (processedIds.has(p.id)) continue;

    const group = [p];
    processedIds.add(p.id);

    // Look ahead for similar names
    // We look for products with the same category and sharing a significant prefix
    for (let j = i + 1; j < products.length; j++) {
        const other = products[j];
        if (processedIds.has(other.id)) continue;
        if (other.category !== p.category) continue;

        const prefix = getCommonPrefix(p.name, other.name);
        
        // Criteria for grouping:
        // 1. Prefix is long enough (e.g., > 10 chars or > 60% of shorter name)
        // 2. The remaining part looks like a variant (size, spec)
        // 3. Or explicit patterns (A3, A4, etc.)
        
        const isSignificant = prefix.length > 8; // Adjust threshold as needed
        
        if (isSignificant) {
            // Check if the remainder is reasonable variant name
            // If prefix ends in space, it's safer.
            // If prefix splits a word, it might be bad.
            // e.g. "Kartu Nama" and "Kartu Nama" -> match
            
            // Let's check if they belong to the same "series"
            // Simple heuristic: if they share the first 3 words?
            
            // Refined: Group if name starts with the same base
            // AND the difference is short or follows pattern
            
            // Let's use a simplified approach:
            // If common prefix is the whole name of one (minus potential variant), or significant.
            
            // For this task, strict grouping might be better to avoid false positives.
            // Let's group if they share at least 70% of the string or have very similar structure.
            
            // Actually, let's look at the example: "Stiker Cromo A3", "Stiker Cromo A4".
            // Prefix: "Stiker Cromo "
            
            // Let's try: if prefix length >= 10 and (prefix ends with space or other has space after prefix)
            
            if (other.name.startsWith(prefix)) {
                 // Double check if it's a good group
                 // Avoid grouping "Kartu Nama A" and "Kartu Nama B" if they are totally different products 
                 // but here they seem to be variants.
                 
                 group.push(other);
                 processedIds.add(other.id);
            }
        }
    }

    // Create the grouped product object
    if (group.length > 1) {
        // Determine base name (shortest or common prefix)
        // Usually the common prefix is the base name.
        let commonName = group[0].name;
        for (let k = 1; k < group.length; k++) {
            commonName = getCommonPrefix(commonName, group[k].name);
        }
        commonName = commonName.trim();
        // Remove trailing hyphens or " -"
        commonName = commonName.replace(/ [-–]$/, '').trim();

        // If common name is too short, fallback to first product name (and treat others as variants of it? No, that's weird).
        // If common name is empty/short, maybe they shouldn't be grouped.
        // But we already filtered by significant prefix.

        // Calculate variants
        const variants = group.map(item => {
            let variantName = item.name.substring(commonName.length).trim();
            // Remove leading hyphens or " -"
            variantName = variantName.replace(/^[-–]\s*/, '').trim();
            if (!variantName) variantName = "Standard"; // Should not happen if names are different
            
            return {
                id: item.id,
                name: variantName, // This corresponds to 'size' or 'type'
                price: item.basePrice,
                // We can keep other specific fields if needed
            };
        });

        // Use the first item's metadata (image, description, etc.)
        // But update price to "Mulai dari..." logic is handled in UI.
        // Base price should be the min price.
        const minPrice = Math.min(...group.map(g => g.basePrice));
        
        // New ID: slugify the common name
        const newId = commonName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        groupedProducts.push({
            id: newId,
            name: commonName,
            category: group[0].category,
            description: group[0].description, // Assuming similar descriptions
            priceSimulated: `Mulai Rp ${minPrice.toLocaleString('id-ID')}`, // UI will handle this better
            basePrice: minPrice,
            features: group[0].features,
            iconName: group[0].iconName,
            image: group[0].image,
            variants: variants
        });
    } else {
        // Single product
        groupedProducts.push(group[0]);
    }
}

console.log(`Grouped into ${groupedProducts.length} products (from ${products.length}).`);

// Generate the new TS content
const newContent = `export type Category = 
  | 'Gantungan Kunci'
  | 'Merchandise'
  | 'Alat Tulis & Kantor'
  | 'Promosi & Event'
  | 'Jasa Cetak'
  | 'Lainnya';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  priceSimulated: string;
  basePrice: number;
  features: string[];
  iconName: string;
  image: string;
  variants?: ProductVariant[];
}

export const products: Product[] = ${JSON.stringify(groupedProducts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../app/(data)/products_refactored.ts'), newContent);
console.log("Written to products_refactored.ts");
