import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcements'
import Teachers from '../components/Teachers'
import Login from '../components/Login'

function Home() {
	return (
		<>
			<Navbar />
			<Login />
			<Announcement />
			<Teachers	/>
		</>
	)
}

export default Home