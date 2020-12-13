import Layout from "../../components/Layout";
import { useTranslation } from "../../i18n";
import { getGuideBySlug, getGuides, getDocs } from "../../utils";

export default function Home({ guide, guides, docs }) {
  const { i18n } = useTranslation();
  return (
    <Layout title="Guides" guides={guides} docs={docs}>
      <h1>{guide.attributes.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: guide.contentHtml[i18n.language] }}
      ></div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const guide = getGuideBySlug(slug);
  const guides = getGuides();
  const docs = getDocs();
  return {
    props: {
      guide,
      guides,
      docs,
    },
  };
}

export async function getStaticPaths() {
  const guides = getGuides();
  return {
    paths: guides.map((guide) => ({ params: { slug: guide.slug } })),
    fallback: false,
  };
}
