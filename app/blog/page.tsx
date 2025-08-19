import Link from 'next/link';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags?: string[];
}

async function getAllPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        tags: matterResult.data.tags,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2>Blog</h2>
          <p>Random thoughts and interesting stuff</p>
        </div>
      </header>

      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.slug} className="blog-post-preview">
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <div className="blog-post-meta">
              <span className="date">{post.date}</span>
              {post.tags && (
                <span className="tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </span>
              )}
            </div>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="read-more">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}
