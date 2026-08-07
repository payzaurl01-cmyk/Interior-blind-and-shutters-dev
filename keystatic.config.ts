import { collection, config, fields } from "@keystatic/core";

const isGitHubMode = process.env.KEYSTATIC_STORAGE_KIND === "github";

export default config({
  storage: isGitHubMode
    ? {
        kind: "github",
        repo: "payzaurl01-cmyk/Interior-blind-and-shutters-dev",
      }
    : { kind: "local" },
  ui: {
    brand: { name: "Nuvora" },
  },
  collections: {
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "body" },
      columns: ["title", "category", "date", "order"],
      schema: {
        title: fields.slug({
          name: {
            label: "Post title",
            validation: { isRequired: true },
          },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Architecture", value: "architect" },
            { label: "Design", value: "design" },
            { label: "Interior", value: "interior" },
          ],
          defaultValue: "interior",
        }),
        author: fields.text({
          label: "Author",
          validation: { isRequired: true },
        }),
        date: fields.text({
          label: "Published date",
          description: "Displayed exactly as entered, for example: Aug 7, 2026",
          validation: { isRequired: true },
        }),
        readTime: fields.text({
          label: "Estimated read time",
          description: "For example: 6 mins",
          validation: { isRequired: true },
        }),
        heroImage: fields.image({
          label: "Hero image",
          directory: "public/assets/images",
          publicPath: "/assets/images/",
          validation: { isRequired: true },
        }),
        cardImage: fields.image({
          label: "Card image",
          directory: "public/assets/images",
          publicPath: "/assets/images/",
          validation: { isRequired: true },
        }),
        commonImage: fields.image({
          label: "Article feature image",
          directory: "public/assets/images",
          publicPath: "/assets/images/",
        }),
        conclusionTitle: fields.text({
          label: "Conclusion title",
          defaultValue: "Conclusion",
        }),
        conclusion: fields.text({
          label: "Conclusion",
          multiline: true,
        }),
        order: fields.integer({
          label: "Display order",
          description: "Lower numbers appear first on the blog page.",
          defaultValue: 0,
        }),
        body: fields.mdx({
          label: "Article content",
          options: {
            image: {
              directory: "public/assets/images/blog-content",
              publicPath: "/assets/images/blog-content/",
            },
          },
        }),
      },
    }),
  },
});
