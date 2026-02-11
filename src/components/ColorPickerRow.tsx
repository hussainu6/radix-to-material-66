import { cn } from "@/lib/utils";

interface ColorPickerRowProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

export function ColorPickerRow({ label, value, onChange }: ColorPickerRowProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-14 cursor-pointer rounded border border-[var(--md-outline)]/50 bg-transparent"
      />
      <div className="flex-1 min-w-0">
        <label className="block truncate text-sm font-medium text-[var(--md-on-surface-variant)]">
          {formatLabel(label)}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-0.5 w-full rounded border border-[var(--md-outline)]/50 bg-[var(--md-surface)] px-2 py-1 text-sm text-[var(--md-on-surface)]"
        />
      </div>
    </div>
  );
}
