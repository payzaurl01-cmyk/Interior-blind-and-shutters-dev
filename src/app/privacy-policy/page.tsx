import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalDocument } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Interior Blinds and Shutters Pty Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      source={getLegalDocument("privacy-policy")}
    />
  );
}
