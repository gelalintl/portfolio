import { Metadata } from "next";

export const Seo = ({}: Metadata) => {
  return {
    title: {
      default : "Coders Monkeys",
      template : "%s | Coders Monkeys"
    },
    description : "Mon premier site web avec Next.js",
    keywords : ["Next.js", "React", "JavaScript", "TypeScript", "Frontend", "Full Stack", "Web Development"],
    authors: [{name: "CODJIA Gaël"}], 
  }
}
