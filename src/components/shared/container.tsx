import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main" | "article";
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`relative mx-auto w-full ${className}`}
      style={{
        maxWidth: "var(--max-width)",
        paddingInline: "var(--gutter)",
      }}
    >
      {children}
    </Tag>
  );
}
