import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const choices = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const current =
    choices.find((choice) => mounted && choice.value === theme) ?? choices[2];
  return (
    <Listbox
      as="div"
      className="theme-picker"
      value={current.value}
      onChange={setTheme}
    >
      <Listbox.Button
        className="theme-trigger"
        aria-label={`Color theme, ${current.label}`}
        title={`Color theme, ${current.label}`}
      >
        <current.Icon size={18} aria-hidden="true" />
        <ChevronDown size={12} aria-hidden="true" />
      </Listbox.Button>
      <Listbox.Options className="theme-options" aria-label="Color theme">
        {choices.map(({ value, label, Icon }) => (
          <Listbox.Option
            key={value}
            value={value}
            className={({ active }) =>
              active ? "theme-option highlighted" : "theme-option"
            }
          >
            {({ selected }) => (
              <>
                <Icon size={17} aria-hidden="true" />
                {label}
                {selected && <Check size={16} aria-hidden="true" />}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
