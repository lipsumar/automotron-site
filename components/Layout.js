import Link from "next/link";
import LeftMenu from "./LeftMenu";
import TopNav from "./TopNav";
export default function Layout({ children, title, guides, docs }) {
  return (
    <>
      <div className="doc-header">
        <div className="layout-media" style={{ padding: "0 3em" }}>
          <div className="layout-media__media" style={{ marginRight: "auto" }}>
            <div className="logo-title">
              <Link href="/" passHref>
                <a className="logo-title__logo">
                  <img src="/img/site/logo_icon_guide.svg" />
                </a>
              </Link>
              <div className="logo-title__title">Aide &amp; Documentation</div>
            </div>
          </div>
          <div
            className="layout-media__body"
            style={{ flexGrow: 0, display: "flex", alignItems: "center" }}
          >
            <TopNav />
          </div>
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
