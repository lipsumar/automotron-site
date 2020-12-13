import { useTranslation } from "../i18n";
import { getPage } from "../utils";

export default function AboutPage({ page }) {
  const { i18n } = useTranslation();
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: page.contentHtml[i18n.language] }}
      ></div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: getPage("a-propos"),
    },
  };
}
