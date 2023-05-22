import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Prof. Byoungcheon Lee</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team Project</Link>
          <Link href="/code/repos">Github </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
