import reactLogo from './assets/react.svg'
import { RevealDeck } from './RevealDeck'
import { FirstSlide } from './slides/FirstSlide'
import { SecondSlide } from './slides/SecondSlide'
import { ThirdSlide } from './slides/ThirdSlide'
import './App.css'

export default function App() {
  return (
    <RevealDeck>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />

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
        data-background-color="#1a1a2e"
        data-viewport-background="#1a1a2e"
      >
        <h2>Custom background</h2>
        <p>
          <code>data-background-color</code> (slide) +{' '}
          <code>data-viewport-background</code> (full frame)
        </p>
      </section>

      <section>
        <h2>That’s it</h2>
        <p>Edit <code>src/App.tsx</code> to build your deck.</p>
      </section>
    </RevealDeck>
  )
}
