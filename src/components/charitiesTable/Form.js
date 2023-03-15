import React, { useState } from "react"


const Form = ({ userData = {}, postUser, updateUser }) => {
	const [user, setUser] = useState({
		name: userData.name ?? "",
		username: userData.username ?? "",
		email: userData.email ?? "",
		help: userData.help ?? "",
		// companiesId: userData.companiesId ?? "1",
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
				type='text'
				name='help'
				value={user.help}
				placeholder='Help Needed'				
				onChange={e => handleValue(e)}
			/>			
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form>
	)
}

export default Form
