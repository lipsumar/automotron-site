import Link from "next/link";

export default function TopNav() {
  return (
    <div class="top-nav">
      <div className="top-nav__item">
        <Link href="/about" passHref>
          <a>A propos</a>
        </Link>
      </div>
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
      <div className="top-nav__item top-nav__item--btn">
        <a href="#" class="btn">
          Se connecter
        </a>
      </div>
      <div className="top-nav__item top-nav__item--btn">
        <a href="/editor" class="btn btn-accent">
          Essayer
        </a>
      </div>
    </div>
  );
}
