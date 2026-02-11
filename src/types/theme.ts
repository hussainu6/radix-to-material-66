/**
 * Material 3 color scheme (JSON theme output)
 * https://m3.material.io/styles/color/roles
 */
export interface Material3Theme {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  error: string;
  onError: string;
}

export const DEFAULT_M3_THEME: Material3Theme = {
  primary: "#6750a4",
  onPrimary: "#ffffff",
  primaryContainer: "#eaddfb",
  onPrimaryContainer: "#21005d",
  secondary: "#625b71",
  onSecondary: "#ffffff",
  secondaryContainer: "#e8def8",
  onSecondaryContainer: "#1d192b",
  tertiary: "#7d5260",
  onTertiary: "#ffffff",
  surface: "#fffbfe",
  onSurface: "#1c1b1f",
  surfaceVariant: "#e7e0ec",
  onSurfaceVariant: "#49454f",
  outline: "#79747e",
  error: "#b3261e",
  onError: "#ffffff",
};
