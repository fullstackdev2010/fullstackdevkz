import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compile } from 'next-mdx-remote/rsc';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
};

export const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function fmtDate(d: any): string {
  try {
    const iso = new Date(d).toISOString();
    return iso.slice(0, 10);
  } catch (_e) {
    return typeof d === 'string' ? d : '';
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const entries = await fs.readdir(POSTS_DIR);
  const posts: Post[] = [];
  for (const file of entries) {
    if (!file.endsWith('.mdx')) continue;
    const slug = file.replace(/\.mdx$/, '');
    const raw = await fs.readFile(path.join(POSTS_DIR, file), 'utf-8');
    const { data } = matter(raw);
    posts.push({
      slug,
      title: (data as any).title ?? slug,
      date: fmtDate((data as any).date),
      excerpt: (data as any).excerpt ?? '',
      tags: (data as any).tags ?? [],
    });
  }
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string) {
  const file = await fs.readFile(path.join(POSTS_DIR, slug + '.mdx'), 'utf-8');
  const { content, data } = matter(file);
  const mdx = await compile(content, { mdxOptions: { remarkPlugins: [] } });
  const date = fmtDate((data as any).date);
  return { mdx, data: { ...data, date } };
}
