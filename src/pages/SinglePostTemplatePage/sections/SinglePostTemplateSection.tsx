"use client";

import { PostsProvider, usePosts } from "@/integrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "@/integrations/wordpress/wp_query";
import type { WPQueryParams } from "@/integrations/wordpress/wp_query";
import { Link } from "@/components/common/Link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, Tag, ArrowLeft, Clock } from "lucide-react";


function RelatedPostsConsumer() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} data-index={i} className="h-64 bg-muted/50 animate-pulse rounded-md" />
        ))}
      </div>
    );
  }

  if (error || !posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {posts.map((post, i) => (
        <Card key={post.id} data-index={i} className="overflow-hidden flex flex-col h-full border-border/40 shadow-md hover:shadow-lg transition-shadow rounded-md">
          {post.featuredImage && (
            <Link to={post.link || "#"} className="aspect-[4/3] w-full overflow-hidden block">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </Link>
          )}
          <CardHeader className="p-5 pb-4">
            {post.categories && post.categories.length > 0 && (
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block font-default">
                {post.categories[0].name}
              </span>
            )}
            <CardTitle className="text-lg font-default font-bold uppercase leading-tight line-clamp-2 text-foreground">
              <Link to={post.link || "#"} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0 mt-auto">
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                <span>
                  {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                </span>
              </div>
              <Link to={post.link || "#"} className="text-primary font-bold hover:underline">
                View Report
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


function RelatedPosts({ currentPostId, categoryId }: { currentPostId: string, categoryId?: number }) {
  const queryParams: WPQueryParams = {
    post_type: "post",
    per_page: 3,
    exclude: [currentPostId],
  };
  
  if (categoryId) {
    queryParams.categories = [categoryId];
  }
  
  const wp_query = new WP_Query(queryParams);

  return (
    <section className="mt-16 pt-12 border-t border-border/30">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl md:text-3xl font-bold font-default uppercase tracking-tight text-foreground">Strategic Insights</h3>
        <Link to="/HomePage">
          <Button variant="outline" size="sm" className="rounded-md border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase font-bold text-xs">Archive</Button>
        </Link>
      </div>
      <PostsProvider wp_query={wp_query}>
        <RelatedPostsConsumer />
      </PostsProvider>
    </section>
  );
}


function SinglePostConsumer() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-8 w-24 bg-muted rounded-md mb-8" />
        <div className="h-12 w-3/4 bg-muted rounded-md mb-6 mx-auto" />
        <div className="h-6 w-1/2 bg-muted rounded-md mb-12 mx-auto" />
        <div className="h-[400px] w-full bg-muted rounded-md mb-12" />
        <div className="space-y-4">
          <div className="h-4 w-full bg-muted rounded-md" />
          <div className="h-4 w-full bg-muted rounded-md" />
          <div className="h-4 w-5/6 bg-muted rounded-md" />
        </div>
      </div>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h2 className="text-2xl font-bold font-default uppercase mb-4">Intelligence Not Found</h2>
        <p className="text-muted-foreground mb-8 font-serif">The requested technical documentation or briefing is currently unavailable in our secure database.</p>
        <Link to="/HomePage">
          <Button className="rounded-md uppercase font-bold">Return to Command</Button>
        </Link>
      </div>
    );
  }

  const post = posts[0];
  const firstCategoryId = post.categories?.[0]?.id;

  return (
    <article className="max-w-4xl mx-auto">
      
      <div className="mb-8">
        <Link to="/HomePage" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 size-4" /> Back to Intelligence Feed
        </Link>
      </div>

      
      <header className="mb-10 text-center">
        {post.categories && post.categories.length > 0 && (
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {post.categories.map((cat, i) => (
              <Link key={cat.id} to={cat.link || "#"} data-index={i}>
                <span className="px-4 py-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-xs font-bold uppercase tracking-widest">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-default mb-6 text-foreground leading-[1.1] tracking-tighter uppercase">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-muted-foreground text-xs font-bold uppercase tracking-wider mt-8">
          {post.author && (
            <div className="flex items-center gap-2.5">
              <Avatar className="size-10 border border-border rounded-md">
                <AvatarImage src={post.author.avatar?.["48"]} alt={post.author.name} />
                <AvatarFallback className="bg-secondary text-secondary-foreground rounded-md"><User className="size-4" /></AvatarFallback>
              </Avatar>
              <span className="text-foreground">{post.author.name}</span>
            </div>
          )}
          
          {post.author && post.date && <Separator orientation="vertical" className="h-4 hidden sm:block bg-border/50" />}
          
          {post.date && (
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          )}
          
          {post.date && <Separator orientation="vertical" className="h-4 hidden sm:block bg-border/50" />}
          
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-primary" />
            <span>Briefing: 5 min</span>
          </div>
        </div>
      </header>

      
      {post.featuredImage && (
        <div className="mb-12 rounded-md overflow-hidden shadow-xl border border-border/20">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </div>
      )}

      
      <div className="bg-card rounded-md p-6 md:p-10 shadow-md border border-border/30 mb-12">
        <div 
          className="prose prose-lg dark:prose-invert max-w-none font-serif text-foreground/90 leading-relaxed text-[12px] prose-headings:font-default prose-headings:font-bold prose-headings:text-foreground prose-headings:uppercase prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-img:rounded-md prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </div>

      
      {post.tags && post.tags.length > 0 && (
        <div className="mb-12 flex items-center gap-3 flex-wrap">
          <Tag className="size-5 text-muted-foreground mr-1" />
          {post.tags.map((tag, i) => (
            <Link key={tag.id} to={tag.link || "#"} data-index={i}>
              <span className="px-3 py-1.5 bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors rounded-md text-xs font-bold uppercase tracking-widest">
                {tag.name}
              </span>
            </Link>
          ))}
        </div>
      )}

      
      {post.author && (
        <Card className="bg-secondary/20 border-border/40 shadow-md rounded-md">
          <CardContent className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Avatar className="size-24 border-2 border-primary shadow-md shrink-0 rounded-md">
              <AvatarImage src={post.author.avatar?.["96"]} alt={post.author.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-2xl rounded-md"><User className="size-10" /></AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-bold font-default uppercase mb-2 text-foreground">Analyst: {post.author.name}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed font-serif text-[12px]">
                Specialist in defense logistics and tactical systems integration. Providing critical analysis on aerospace upgrades, armored vehicle capabilities, and global security infrastructure for the modern defense landscape.
              </p>
              <Link to={post.author.link || "#"}>
                <Button variant="outline" size="sm" className="rounded-md px-6 uppercase font-bold text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground">Personnel Dossier</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      
      <RelatedPosts currentPostId={post.id} categoryId={firstCategoryId} />
    </article>
  );
}


export default function SinglePostTemplateSection() {
  type WvcWindow = Window & {
    wvcClient?: {
      getCurrentWPQueryParams: () => WPQueryParams
    }
  }

  const pathnamePostId = typeof window !== 'undefined'
    ? window.location.pathname.split('/').filter(Boolean).at(-1)
    : undefined;

  const currentWPQueryParams = typeof window !== 'undefined'
    ? (window as WvcWindow).wvcClient?.getCurrentWPQueryParams() ?? { post_type: 'post', post_id: pathnamePostId }
    : { post_type: 'post' }; 
    
  const wp_query = new WP_Query(currentWPQueryParams);

  return (
    <section data-section-id="233927" id="single-post-template-section" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <PostsProvider wp_query={wp_query}>
          <SinglePostConsumer />
        </PostsProvider>
      </div>
    </section>
  );
}
