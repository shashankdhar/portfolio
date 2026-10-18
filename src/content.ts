// All site copy lives here so it can be iterated on without touching layout code.

export const profile = {
  name: 'Shashank Dhar',
  role: 'Frontend Platform Engineer',
  headline: 'Building the systems behind the interface.',
  tagline:
    'Designing runtimes, protocols, and compilers that power enterprise cloud and AI interfaces.',
  lede:
    'Currently building the systems that make generative UI safe for production — allowing AI agents to render interactive interfaces on the fly without compromising core application security.',
  proof: [
    'sandboxed generative UI',
    'streaming + human-in-the-loop',
    'zero-trust runtime boundaries',
  ],
};

export type SocialLink = { label: string; href: string };

export const links: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/shashankdhar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashankdhar75' },
];
