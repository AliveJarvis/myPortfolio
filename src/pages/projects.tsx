import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Arjun Kumar - Software Developer Portfolio"
        description="Explore a collection of projects by Arjun Kumar, a seasoned Software Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Arjun Kumar - Software Developer",
          description:
            "Explore a showcase of projects crafted by Arjun Kumar, a Software Developer. Witness the fusion of creativity and technology in web development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Arjun Kumar - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects,Amit Portfolio, Software Developer, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="shell archive">
        <div className="archive-head">
          <h1>Projects</h1>
          <p>Here are some of the projects I&apos;d like to share</p>
        </div>
        <div className="project-grid">
          {PROJECTS_CARD.map((card) => (
            <ProjectCard key={card.name} {...card} />
          ))}
        </div>
        <p className="archive-note">
          I am currently building new projects and learning constantly to expand
          my skills.
        </p>
      </section>
    </>
  );
}
