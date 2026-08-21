export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  color: string;
};

const placeholderAuthor = '/images/placeholder-author.png';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Education',
    slug: 'future-of-ai-in-education',
    excerpt: 'How thoughtful AI tools can make learning more personal, practical, and accessible for the next generation of builders.',
    content: `Artificial intelligence is changing the way people discover ideas, practice new skills, and receive feedback. For learners, the most useful promise of AI is not replacing a teacher or skipping the difficult parts of a subject. It is making the right explanation available at the right moment.

At Parach, we see AI as a learning companion. A student working through a JavaScript exercise can ask for another perspective, compare approaches, and continue practicing without waiting for the next class. That small reduction in friction can make consistency easier to maintain.

The strongest learning experiences still combine human guidance with active project work. AI can suggest a debugging direction, but the learner builds confidence by testing the idea, reading the error, and making the final decision. This turns assistance into a form of deliberate practice rather than a shortcut.

As these tools improve, educators and technology communities will need to focus on judgment, curiosity, and responsible use. The future belongs to learners who can use AI fluently while still asking good questions, checking their assumptions, and building things that matter.`,
    author: 'Dr. Sarah Johnson',
    authorImage: placeholderAuthor,
    date: 'Aug 21, 2026',
    readTime: '5 min read',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400',
    featured: true,
    color: 'from-blue-500 via-cyan-500 to-sky-600',
  },
  {
    id: 2,
    title: 'A Practical Path to Your First Software Job',
    slug: 'practical-path-to-first-software-job',
    excerpt: 'A realistic approach to building skills, a portfolio, and the confidence to begin a career in technology.',
    content: `Starting a career in technology can feel like standing in front of a very large map. There are dozens of languages, tools, and job titles to choose from. A clearer first step is to choose one useful direction and stay with it long enough to make something real.

For many new developers, that means learning the web fundamentals: HTML, CSS, JavaScript, and a framework such as React. These skills create a visible feedback loop. You can publish a page, improve its accessibility, connect it to an API, and show the result to another person.

A portfolio becomes stronger when it explains decisions, not just screenshots. Describe the problem your project solves, what you learned, and which trade-offs you made. A small application with a thoughtful README often says more than a collection of unfinished tutorials.

Career growth is also a communication exercise. Ask precise questions, request feedback, and practice explaining technical ideas in plain language. Employers are looking for people who can learn, collaborate, and keep moving when a problem does not have an immediate answer.`,
    author: 'Michael Chen',
    authorImage: placeholderAuthor,
    date: 'Aug 18, 2026',
    readTime: '8 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1400',
    featured: false,
    color: 'from-emerald-500 via-green-500 to-lime-500',
  },
  {
    id: 3,
    title: 'Learning Web Development Through Real Projects',
    slug: 'learning-web-development-through-real-projects',
    excerpt: 'Why building useful applications is one of the most reliable ways to turn concepts into lasting development skills.',
    content: `Tutorials are excellent for meeting a new idea, but projects are where that idea becomes a working skill. When you build a real application, you have to decide how the pieces fit together and what to do when the happy path is not enough.

Start with a problem that is small enough to finish. A course tracker, a community directory, or a simple booking flow can teach routing, forms, data fetching, and responsive design without becoming an unmanageable product. Write down the user journey before opening your editor.

As the project grows, create checkpoints. Make the first version useful, then improve one quality at a time: clearer loading states, better keyboard navigation, meaningful error messages, or faster queries. These details are not distractions from development; they are the work of development.

The most valuable project is one you can revisit. Each return gives you a chance to refactor with better understanding and to see how much your thinking has changed. That visible progress is powerful fuel for the next challenge.`,
    author: 'Emily Rodriguez',
    authorImage: placeholderAuthor,
    date: 'Aug 15, 2026',
    readTime: '12 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1400',
    featured: false,
    color: 'from-violet-500 via-fuchsia-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Backend Foundations That Make Products Reliable',
    slug: 'backend-foundations-for-reliable-products',
    excerpt: 'The core backend habits that help new developers build services people can trust and maintain.',
    content: `A backend is more than an endpoint that returns data. It is the part of a product responsible for protecting information, enforcing rules, and staying understandable as more people depend on it.

Begin with the shape of the data. Clear models and deliberate validation prevent many confusing bugs before they reach a database. From there, separate authentication from authorization so it is obvious who a user is and what that user can do.

Good backend development also makes failure visible. Return useful status codes, log enough context to investigate a problem, and design operations so a retry does not create duplicate work. These practices matter whether the service is a small student project or a system serving thousands of requests.

You do not need a complicated architecture to learn these principles. A focused Node.js API with a small database can teach routing, persistence, security, and deployment in a way that stays easy to inspect. Reliability starts with clarity.`,
    author: 'James Williams',
    authorImage: placeholderAuthor,
    date: 'Aug 12, 2026',
    readTime: '6 min read',
    category: 'Backend Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400',
    featured: false,
    color: 'from-rose-500 via-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'React Concepts Worth Understanding Deeply',
    slug: 'react-concepts-worth-understanding-deeply',
    excerpt: 'A grounded look at components, state, and data flow for developers building their next React application.',
    content: `React becomes easier to reason about when you stop treating components as small templates and start treating them as descriptions of a UI state. A component receives inputs, calculates what should be visible, and responds when those inputs change.

Props describe information flowing into a component. State represents information the component needs to remember. Keeping those responsibilities clear makes it easier to decide where a value belongs and prevents a page from becoming a tangle of duplicated state.

The next important idea is data flow. Prefer a single source of truth and pass only the information a child needs. When an interaction feels difficult, sketch the state transitions first. The code often becomes simpler once the user journey is explicit.

Performance work should follow understanding. First make the component correct and accessible, then measure where rendering or data loading is actually expensive. Strong React applications are not built from clever tricks; they are built from clear boundaries and deliberate decisions.`,
    author: 'Lisa Anderson',
    authorImage: placeholderAuthor,
    date: 'Aug 9, 2026',
    readTime: '7 min read',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1400',
    featured: false,
    color: 'from-indigo-500 via-violet-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Student Success Starts With Sustainable Practice',
    slug: 'student-success-with-sustainable-practice',
    excerpt: 'Simple learning rhythms that help students keep making progress when motivation naturally rises and falls.',
    content: `Progress in technology education is rarely a straight line. Some weeks bring a satisfying breakthrough; others are mostly errors, rereading, and questions. A sustainable practice is designed for both kinds of weeks.

Choose a repeatable schedule rather than an impressive one. Short, focused sessions make it easier to return to a difficult topic and create enough repetition for new ideas to settle. Keep a small record of what you tried, what failed, and what you will investigate next.

Learning with other people adds an important layer of accountability. A peer review, a study group, or a mentor conversation can reveal an assumption that is hard to notice alone. Explaining your approach also strengthens your understanding.

At Parach, we measure success by more than finishing lessons. We care about whether learners can apply an idea, recover from a mistake, and carry the habit into their next project. Sustainable practice turns individual wins into a lasting capability.`,
    author: 'David Kim',
    authorImage: placeholderAuthor,
    date: 'Aug 6, 2026',
    readTime: '10 min read',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1400',
    featured: false,
    color: 'from-amber-400 via-yellow-500 to-orange-500',
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
