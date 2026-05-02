const qrTypes = ["https", "sms", "mailto", "tel", "wifi"] as const;

export function SpacingHierarchySlide() {
  return (
    <section
      className="flex h-full flex-col items-center justify-center bg-[#F8FAFC]"
      data-background-color="#F8FAFC"
      data-viewport-background="#F8FAFC"
      data-text-scheme="dark"
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-10 px-10 py-8">
        <h2 className="text-center !text-6xl font-semibold tracking-tight text-zinc-900">
          Spacing and Hierarchy
        </h2>

        <article className="w-full max-w-4xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/60">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="mb-3 !text-base font-semibold text-zinc-700">
                  QR Type
                </p>
                <select
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 !text-lg text-zinc-900 outline-none ring-0"
                  defaultValue="https"
                  aria-label="Select QR type"
                >
                  {qrTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="mb-3 !text-base font-semibold text-zinc-700">
                  QR Content
                </p>
                <input
                  type="text"
                  defaultValue="https://example.com"
                  placeholder="Enter content..."
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 !text-lg text-zinc-900 outline-none"
                  aria-label="QR content input"
                />
              </div>

              <div>
                <p className="mb-3 !text-base font-semibold text-zinc-700">
                  Logo
                </p>
                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-3">
                  <span className="!text-base text-zinc-700">Upload logo</span>
                  <span className="rounded-lg bg-zinc-900 px-3 py-1.5 !text-sm font-medium text-white">
                    Choose file
                  </span>
                  <input type="file" className="hidden" aria-label="Upload logo" />
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="mb-4 !text-base font-semibold text-zinc-700">
                  Styling
                </p>
                <div className="space-y-4">
                  <label className="flex items-center justify-between gap-4">
                    <span className="!text-base text-zinc-700">Background color</span>
                    <input
                      type="color"
                      defaultValue="#ffffff"
                      className="h-10 w-16 cursor-pointer rounded-md border border-zinc-300 bg-transparent p-1"
                      aria-label="Background color"
                    />
                  </label>
                  <label className="flex items-center justify-between gap-4">
                    <span className="!text-base text-zinc-700">QR color</span>
                    <input
                      type="color"
                      defaultValue="#111827"
                      className="h-10 w-16 cursor-pointer rounded-md border border-zinc-300 bg-transparent p-1"
                      aria-label="QR color"
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="mb-4 !text-base font-semibold text-zinc-700">Mode</p>
                <label className="flex items-center justify-between">
                  <span className="!text-base text-zinc-700">Dynamic QR</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label="Toggle dynamic QR"
                    className="h-5 w-5 accent-zinc-900"
                  />
                </label>
                <p className="mt-3 !text-sm text-zinc-500">
                  Turn off for static QR generation.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="!text-sm font-medium uppercase tracking-wide text-zinc-500">
                    Preview
                  </p>
                  <p className="!text-sm text-zinc-400">128 x 128</p>
                </div>
                <div className="mt-3 grid place-items-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6">
                  <div className="h-24 w-24 rounded-md bg-[linear-gradient(90deg,#111_50%,transparent_50%),linear-gradient(#111_50%,transparent_50%)] bg-[length:12px_12px]" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
