import { useCallback, useEffect, useState, type RefCallback } from 'react';

export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(options: IntersectionObserverInit = {}) {
  const [node, setNode] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref: RefCallback<T> = useCallback((element) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) return undefined;

    if (typeof globalThis.IntersectionObserver === 'undefined') {
      const frame = globalThis.requestAnimationFrame(() => setIsVisible(true));
      return () => globalThis.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
      ...options,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, options]);

  return { ref, isVisible };
}
