import React from 'react'
import AnnouncementDetails from './AnnouncementDetails'

function Announcement() {

	const [title, setTitle] = React.useState('')
	const [content, setContent] = React.useState('')
	const [error, setError] = React.useState('')

	const handleSubmit = async (e) => {
		e.preventDefault();
	}


  return (
	  <>
		  <form action="">
			  <p>Add Announcement</p>
			  <label> Title:</label>
			  <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
			  <label>Content:</label>
			  <input type="text" name="content" value={content} onChange={(e)=>setContent(e.target.value)} />
			  <button type="submit" onClick={handleSubmit}>Add</button>
		  </form>
		  <div>
			  <h2>Previous Announcement</h2>
			  <AnnouncementDetails/>
		  </div>
	  </>
  )
}

export default Announcement