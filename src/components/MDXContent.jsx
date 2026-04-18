import { useMDXComponent } from "next-contentlayer/hooks";

export function MDXContent({ children }) {
  const Component = useMDXComponent(children);
  return <Component />;
}
