import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Link from 'next/link'

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  )
}

const Blog = ({ content, data }) => {
  const frontmatter = data

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="heading heading-primary heading-primary-dec heading-primary-cent">
            <span className="heading-primary__text">{frontmatter.title}</span>
          </h1>
        </div>
      </section>

      <section className="main-blog">
        <div className="container main-blog__container">
          <div className="main-blog__content">
            <ReactMarkdown
              escapeHtml={true}
              source={content}
              renderers={{ code: CodeBlock }}
            />
          </div>
          <div className="main-blog__pag">
            <Link href="/blog">
              <a className="btn btn--primary">Go Back</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

Blog.getInitialProps = async (context) => {
  const { blog } = context.query

  const content = await import(`../../content/${blog}.md`)
  const data = matter(content.default)

  return { ...data }
}

export default Blog
