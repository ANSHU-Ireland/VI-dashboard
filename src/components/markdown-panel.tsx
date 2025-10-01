import ReactMarkdown from "react-markdown";

interface MarkdownPanelProps {
  children: string;
  className?: string;
}

export function MarkdownPanel({ children, className = "" }: MarkdownPanelProps) {
  return (
    <div className={`prose prose-slate max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold font-mono mb-8 text-balance">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold font-mono mt-12 mb-6 text-balance">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold font-mono mt-8 mb-4">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-lg leading-relaxed mb-6 text-balance">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6 ml-6 list-disc">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="text-lg leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-cobalt-600 pl-6 italic text-slate bg-muted/30 py-4 rounded-r-xl my-6">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-muted px-2 py-1 rounded font-mono text-sm">{children}</code>
          ),
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-xl overflow-x-auto font-mono text-sm my-6 border border-border">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-cobalt-600 hover:underline focus-visible" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-ink">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate">{children}</em>
          ),
          hr: () => (
            <hr className="border-t border-border my-12" />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}