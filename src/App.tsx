import { useState, useEffect, useCallback } from "react";
import {
  DEFAULT_M3_THEME,
  type Material3Theme,
} from "./types/theme";
import { applyThemeToDocument } from "./lib/theme-utils";
import { ColorPickerRow } from "./components/ColorPickerRow";
import { ThemePreview } from "./components/ThemePreview";
import { JsonExport } from "./components/JsonExport";
import { Download, Palette } from "lucide-react";

function App() {
  const [theme, setTheme] = useState<Material3Theme>(DEFAULT_M3_THEME);

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const updateColor = useCallback(
    (key: keyof Material3Theme, value: string) => {
      setTheme((t) => ({ ...t, [key]: value }));
    },
    []
  );

  const resetTheme = useCallback(() => {
    setTheme(DEFAULT_M3_THEME);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--md-surface)] text-[var(--md-on-surface)]">
      <header className="border-b border-[var(--md-outline)]/30 bg-[var(--md-surface-variant)]/50 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Material 3 Theme Editor
            </h1>
          </div>
          <button
            type="button"
            onClick={resetTheme}
            className="rounded-lg border border-outline px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-[var(--md-surface-variant)]"
          >
            Reset to default
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          {/* Left: Color pickers */}
          <section className="space-y-6">
            <h2 className="flex items-center gap-2 text-lg font-medium text-[var(--md-on-surface)]">
              <Download className="h-5 w-5" />
              Colour pickers
            </h2>
            <div className="rounded-xl border border-[var(--md-outline)]/30 bg-[var(--md-surface-variant)]/30 p-4">
              {(Object.keys(theme) as (keyof Material3Theme)[]).map((key) => (
                <ColorPickerRow
                  key={key}
                  label={key}
                  value={theme[key]}
                  onChange={(value) => updateColor(key, value)}
                />
              ))}
            </div>

            <JsonExport theme={theme} />
          </section>

          {/* Right: Preview */}
          <section className="min-w-0">
            <h2 className="mb-4 text-lg font-medium text-[var(--md-on-surface)]">
              Preview
            </h2>
            <ThemePreview />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
