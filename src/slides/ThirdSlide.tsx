import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "Text to pdf" },
  { label: "Extract Controls" },
  { label: "Analyze controls" },
  { label: "Find warning signs" },
] as const;

function IconCheck() {
  return (
    <svg viewBox="0 0 88 76" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M31.057 50.437 74.67 2.377a7.11 7.11 0 0 1 9.813-.765 7.09 7.09 0 0 1 1.164 9.758L38.514 72.085c-3.106 4.11-9.242 4.223-12.496.23L1.6 42.346a7.11 7.11 0 0 1 .734-9.761 7.123 7.123 0 0 1 9.496-.07z"
      />
    </svg>
  );
}

export function ThirdSlide() {
  const [activeStep, setActiveStep] = useState(0);
  const [transitionPair, setTransitionPair] = useState<{
    from: number;
    to: number;
  } | null>(null);
  const previousStepRef = useRef(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 2100);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const previous = previousStepRef.current;
    if (previous === activeStep) return;

    setTransitionPair({ from: previous, to: activeStep });
    previousStepRef.current = activeStep;

    const timeout = window.setTimeout(() => {
      setTransitionPair(null);
    }, 240);

    return () => window.clearTimeout(timeout);
  }, [activeStep]);

  return (
    <section
      className="third-slide flex h-full flex-col items-center justify-center bg-[#F6F7FB]"
      data-viewport-background="#F6F7FB"
      data-text-scheme="dark"
    >
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-9 px-10 py-8">
        <h2 className="slide-in slide-in-1 text-center !text-6xl font-semibold tracking-tight text-zinc-900">
          Visibility of System Status
        </h2>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6">
          <article className="slide-in slide-in-2 flex min-h-[380px] flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/70">
            <div className="flex h-full  items-center justify-center gap-3">
              <span className="loader" role="status" aria-label="Thinking" />
              <p className="!text-3xl animate-pulse  font-medium  text-zinc-700">
                Thinking
              </p>
            </div>
          </article>

          <article className="slide-in slide-in-3 flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-zinc-200/70">
            <div className="flex h-full w-full items-center justify-center">
              <div className="inline-flex flex-col items-start">
                {steps.map((step, index) => {
                  const isDone = activeStep > index;
                  const isCurrent = activeStep === index;
                  const isLast = index === steps.length - 1;
                  const isConnectorDone = activeStep > index;
                  const isConnectorCurrent = activeStep === index;
                  const isConnectorFinishing =
                    transitionPair?.from === index && activeStep > index;
                  const isTransitioning =
                    transitionPair?.from === index ||
                    transitionPair?.to === index;

                  return (
                    <div key={step.label} className="flex flex-col">
                      <div className="grid grid-cols-[44px_auto] items-center gap-6">
                        <div
                          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full !text-xl font-medium transform-gpu transition-[background-color,border-color,color,filter,transform] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] will-change-[filter,transform] ${
                            isDone
                              ? "bg-green-500 text-white"
                              : isCurrent
                                ? "border border-green-500 bg-green-50 text-green-700"
                                : "bg-[#E8E8F4] text-zinc-900"
                          } ${
                            isTransitioning ? "scale-[0.985] blur-[1px]" : ""
                          }`}

                          // } ${isTransitioning ? "step-circle-transition" : ""}`}
                        >
                          {isDone ? (
                            <IconCheck />
                          ) : isCurrent ? (
                            <span className="step-loader" aria-hidden />
                          ) : (
                            index + 1
                          )}
                        </div>

                        <p
                          className={`!m-0 !text-2xl tracking-tight transition-colors duration-500 ease-out ${
                            isDone
                              ? "text-green-600"
                              : isCurrent
                                ? "animate-pulse text-zinc-900"
                                : "text-zinc-700"
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>

                      {!isLast && (
                        <div className="inline-block !py-2">
                          <div className="grid grid-cols-[44px_auto]">
                            <div className="flex justify-center">
                              <div
                                className={`step-connector h-5 w-[2px] rounded-full transition-colors duration-500 ease-out ${
                                  isConnectorDone
                                    ? isConnectorFinishing
                                      ? "step-connector-done step-connector-finishing"
                                      : "step-connector-done"
                                    : isConnectorCurrent
                                      ? "step-connector-progress"
                                      : "step-connector-pending"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
