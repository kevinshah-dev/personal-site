import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPost, posts } from "../data/posts";
import type { BlogSection } from "../data/posts";
import { SectionLabel, LightGridLines, fadeUp } from "../components/shared";

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-3xl"
        >
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-4 text-base leading-8 text-black/72">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="mt-4 space-y-3">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base leading-8 text-black/72"
            >
              <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre
          key={index}
          className="mt-4 overflow-x-auto border border-black/10 bg-[#080a0e] p-6 text-sm leading-7 text-white/80"
        >
          <code>{section.text}</code>
        </pre>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug ?? "");

  if (!post) {
    return (
      <main>
        <section className="relative border-b border-black/10">
          <LightGridLines />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
            <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
              <SectionLabel>Blog</SectionLabel>
              <div className="py-20 text-center">
                <h1 className="text-3xl font-semibold tracking-[-0.05em] text-zinc-950">
                  Post not found
                </h1>
                <p className="mt-4 text-base text-black/60">
                  The blog post you're looking for doesn't exist.
                </p>
                <Link
                  to="/blog"
                  className="mt-8 inline-flex items-center gap-2 border border-black/15 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-black/5"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <main>
      <section className="relative border-b border-black/10">
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Blog</SectionLabel>

            <motion.div {...fadeUp}>
              <Link
                to="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/55 transition hover:text-black"
              >
                <ArrowLeft className="h-4 w-4" /> All posts
              </Link>

              <div className="border border-black/10 bg-[#f4f6f8]">
                <div className="border-b border-black/10 p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                      {post.category}
                    </span>
                    <span className="text-sm text-black/40">
                      {post.date}
                    </span>
                    <span className="text-sm text-black/40">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-zinc-950 md:text-5xl">
                    {post.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-black/60">
                    {post.summary}
                  </p>
                </div>

                <div className="p-6 md:p-10">
                  <div className="mx-auto max-w-3xl">
                    {post.content.map((section, index) =>
                      renderSection(section, index)
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {(prevPost || nextPost) && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="border border-black/10 bg-[#f4f6f8] p-6 transition hover:bg-black/[0.015] md:p-8"
                  >
                    <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-black/45">
                      Previous
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-base font-semibold tracking-[-0.03em] text-zinc-950">
                      <ArrowLeft className="h-4 w-4 shrink-0" />
                      {prevPost.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="border border-black/10 bg-[#f4f6f8] p-6 text-right transition hover:bg-black/[0.015] md:p-8"
                  >
                    <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-black/45">
                      Next
                    </div>
                    <div className="mt-3 flex items-center justify-end gap-2 text-base font-semibold tracking-[-0.03em] text-zinc-950">
                      {nextPost.title}
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </div>
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
