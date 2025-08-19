import Link from 'next/link';
import { notFound } from 'next/navigation';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags?: string[];
  content: string;
}

async function getAllSlugs(): Promise<string[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      content: matterResult.content,
    };
  } catch {
    return undefined;
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="post" id="blog-post">
      <header>
        <div className="title">
          <h2>{post.title}</h2>
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
        </div>
      </header>

      <div className="blog-post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <footer>
        <Link href="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>
      </footer>
    </article>
  );
}
