import Link from "next/link";
import { useRouter } from "next/router";
export default function LeftMenu({ guides, docs }) {
  const router = useRouter();
  const guidesActive = router.route.match(/^\/guides/);
  const docActive = router.route.match(/^\/doc/);
  console.log(router);
  return (
    <>
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
          {docActive && (
            <div className="doc-left-submenu">
              {docs.map((doc) => {
                const guideActive = router.query.slug === doc.slug;
                return (
                  <div
                    className={`doc-left-submenu__item ${
                      guideActive ? "doc-left-submenu__item--active" : ""
                    }`}
                    key={doc.slug}
                  >
                    <Link href={`/doc/${doc.slug}`} passHref>
                      <a>{doc.attributes.title}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
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
      <div className="doc-left-menu--mobile">
        <select
          onChange={(e) => router.push(e.target.value)}
          value={router.asPath}
        >
          <option value="/guides/premiers-pas">Premiers pas</option>
          <option value="/doc">Documentation</option>
          {docs.map((doc) => {
            const href = `/doc/${doc.slug}`;
            return (
              <option value={href} key={href}>
                -- {doc.attributes.title}
              </option>
            );
          })}
          <option value="/guides">Guides</option>
          {guides.map((guide) => {
            const href = `/guides/${guide.slug}`;
            return (
              <option value={href} key={href}>
                -- {guide.attributes.title}
              </option>
            );
          })}
          <option value="/guides">Posts</option>
        </select>
      </div>
    </>
  );
}
