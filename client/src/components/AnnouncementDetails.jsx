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
    <>
      <div style={{ backgroundColor: '#F0F8FF', margin:'20px auto', padding:'10px'}}>
        <h2>{announcement.title}</h2>
        <p>{announcement.content}</p>
        <p>{announcement.createdAt}</p>
        <p>{announcement.author}</p>
        <button onClick={()=>handleEdit} className='functionality-btn'>Edit</button>
        <button onClick={()=>handleDelete} className='functionality-btn'>Delete</button>
      </div>
    </>
  )
}

export default AnnouncementDetails