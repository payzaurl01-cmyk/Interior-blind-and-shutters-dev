import { getBlogPosts } from "@/lib/content";

// Nuvora template — blog index. Hero + category chips mirror the original design;
// the grid is generated from the blog content collection (src/content/blog/*.mdx).
// The chips filter cards by `data-cat` via NuvoraScripts (initBlogFilter).
const CATEGORIES: { label: string; filter: string }[] = [
  { label: "All", filter: "all" },
  { label: "Architect", filter: "architect" },
  { label: "Design", filter: "design" },
  { label: "Interior", filter: "interior" },
];

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <>
      <section className="section inner-hero">
        <div className="container">
          <div className="inner-title-wrap blog-hero">
            <div className="inner-title-box is-blog reveal">
              <h1 className="hero-white-title">
                Smart features and ideas
                <span className="italic none">that we have explored for you</span>
              </h1>
            </div>
            <div className="inner-button-box reveal">
              <a className="primary-button inline-block" href="/contact">
                <div className="primary-button-content">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">GET CONSULTATION</div>
                    <div className="primary-button-hover-text">GET CONSULTATION</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="visual-wrap">
          <img
            alt=""
            className="visual"
            loading="lazy"
            sizes="(max-width: 5760px) 100vw, 5760px"
            src="/assets/images/Project-Banner-Image.webp"
            srcSet="/assets/images/Project-Banner-Image-p-500.webp 500w, /assets/images/Project-Banner-Image-p-800.webp 800w, /assets/images/Project-Banner-Image-p-1080.webp 1080w, /assets/images/Project-Banner-Image-p-1600.webp 1600w, /assets/images/Project-Banner-Image-p-2000.webp 2000w, /assets/images/Project-Banner-Image-p-2600.webp 2600w, /assets/images/Project-Banner-Image-p-3200.webp 3200w, /assets/images/Project-Banner-Image.webp 5760w"
          />
          <div className="visual-overlay" />
        </div>
      </section>
      <section className="section blog">
        <div className="container">
          <div className="blog-inner-wrap">
            <div className="catagory-box-wrap reveal">
              <div>
                <div className="catagory-collection-list" role="list">
                  {CATEGORIES.map((c, i) => (
                    <a
                      key={c.filter}
                      className="catagory-button"
                      data-filter={c.filter}
                      {...(i === 0 ? { "aria-current": "page" } : {})}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="inner-blog-grid" role="list">
                {posts.map((post) => (
                  <div data-cat={post.category} role="listitem" key={post.slug}>
                    <div className="blog-card reveal">
                      <a className="blog-image-box inline-block" href={`/blog/${post.slug}`}>
                        <img alt="Blog Image" className="blog-image" loading="lazy" src={post.cardImage} />
                      </a>
                      <a
                        aria-label="Blog Link"
                        className="blog-card-title-box inline-block"
                        href={`/blog/${post.slug}`}
                      >
                        <h2 className="blog-card-title">{post.title}</h2>
                      </a>
                      <div className="blog-author-box">
                        <div className="blog-author-name">{post.author}</div>
                        <div className="blog-author-date">{post.date}</div>
                      </div>
                      <div className="blog-card-divider-wrap">
                        <div className="blog-card-divider" style={{ width: "100%" }} />
                        <div className="blog-card-divider-hover" style={{ width: "0%" }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
