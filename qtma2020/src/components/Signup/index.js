import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { Button, TextField, MenuItem, Grid } from '@material-ui/core';

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

const SignupPage = () => (
	<div>
		<h1>Welcome! Let's get you signed up.</h1>
		<SignupForm />
	</div>
);

const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	birthDate: new Date(),
	location: '',
	education: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
	locations: ['Kingston, ON', 'Toronto, ON', 'Ottawa, ON', 'Vancouver, BC'],
	educations: ['High School Student', 'University Student', 'Other']
};

class SignupFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const {
			firstName,
			lastName,
			email,
			birthDate,
			location,
			education,
			passwordOne
		} = this.state;

		// Add firebase auth + add user to db
		this.props.firebase
			.emailSignUp(email, passwordOne)
			.then((authUser) => {
				this.props.firebase.addUser(
					firstName,
					lastName,
					email,
					birthDate,
					location,
					education,
					passwordOne
				);
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				this.setState({ error });
			});

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onDateChange = (date) => {
		this.setState({
			birthDate: date
		});
	};

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			location,
			education,
			error
		} = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '' ||
			location === '' ||
			education === '';

		return (
			<form onSubmit={this.onSubmit}>
				<TextField
					style={{ width: '11em' }}
					required
					name='firstName'
					label='First Name'
					onChange={this.onChange}
				/>
				<br />
				<TextField
					style={{ width: '11em' }}
					required
					name='lastName'
					label='Last Name'
					onChange={this.onChange}
				/>
				<br />
				<TextField
					style={{ width: '11em' }}
					required
					name='email'
					label='Email Address'
					onChange={this.onChange}
					type='email'
				/>
				<br />
				<TextField
					defaultValue=''
					style={{ width: '11em' }}
					required
					name='location'
					select
					label='Location'
					onChange={this.onChange}
				>
					{this.state.locations.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
				<br />
				<TextField
					defaultValue=''
					style={{ width: '11em' }}
					name='education'
					required
					select
					label='Education'
					onChange={this.onChange}
				>
					{this.state.educations.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
				<br />
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Grid container justify='space-around'>
						<KeyboardDatePicker
							style={{ width: '11em' }}
							required
							disableToolbar
							variant='inline'
							format='MM/dd/yyyy'
							margin='normal'
							name='birthDate'
							label='Date of Birth'
							value={this.state.birthDate}
							onChange={this.onDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date'
							}}
						/>
					</Grid>
				</MuiPickersUtilsProvider>
				<br />
				<TextField
					required
					name='passwordOne'
					label='Password'
					type='password'
					onChange={this.onChange}
				/>
				<br />
				<TextField
					required
					name='passwordTwo'
					label='Confirm password'
					type='password'
					onChange={this.onChange}
				/>
				<br />
				<Button disabled={isInvalid} type='submit'>
					Sign Up
				</Button>
				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

const SignupForm = compose(withRouter, withFirebase)(SignupFormBase);

export default SignupPage;

export { SignupForm };
