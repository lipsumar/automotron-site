import Layout from "../../components/Layout";
import { useTranslation } from "../../i18n";
import { getDocBySlug, getDocs, getGuides } from "../../utils";

export default function DocSlug({ doc, guides, docs }) {
  const { i18n } = useTranslation();
  return (
    <Layout title="Documentation" guides={guides} docs={docs}>
      <h1>{doc.attributes.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: doc.contentHtml[i18n.language] }}
      ></div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const doc = getDocBySlug(slug);
  const guides = getGuides();
  const docs = getDocs();
  return {
    props: {
      doc,
      guides,
      docs,
    },
  };
}

export async function getStaticPaths() {
  const docs = getDocs();
  return {
    paths: docs.map((doc) => ({ params: { slug: doc.slug } })),
    fallback: false,
  };
}
