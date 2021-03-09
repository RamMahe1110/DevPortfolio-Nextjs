import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog(props) {
  const realData = props.data.map((blog) => matter(blog))
  const blogsList = realData.map((listItem) => listItem.data)

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="heading heading-primary heading-primary-dec">
            <span className="heading-primary__text">Blog</span>
          </h1>
          <div className="hero__info">
            <p className="text-primary hero__text-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              libero ea inventore explicabo similique eligendi aliquam, aut
              laudantium
            </p>
          </div>
        </div>
      </section>
      <section className="main-blogs">
        <div className="container">
          <div className="main-blogs__list">
            {blogsList.map((blog, id) => (
              <Link key={id} href={`/blog/${blog.slug}`}>
                <div className="main-blogs__item">
                  <div className="main-blogs__item-img-cont">
                    <img
                      src="/jpeg/project-thumbnail-demo.jpeg"
                      alt="blog-thumbnail"
                      className="main-blogs__item-img"
                    />
                  </div>
                  <div className="main-blogs__item-content">
                    <h3 className="main-blogs__item-title">{blog.title}</h3>
                    <div className="main-blogs__item-author-info">
                      <div className="main-blogs__item-author-img-cont">
                        <img
                          src="/png/author-face-demo.png"
                          className="main-blogs__item-author-img"
                          alt=""
                        />
                      </div>
                      <h5 className="main-blogs__item-author-name">
                        {blog.author}
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="main-blogs__pagination">
            <button className="btn main-blogs__pag-btn btn--primary">
              Previous
            </button>
            <button className="btn main-blogs__pag-btn btn--theme">Next</button>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const siteData = await import(`../../config.json`)
  const fs = require('fs')

  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')

  const blogs = files.filter((fn) => fn.endsWith('.md'))

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    })

    return rawContent
  })

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  }
}
