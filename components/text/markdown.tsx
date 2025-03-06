import MarkdownParser from "react-markdown"
import Link from "next/link"

const Paragraph = ({children, ...props}: React.ComponentPropsWithRef<"p">) => (
  <p className="mb-4 text-lg" {...props}>{children}</p>
)


export function Markdown({children, className}: {children: string, className?: string}) {
  return (<div className={className}>
    <MarkdownParser components={{
      h1: Paragraph,
      h2: Paragraph,
      h3: Paragraph,
      h4: Paragraph,
      h5: Paragraph,
      h6: Paragraph,
      ul: ({children}) => <ul className="list-disc pl-4 text-lg">{children}</ul>,
      ol: ({children}) => <ol className="list-decimal pl-6 text-lg my-4">{children}</ol>,
      li: ({children}) => <li className="mb-1">{children}</li>,
      a: ({href, children}) => {
        if(href?.startsWith('http')) {
          return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        }
        return <Link href={href ?? "/"}>{children}</Link>
      },
      blockquote: ({children}) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {children}
        </blockquote>
      ),
    }}>{children}</MarkdownParser>
  </div>)
}

