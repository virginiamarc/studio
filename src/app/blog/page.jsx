import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Insights, tutorials, and creative growth"
      >
        <p>
          Explore articles on web development, design, emerging technologies,
          and the lessons learned throughout my journey in tech.
        </p>
      </PageIntro>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-[50%_15%] transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-sm font-medium text-neutral-500">
                {post.date}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-neutral-900 group-hover:text-neutral-700">
                {post.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-600">{post.excerpt}</p>

              <span className="mt-4 inline-block text-sm font-medium text-green-700 group-hover:text-green-900">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
