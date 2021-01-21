import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const OrgCard = ({ title, img, location, desc }) => {
	const classes = useStyles();
	const [amnt, setAmnt] = useState(10);
	const handleChange = (event) => {
		setAmnt(event.target.value);
	};

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} component='img' src={img} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='h2'>
					{title}
				</Typography>
				<Typography
					variant='caption'
					color='textSecondary'
					component='p'
				>
					{location}
				</Typography>
				<Typography variant='body2' color='textPrimary' component='p'>
					{desc}
				</Typography>
			</CardContent>
			<CardActions>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={amnt}
					onChange={handleChange}
				>
					<MenuItem value={10}>$10</MenuItem>
					<MenuItem value={20}>$20</MenuItem>
					<MenuItem value={30}>$50</MenuItem>
				</Select>
				<Button size='small' color='primary' href='/donate'>
					Donate
				</Button>
			</CardActions>
		</Card>
	);
};

export default OrgCard;
