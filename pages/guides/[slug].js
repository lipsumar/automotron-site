import Layout from "../../components/Layout";
import { getGuideBySlug, getGuides, getDocs } from "../../utils";

export default function Home({ guide, guides, docs }) {
  return (
    <Layout title="Guides" guides={guides} docs={docs}>
      <h1>{guide.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: guide.contentHtml }}></div>
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
