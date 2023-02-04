const projectFields = `
  _id,
  title,
  italicizeTitle,
  "client": client->,
  "categories": categories[]->,
  urlLabel,
  url,
  "collaborators": collaborators[]->,
  date,
  credits,
  featuredImage,
  featuredFile,
  coverImage,
  coverFile,
  innerCoverImage,
  innerCoverFile,
  media,
  "slug": slug.current,
`

export const indexQuery = `
*[_type == "project"] | order(date desc, title desc) {
  _id,
  title,
  italicizeTitle,
  "client": client->,
  "categories": categories[]->,
  urlLabel,
  url,
  "collaborators": collaborators[]->,
  date,
  featuredImage,
  featuredFile,
  coverImage,
  coverFile,
  media,
  "slug": slug.current,
}`

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $slug][0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, title desc) [0...2] {
    content,
    ${projectFields}
  }
}`

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`

export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`
