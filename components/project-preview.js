import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function ProjectPreview({
  title,
  coverImage,
  date,
  slug,
  client,
  categories,
  collaborators
}) {
  return (
    <div className="projects-list-item">
      <Link href={`/projects/${slug}`}>
        <div class="projects-list-item-thumbnail">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </div>
        <h3 class="projects-list-item-title">
          {title}
        </h3>
        <Date dateString={date} />
      </Link>
    </div>
  )
}
