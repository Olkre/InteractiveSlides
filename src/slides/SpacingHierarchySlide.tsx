import { useState } from "react";
import { Info } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const qrTypes = ["https", "sms", "mailto", "tel", "wifi"] as const;
const pixelStyles = [
  { value: "default", label: "Default" },
  { value: "square", label: "Square" },
  { value: "rounded", label: "Rounded" },
  { value: "circles", label: "Circles" },
  { value: "vertical-lines", label: "Vertical lines" },
  { value: "horizontal-lines", label: "Horizontal lines" },
] as const;

const TEXTRON_BLUE = "#285587";

type DesignMode = "unstyled" | "polished";

type QrMode = "dynamic" | "static";

const MODE_HELP_COPY: Record<
  QrMode,
  { line1: string; line2: string }
> = {
  dynamic: {
    line1:
      "Dynamic QR codes use a short link that redirects to your destination, so you can change the URL without reprinting.",
    line2:
      "Useful for marketing campaigns, seasonal promos, and anything that might need updates after print.",
  },
  static: {
    line1:
      "Static QR codes embed the final payload directly in the image—no redirect, no scan analytics layer.",
    line2:
      "Useful for Wi‑Fi cards, vCards, and permanent links that should never change.",
  },
};

function QrGeneratorDemoArticle({ isPolished }: { isPolished: boolean }) {
  const [qrMode, setQrMode] = useState<QrMode>("dynamic");
  const help = MODE_HELP_COPY[qrMode];

  return (
    <article
      className={`w-full border border-zinc-200 bg-white text-left !p-5 transition-all duration-500 ${
        isPolished
          ? "rounded-3xl shadow-xl shadow-zinc-200/70"
          : "rounded-md shadow-none"
      }`}
    >
      <div
        className={`flex transition-all duration-500 ${
          isPolished ? "flex-col gap-4" : "flex-col gap-2"
        }`}
      >
        <div
          className={`pb-2 transition-all duration-500 ${
            isPolished ? "border-b border-zinc-200" : ""
          }`}
        >
          <h3
            className={`text-zinc-900 transition-all duration-500 ${
              isPolished
                ? "!text-2xl font-semibold tracking-tight"
                : "!text-sm font-normal"
            }`}
          >
            QR Code Generator
          </h3>
        </div>

        <div
          className={`grid transition-all duration-500 ${
            isPolished
              ? "grid-cols-[220px_1fr] gap-4"
              : "grid-cols-[220px_1fr] gap-2"
          }`}
        >
          <div className="flex flex-col gap-1.5">
            <p
              className={`!text-sm transition-all duration-500 ${
                isPolished
                  ? "font-semibold text-zinc-800"
                  : "font-normal text-zinc-800"
              }`}
            >
              QR Type
            </p>
            <select
              className={`w-full rounded-xl !px-3 !py-2.5 outline-none ring-0 transition-all duration-500 ${
                isPolished
                  ? "!text-base border border-zinc-200 bg-white text-zinc-900"
                  : "!text-sm font-normal border border-zinc-300 bg-white text-zinc-900"
              }`}
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

          <div className="flex flex-col gap-1.5">
            <p
              className={`!text-sm transition-all duration-500 ${
                isPolished
                  ? "font-semibold text-zinc-800"
                  : "font-normal text-zinc-800"
              }`}
            >
              QR Content
            </p>
            <input
              type="text"
              defaultValue="https://example.com"
              placeholder="Enter content..."
              className={`w-full rounded-xl px-3 py-2.5 outline-none transition-all duration-500 ${
                isPolished
                  ? "!text-base border border-zinc-200 bg-white text-zinc-900"
                  : "!text-sm font-normal border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-500"
              }`}
              aria-label="QR content input"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p
            className={`!text-sm transition-all duration-500 ${
              isPolished
                ? "font-semibold text-zinc-800"
                : "font-normal text-zinc-800"
            }`}
          >
            Pixel style
          </p>
          <div className="grid grid-cols-3 gap-2">
            {pixelStyles.map((style, index) => (
              <label
                key={style.value}
                className={`flex items-center gap-2 rounded-lg !px-3 !py-2 transition-all duration-500 ${
                  isPolished
                    ? "border border-zinc-200 bg-white"
                    : "border border-zinc-300 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="pixel-style"
                  value={style.value}
                  defaultChecked={index === 0}
                  className={`h-4 w-4 ${isPolished ? "accent-[#285587]" : "accent-zinc-900"}`}
                  aria-label={style.label}
                />
                <span
                  className={`!text-sm transition-all duration-500 ${
                    isPolished ? "text-zinc-700" : "text-zinc-800"
                  }`}
                >
                  {style.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p
            className={`!text-sm transition-all duration-500 ${
              isPolished
                ? "font-semibold text-zinc-800"
                : "font-normal text-zinc-800"
            }`}
          >
            Logo
          </p>
          <label
            className={`flex cursor-pointer items-center justify-between rounded-xl border border-dashed px-3 py-2.5 transition-all duration-500 ${
              isPolished
                ? "border-zinc-300 bg-zinc-50"
                : "border-zinc-300 bg-white"
            }`}
          >
            <span className="!text-sm text-zinc-700">Upload logo</span>
            <span
              className={`rounded-lg px-3 py-1.5 !text-xs text-white transition-all duration-500 ${
                isPolished ? "font-semibold" : "bg-zinc-900"
              }`}
              style={isPolished ? { backgroundColor: TEXTRON_BLUE } : undefined}
            >
              Choose file
            </span>
            <input type="file" className="hidden" aria-label="Upload logo" />
          </label>
        </div>

        <div className="flex flex-col gap-1.5">
          <p
            className={`!text-sm transition-all duration-500 ${
              isPolished
                ? "font-semibold text-zinc-800"
                : "font-normal text-zinc-800"
            }`}
          >
            Styling
          </p>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition-all duration-500 ${
                isPolished
                  ? "border border-zinc-200 bg-white"
                  : "border border-zinc-300 bg-white"
              }`}
            >
              <span className="!text-sm text-zinc-700">Background</span>
              <input
                type="color"
                defaultValue="#ffffff"
                className="h-8 w-12 cursor-pointer rounded-md border border-zinc-300 bg-transparent p-1"
                aria-label="Background color"
              />
            </label>
            <label
              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition-all duration-500 ${
                isPolished
                  ? "border border-zinc-200 bg-white"
                  : "border border-zinc-300 bg-white"
              }`}
            >
              <span className="!text-sm text-zinc-700">QR color</span>
              <input
                type="color"
                defaultValue="#111827"
                className="h-8 w-12 cursor-pointer rounded-md border border-zinc-300 bg-transparent p-1"
                aria-label="QR color"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p
            className={`!text-sm transition-all duration-500 ${
              isPolished
                ? "font-semibold text-zinc-800"
                : "font-normal text-zinc-800"
            }`}
          >
            Mode
          </p>
          <ToggleGroup
            value={[qrMode]}
            onValueChange={(value) => {
              const next = value.at(-1);
              if (next === "dynamic" || next === "static") {
                setQrMode(next);
              }
            }}
            spacing={1}
            className={`rounded-lg p-[3px] ${
              isPolished ? "bg-muted" : "border border-zinc-300 bg-white"
            }`}
          >
            <ToggleGroupItem
              value="dynamic"
              className={`h-[calc(100%-1px)] rounded-md border border-transparent !text-sm font-medium whitespace-nowrap text-foreground/60 transition-all hover:text-foreground data-[pressed]:bg-background data-[pressed]:text-foreground data-[pressed]:shadow-sm ${
                isPolished
                  ? "px-3 py-1.5"
                  : "px-1.5 py-0.5 data-[pressed]:bg-zinc-900 data-[pressed]:text-white"
              }`}
              aria-label="Dynamic QR mode"
            >
              Dynamic
            </ToggleGroupItem>
            <ToggleGroupItem
              value="static"
              className={`h-[calc(100%-1px)] rounded-md border border-transparent !text-sm font-medium whitespace-nowrap text-foreground/60 transition-all hover:text-foreground data-[pressed]:bg-background data-[pressed]:text-foreground data-[pressed]:shadow-sm ${
                isPolished
                  ? "px-3 py-1.5"
                  : "px-1.5 py-0.5 data-[pressed]:bg-zinc-900 data-[pressed]:text-white"
              }`}
              aria-label="Static QR mode"
            >
              Static
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="mt-1.5 flex items-start gap-2">
            <Info
              className={`mt-0.5 shrink-0 text-zinc-400 transition-all duration-500 ${
                isPolished
                  ? "size-3 opacity-100"
                  : "size-0 opacity-0 -translate-x-1"
              }`}
              aria-hidden
            />
            <div
              className={`flex min-w-0 flex-col transition-all duration-500 ${
                isPolished ? "gap-1" : "gap-1.5"
              }`}
            >
              <p
                className={`leading-snug transition-all duration-500 ${
                  isPolished
                    ? "!text-[11px] text-zinc-500"
                    : "!text-sm text-zinc-800"
                }`}
              >
                {help.line1}
              </p>
              <p
                className={`leading-snug transition-all duration-500 ${
                  isPolished
                    ? "!text-[11px] text-zinc-500"
                    : "!text-sm text-zinc-800"
                }`}
              >
                {help.line2}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-1 flex items-center justify-end transition-all duration-500 ${
            isPolished ? "gap-2" : "gap-1"
          }`}
        >
          <button
            type="button"
            className={`rounded-lg px-4 py-2 !text-sm transition-all duration-500 ${
              isPolished
                ? "border border-[#285587] bg-white font-medium text-[#285587]"
                : "border border-zinc-300 bg-white font-normal text-zinc-800"
            }`}
          >
            Reset
          </button>
          <button
            type="button"
            className={`rounded-lg px-4 py-2 !text-sm text-white transition-all duration-500 ${
              isPolished
                ? "bg-[#285587] font-semibold"
                : "bg-zinc-900 font-normal"
            }`}
          >
            Regenerate
          </button>
        </div>
      </div>
    </article>
  );
}

export function SpacingHierarchySlide() {
  const [designMode, setDesignMode] = useState<DesignMode>("polished");

  return (
    <section
      className="spacing-hierarchy-slide flex h-full flex-col items-center justify-start bg-[#F8FAFC]"
      data-viewport-background="#F8FAFC"
      data-text-scheme="dark"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-start gap-6 px-12 pt-10 pb-12">
        <h2 className="slide-in-sh slide-in-sh-1 px-4 text-center !text-5xl font-semibold tracking-tight text-zinc-900 sm:!text-6xl">
          Spacing and Hierarchy
        </h2>

        <div className="slide-in-sh slide-in-sh-2 flex w-full max-w-2xl flex-col items-center gap-3 origin-top scale-[0.76] transition-transform duration-500">
          <Tabs
            value={designMode}
            onValueChange={(v) => setDesignMode(v as DesignMode)}
            className="flex w-full flex-col items-center"
          >
            <TabsList className="h-auto min-h-8">
              <TabsTrigger value="unstyled" className="!text-xs px-2.5 py-1">
                Option 1
              </TabsTrigger>
              <TabsTrigger value="polished" className="!text-xs px-2.5 py-1">
                Option 2
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <QrGeneratorDemoArticle isPolished={designMode === "polished"} />
        </div>
      </div>
    </section>
  );
}
