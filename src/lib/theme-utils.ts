import type { Material3Theme } from "@/types/theme";

const themeKeyToCssVar: Record<keyof Material3Theme, string> = {
  primary: "--md-primary",
  onPrimary: "--md-on-primary",
  primaryContainer: "--md-primary-container",
  onPrimaryContainer: "--md-on-primary-container",
  secondary: "--md-secondary",
  onSecondary: "--md-on-secondary",
  secondaryContainer: "--md-secondary-container",
  onSecondaryContainer: "--md-on-secondary-container",
  tertiary: "--md-tertiary",
  onTertiary: "--md-on-tertiary",
  surface: "--md-surface",
  onSurface: "--md-on-surface",
  surfaceVariant: "--md-surface-variant",
  onSurfaceVariant: "--md-on-surface-variant",
  outline: "--md-outline",
  error: "--md-error",
  onError: "--md-on-error",
};

export function applyThemeToDocument(theme: Material3Theme): void {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
    const varName = themeKeyToCssVar[key as keyof Material3Theme];
    if (varName) root.style.setProperty(varName, value);
  }
}

export function themeToCssVars(theme: Material3Theme): string {
  const lines = Object.entries(theme).map(
    ([key, value]) =>
      `  ${themeKeyToCssVar[key as keyof Material3Theme]}: ${value};`
  );
  return `:root {\n${lines.join("\n")}\n}`;
}
