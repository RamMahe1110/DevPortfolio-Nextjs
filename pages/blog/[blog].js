import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Link from 'next/link'
import gfm from 'remark-gfm'

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
      <section className="main-blog">
        <div className="container main-blog__container">
          <h1 className="heading heading-primary main-blog__heading-primary">
            <span className="heading-primary__text">{frontmatter.title}</span>
          </h1>
          <div className="prose main-blog__article">
            <ReactMarkdown
              escapeHtml={false}
              source={content}
              renderers={{ code: CodeBlock }}
              plugins={[gfm]}
              className="line-break"
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
