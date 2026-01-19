import React from 'react'


const AboutLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='card'>
      <h1>joseplorenzini.com</h1>
        {children}
    </div>
  )
}

export default AboutLayout