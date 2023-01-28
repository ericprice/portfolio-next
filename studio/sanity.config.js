import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { contentGraphView } from 'sanity-plugin-graph-view';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import schemas from './schemas/schema'

export default defineConfig({
  title: "Portfolio",
  projectId: "qg4c46wo",
  dataset: "production",
  plugins: [
    deskTool(),
    media(),
    contentGraphView({}),
    vercelDeployTool(),
  ],
  schema: {
    types: schemas,
  },
});