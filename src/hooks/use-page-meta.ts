import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMetaTag(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function usePageMeta({ title, description, ogTitle, ogDescription }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", ogTitle ?? title);
    setMetaTag("property", "og:description", ogDescription ?? description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:card", "summary_large_image");
  }, [title, description, ogTitle, ogDescription]);
}
