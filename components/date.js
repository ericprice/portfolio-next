import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return <time className="project-preview-item project-preview-date" dateTime={dateString}><span className="project-preview-date-inner">{format(date, 'yyyy')}</span></time>
}
