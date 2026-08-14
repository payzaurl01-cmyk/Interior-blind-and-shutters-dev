import fs from "node:fs";
import path from "node:path";

export function getLegalDocument(slug: "privacy-policy" | "terms-of-service") {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "content", "legal", `${slug}.md`),
    "utf8",
  );
}
