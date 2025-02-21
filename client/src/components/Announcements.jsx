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
		  <form action="" className='bg-[#F0F8FF] flex flex-col w-9/10 h-auto my-[20vh] mx-auto p-[30px] rounded-[3px]'>
			  <p>Add Announcement</p>
			  <label className='w-full mb-[10px] h-[20px]'> Title:</label>
			  <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'/>
			  <label className='w-full mb-[10px] h-[20px]'>Content:</label>
			  <input type="text" name="content" value={content} onChange={(e)=>setContent(e.target.value)} className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'/>
			  <button type="submit" onClick={handleSubmit} className='cursor-pointer font-[400] rounded-[3px] text-white bg-[#007FFF] mt-[30px] mb-[0] mx-auto h-[36px] w-[90px]'>Add</button>
		  </form>
		  <div>
			  <h2>Previous Announcements</h2>
			  <AnnouncementDetails/>
		  </div>
	  </>
  )
}

export default Announcement