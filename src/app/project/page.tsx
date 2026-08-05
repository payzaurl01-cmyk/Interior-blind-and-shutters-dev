import { getProjects } from "@/lib/content";

// Nuvora template — project index. Hero mirrors the original design; the grid is
// generated from the projects content collection (src/content/projects/*.mdx).
export default function ProjectPage() {
  const projects = getProjects();
  return (
    <>
      <section className="section inner-hero">
        <div className="container">
          <div className="inner-title-wrap inner-hero">
            <div className="inner-title-box is-project reveal">
              <h1 className="hero-white-title">
                Creative Real - Estate that
                <span className="italic none">inspires iconic properties</span>
              </h1>
            </div>
            <div className="inner-button-box reveal">
              <a className="primary-button inline-block" href="/contact">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">GET IN TOUCH</div>
                  <div className="primary-button-hover-text">GET IN TOUCH</div>
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
      <section className="section project-padding-bottom">
        <div className="container">
          <div className="inner-wrap">
            <div>
              <div className="project-collection-list" role="list">
                {projects.map((project, i) => (
                  <div role="listitem" key={project.slug}>
                    <div className="project-single-card">
                      <div className="project-image-box">
                        <img alt="" className="project-image" loading="lazy" src={project.cardImage} />
                        <a className="view-project inline-block" href={`/project/${project.slug}`}>
                          <img
                            alt=""
                            className="view-project-image"
                            loading="lazy"
                            src="/assets/images/arrow-black-right.svg"
                          />
                        </a>
                      </div>
                      <div className="project-card-content-wrap">
                        <div className="project-card-number-box">
                          <h2 className="project-card-number text-secondary">0/</h2>
                          <h2 className="project-card-number">{i + 1}</h2>
                        </div>
                        <div className="project-card-content-box">
                          <a
                            aria-label="Project Link"
                            className="project-card-title-box inline-block"
                            href={`/project/${project.slug}`}
                          >
                            <h3 className="project-card-title">{project.title}</h3>
                          </a>
                          <div className="secondary-text-regular">{project.address}</div>
                        </div>
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
