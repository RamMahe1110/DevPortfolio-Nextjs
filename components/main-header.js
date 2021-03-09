import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <img src="/svg/logo.svg" className="header__logo" />
        </div>
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
    </header>
  )
}
