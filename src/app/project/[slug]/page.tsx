import { Fragment } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { MdxBody } from "@/components/ui/mdx-body";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.discover || project.title,
    openGraph: { title: project.title, images: [project.mainImage] },
  };
}

// Nuvora template — project detail. Layout mirrors the original design; the body
// is Markdown (src/content/projects/<slug>.mdx) rendered inside `.project-post richtext`.
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const addressFields: [string, string][] = [
    ["Project", project.address],
    ["Location", project.city],
    ["Scope", project.area],
    ["Quote", project.price],
  ];

  return (
    <>
      <section className="section single">
        <div className="container">
          <div className="single-hero-wrap">
            <div className="animation-content-wrap">
              <div className="animation-content reveal">
                <h1 className="single-title">{project.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section full-padding-bottom">
        <div className="container">
          <div className="project-single-wrap">
            <div className="project-single-image-box">
              <img alt="" className="return-image" loading="lazy" src={project.mainImage} />
              <div className="dashbord-image-overlay" />
            </div>
            <h2 className="discover-title reveal">{project.discover}</h2>
            <div className="about-property-flex reveal">
              <h3 className="about-property">{project.aboutPropertyTitle}</h3>
              <div className="primary-text-regular">{project.aboutProperty}</div>
            </div>
            <div className="area-address-wrap reveal">
              <h4 className="area-address-title">Project Details</h4>
              {addressFields.map(([label, value], i) => (
                <Fragment key={label}>
                  <div className="area-address-card">
                    <div className="secondary-text-regular">{label}</div>
                    <div className="project-with">
                      <div className="secondary-text-regular">{value}</div>
                    </div>
                  </div>
                  {i < addressFields.length - 1 ? (
                    <div className="plan-divider" style={{ width: "0%" }} />
                  ) : null}
                </Fragment>
              ))}
            </div>
            <MdxBody source={project.body} className="project-post richtext reveal" />
            {project.gallery.length ? (
              <div className="gallery-flex">
                <h4 className="reveal">{project.galleryTitle}</h4>
                <div className="gallery-image-grid">
                  {project.gallery.map((src, i) => (
                    <div className="gallery-image-box reveal" key={i}>
                      <img alt="" className="gallery-image" loading="lazy" src={src} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
