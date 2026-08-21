import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, UserRound } from 'lucide-react';
import Navbar from '@/components/navBar';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found | 10X' };
  }

  return {
    title: `${post.title} | 10X`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((relatedPost) => relatedPost.id !== post.id)
    .sort((firstPost, secondPost) => {
      if (firstPost.category === post.category) return -1;
      if (secondPost.category === post.category) return 1;
      return firstPost.id - secondPost.id;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-cabinet-grotesk text-black">
      <Navbar />

      <main className="pt-40 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-gray-400 hover:text-black mb-12 transition-colors group w-fit">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-[10px]">Back to Blog</span>
          </Link>

          <article>
            <header className="border-b border-gray-200 pb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase bg-black text-white rounded-full">
                {post.category}
              </span>
              <h1 className="max-w-4xl text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8">
                {post.title}
              </h1>
              <p className="max-w-3xl text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">

                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
            </header>

            <div className="relative aspect-video overflow-hidden rounded-[2rem] my-12 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              {post.content.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <section className="border-t border-gray-200 mt-20 pt-12">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-500">Keep Reading</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3">Related Articles.</h2>
              </div>
              <Link href="/blog" className="hidden sm:flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                All Insights
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-4 bg-gradient-to-br ${relatedPost.color} shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_40%)]" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase rounded-full shadow-sm">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
