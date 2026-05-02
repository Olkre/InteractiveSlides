import { GemSmoke } from "@paper-design/shaders-react";

export function FirstSlide() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-6 bg-[#F0EFEA] text-zinc-900"
      data-background-color="#F0EFEA"
      data-viewport-background="#F0EFEA"
      data-text-scheme="dark"
    >
      <div className="flex flex-col items-center justify-center gap-0">
        <GemSmoke
          speed={2.01}
          size={1}
          outerDistortion={0}
          innerDistortion={0.36}
          outerGlow={0}
          innerGlow={1}
          offset={0}
          scale={0.36}
          angle={0}
          shape="diamond"
          image={`${import.meta.env.BASE_URL}gem-smoke-texture.webp`}
          colors={["#0D71A6", "#122A6B"]}
          colorInner="#0166AA"
          colorBack="#00000000"
          style={{
            backgroundColor: "#F0EFEA",
            height: "244px",
            width: "min(800px, 100%)",
            maxWidth: "100%",
            marginTop: "-20px",
          }}
        />
        <div className="flex flex-col gap-0">
          <h1 className="!text-8xl !font-medium tracking-tighter !mb-0">
            User Experience
          </h1>
          <h1 className="!text-8xl !font-medium opacity-50 tracking-tighter ">
            Design Principles
          </h1>
        </div>
        <p className="text-xl text-zinc-600 tracking-tight">
          By Oleksandr Kreshchuk
        </p>
      </div>
    </section>
  );
}
