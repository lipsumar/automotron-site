import { Link } from "../i18n";
import TopNav from "./TopNav";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-top">
        <div className="topbar-top__logo">
          <Link href="/" passHref>
            <a>
              <img src="/img/site/logo_complete_site.svg" />
            </a>
          </Link>
        </div>
        <div className="topbar-top__nav">
          <TopNav />
        </div>
      </div>
    </div>
  );
}
