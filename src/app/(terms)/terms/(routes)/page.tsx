"use client";

import { TermsContent, TermsHeader } from "@/components/pages/terms/root";

export default function TermsPage() {
  return (
    <div className="terms-page">
      <TermsHeader />
      <TermsContent />
    </div>
  );
}
