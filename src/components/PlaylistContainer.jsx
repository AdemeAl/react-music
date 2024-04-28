import React from 'react'
import MusicItem from './MusicItem'

function PlaylistContainer() {
  return (
    <div>
        <div className='flex-col p-4'>
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
        </div>
    </div>
  )
}

export default PlaylistContainer