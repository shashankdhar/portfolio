import { useEffect, useRef } from 'react';
import { profile, links } from './content';

function App() {
  const ledeRef = useRef<HTMLParagraphElement>(null);
  const proofRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const lede = ledeRef.current;
    const proof = proofRef.current;
    if (!lede) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // Split into word-sized "tokens", breaking some longer words in two
    // so the rhythm feels like a model rather than a typewriter.
    const text = lede.textContent?.trim() || '';
    if (!text) return;

    const words = text.match(/\S+\s*/g) || [];
    const tokens: string[] = [];
    for (const w of words) {
      if (w.trim().length > 7 && Math.random() < 0.5) {
        const cut = Math.ceil(w.length / 2);
        tokens.push(w.slice(0, cut), w.slice(cut));
      } else {
        tokens.push(w);
      }
    }

    lede.textContent = '';
    lede.classList.add('is-streaming');
    const spans = tokens.map((t) => {
      const s = document.createElement('span');
      s.className = 'tok';
      s.textContent = t;
      lede.appendChild(s);
      return s;
    });

    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.setAttribute('aria-hidden', 'true');

    if (proof) proof.classList.add('is-waiting');

    // Delay per token: quick by default, a breath after punctuation and the em dash.
    const delayAfter = (t: string) => {
      if (/[.!?]\s*$/.test(t)) return 320;
      if (/[,;:—]\s*$/.test(t) || /^—/.test(t)) return 180;
      return 28 + Math.random() * 46;
    };

    let i = 0;
    let timerId: number | undefined;
    let cancelled = false;

    const restart = () => {
      if (cancelled) return;

      // Hide proof lines
      if (proof) {
        proof.classList.remove('is-in');
        proof.classList.add('is-waiting');
      }

      // Reset tokens to hidden without collapsing paragraph height
      spans.forEach((s) => s.classList.remove('is-in'));
      lede.classList.add('is-streaming');
      if (spans[0]) {
        spans[0].before(caret);
      } else {
        lede.appendChild(caret);
      }

      i = 0;
      // Brief pause before streaming starts again
      timerId = window.setTimeout(step, 450);
    };

    const step = () => {
      if (cancelled) return;

      if (i < spans.length) {
        spans[i].classList.add('is-in');
        spans[i].after(caret);
        const t = tokens[i];
        i += 1;
        timerId = window.setTimeout(step, delayAfter(t));
        return;
      }

      // Done: hold the caret a beat, then drop it and reveal proof lines.
      timerId = window.setTimeout(() => {
        if (cancelled) return;
        caret.remove();
        lede.classList.remove('is-streaming');
        if (proof) {
          proof.classList.remove('is-waiting');
          proof.classList.add('is-in');
        }

        // Loop after 5 seconds
        timerId = window.setTimeout(restart, 5000);
      }, 500);
    };

    // A short "time to first token" before it starts the first run.
    timerId = window.setTimeout(step, 450);

    return () => {
      cancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-24">
      <header>
        <p className="eyebrow">
          <span className="name">{profile.name}</span> · {profile.role}
        </p>
        <h1 className="headline">
          Building the systems behind the <em>interface.</em>
        </h1>
        <p className="subhead">{profile.tagline}</p>
      </header>

      <section aria-label="About">
        <p ref={ledeRef} className="lede">
          {profile.lede}
        </p>
        <ul ref={proofRef} className="proof">
          {profile.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <nav aria-label="Contact" className="links">
        {links.map((link) => {
          const external = link.href.startsWith('http');
          return (
            <a
              key={link.label}
              href={link.href}
              {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </main>
  );
}

export default App;
