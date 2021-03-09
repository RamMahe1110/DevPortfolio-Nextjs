import Link from "next/link"

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Find Us</span>
            </h2>
            <div className="main-footer__social-cont">
              <Link href="/">
                <a>
                  <img
                    className="main-footer__icon"
                    src="/png/github-ico.png"
                    alt="icon"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img
                    className="main-footer__icon"
                    src="/png/linkedin-ico.png"
                    alt="icon"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img
                    className="main-footer__icon"
                    src="/png/twitter-ico.png"
                    alt="icon"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img
                    className="main-footer__icon"
                    src="/png/insta-ico.png"
                    alt="icon"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img
                    className="main-footer__icon"
                    src="/png/yt-ico.png"
                    alt="icon"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">John Doe</h4>
            <p className="main-footer__short-desc">
              John Doe is a web developer living in USA and his helping
              businesses to generate more revenue
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright 2021. Made in Earth
        </div>
      </div>
    </footer>
  )
}
