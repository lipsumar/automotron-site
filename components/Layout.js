import Link from "next/link";
import LeftMenu from "./LeftMenu";

export default function Layout({ children, title, guides, docs }) {
  return (
    <>
      <div className="doc-header">
        <div className="container">
          <div className="doc-topbar">
            <div className="doc-topbar__logo">
              <Link href="/" passHref>
                <a>Automotron</a>
              </Link>
            </div>
            <div className="doc-topbar__right">
              <a href="/editor">Try it now</a>
            </div>
          </div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="container">
        <div className="doc-sidebar-layout">
          <div className="doc-sidebar-layout__sidebar">
            <LeftMenu guides={guides} docs={docs} />
          </div>
          <div className="doc-sidebar-layout__body">{children}</div>
        </div>
      </div>
    </>
  );
}
