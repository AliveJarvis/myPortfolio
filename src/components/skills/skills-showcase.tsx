import SkillPill, { type SkillPillProps } from "./skills-pill";

export interface SkillsShowcaseProps {
  skills: { sectionName: string; skills: SkillPillProps[] }[];
}
export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <section className="shell section-block">
      <h2 className="section-title">Skills</h2>
      <div className="skill-grid">
        {skills.map((section) => (
          <div className="skill-group" key={section.sectionName}>
            <h3>{section.sectionName}</h3>
            <ul>
              {section.skills.map((skill) => (
                <SkillPill key={skill.name} {...skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
