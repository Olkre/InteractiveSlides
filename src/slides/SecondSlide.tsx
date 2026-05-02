import type { ReactNode } from "react";

function IconBolt(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

function IconLayers(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m12.83 2.18 8 3.75a1 1 0 0 1 0 1.82l-8 3.75a2 2 0 0 1-1.66 0l-8-3.75a1 1 0 0 1 0-1.82l8-3.75a2 2 0 0 1 1.66 0Z" />
      <path d="m2.65 11.9 8 3.78a2 2 0 0 0 1.7 0l8-3.78" />
      <path d="m2.65 16.2 8 3.78a2 2 0 0 0 1.7 0l8-3.78" />
    </svg>
  );
}

function IconGrid(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconOrbit(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
};

const cards: Card[] = [
  {
    title: "Speed",
    description: "Ship iterations quickly with a tight feedback loop.",
    icon: <IconBolt className="size-8" />,
  },
  {
    title: "Structure",
    description: "Layer content so the story stays easy to follow.",
    icon: <IconLayers className="size-8" />,
  },
  {
    title: "Layout",
    description: "Grid-based cards that read well on any slide size.",
    icon: <IconGrid className="size-8" />,
  },
  {
    title: "Focus",
    description: "One idea per card keeps the audience with you.",
    icon: <IconOrbit className="size-8" />,
  },
];

export function SecondSlide() {
  return (
    <section className="second-slide flex h-full flex-col gap-10 px-6 pb-8 pt-4 md:px-10">
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <h2 className="shrink-0 text-center !text-6xl font-semibold tracking-tight text-white md:text-4xl">
          Building blocks
        </h2>

        <div className="mx-auto !mt-6 grid w-full max-w-5xl grid-cols-4 items-stretch gap-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="second-slide-card flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 !p-5 text-left shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                {card.icon}
              </div>

              <h3 className="!text-4xl !mt-4 font-semibold text-white">
                {card.title}
              </h3>
              <p className="!mt-2 !text-lg leading-relaxed text-zinc-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
