const steps = [
  { label: "Queued", status: "done" },
  { label: "Processing", status: "done" },
  { label: "Review", status: "current" },
  { label: "Complete", status: "pending" },
] as const;

export function ThirdSlide() {
  return (
    <section
      className="third-slide flex h-full flex-col items-center justify-center bg-[#F6F7FB]"
      data-background-color="#F6F7FB"
      data-viewport-background="#F6F7FB"
      data-text-scheme="dark"
    >
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-9 px-10 py-8">
        <h2 className="slide-in slide-in-1 text-center !text-6xl font-semibold tracking-tight text-zinc-900">
          Visibility of System Status
        </h2>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6">
          <article className="slide-in slide-in-2 flex min-h-[340px] flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/70">
            <div className="flex h-full flex items-center justify-center gap-3">
              <span className="loader" role="status" aria-label="Thinking" />
              <p className="!text-3xl animate-pulse  font-medium  text-zinc-700">
                Thinking
              </p>
            </div>
          </article>

          <article className="slide-in slide-in-3 flex min-h-[340px] flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/70">
            <h3 className="text-left !text-3xl font-medium text-zinc-900">
              Multi-step progress
            </h3>
            <div className="mt-12 flex items-start justify-between gap-2">
              {steps.map((step, index) => {
                const isDone = step.status === "done";
                const isCurrent = step.status === "current";

                return (
                  <div
                    key={step.label}
                    className="relative flex flex-1 flex-col items-center"
                  >
                    {index < steps.length - 1 && (
                      <div
                        className={`absolute left-1/2 top-4 h-[2px] w-full ${
                          isDone ? "bg-sky-500" : "bg-zinc-300"
                        }`}
                      />
                    )}

                    <div
                      className={`relative z-10 flex size-8 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                        isDone
                          ? "border-sky-500 bg-sky-500 text-white"
                          : isCurrent
                            ? "border-sky-500 bg-white text-sky-600"
                            : "border-zinc-300 bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <p
                      className={`mt-3 text-center !text-base ${
                        isDone || isCurrent ? "text-zinc-700" : "text-zinc-400"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
