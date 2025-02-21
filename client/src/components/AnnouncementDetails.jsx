import React from 'react'

function AnnouncementDetails() {
  const announcement = {
    title: 'Announcement Title',
    content: 'Announcement Content',
    createdAt: '2021-09-01',
    author: 'Shivkumar'
  }

  const handleEdit = () => {
    // Implement edit functionality here
  }

  const handleDelete = () => {
    // Implement delete functionality here
  }

  return (
      < div className='bg-[#F0F8FF] my-[20px] mx-[auto] p-[10px]'>
        <h2>{announcement.title}</h2>
        <p>{announcement.content}</p>
        <p>{announcement.createdAt}</p>
        <p>{announcement.author}</p>
        <button onClick={()=>handleEdit} className='functionality-btn'>Edit</button>
        <button onClick={()=>handleDelete} className='functionality-btn'>Delete</button>
    </div>
  )
}

export default AnnouncementDetails