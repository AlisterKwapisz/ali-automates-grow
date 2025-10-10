import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

interface ThemeToggleProps {
  variant?: "header" | "footer";
  showText?: boolean;
}

export function ThemeToggle({ variant = "header", showText = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    return theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
  };

  const getLabel = () => {
    return `${theme === "dark" ? "Dark" : "Light"} theme`;
  };

  const getText = () => {
    return theme === "dark" ? "Dark" : "Light";
  };

  const buttonVariant = variant === "header" ? "ghost" : "ghost";
  const buttonSize = variant === "header" ? "sm" : "sm";

  return (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      onClick={cycleTheme}
      aria-label={`Toggle theme. Current: ${getLabel()}`}
      aria-pressed={false}
      className="gap-2"
    >
      {getIcon()}
      {showText && <span className="text-sm">{getText()}</span>}
    </Button>
  );
}
