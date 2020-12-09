import Link from "next/link";
import { useRouter } from "next/router";
export default function LeftMenu({ guides }) {
  const router = useRouter();
  const guidesActive = router.route.match(/^\/guides/);
  const docActive = router.route.match(/^\/doc/);
  return (
    <div className="doc-left-menu">
      <div className="doc-left-menu__item">
        <Link href="/guides/premiers-pas" passHref>
          <a>Premiers pas</a>
        </Link>
      </div>
      <div
        className={`doc-left-menu__item ${
          docActive ? "doc-left-menu__item--active" : ""
        }`}
      >
        <Link href="/doc" passHref>
          <a>Documentation</a>
        </Link>
      </div>
      <div
        className={`doc-left-menu__item ${
          guidesActive ? "doc-left-menu__item--active" : ""
        }`}
      >
        <Link href="/guides" passHref>
          <a>Guides</a>
        </Link>
        {guidesActive && (
          <div className="doc-left-submenu">
            {guides.map((guide) => {
              const guideActive = router.query.slug === guide.slug;
              return (
                <div
                  className={`doc-left-submenu__item ${
                    guideActive ? "doc-left-submenu__item--active" : ""
                  }`}
                  key={guide.slug}
                >
                  <Link href={`/guides/${guide.slug}`} passHref>
                    <a>{guide.attributes.title}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="doc-left-menu__item">
        <Link href="/posts" passHref>
          <a>Posts</a>
        </Link>
      </div>
    </div>
  );
}
