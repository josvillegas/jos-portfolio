import { defineCollection, z } from "astro:content";
const proyectoCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    title: z.string(),
    subtitle: z.string(),
    infprincipal: z.string(),
    imgpreview: z.string(),
    description: z.string(),
    infanalisi: z.string(),
    imganalisis: z.string(),
    infinterview: z.string(),
    imginterview: z.string(),
    infsm: z.string(),
    imgsm: z.string(),
    infuf: z.string(),
    imguf: z.string(),
    inflwireframe: z.string(),
    imglwireframe: z.string(),
    infmwireframe: z.string(),
    imgmwireframe: z.string(),
    inftc: z.string(),
    imgtc: z.string(),
    infgrid: z.string(),
    imggrid: z.string(),
    inficons: z.string(),
    imgicons: z.string(),
    infcomponent: z.string(),
    imgcomponent: z.string(),
    infprocess: z.string(),
    imgprocess: z.string(),
    urlfigma: z.string(),
    urlpreview: z.string(),
    action: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { proyecto: proyectoCollection };
