import MarkdownParser from "react-markdown"


export function Markdown({children, className}: {children: string, className?: string}) {
  return (<div className={className}>
    <MarkdownParser components={{
      h1: "p",
      h2: "p",
      h3: "p",
      h4: "p",
      h5: "p",
      h6: "p",
      ul: ({children}) => <ul className="list-disc pl-4 text-lg">{children}</ul>
    }}>{children}</MarkdownParser>
  </div>)
}

