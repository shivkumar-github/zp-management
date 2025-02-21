import React from 'react'
import AnnouncementDetails from './AnnouncementDetails'
import TeacherDetails from './TeacherDetails'

function Teachers() {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [content, setContent] = React.useState('')
  const [error, setError] = React.useState('')

  const [subjects, setSubjects] = React.useState([{ subjectName: '', className: '' }])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add form submission handling logic here
  }

  const handleChangeConfirmPassword = (value) => {
    setConfirmPassword(value)
    if (password !== value) {
      setError('Passwords do not match')
    } else {
      setError('')
    }
  }

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects]
    updatedSubjects[index][field] = value
    setSubjects(updatedSubjects)
  }

  const handleDeleteSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index)
    setSubjects(updatedSubjects)
  }

  return (
    <>
      <form className='bg-[#F0F8FF] flex flex-col w-9/10 h-auto my-[20vh] mx-auto p-[30px] rounded-[3px]'>
        <h3>Add Teacher</h3>
        <label className='w-full mb-[10px] h-[20px]'>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'
        />
        <label className='w-full mb-[10px] h-[20px]'>Gmail:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'
        />
        <label className='w-full mb-[10px] h-[20px]'>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'
        />
        <label className='w-full mb-[10px] h-[20px]'>Confirm Password:</label>
        <input
          type="password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => handleChangeConfirmPassword(e.target.value)}
          className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'
        />
        <p className="error-msg">{error}</p>

        <div>
          <label>Subjects:</label>
          {subjects.map((subject, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <input
                type="text"
                name={`subjectName-${index}`}
                value={subject.subjectName}
                onChange={(e) => handleSubjectChange(index, 'subjectName', e.target.value)}
                placeholder="Subject Name"
                className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'
              />
              <input
                type="text"
                name={`className-${index}`}
                value={subject.className}
                onChange={(e) => handleSubjectChange(index, 'className', e.target.value)}
                placeholder="Class Name"
                className='w-full p-[10px] mb-[20px] h-[34px] rounded-[4px] border-2 border-blue-300'
              />
              <button
                type="button"
                onClick={() => handleDeleteSubject(index)}
                style={{ marginLeft: '5px', color: 'red' }}
                className='cursor-pointer font-normal rounded-[3px] text-white bg-[#007FFF] my-[30px] mx-[5px] mb-0 h-[30px] w-[90px]'
              >
                ❌
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setSubjects([...subjects, { subjectName: '', className: '' }])}
            style={{ marginTop: '10px' }}
              className='cursor-pointer font-normal rounded-[3px] text-white bg-[#007FFF] my-[30px] mx-[5px] mb-0 h-[30px] w-[90px]'
          >
            Add Subject
          </button>
        </div>

        <button type="submit" onClick={handleSubmit} className='cursor-pointer font-[400] rounded-[3px] text-white bg-[#007FFF] mt-[30px] mb-[0] mx-auto h-[36px] w-[90px]'>Add</button>
      </form>

      <div>
        <h2>Previous Announcements</h2>
        <TeacherDetails />
      </div>
    </>
  )
}

export default Teachers
