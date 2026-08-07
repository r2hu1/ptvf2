import { siteConfig } from "@/lib/constants";
import ThemeToggler from "./theme-changer";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer>
      <ThemeToggler
        variant="default"
        size="default"
        direction="rtl"
        system={false}
      />
    </footer>
  );
}
