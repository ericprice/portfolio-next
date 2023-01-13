export default function Container({ children, pageName }) {
  return <div className="site-container" id={pageName}>{children}</div>
}
