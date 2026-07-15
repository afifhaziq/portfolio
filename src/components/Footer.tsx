import { profile } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
