import React, { useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Form = ({ userData = {}, postUser, updateUser }) => {
	const [user, setUser] = useState({
		name: userData.name ?? "",
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		hours: userData.hours ?? "",
		position: userData.position ?? "",
		education: userData.education ?? "",
		experience: userData.experience ?? "",
		interest: userData.interest ?? "",
		backgroundCheck: userData.backgroundCheck ?? "",
		references: userData.references ?? "",
		resume: userData.resume ?? "",		
		
	})

	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const submitUser = e => {
		e.preventDefault()

		if (userData.id) {
			updateUser(userData.id, user)
		} else {
			postUser(user)
		}
	}
	
	return (
		<form onSubmit={submitUser} className='row'>
			<Container>
			<Row>
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='number'
				name='phone'
				value={user.phone}
				placeholder='Phone'				
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='hours'
				value={user.hours}
				placeholder='Hours Avail'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='position'
				value={user.position}
				placeholder='Position'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='education'
				value={user.education}
				placeholder='Education'
				onChange={e => handleValue(e)}
			/>
			</Row>
			<Row>
			<input
				type='text'
				name='experience'
				value={user.experience}
				placeholder='Experience'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='interest'
				value={user.interest}
				placeholder='Interest'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='background'
				value={user.backgroundCheck}
				placeholder='Background Check'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='references'
				value={user.references}
				placeholder='References Avail'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='resume'
				value={user.resume}
				placeholder='Resume Avail'
				onChange={e => handleValue(e)}
			/>			
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
						
			/>
			</Row>
			</Container>
		</form>
	)
}

export default Form
