// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to make the
//  site yours — components read from it, no markup changes needed.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Your Name',
  shortName: 'Your Name',
  location: 'Bengaluru, India',
  greeting: "Hey, I'm Your Name.",
  // Keep this to 2–3 roles: a focused story reads stronger than a long list.
  roles: ['Full Stack Engineer', 'AI Builder', 'Problem Solver'],
  tagline:
    'I design and ship fast, reliable web products — from clean interfaces to the APIs and data behind them.',
  bio: 'Software engineer with N+ years of experience building products end to end. Replace this paragraph with two or three sentences on what you do, who you do it for, and the result you are proud of.',
  email: 'you@example.com',
  resumeUrl: '/resume.pdf',
  portrait: '/portrait.svg',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'X / Twitter', href: 'https://x.com/your-handle' },
  ],
};

// Prefer numbers: recruiters skim for measurable results.
export const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '12', label: 'Projects shipped' },
  { value: '30%', label: 'Avg. performance gain' },
  { value: '5k+', label: 'Users served' },
];

export const services = [
  {
    title: 'Frontend Engineering',
    text: 'Accessible, fast interfaces in React, Angular and Astro with a strong eye for UI detail.',
  },
  {
    title: 'Backend & APIs',
    text: 'Node.js and Python services, REST/GraphQL APIs, and well-modelled SQL and NoSQL data.',
  },
  {
    title: 'AI & Automation',
    text: 'LLM-powered tools, bots and workflows that take repetitive work off a team’s plate.',
  },
  {
    title: 'Cloud & Delivery',
    text: 'CI/CD, containers and serverless deploys on AWS or Azure, with monitoring built in.',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Astro', 'Angular', 'Node.js', 'FastAPI'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Docker', 'Git', 'GitHub Actions', 'Figma', 'Jira'] },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Company A',
    period: 'Jan 2024 – Present',
    place: 'Bengaluru, India',
    current: true,
    summary:
      'What you own, what you built, and the measurable result. e.g. “Rebuilt the reporting module, cutting load time by 40% for 2,000 daily users.”',
  },
  {
    role: 'Associate Software Engineer',
    company: 'Company B',
    period: 'Jun 2022 – Dec 2023',
    place: 'Pune, India',
    current: false,
    summary: 'Two or three lines on scope, stack and impact. Lead with the outcome, then the how.',
  },
  {
    role: 'Software Intern',
    company: 'Company C',
    period: 'Jan 2022 – May 2022',
    place: 'Remote',
    current: false,
    summary: 'A short line on what you contributed and learned.',
  },
];

export const education = [
  { degree: 'B.Sc. / B.Tech in Computer Science', school: 'Your College, City', period: '2018 – 2022', note: 'CGPA x.x / 10' },
];

export const certifications = ['Certification One — Provider', 'Certification Two — Provider'];

export const achievements = [
  { title: 'Award name', text: 'One line on why you received it.' },
];

// Unlike a plain résumé, each project gets an image, its stack and real links.
export const projects = [
  {
    title: 'Project One',
    context: 'Company A',
    summary: 'The problem, what you built, and the result in one or two sentences.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: '/project-placeholder.svg',
    links: [
      { label: 'Case study', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'Project Two',
    context: 'Side project',
    summary: 'An AI tool that does X for Y, used by N people.',
    tags: ['Python', 'FastAPI', 'LLM'],
    image: '/project-placeholder.svg',
    links: [
      { label: 'Live demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'Project Three',
    context: 'Company B',
    summary: 'A redesign that improved a key metric by N%.',
    tags: ['Angular', 'Figma'],
    image: '/project-placeholder.svg',
    links: [{ label: 'Case study', href: '#' }],
  },
  {
    title: 'Project Four',
    context: 'Open source',
    summary: 'A library or tool other developers use.',
    tags: ['TypeScript', 'npm'],
    image: '/project-placeholder.svg',
    links: [{ label: 'GitHub', href: '#' }],
  },
];

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];
