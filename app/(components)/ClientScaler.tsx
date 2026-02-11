'use client';

import dynamic from 'next/dynamic';

const InteractiveProductScaler = dynamic(() => import('./InteractiveProductScaler'), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse rounded-3xl mx-6 lg:mx-8 my-20" />,
  ssr: false
});

export default function ClientScaler() {
  return <InteractiveProductScaler />;
}
