const projectFields = `
  _id,
  name,
  title,
  "client": client->,
  "categories": categories[]->,
  urlLabel,
  url,
  "collaborators": collaborators[]->,
  date,
  coverImage,
  media,
  "slug": slug.current,
`

export const indexQuery = `
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "moreprojects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
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
