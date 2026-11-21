import { List } from "lucide-react";

export function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-$/, "");
}

export default function SectionNav({ titles }: { titles: string[] }) {
  return (
    <nav className="section-nav" aria-label="On this page">
      <List size={17} aria-hidden="true" />
      {titles.map((title) => (
        <a key={title} href={`#${sectionId(title)}`}>
          {title}
        </a>
      ))}
    </nav>
  );
}
