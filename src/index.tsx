import React, {
  forwardRef,
  ReactNode,
  FunctionComponent,
  createContext,
  HTMLAttributes,
  DetailedHTMLProps,
  createElement,
} from 'react'
import PropTypes from 'prop-types'

export interface DocumentOutlineSectionContext {
  level: number
  title: ReactNode
}

export interface DocumentOutlineSectionProps {
  title: ReactNode
  children: ReactNode
}

const HeadingContext = createContext<DocumentOutlineSectionContext>({
  level: 0,
  title: '',
})

export const H = forwardRef<HTMLHeadingElement>((props, ref) => (
  <HeadingContext.Consumer>
    {({ title, level }) => {
      if (!level || isNaN(level)) {
        return null
      }

      const tagProps: DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
      > = { ref, children: title, ...props }

      return createElement(`h${Math.min(level, 6)}`, tagProps)
    }}
  </HeadingContext.Consumer>
))

H.displayName = 'DocumentOutlineSectionH'

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

DocumentOutlineSection.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
}
