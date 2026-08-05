import { MDXRemote } from "next-mdx-remote/rsc";

/**
 * Renders a Markdown/MDX string inside a template's rich-text wrapper so the
 * original /assets/css/styles.css (`.richtext` rules) styles it unchanged.
 * `className` is the wrapper class from the source markup (e.g. "blog-post richtext").
 */
export function MdxBody({ source, className }: { source: string; className: string }) {
  return (
    <div className={className}>
      <MDXRemote source={source} />
    </div>
  );
}
