import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import LoginModal from "./LoginModal";
import useApi from "../hooks/useApi";
import { FiUser } from "react-icons/fi";
import LoggedInStatus from "./LoggedInStatus";

export default function TopNav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { data: user } = useApi("/logged-in", "post");
  return (
    <>
      <div className="top-nav">
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
          {user ? (
            <div className="logged-in-status-icon">
              <LoggedInStatus user={user} />
            </div>
          ) : (
            <a
              href="#"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setLoginModalOpen(true);
              }}
            >
              Connexion
            </a>
          )}
        </div>
        <div className="top-nav__item">
          <a href="/editor" className="btn btn-accent">
            Essayer
          </a>
        </div>
      </div>
      <div
        className={`top-nav-mobile ${
          hamburgerOpen ? "top-nav-mobile--open" : ""
        }`}
      >
        <a href="/editor" className="btn btn-accent btn-essayer-mobile">
          Essayer
        </a>
        <div
          className="top-nav__hamburger"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
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
              <a
                href="#"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  setHamburgerOpen(false);
                  setLoginModalOpen(true);
                }}
              >
                Connexion
              </a>
            </div>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={loginModalOpen}
        onCloseRequest={() => setLoginModalOpen(false)}
        onLoginSuccess={() => (window.location.href = "/")}
      />
    </>
  );
}
