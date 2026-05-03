import reactLogo from './assets/react.svg'
import { Toaster } from 'sonner'
import { RevealDeck } from './RevealDeck'
import { SlideZero } from './slides/SlideZero'
import { FirstSlide } from './slides/FirstSlide'
import { QuestionsSlide } from './slides/QuestionsSlide'
import { SecondSlide } from './slides/SecondSlide'
import { SpacingHierarchySlide } from './slides/SpacingHierarchySlide'
import { TabsSlide } from './slides/TabsSlide'
import { ThirdSlide } from './slides/ThirdSlide'
import { VisibilitySystemStatusSlide } from './slides/VisibilitySystemStatusSlide'
import './App.css'

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <RevealDeck>
        <SlideZero />
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <VisibilitySystemStatusSlide />
        <SpacingHierarchySlide />
        <QuestionsSlide />
        <TabsSlide />

        <section>
          <h2>React components as slides</h2>
          <p>Each <code>&lt;section&gt;</code> is a slide.</p>
          <img
            src={reactLogo}
            alt=""
            width={120}
            height={120}
            className="mx-auto mt-4 drop-shadow-lg"
          />
        </section>

        <section>
          <h2>Fragments</h2>
          <p className="fragment">First</p>
          <p className="fragment">Then second</p>
          <p className="fragment">Then third</p>
        </section>

        <section>
          <section>
            <h2>Vertical stack</h2>
            <p>Nested sections = vertical slides. Press down.</p>
          </section>
          <section>
            <h3>Inner slide</h3>
            <p>Use left/right for horizontal, up/down for vertical.</p>
          </section>
        </section>

        <section
          data-viewport-background="#1a1a2e"
        >
          <h2>Custom viewport background</h2>
          <p>
            Use <code>data-viewport-background</code> to tint the whole frame.
          </p>
        </section>

        <section>
          <h2>That’s it</h2>
          <p>Edit <code>src/App.tsx</code> to build your deck.</p>
        </section>
      </RevealDeck>
    </>

  )
}
