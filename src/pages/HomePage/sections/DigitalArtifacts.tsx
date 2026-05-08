"use client";

import { PostsProvider, usePosts } from "@/integrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "@/integrations/wordpress/wp_query";
import { Link } from "@/components/common/Link";
import { Button } from "@/components/ui/button";

function DigitalArtifactsGrid() {
  const { posts, loading, error, hasNext, hasPrev, nextPage, prevPage, isRefetching } = usePosts();

  if (loading && !isRefetching) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} data-index={i} className="flex flex-col gap-4 animate-pulse">
            <div className="aspect-square w-full bg-muted rounded-md" />
            <div className="h-4 bg-muted w-3/4 rounded-md" />
            <div className="h-4 bg-muted w-1/2 rounded-md" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-destructive font-mono text-center py-8 border border-destructive p-4">
        [SYSTEM_ERROR]: {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-sm text-muted-foreground font-mono text-center py-8">
        [NO_EQUIPMENT_RECORDS_FOUND]
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => {
          
          const progressCount = (post.id.charCodeAt(0) % 10) + 5; 
          const totalSlashes = 20;
          const filledSlashes = Array(progressCount).fill("/").join("");
          const emptySlashes = Array(totalSlashes - progressCount).fill("/").join("");

          return (
            <article key={post.id} data-index={i} className="flex flex-col gap-4 font-mono text-sm group">
              <div className="aspect-square w-full bg-muted relative overflow-hidden border border-border rounded-md">
                {post.featuredImage ? (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/10">
                    [IMAGE_NOT_AVAILABLE]
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary text-primary-foreground px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                    {post.title}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-default font-bold uppercase leading-tight text-foreground text-lg">
                  {post.title}
                </h3>
                
                <div className="text-primary uppercase text-xs tracking-wider font-mono">
                  SERIAL: {post.slug?.substring(0, 8).toUpperCase() || "TAC-UNIT"}
                </div>

                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-[10px] text-muted-foreground uppercase font-mono">
                    DEPLOYMENT.STATUS.ACTIVE
                  </span>
                  <div className="flex text-xs tracking-widest overflow-hidden whitespace-nowrap">
                    <span className="text-primary">{filledSlashes}</span>
                    <span className="text-foreground/20">{emptySlashes}</span>
                  </div>
                </div>

                {post.link && (
                  <Link 
                    to={post.link} 
                    className="mt-4 inline-block uppercase underline decoration-1 underline-offset-4 text-primary hover:text-foreground hover:decoration-foreground transition-colors w-fit font-mono text-xs"
                  >
                    VIEW_SPECIFICATIONS &gt;&gt;
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {(hasNext || hasPrev) && (
        <div className="flex justify-between items-center border-t border-border pt-8 font-mono">
          <Button
            variant="outline"
            className="rounded-md uppercase text-xs tracking-wider border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={prevPage}
            disabled={!hasPrev || isRefetching}
          >
            &lt;&lt; PREV_BATCH
          </Button>
          <span className="text-xs text-muted-foreground">
            {isRefetching ? "[SYNCING...]" : "[DATABASE_ONLINE]"}
          </span>
          <Button
            variant="outline"
            className="rounded-md uppercase text-xs tracking-wider border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={nextPage}
            disabled={!hasNext || isRefetching}
          >
            NEXT_BATCH &gt;&gt;
          </Button>
        </div>
      )}
    </div>
  );
}

export default function DigitalArtifacts() {
  
  const wp_query_params = { 
    post_type: "post", 
    per_page: 3,
    status: "publish"
  };
  const wp_query = new WP_Query(wp_query_params);

  return (
    <section data-section-id="252716" id="tactical-equipment-gallery" className="bg-background text-foreground py-24 w-full border-t border-border">
      <div className="max-w-screen-lg mx-auto px-8">
        <h2 className="text-center font-default text-sm font-bold uppercase tracking-widest mb-12 text-muted-foreground">
          EQUIPMENT INVENTORY:
        </h2>
        
        <PostsProvider wp_query={wp_query}>
          <DigitalArtifactsGrid />
        </PostsProvider>
        
        <hr className="border-t border-border w-full mt-24 opacity-20" />
      </div>
    </section>
  );
}
