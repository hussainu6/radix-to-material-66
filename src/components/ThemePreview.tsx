export function ThemePreview() {
  return (
    <div className="rounded-xl border border-[var(--md-outline)]/30 bg-[var(--md-surface-variant)]/30 p-6">
      <div className="space-y-6">
        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-on-primary shadow-sm hover:opacity-90"
          >
            Filled button
          </button>
          <button
            type="button"
            className="rounded-full border-2 border-outline bg-transparent px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary/10"
          >
            Outlined button
          </button>
          <button
            type="button"
            className="rounded-full bg-secondary-container px-6 py-2.5 text-sm font-medium text-on-secondary-container"
          >
            Tonal button
          </button>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary-container px-4 py-1.5 text-sm text-on-primary-container">
            Filter chip
          </span>
          <span className="inline-flex items-center rounded-full bg-secondary-container px-4 py-1.5 text-sm text-on-secondary-container">
            Assist chip
          </span>
          <span className="inline-flex items-center rounded-full border border-outline bg-transparent px-4 py-1.5 text-sm text-on-surface-variant">
            Input chip
          </span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-outline/50 bg-surface p-4 shadow-sm">
          <h3 className="text-lg font-medium text-on-surface">Card title</h3>
          <p className="mt-1 text-sm text-on-surface-variant">
            Supporting text. Material 3 theme is applied to this preview. Change
            colours in the pickers to see updates live.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary"
            >
              Action
            </button>
            <button
              type="button"
              className="rounded-lg text-sm font-medium text-primary"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Text field */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-on-surface-variant">
            Text field
          </label>
          <input
            type="text"
            placeholder="Placeholder"
            className="w-full rounded-lg border-2 border-outline bg-surface px-4 py-2.5 text-on-surface placeholder:text-on-surface-variant/70 focus:border-primary focus:outline-none"
          />
        </div>

        {/* Error state */}
        <div className="rounded-lg border-2 border-error bg-error/10 px-4 py-2 text-sm text-on-error">
          Error message style
        </div>
      </div>
    </div>
  );
}
