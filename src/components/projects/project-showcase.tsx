import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers } from "lucide-react";
import ProjectShowcaseList, {
  type ProjectShowcaseListItem,
} from "./project-showcase-list";

export default function ProjectShowcase({
  projects,
}: {
  projects: ProjectShowcaseListItem[];
}) {
  const [active, setActive] = useState(0);
  const project = projects[active];
  return (
    <section id="my-projects" className="shell section-block work-section">
      <div className="section-head">
        <h2 className="section-title">My projects</h2>
        <Link href="/projects" className="button secondary">
          <Layers size={16} />
          See more projects
        </Link>
      </div>
      <div className="showcase">
        <div className="work-list">
          {projects.map((item) => (
            <ProjectShowcaseList
              key={item.href}
              data={item}
              activeProject={active}
              toggleList={setActive}
            />
          ))}
        </div>
        <Link
          key={project.href}
          href={project.href}
          aria-label={project.title}
          data-pointer
          className="project-preview"
        >
          <div className="preview-plane">
            <div className="preview-bar">
              <Layers size={14} />
              <span>{project.title}</span>
            </div>
            <div className="screenshot">
              <Image
                src={project.image.LIGHT}
                alt={project.title}
                width={960}
                height={480}
                sizes="(min-width: 900px) 48vw, 90vw"
                className={
                  project.image.DARK &&
                  project.image.DARK !== project.image.LIGHT
                    ? "dark:hidden"
                    : ""
                }
              />
              {project.image.DARK &&
                project.image.DARK !== project.image.LIGHT && (
                  <Image
                    className="hidden dark:block"
                    src={project.image.DARK}
                    alt={project.title}
                    width={960}
                    height={480}
                    sizes="50vw"
                  />
                )}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
