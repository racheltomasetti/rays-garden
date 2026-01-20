import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

// Custom components for MDX content
const MDXComponents = {
  // Override default elements with custom styling
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-[var(--tx)] mb-6 mt-8"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-4 mt-8 italic"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="text-2xl md:text-3xl font-semibold text-[var(--accent-2)] mb-4 mt-6 italic"
      {...props}
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4
      className="text-xl md:text-2xl font-semibold text-[var(--tx)] mb-3 mt-4"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="text-base leading-relaxed text-[var(--tx)] mb-4" {...props} />
  ),
  a: (props: ComponentProps<"a">) => {
    const href = props.href || "";
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          className="text-[var(--tx-2)] hover:text-[var(--accent-2)] font-bold transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }

    return (
      <Link
        href={href}
        className="text-[var(--accent)] hover:text-[var(--accent-2)] font-bold transition-colors"
      >
        {props.children}
      </Link>
    );
  },
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-[var(--tx)]" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-[var(--tx)]" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="text-base leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-[var(--accent)] pl-4 italic text-[var(--tx-2)] my-4"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="bg-[var(--bg-2)] text-[var(--accent)] px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="bg-[var(--bg-2)] p-4 rounded-lg overflow-x-auto mb-4 text-sm"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="border-t border-[var(--ui-2)] my-8 opacity-70" {...props} />
  ),
  img: (props: ComponentProps<"img">) => {
    // Handle images with Next.js Image component for optimization
    const { src, alt } = props;
    if (!src || typeof src !== "string") return null;

    return (
      <span className="block my-6">
        <Image
          src={src}
          alt={alt || ""}
          width={800}
          height={600}
          className="rounded-lg w-full h-auto"
          style={{ objectFit: "cover" }}
        />
      </span>
    );
  },
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-bold text-[var(--tx)]" {...props} />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="italic text-[var(--tx-2)]" {...props} />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-[var(--ui-2)]" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="border border-[var(--ui-2)] bg-[var(--bg-2)] px-4 py-2 text-left font-semibold text-[var(--tx)]"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td
      className="border border-[var(--ui-2)] px-4 py-2 text-[var(--tx)]"
      {...props}
    />
  ),
};

export default MDXComponents;
