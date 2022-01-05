import Link from "next/link";
import NavigationLinks from "./Header/NavigationLinks";
import Head from "next/head";

const navigation = [{ name: "Articles", href: "/blog" }];

type LayoutProps = {
  children: any;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav
          className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 py-10"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-none">
            <h1 className="hidden h-6 text-2xl font-semibold sm:block">
              <Link href="/">Ivan Leo</Link>
            </h1>
            <div className="flex items-center">
              <NavigationLinks navigation={navigation} />
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
