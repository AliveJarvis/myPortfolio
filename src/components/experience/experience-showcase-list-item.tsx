import { ReactNode } from "react";
export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: { name: string; href: string };
  date: string;
  location: string;
  description: string;
}
export default function ExperienceShowcaseListItem({
  title,
  organisation,
  date,
  location,
  description,
  children,
}: ExperienceShowcaseListItemProps & { children?: ReactNode }) {
  return (
    <li className="timeline-entry">
      <p className="entry-meta">
        {date} | {location}
      </p>
      <h3>
        {title}{" "}
        <a href={organisation.href} target="_blank" rel="nofollow noreferrer">
          @{organisation.name}
        </a>
      </h3>
      <p>{description}</p>
      {children}
    </li>
  );
}
