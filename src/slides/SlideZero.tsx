/** Empty prelude — same frame as slide 1 for a seamless fade into the title slide. */
export function SlideZero() {
  return (
    <section
      className="slide-zero flex min-h-[100%] flex-col items-center justify-center bg-[#F0EFEA]"
      data-viewport-background="#F0EFEA"
      data-text-scheme="dark"
      aria-label="Start"
    />
  )
}
