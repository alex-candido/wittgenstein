// src/app/(legal)/legal/(routes)/[slug]/page.tsx
import { LegalContent } from '@/components/pages/terms/legal-content';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return [
    { slug: 'privacy-policy' },
    { slug: 'terms-of-service' },
  ];
}

export default function LegalPage({ params }: PageProps) {
  return (
    <div>
      <LegalContent slug={params.slug} />
    </div>
  );
}