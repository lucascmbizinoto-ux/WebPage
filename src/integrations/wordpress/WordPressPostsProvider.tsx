import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { WP_Query } from './wp_query';

export type WPTaxonomyTerm = {
  id: number
  link?: string
  name: string
}

export type WPAuthor = {
  avatar?: Record<string, string>
  link?: string
  name: string
}

export type WPPost = {
  author?: WPAuthor
  categories?: WPTaxonomyTerm[]
  content?: string
  date?: string
  featuredImage?: string
  id: string
  link?: string
  slug?: string
  tags?: WPTaxonomyTerm[]
  title: string
}

type PostsContextValue = {
  error: string | null
  hasNext: boolean
  hasPrev: boolean
  isRefetching: boolean
  loading: boolean
  nextPage: () => void
  posts: WPPost[]
  prevPage: () => void
}

type PostsProviderProps = {
  children: ReactNode
  wp_query: WP_Query
}

const currentDate = new Date().toISOString();

const equipmentPosts: WPPost[] = [
  {
    id: '1',
    title: 'Tactical COM-X Radio',
    slug: 'comx-900',
    link: '/post/post/1',
    date: currentDate,
    featuredImage: '/images/tactical_radio.png',
    categories: [{ id: 1, name: 'Communications', link: '/#tactical-equipment-gallery' }],
    tags: [{ id: 11, name: 'Encrypted', link: '#' }],
    author: { name: 'Operations Desk' },
    content: '<p>The COM-X platform is configured for secure field communications, resilient relay, and rapid deployment in remote environments.</p>',
  },
  {
    id: '2',
    title: 'Field Command Tablet',
    slug: 'tab-mil-7',
    link: '/post/post/2',
    date: currentDate,
    featuredImage: '/images/tactical_tablet.png',
    categories: [{ id: 2, name: 'Command', link: '/#tactical-equipment-gallery' }],
    tags: [{ id: 12, name: 'Ruggedized', link: '#' }],
    author: { name: 'Systems Analyst' },
    content: '<p>A rugged command surface for live maps, telemetry, and operational coordination across distributed teams.</p>',
  },
  {
    id: '3',
    title: 'Night Vision Optics',
    slug: 'nvg-v2',
    link: '/post/post/3',
    date: currentDate,
    featuredImage: '/images/tactical_optics.png',
    categories: [{ id: 3, name: 'Optics', link: '/#tactical-equipment-gallery' }],
    tags: [{ id: 13, name: 'Low Light', link: '#' }],
    author: { name: 'Field Specialist' },
    content: '<p>Advanced optics package for low-light visibility, target recognition, and situational awareness.</p>',
  },
];

const PostsContext = createContext<PostsContextValue | null>(null);

export function PostsProvider({ children, wp_query }: PostsProviderProps) {
  const posts = useMemo(() => {
    const postId = wp_query.params.post_id;
    if (typeof postId === 'string') {
      return equipmentPosts.filter((post) => post.id === postId || post.slug === postId);
    }
    return equipmentPosts.slice(0, Number(wp_query.params.per_page ?? equipmentPosts.length));
  }, [wp_query]);

  return (
    <PostsContext.Provider value={{ posts, loading: false, error: null, hasNext: false, hasPrev: false, nextPage: () => undefined, prevPage: () => undefined, isRefetching: false }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used inside PostsProvider');
  }
  return context;
}
