import React from 'react'
import Header from './Header'
import Content from './Content'

function Container() {
  return (
    <div className='bg-red-600 w-4/5 h-full'>
        <Header/>
        <Content/>
    </div>
  )
}

export default Container