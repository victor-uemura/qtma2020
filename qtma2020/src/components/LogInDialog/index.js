import React from 'react';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import './index.css';
import { SignInGoogle, SignInFacebook } from '../Login';

const LogInDialog = (props) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { handleSubmit, register, watch, errors } = useForm();
	const onSubmit = (values) => console.log(values);

	return (
		<div>
			<button
				//variant='outlined'
				className='button-label'
				style={{
					color: props.fontColor
				}}
				//color='#FFFFFF'
				onClick={handleClickOpen}
			>
				Login
			</button>

			<Dialog maxWidth={false} onClose={handleClose} open={open}>
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
									Sign in to your account using your log-in
									credentials
								</DialogContentText>
								<form onSubmit={handleSubmit(onSubmit)}>
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
										inputRef={register}
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
										inputRef={register}
									/>

									<div className='separator'>or</div>
									<div className='dialogRow'>
										<SignInGoogle width='30vw' />
									</div>
									<div className='dialogRow'>
										<SignInFacebook width='30vw' />
									</div>
									<div className='dialogRow'>
										<p>
											Don't have an account?{' '}
											<a href=''>Sign Up</a>
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
};

export default LogInDialog;
