import Layout from "../../components/Layout";
import { getGuideBySlug, getGuides } from "../../utils";
//import { getGuides } from "../../utils";

export default function Home({ guide, guides }) {
  return (
    <Layout title="Guides" guides={guides}>
      <h1>{guide.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: guide.contentHtml }}></div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const guide = getGuideBySlug(slug);
  const guides = getGuides();
  return {
    props: {
      guide,
      guides,
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
