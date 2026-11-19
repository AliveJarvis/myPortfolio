import { FC, SVGProps } from "react";
export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};
export default function SkillPill({ name, icon: Icon }: SkillPillProps) {
  return (
    <li className="skill">
      <Icon aria-hidden="true" />
      <span>{name}</span>
    </li>
  );
}
