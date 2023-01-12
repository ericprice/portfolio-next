import ProjectPreview from '../components/project-preview'

export default function ProjectsList({ projects }) {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectPreview
          key={project.slug}
          title={project.title}
          coverImage={project.coverImage}
          date={project.date}
          slug={project.slug}
        />
      ))}
    </div>
  )
}
