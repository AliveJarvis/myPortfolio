import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const current = mounted ? theme : "system";
  const Icon = current === "dark" ? Moon : current === "light" ? Sun : Monitor;
  return (
    <label className="icon-button theme-control" title={`Theme: ${current}`}>
      <Icon aria-hidden="true" size={18} />
      <select
        aria-label="Color theme"
        value={current}
        onChange={(event) => setTheme(event.target.value)}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
