import React from 'react'
import PropTypes from 'prop-types'

const HeadingContext = React.createContext({
  level: 0,
  title: ''
})

export const H = React.forwardRef((props, ref) => (
  <HeadingContext.Consumer>
    {({ title, level }) => {
      if (!level || isNaN(level)) {
        return null
      }

      const HTag = `h${Math.min(level, 6)}`
      return (
        <HTag ref={ref} {...props}>
          {title}
        </HTag>
      )
    }}
  </HeadingContext.Consumer>
))

export const DocumentOutlineSection = ({ title, children }) => (
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
  title: PropTypes.node,
  children: PropTypes.node
}
