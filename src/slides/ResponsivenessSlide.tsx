export function ResponsivenessSlide() {
  return (
    <section
      className="responsiveness-slide flex h-full flex-col items-center justify-center bg-[#F6F7FB]"
      data-viewport-background="#F6F7FB"
      data-text-scheme="dark"
    >
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-9 px-10 py-8">
        <div className="slide-in-rsp slide-in-rsp-1 space-y-3 text-center">
          <h2 className="!text-6xl font-semibold tracking-tight text-zinc-900">
            Responsiveness
          </h2>
          <p className="!m-0 !text-xl text-zinc-600">
            Show progress without leaving the layout empty—or uncertain.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6">
          <article className="slide-in-rsp slide-in-rsp-2 flex min-h-[380px] flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/70">
            <div className="flex h-full items-center justify-center">
              <span
                className="inline-block size-12 shrink-0 rounded-full border-[3px] border-sky-500/20 border-t-sky-500 animate-spin motion-reduce:animate-none"
                role="status"
                aria-label="Loading"
              />
            </div>
          </article>

          <article className="slide-in-rsp slide-in-rsp-3 flex min-h-[380px] flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/70">
            <div className="flex h-full w-full flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-zinc-200 animate-pulse" />
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <div className="h-4 w-3/5 max-w-[200px] rounded-md bg-zinc-200 animate-pulse" />
                  <div className="h-3 w-2/5 max-w-[140px] rounded-md bg-zinc-200 animate-pulse" />
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div className="h-3 w-full rounded-md bg-zinc-200 animate-pulse" />
                <div className="h-3 w-full rounded-md bg-zinc-200 animate-pulse" />
                <div className="h-3 w-[88%] rounded-md bg-zinc-200 animate-pulse" />
              </div>
              <div className="mt-auto grid grid-cols-3 gap-3 pt-4">
                <div className="aspect-[4/3] rounded-xl bg-zinc-200 animate-pulse" />
                <div className="aspect-[4/3] rounded-xl bg-zinc-200 animate-pulse" />
                <div className="aspect-[4/3] rounded-xl bg-zinc-200 animate-pulse" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
