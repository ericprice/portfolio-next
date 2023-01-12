import ProjectPreview from '../components/project-preview'
import { parseISO, format } from 'date-fns'

export default function ProjectsList({ projects }) {
  var previousDate = 0
  return (
    <div className="projects-list">
      <header className="projects-list-header">
        <h2 className="projects-list-header-item projects-list-header-date">Date</h2>
        <h2 className="projects-list-header-item projects-list-header-title">Project</h2>
        <h2 className="projects-list-header-item projects-list-header-client">Client</h2>
        <h2 className="projects-list-header-item projects-list-header-categories">Type</h2>
        <h2 className="projects-list-header-item projects-list-header-collaborators">Collaborator</h2>
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
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            client={project.client}
            categories={project.categories}
            collaborators={project.collaborators}
            startOfYear={startOfYear}
          />
        )
      })}
    </div>
  )
}
