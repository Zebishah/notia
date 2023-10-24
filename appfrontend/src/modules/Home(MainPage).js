import { React, useState, useRef } from 'react'
import AddNote from './AddNotePanel'
import AllNotes from './ShowingAllNotes'
import Navbar from './Navbar'

const Home = (props) => {
  let { update_Note } = props

  return (
    <div className='flex flex-col xl:overflow-x-hidden overflow-x-hidden gap-y-5'>
      <Navbar />
      <AddNote update_Note={update_Note} />

    </div>
  )
}
export default Home
