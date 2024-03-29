import React, { createRef, useLayoutEffect } from 'react'

const src = 'https://utteranc.es/client.js'

const Utterances = React.memo(({ repo = 'iicdii/blog' }) => {
  const containerRef = createRef()

  useLayoutEffect(() => {
    const utterances = document.createElement('script')

    const attributes = {
      src,
      repo,
      'issue-term': 'title',
      label: 'utterances',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current.appendChild(utterances)
  }, [repo, containerRef])

  return <div ref={containerRef} />
})

Utterances.displayName = 'Utterances'

export default Utterances
