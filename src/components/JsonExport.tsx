import { useState } from "react";
import type { Material3Theme } from "@/types/theme";
import { Copy, Check } from "lucide-react";

interface JsonExportProps {
  theme: Material3Theme;
}

export function JsonExport({ theme }: JsonExportProps) {
  const [copied, setCopied] = useState(false);
  const json = JSON.stringify(theme, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "material3-theme.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-[var(--md-on-surface)]">
        Material 3 JSON theme
      </h3>
      <pre className="max-h-64 overflow-auto rounded-lg border border-[var(--md-outline)]/30 bg-[var(--md-surface)] p-4 text-xs text-[var(--md-on-surface-variant)]">
        {json}
      </pre>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy JSON"}
        </button>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-lg border border-outline px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-[var(--md-surface-variant)]"
        >
          Download JSON
        </button>
      </div>
    </div>
  );
}
