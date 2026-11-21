import { sectionId } from "@/components/section-nav";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}
export default function ProjectCard(props: ProjectCardProps) {
  return (
    <article id={sectionId(props.name)} className="project-card">
      <Corosel images={props.imageUrl} name={props.name} />
      <div className="card-body">
        <h2>
          <Image src={props.favicon} alt="" width={22} height={22} />
          {props.name}
        </h2>
        <p>{props.description}</p>
        <div className="card-actions">
          <a
            className="button secondary"
            href={props.sourceCodeHref}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="h-4 w-4" />
            Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              className="button secondary"
              href={props.liveWebsiteHref}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
