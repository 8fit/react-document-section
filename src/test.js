import React from 'react'
import ReactDOM from 'react-dom'
import DocumentOutlineSection, { H } from './'

describe('H', () => {
  it('renders without crashing', () => {
    let err
    const div = document.createElement('div')
    try {
      ReactDOM.render(<H />, div)
    } catch (error) {
      err = error
    }
    expect(err).toBeUndefined()
    expect(div.children).toHaveLength(0)
  })
})

describe('DocumentOutlineSection', () => {
  it('Renders an H1 on the highest level', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <DocumentOutlineSection title='Main'>
        <H />
      </DocumentOutlineSection>
    ), div)
    expect(div.children).toHaveLength(1)
    expect(div.children[0]).toEqual(expect.objectContaining({
      textContent: 'Main',
      nodeName: 'H1'
    }))
  })

  it('Correctly assigns different heading levels based on nesting', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <DocumentOutlineSection title='1'>
        <H />
        <DocumentOutlineSection title='1.1'>
          <H />
          <DocumentOutlineSection title='1.1.1'>
            <H />
          </DocumentOutlineSection>
        </DocumentOutlineSection>
        <DocumentOutlineSection title='1.2'>
          <H />
        </DocumentOutlineSection>
        <div>
          <DocumentOutlineSection title='1.3'>
            <H />
            <DocumentOutlineSection title='1.3.1'>
              <H />
              <DocumentOutlineSection title='1.3.1.1'>
                <H />
              </DocumentOutlineSection>
            </DocumentOutlineSection>
          </DocumentOutlineSection>
        </div>
      </DocumentOutlineSection>
    ), div)
    expect(div.children).toHaveLength(5)
    expect(div.children).toEqual(expect.objectContaining({
      '0': expect.objectContaining({
        textContent: '1',
        nodeName: 'H1'
      }),
      '1': expect.objectContaining({
        textContent: '1.1',
        nodeName: 'H2'
      }),
      '2': expect.objectContaining({
        textContent: '1.1.1',
        nodeName: 'H3'
      }),
      '3': expect.objectContaining({
        textContent: '1.2',
        nodeName: 'H2'
      })
    }))
    expect(div.children[4].children).toHaveLength(3)
    expect(div.children[4].children).toEqual(
      expect.objectContaining({
        '0': expect.objectContaining({
          textContent: '1.3',
          nodeName: 'H2'
        }),
        '1': expect.objectContaining({
          textContent: '1.3.1',
          nodeName: 'H3'
        }),
        '2': expect.objectContaining({
          textContent: '1.3.1.1',
          nodeName: 'H4'
        })
      })
    )
  })
})
