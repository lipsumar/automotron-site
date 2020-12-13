import fs from "fs";
import path from "path";
import marked from "marked";
import fm from "front-matter";
const contentDir = path.join(process.cwd(), "/content");
const guidesDir = path.join(contentDir, "/guides");
const docDir = path.join(contentDir, "/doc");

function getPages(dir) {
  const guideFiles = fs.readdirSync(dir);

  return guideFiles
    .map((file) => {
      const filepath = path.join(dir, file);
      return getPageByFilepath(filepath);
    })
    .sort((a, b) => a.attributes.sort - b.attributes.sort);
}

export function getGuides() {
  return getPages(guidesDir);
}

export function getDocs() {
  return getPages(docDir);
}

function getLocalizedBodies(bodies) {
  const parts = bodies.split("[[EN]]");
  return {
    fr: parts[0].replace("[[FR]]", ""),
    en: parts[1],
  };
}

function getPageByFilepath(filepath) {
  const md = fs.readFileSync(filepath).toString();
  const parsed = fm(md);
  const bodies = parsed.body;
  const localized = getLocalizedBodies(bodies);
  return {
    filepath,
    contentHtml: {
      fr: marked(localized.fr),
      en: marked(localized.en),
    },
    attributes: parsed.attributes,
    slug: filepath.replace(/\.md$/, "").split("/").pop(),
  };
}

export function getGuideBySlug(slug) {
  return getPageByFilepath(path.join(guidesDir, `${slug}.md`));
}

export function getDocBySlug(slug) {
  return getPageByFilepath(path.join(docDir, `${slug}.md`));
}

export function getPage(slugpath) {
  return getPageByFilepath(path.join(contentDir, `${slugpath}.md`));
}
