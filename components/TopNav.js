import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import LoginModal from "./LoginModal";
import useApi from "../hooks/useApi";
import LoggedInStatus from "./LoggedInStatus";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation, Link } from "../i18n";

export default function TopNav({ variant }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { data: user } = useApi("/logged-in", "post");
  return (
    <>
      <div className={`top-nav top-nav--${variant}`}>
        <div className="top-nav__item">
          <Link href="/examples" passHref>
            <a>{t("topNav.examples")}</a>
          </Link>
        </div>
        <div className="top-nav__item">
          <Link href="/doc" passHref>
            <a>{t("topNav.documentation")}</a>
          </Link>
        </div>
        <div className="top-nav__item">
          <LanguageSwitcher />
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
              {t("topNav.login")}
            </a>
          )}
        </div>
        <div className="top-nav__item">
          <a
            href={`${i18n.language === "fr" ? "/fr" : ""}/editor`}
            className="btn btn-accent"
          >
            {t("topNav.tryNow")}
          </a>
        </div>
      </div>
      <div
        className={`top-nav-mobile ${
          hamburgerOpen ? "top-nav-mobile--open" : ""
        }`}
      >
        <a
          href={`${i18n.language === "fr" ? "/fr" : ""}/editor`}
          className="btn btn-accent btn-essayer-mobile"
        >
          {t("topNav.tryNow")}
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
