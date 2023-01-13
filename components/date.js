import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return <time className="project-meta-header-item project-meta-header-date" dateTime={dateString}><span className="project-meta-header-date-inner">{format(date, 'yyyy')}</span></time>
}
