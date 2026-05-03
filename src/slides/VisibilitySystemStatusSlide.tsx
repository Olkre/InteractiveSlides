import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const COPY_RESET_MS = 1600;
const DOWNLOAD_RESET_MS = 1900;
const SAVE_RESET_MS = 2200;
const TEXT_SWAP_DURATION_MS = 200;

type TextSwapPhase = "" | "is-exit" | "is-enter-start";

async function writeClipboard(value: string): Promise<void> {
  await navigator.clipboard.writeText(value);
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="inline-block h-4 w-4 text-zinc-800" aria-hidden>
      <path
        d="M9 4h6m-7 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm1-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h-6V4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="m5 12 4.2 4.2L19 6.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BLUE_ACTION_BUTTON_CLASSES =
  "group status-action-button h-10 select-none rounded-full bg-blue-600 px-0 text-sm font-semibold text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset]";

const DOWNLOAD_BUTTON_WIDTH_STYLE = { width: "150px" } as const;
const SAVE_BUTTON_WIDTH_STYLE = { width: "100px" } as const;

export function VisibilitySystemStatusSlide() {
  const [didCopy, setDidCopy] = useState(false);
  const [didDownload, setDidDownload] = useState(false);
  const [didSave, setDidSave] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState("Download");
  const [saveLabel, setSaveLabel] = useState("Save");
  const [downloadTextSwapPhase, setDownloadTextSwapPhase] =
    useState<TextSwapPhase>("");
  const [saveTextSwapPhase, setSaveTextSwapPhase] = useState<TextSwapPhase>("");
  const copyTimerRef = useRef<number | null>(null);
  const downloadTimerRef = useRef<number | null>(null);
  const saveTimerRef = useRef<number | null>(null);
  const closedToastTimerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (copyTimerRef.current !== null)
        window.clearTimeout(copyTimerRef.current);
      if (downloadTimerRef.current !== null)
        window.clearTimeout(downloadTimerRef.current);
      if (saveTimerRef.current !== null)
        window.clearTimeout(saveTimerRef.current);
      if (closedToastTimerRef.current !== null)
        window.clearTimeout(closedToastTimerRef.current);
    },
    [],
  );

  const runTextSwap = async (
    setText: (value: string) => void,
    setPhase: (value: TextSwapPhase) => void,
    nextText: string,
    opts?: {
      /** Runs right after exit finishes and `nextText` is committed. */
      onCommitted?: () => void;
    },
  ) => {
    setPhase("is-exit");
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, TEXT_SWAP_DURATION_MS);
    });

    setText(nextText);
    opts?.onCommitted?.();
    setPhase("is-enter-start");

    // Force the pre-enter visual state before transitioning to resting state.
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => resolve());
    });
    setPhase("");
  };

  const runCopyFeedback = async () => {
    try {
      await writeClipboard("Quarterly results copied to clipboard.");
      setDidCopy(true);

      if (copyTimerRef.current !== null)
        window.clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => {
        setDidCopy(false);
      }, COPY_RESET_MS);
    } catch {
      // Keep the demo interaction stable even when clipboard access is unavailable.
      setDidCopy(true);
    }
  };

  const runDownloadFeedback = () => {
    void runTextSwap(setDownloadLabel, setDownloadTextSwapPhase, "Downloaded", {
      onCommitted: () => {
        setDidDownload(true);
      },
    });

    if (downloadTimerRef.current !== null)
      window.clearTimeout(downloadTimerRef.current);
    downloadTimerRef.current = window.setTimeout(() => {
      void runTextSwap(setDownloadLabel, setDownloadTextSwapPhase, "Download", {
        onCommitted: () => {
          setDidDownload(false);
        },
      });
    }, DOWNLOAD_RESET_MS);
  };

  const runSaveFeedback = () => {
    setDidSave(true);
    void runTextSwap(setSaveLabel, setSaveTextSwapPhase, "Saved");
    toast.success("Report saved.");

    if (closedToastTimerRef.current !== null)
      window.clearTimeout(closedToastTimerRef.current);
    closedToastTimerRef.current = window.setTimeout(() => {
      toast("Your report is stored and ready whenever you need it.");
    }, 1200);

    if (saveTimerRef.current !== null)
      window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      setDidSave(false);
      void runTextSwap(setSaveLabel, setSaveTextSwapPhase, "Save");
    }, SAVE_RESET_MS);
  };

  return (
    <section
      className="visibility-status-slide flex h-full flex-col items-center justify-center bg-[#F7F8FA] px-10 py-10"
      data-viewport-background="#F7F8FA"
      data-text-scheme="dark"
    >
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-9">
        <header className="slide-in-vs slide-in-vs-1 space-y-4 text-center">
          <h2 className="!mb-0 !text-6xl font-semibold tracking-tight text-zinc-900">
            Visibility of System Status
          </h2>
          <p className="!m-0 !text-2xl text-zinc-600">
            The system confirms actions instantly, so users never wonder what
            happened.
          </p>
        </header>

        <article className="slide-in-vs slide-in-vs-2 rounded-3xl border border-zinc-200 bg-white p-10 shadow-lg shadow-zinc-200/70">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="copy-action-button group flex h-8 w-8 select-none items-center justify-center rounded-lg bg-white leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-50 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]"
              data-done={didCopy ? "true" : "false"}
              onClick={() => void runCopyFeedback()}
              aria-label={didCopy ? "Copied" : "Copy Results"}
            >
              <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                <span className="copy-icon-slot copy-icon-idle pointer-events-none group-active:[transform:translate3d(0,1px,0)]">
                  <IconClipboard />
                </span>
                <span className="copy-icon-slot copy-icon-done pointer-events-none group-active:[transform:translate3d(0,1px,0)]">
                  <IconCheck />
                </span>
              </span>
            </button>

            <button
              type="button"
              className={`${BLUE_ACTION_BUTTON_CLASSES} hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]`}
              style={DOWNLOAD_BUTTON_WIDTH_STYLE}
              data-done={didDownload ? "true" : "false"}
              onClick={runDownloadFeedback}
            >
              <span className="status-action-label justify-center">
                <span
                  className={`t-text-swap whitespace-nowrap group-active:[transform:translate3d(0,1px,0)] ${downloadTextSwapPhase}`}
                >
                  {downloadLabel === "Downloaded" ? (
                    <span className="status-action-inline-check" aria-hidden>
                      <IconCheck />
                    </span>
                  ) : null}
                  {downloadLabel}
                </span>
              </span>
            </button>

            <button
              type="button"
              className={`${BLUE_ACTION_BUTTON_CLASSES} hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]`}
              style={SAVE_BUTTON_WIDTH_STYLE}
              data-done={didSave ? "true" : "false"}
              onClick={runSaveFeedback}
            >
              <span className="status-action-label justify-center">
                <span
                  className={`t-text-swap whitespace-nowrap group-active:[transform:translate3d(0,1px,0)] ${saveTextSwapPhase}`}
                >
                  {saveLabel}
                </span>
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
