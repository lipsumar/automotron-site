import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class="top-nav">
        <div className="top-nav__item">
          <Link href="/examples" passHref>
            <a>Exemples</a>
          </Link>
        </div>
        <div className="top-nav__item">
          <Link href="/doc" passHref>
            <a>Documentation</a>
          </Link>
        </div>
        <div className="top-nav__item--separator"></div>
        <div className="top-nav__item">
          <a href="#" class="btn">
            Connection
          </a>
        </div>
        <div className="top-nav__item">
          <a href="/editor" class="btn btn-accent">
            Essayer
          </a>
        </div>
      </div>
      <div class={`top-nav-mobile ${open ? "top-nav-mobile--open" : ""}`}>
        <a href="/editor" class="btn btn-accent btn-essayer-mobile">
          Essayer
        </a>
        <div className="top-nav__hamburger" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </div>
        <div className="nav-mobile">
          <div className="nav-mobile-menu">
            <div className="nav-mobile-menu__item">
              <Link href="/examples" passHref>
                <a>Exemples</a>
              </Link>
            </div>
            <div className="nav-mobile-menu__item">
              <Link href="/doc" passHref>
                <a>Documentation</a>
              </Link>
            </div>

            <div className="nav-mobile-menu__item">
              <a href="#" class="btn">
                Connection
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
