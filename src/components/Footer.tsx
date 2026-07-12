import { profile } from '../data/profile'
import GradientWrapper from './GradientWrapper'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <GradientWrapper variant="colorful" direction="up" height={280} />
      <div className="container footer-inner">
        <span>© {year} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
