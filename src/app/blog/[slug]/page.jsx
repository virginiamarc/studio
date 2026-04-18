import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/getPosts";
import Image from "next/image";

// ✅ This belongs OUTSIDE the component
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  const html = marked(post.content);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={600}
        className="rounded-xl mb-10"
      />

      <h1 className="text-4xl font-bold text-neutral-900">{post.title}</h1>

      <div className="mt-4 flex items-center gap-4">
        <Image
          src={post.authorImage}
          alt={post.author}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-neutral-900">{post.author}</p>
          <p className="text-sm text-neutral-500">{post.date}</p>
        </div>
      </div>

      <div
        className="mt-10 text-neutral-900 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <p className="mt-10 text-neutral-600 text-sm italic">
        Enjoyed this article? Share it with someone who might find it helpful.
      </p>
    </article>
  );
}