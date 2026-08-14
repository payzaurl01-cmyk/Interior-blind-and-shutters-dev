import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  cardImage: string;
  commonImage: string;
  conclusionTitle: string;
  conclusion: string;
  order: number;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  cardImage: string;
  mainImage: string;
  discover: string;
  aboutPropertyTitle: string;
  aboutProperty: string;
  address: string;
  city: string;
  area: string;
  price: string;
  galleryTitle: string;
  gallery: string[];
  order: number;
  body: string;
};

export type ChooseCard = { n: string; title: string; detail: string };

export type Service = {
  slug: string;
  title: string;
  detailsImage: string;
  chooseTitle: string;
  choose: ChooseCard[];
  postTwo: string;
  order: number;
  body: string;
};

export type Product = {
  handle: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  heroImage?: string;
};

function readCollection(dir: string): { data: Record<string, unknown>; body: string; slug: string }[] {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(full, f), "utf8");
      const { data, content } = matter(raw);
      return { data, body: content, slug: f.replace(/\.mdx$/, "") };
    });
}

const byOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export function getBlogPosts(): BlogPost[] {
  return readCollection("blog")
    .map(({ data, body, slug }) => ({ ...(data as Omit<BlogPost, "body">), slug, body }))
    .sort(byOrder);
}
export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getProjects(): Project[] {
  return readCollection("projects")
    .map(({ data, body, slug }) => ({ ...(data as Omit<Project, "body">), slug, body }))
    .sort(byOrder);
}
export function getProject(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getServices(): Service[] {
  return readCollection("services")
    .map(({ data, body, slug }) => {
      const d = data as Omit<Service, "body" | "choose"> & { choose: string };
      let choose: ChooseCard[] = [];
      try {
        choose = JSON.parse(d.choose || "[]");
      } catch {
        choose = [];
      }
      return { ...d, choose, slug, body };
    })
    .sort(byOrder);
}
export function getService(slug: string): Service | undefined {
  return getServices().find((s) => s.slug === slug);
}

export function getProducts(): Product[] {
  const file = path.join(CONTENT_DIR, "products.json");
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf8")) as Product[];
}
export function getProduct(handle: string): Product | undefined {
  return getProducts().find((p) => p.handle === handle);
}
