import { getPage } from "../utils";

export default function AboutPage({ page }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: page.contentHtml }}></div>
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
