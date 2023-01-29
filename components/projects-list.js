import ProjectPreview from '../components/project-preview'
import { parseISO, format } from 'date-fns'

export default function ProjectsList({ projects }) {
  var previousDate = 0
  return (
    <div className="projects-list">
      <header className="project-meta-header projects-list-header">
        <h2 className="project-meta-header-item project-meta-header-date">Date</h2>
        <h2 className="project-meta-header-item project-meta-header-title">Project</h2>
        <h2 className="project-meta-header-item project-meta-header-client">Client</h2>
        <h2 className="project-meta-header-item project-meta-header-categories">Type</h2>
        <h2 className="project-meta-header-item project-meta-header-collaborators">Collaborator</h2>
      </header>
      {projects.map((project) => {
        var currentDate = format(parseISO(project.date), 'yyyy')
        
        if (previousDate !== currentDate) {
          var startOfYear = true
        } else {
          var startOfYear = false
        }
        previousDate = currentDate
        
        return (
          <ProjectPreview
            title={project.title}
            featuredImage={project.featuredImage}
            featuredFile={project.featuredFile}
            coverImage={project.coverImage}
            coverFile={project.coverFile}
            media={project.media}
            date={project.date}
            slug={project.slug}
            client={project.client}
            categories={project.categories}
            collaborators={project.collaborators}
            url={project.url}
            urlLabel={project.urlLabel}
            startOfYear={startOfYear}
          />
        )
      })}
    </div>
  )
}
