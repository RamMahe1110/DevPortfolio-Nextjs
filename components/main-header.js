import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="header">
      <div className="header__content">
        <Link href="/">
          <div className="header__logo-container">
            <img src="/svg/logo.svg" className="header__logo" />
          </div>
        </Link>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link href="/">
                <a className="header__link">Home </a>
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link href="/">
                <a className="header__link">About </a>
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link href="#">
                <a className="header__link">Projects</a>
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link href="/blog">
                <a className="header__link">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <Link href="/">
              <li className="header__sm-menu-link">Home</li>
            </Link>
            <Link href="/">
              <li className="header__sm-menu-link">About</li>
            </Link>
            <Link href="/">
              <li className="header__sm-menu-link">Projects</li>
            </Link>
            <Link href="/blog">
              <li className="header__sm-menu-link header__sm-menu-link-last">Blog</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  )
}
