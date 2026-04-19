import Link from "next/link";
import Image from "next/image";
import Border from "@/components/Border";

const MoreArticles = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-20 border-t pt-12">
      <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-6">
        More Articles
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            {post.image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            )}

            <div className="mt-6">

                <Border position="left" className="pl-6">
    
                    {/* Date */}
                    <p className="text-sm text-neutral-500">
                        {post.date}
                    </p>

                    {/* Title */}
                    <h4 className="mt-2 font-medium text-neutral-900 group-hover:text-neutral-700">
                        {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm text-neutral-600 line-clamp-2">
                        {post.excerpt || post.description}
                    </p>

                    {/* Read more */}
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
                        Read more
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                        </span>
                    </span>
                </Border>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreArticles;