import { MeshGradient } from "@paper-design/shaders-react";

export function QuestionsSlide() {
  return (
    <section
      className="relative flex h-full flex-col items-center justify-center gap-4 overflow-visible text-white"
      data-background-color="#0D1B2A"
      data-viewport-background="#0D1B2A"
    >
      <div className="absolute left-1/2 top-1/2 -z-0 h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2">
        <MeshGradient
          speed={0.69}
          scale={0.81}
          distortion={0.11}
          swirl={0.15}
          frame={17729.25100000038}
          colors={["#235F91", "#1F3469", "#178BBC", "#6BD7FF"]}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <h2 className="!text-8xl font-semibold tracking-tight">Questions?</h2>
        <p className="!text-3xl text-white/85">Thank you.</p>
      </div>
    </section>
  );
}
