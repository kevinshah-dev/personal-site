import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, FileText } from "lucide-react";
import { posts } from "../data/posts";
import { SectionLabel, LightGridLines, Panel, fadeUp } from "../components/shared";

export default function Blog() {
  return (
    <main>
      <section className="relative border-b border-black/10 bg-[#edf1f4]">
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Blog</SectionLabel>
            <div className="grid grid-cols-12 gap-6">
              <motion.div {...fadeUp} className="col-span-12 md:col-span-5">
                <Panel className="h-full p-6 md:p-8">
                  <div className="flex items-center justify-between border-b border-black/10 pb-5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                      Notes & essays
                    </span>
                    <FileText className="h-4 w-4 text-black/45" />
                  </div>
                  <h1 className="mt-6 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                    A place for ideas, write-ups, and technical thinking.
                  </h1>
                  <p className="mt-6 text-sm leading-7 text-black/65">
                    Writing on engineering, AI systems, product thinking, career
                    development, and the craft of building software that matters.
                  </p>
                  <div className="mt-8 border-t border-black/10 pt-6">
                    <div className="text-sm text-black/52">
                      {posts.length} posts published
                    </div>
                  </div>
                </Panel>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
                className="col-span-12 md:col-span-7"
              >
                <div className="border border-black/10 bg-[#f4f6f8]">
                  {posts.map((post, index) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className={`grid grid-cols-12 gap-4 p-6 transition hover:bg-black/[0.015] md:p-8 ${
                        index !== posts.length - 1
                          ? "border-b border-black/10"
                          : ""
                      }`}
                    >
                      <div className="col-span-12 md:col-span-3">
                        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                          {post.category}
                        </div>
                        <div className="mt-3 text-sm text-black/52">
                          {post.date}
                        </div>
                        <div className="mt-1 text-sm text-black/40">
                          {post.readTime} min read
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-7">
                        <h2 className="text-xl font-semibold tracking-[-0.03em] text-zinc-950">
                          {post.title}
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/64">
                          {post.summary}
                        </p>
                      </div>
                      <div className="col-span-12 flex items-start justify-start md:col-span-2 md:justify-end">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-black/75">
                          Read <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
