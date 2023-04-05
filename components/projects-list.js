import ProjectPreview from '../components/project-preview'
import { parseISO, format } from 'date-fns'

export default function ProjectsList({ projects }) {
  var previousDate = 0
  var currentYearProjects = []
  var projectsByYear = []
  
  projects.forEach((project, index) => {
    var currentDate = format(parseISO(project.date), 'yyyy')

    if (previousDate !== currentDate) {
      if (currentYearProjects.length > 0) {
        projectsByYear.push(
          <div className="projects-year" key={previousDate} data-year={previousDate}>
            <div className="projects-year-heading-container">
              <h2 className="projects-year-heading">{previousDate}</h2>
            </div>
            {currentYearProjects}
          </div>
        )
        currentYearProjects = []
      }
    }
    previousDate = currentDate

    currentYearProjects.push(
      <ProjectPreview
        key={project.slug}
        title={project.title}
        italicizeTitle={project.italicizeTitle}
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
      />
    )

    // if this is the last project, wrap projects from the current year in a container div
    if (index === projects.length - 1 && currentYearProjects.length > 0) {
      projectsByYear.push(
        <div className="projects-year" key={currentDate} data-year={previousDate}>
          <div className="projects-year-heading-container">
            <h2 className="projects-year-heading">{previousDate}</h2>
          </div>
          {currentYearProjects}
        </div>
      )
    }
  })

  return (
    <div className="projects-list">
      <header className="project-meta-header projects-list-header">
        <h2 className="project-meta-header-item project-meta-header-date">Date</h2>
        <h2 className="project-meta-header-item project-meta-header-title">Project</h2>
        <h2 className="project-meta-header-item project-meta-header-client">Client</h2>
        <h2 className="project-meta-header-item project-meta-header-categories">Type</h2>
        <h2 className="project-meta-header-item project-meta-header-collaborators">Collaborator</h2>
      </header>
      {projectsByYear}
    </div>
  )
}