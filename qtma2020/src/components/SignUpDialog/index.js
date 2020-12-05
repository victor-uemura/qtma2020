import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './index.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField
} from '@material-ui/core';

const SignUpDialog = () => (
	<div>
		<SignUpButton />
	</div>
);

const INITIAL_STATE = {
	firstName: '',
	lastName: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	open: false,
	error: null
};

class SignUpButtonBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	onSubmit = (event) => {
		const { firstName, lastName, email, passwordOne } = this.state;

		// Add firebase auth + add user to db
		this.props.firebase
			.emailSignUp(email, passwordOne)
			.then((authUser) => {
				return this.props.firebase.addUser(firstName, lastName, email);
			})
			.then(() => {
				return this.props.firebase.doSendEmailVerification();
			})
			.then((authUser) => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				this.setState({ error });
			});

		event.preventDefault();
		this.handleClose();
		console.log(this.state);
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const {
			firstName,
			lastName,
			email,
			passwordOne,
			passwordTwo,
			error
		} = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			firstName === '' ||
			lastName === '';

		return (
			<div>
				<Button
					//variant='outlined'
					style={{
						color: '#FFFFFF',
						fontFamily: 'Recoleta Alt',
						fontWeight: '400',
						fontSize: '14px'
					}}
					//color='#FFFFFF'
					onClick={this.handleOpen}
				>
					Get Started
				</Button>

				<Dialog
					maxWidth={false}
					onClose={this.handleClose}
					open={this.state.open}
				>
					<div className='container'>
						<div className='row'>
							<div className='columnSml'>
								<img className='dialogImg' src='7EB9B2.png' />
							</div>
							<div className='columnLrg'>
								<DialogTitle style={{ padding: '0rem 2rem' }}>
									Create an account
								</DialogTitle>
								<DialogContent style={{ padding: '0rem 2rem' }}>
									<DialogContentText
										style={{ paddingBottom: '1rem' }}
									>
										Fill in the information below to get
										started today!
									</DialogContentText>
									<form onSubmit={this.onSubmit}>
										<div className='row'>
											<TextField
												fullWidth
												style={{ marginRight: '1rem' }}
												variant='outlined'
												InputLabelProps={{
													shrink: true
												}}
												required
												name='firstName'
												label='First Name'
												placeholder='ex. John'
												onChange={this.onChange}
											/>
											<TextField
												fullWidth
												style={{ marginLeft: '1rem' }}
												variant='outlined'
												InputLabelProps={{
													shrink: true
												}}
												required
												name='lastName'
												label='Last Name'
												placeholder='Smith'
												onChange={this.onChange}
											/>
										</div>
										<TextField
											fullWidth
											variant='outlined'
											InputLabelProps={{
												shrink: true
											}}
											required
											name='email'
											label='Email Address'
											type='email'
											placeholder='john.smith@email.com'
											onChange={this.onChange}
										/>
										<TextField
											fullWidth
											variant='outlined'
											InputLabelProps={{
												shrink: true
											}}
											required
											name='passwordOne'
											label='Password'
											type='password'
											placeholder='Type password here'
											onChange={this.onChange}
										/>
										<TextField
											fullWidth
											variant='outlined'
											InputLabelProps={{
												shrink: true
											}}
											required
											name='passwordTwo'
											label='Confirm password'
											type='password'
											placeholder='Retype password'
											onChange={this.onChange}
										/>

										<div className='separator'>or</div>
										<div className='row'>
											<Button
												startIcon={<FcGoogle />}
												fullWidth
												variant='outlined'
												style={{
													borderColor: '#BDBDBD',
													color: '#777777'
												}}
											>
												Continue with Google
											</Button>
										</div>
										<div className='row'>
											<Button
												startIcon={
													<FaFacebook
														style={{
															color: '#1877f2'
														}}
													/>
												}
												fullWidth
												variant='outlined'
												style={{
													borderColor: '#BDBDBD',
													color: '#777777'
												}}
											>
												Continue with Facebook
											</Button>
										</div>
										<div className='row'>
											<p>
												Already have an account?{' '}
												<a href=''>Log in</a>
											</p>
											<Button
												disabled={isInvalid}
												type='submit'
												variant='contained'
												style={{
													backgroundColor: '#437F55',
													borderRadius: '50px',
													color: '#FFFFFF'
												}}
											>
												Sign Up
											</Button>
											{error && <p>{error.message}</p>}
										</div>
									</form>
								</DialogContent>
							</div>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

const SignUpButton = compose(withRouter, withFirebase)(SignUpButtonBase);

export default SignUpDialog;

export { SignUpButton };
