import React, {
  forwardRef,
  ReactNode,
  FunctionComponent,
  createContext,
  HTMLAttributes,
  DetailedHTMLProps,
  createElement,
} from 'react'

const HeadingContext = createContext<{ level: number; title: ReactNode }>({
  level: 0,
  title: '',
})

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export const H = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <HeadingContext.Consumer>
    {({ title, level }) => {
      if (!level || isNaN(level)) {
        return null
      }

      const tagProps: HeadingProps = { ref, children: title, ...props }

      return createElement(`h${Math.min(level, 6)}`, tagProps)
    }}
  </HeadingContext.Consumer>
))

H.displayName = 'DocumentOutlineSectionH'

export interface DocumentOutlineSectionProps {
  title: ReactNode
}

export const DocumentOutlineSection: FunctionComponent<
  DocumentOutlineSectionProps
> = ({ title, children }) => (
  <HeadingContext.Consumer>
    {headingContext => (
      <HeadingContext.Provider
        value={{ title, level: headingContext.level + 1 }}
      >
        {children || null}
      </HeadingContext.Provider>
    )}
  </HeadingContext.Consumer>
)
