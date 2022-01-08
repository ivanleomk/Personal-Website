import "../styles/global.css";
import "../node_modules/highlight.js/styles/github.css";
import { MDXProvider } from "@mdx-js/react";
import components from "../components/Layout/BlogLayout";

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
