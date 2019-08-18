import React from 'react'

const Image = React.memo(({ src }) => <img className='projectImage' src={src} alt={''} />)

export default Image
