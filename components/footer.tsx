import { PullCord } from "./pull-cord";
import ThemeToggler from "./theme-changer";

export function Footer() {
  return (
    <footer>
      <ThemeToggler
        variant="default"
        size="default"
        direction="rtl"
        system={false}
      />
      <PullCord />
    </footer>
  );
}
