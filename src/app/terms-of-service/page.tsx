import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalDocument } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Interior Blinds and Shutters Pty Ltd.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      source={getLegalDocument("terms-of-service")}
    />
  );
}
