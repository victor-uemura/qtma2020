import React, { Component } from 'react';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField
} from '@material-ui/core';
import { withFirebase } from '../Firebase';
import './index.css';
import { SignInGoogle, SignInFacebook } from '../Login';
import * as ROUTES from '../../constants/routes';
import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';

const LogInDialog = (props) => (
	<div>
		<LogInButton fontColor={props.fontColor} />
	</div>
);

const INITIAL_STATE = {
	email: '',
	passwordOne: '',
	open: false
};

class LogInButtonBase extends Component {
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
		const { email, passwordOne } = this.state;
		// Add firebase auth + add user to db
		this.props.firebase
			.emailSignIn(email, passwordOne)
			.then((authUser) => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.LANDING);
			})
			.catch((error) => {
				this.setState({ error });
			});

		event.preventDefault();
		this.handleClose();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { email, passwordOne } = this.state;

		const isInvalid = passwordOne === '' || email === '';

		return (
			<div>
				<button
					//variant='outlined'
					className='button-label'
					style={{
						color: this.props.fontColor
					}}
					//color='#FFFFFF'
					onClick={this.handleOpen}
				>
					Log in
				</button>

				<Dialog
					maxWidth={false}
					onClose={this.handleClose}
					open={this.state.open}
				>
					<div className='container'>
						<div className='dialogdialogRow'>
							<div className='columnLrg'>
								<DialogTitle style={{ padding: '0rem 2rem' }}>
									Welcome Back!
								</DialogTitle>
								<DialogContent style={{ padding: '0rem 2rem' }}>
									<DialogContentText
										style={{ paddingBottom: '1rem' }}
									>
										Sign in to your account using your
										log-in credentials
									</DialogContentText>
									<form onSubmit={this.onSubmit}>
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

										<div className='separator'>or</div>
										<div className='dialogRow'>
											<SignInGoogle width='30vw' />
										</div>
										{/* <div className="dialogRow">
                      <SignInFacebook width="30vw" />
                    </div> */}
										<div className='dialogRow'>
											<p>
												Don't have an account?{' '}
												<a
													style={{ color: '#437F55' }}
													href=''
												>
													Sign Up
												</a>
											</p>
											<Button
												type='submit'
												variant='contained'
												style={{
													backgroundColor: '#437F55',
													borderRadius: '50px',
													color: '#FFFFFF'
												}}
											>
												Log In
											</Button>
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

const LogInButton = compose(withRouter, withFirebase)(LogInButtonBase);

export default LogInDialog;
