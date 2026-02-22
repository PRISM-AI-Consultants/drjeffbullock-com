import { CommandPalette } from "@/components/ui/command-palette";
import { searchIndex } from "@/data/search-index";

export function CommandPaletteWrapper() {
  return <CommandPalette items={searchIndex} />;
}
