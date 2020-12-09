import fs from "fs";
import path from "path";
import marked from "marked";
import fm from "front-matter";
const contentDir = path.join(process.cwd(), "/content");
const guidesDir = path.join(contentDir, "/guides");

export function getGuides() {
  const guideFiles = fs.readdirSync(guidesDir);

  return guideFiles.map((file) => {
    const filepath = path.join(guidesDir, file);
    return getGuideByFilepath(filepath);
  });
}

function getGuideByFilepath(filepath) {
  const md = fs.readFileSync(filepath).toString();
  const parsed = fm(md);
  return {
    filepath,
    contentHtml: marked(parsed.body),
    attributes: parsed.attributes,
    slug: filepath.replace(/\.md$/, "").split("/").pop(),
  };
}

export function getGuideBySlug(slug) {
  return getGuideByFilepath(path.join(guidesDir, `${slug}.md`));
}
