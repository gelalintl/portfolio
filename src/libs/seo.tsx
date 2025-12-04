import { Metadata } from "next";

interface SeoProps {
    title? : string,
    description?: string,
    keywords?: string[],
    authors?: string,
    url?: string,
}

//DEFAULT VALUES
const SITE_NAME = "Mon premier site Next.js";
const DEFAULT_TITLE = SITE_NAME;
const DEFAULT_DESCRIPTION = "Bienvenu sur un site Next.js développé par un Junior";
const DEFAULT_KEYWORDS = ["Next.js", "Javascript", "React", "Frontend", "Backend", "Fullstack", "Junior developer", "Codjia Gael"];
const DEFAULT_AUTHOR = "Codjia Gael";
const BASE_URL = "https://monurl.com";

export default function Seo({title, description, keywords, authors, url}: SeoProps = {}) : Metadata {

    const seoTitle = title ? `${title} | ${DEFAULT_TITLE}`: DEFAULT_TITLE;
    const seoKeywords = keywords ? [...DEFAULT_KEYWORDS, ...keywords] : DEFAULT_KEYWORDS;
    const seoUrl = url ? `${BASE_URL}/${url}` : BASE_URL;

    return {
        title : seoTitle,
        description : description || DEFAULT_DESCRIPTION,
        keywords : seoKeywords,
        authors : [{name : DEFAULT_AUTHOR}],
        alternates: {
            canonical: seoUrl,
        },
        openGraph: {
            title: seoTitle,
            description: description || DEFAULT_DESCRIPTION,
            siteName: SITE_NAME,
            url: seoUrl,
            locale: "fr_FR",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: description || DEFAULT_DESCRIPTION,
        },
  }
}
