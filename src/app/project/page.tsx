import { getProjects } from "@/lib/content";

// Nuvora template — project index. Hero mirrors the original design; the grid is
// generated from the projects content collection (src/content/projects/*.mdx).
export default function ProjectPage() {
  const projectSlugs = new Set(["bay-heights", "grove-housin", "skyline-vista"]);
  const projects = getProjects().filter((project) => projectSlugs.has(project.slug));
  return (
    <>
      <section className="section inner-hero">
        <div className="container">
          <div className="inner-title-wrap inner-hero">
            <div className="inner-title-box is-project reveal">
              <h1 className="hero-white-title">
                Thoughtful window solutions
                <span className="italic none">made for real homes</span>
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
            alt="Custom blinds completing a warm, contemporary interior"
            className="visual"
            loading="lazy"
            src="/assets/styled-windows/background.webp"
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
                    <div className="project-single-card reveal">
                      <a
                        aria-label={`View ${project.title} project`}
                        className="project-image-box"
                        href={`/project/${project.slug}`}
                      >
                        <img alt="" className="project-image" loading="lazy" src={project.cardImage} />
                        <span className="view-project">
                          <img
                            alt=""
                            className="view-project-image"
                            loading="lazy"
                            src="/assets/images/arrow-black-right.svg"
                          />
                        </span>
                      </a>
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
