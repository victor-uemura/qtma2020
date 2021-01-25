import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Navigation from '../NavBar';
import logoBlack from '../../assets/img/logo-black.svg';
import OrgCard from '../OrgCard';
import marthas from '../../assets/img/marthas.jpg';
import lung from '../../assets/img/lung.jpg';
import kidney from '../../assets/img/kidney.jpg';
const stripePromise = loadStripe(
	'pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0'
);
function Donate() {
	const orgs = [
		{
			title: "Martha's Table",
			img: marthas,
			location: 'Kingston, Ontario',
			desc:
				'Help people in need have a nutritious meal and find community.'
		},
		{
			title: 'The Kidney Foundation of Canada ',
			img: kidney,
			location: 'Kingston, Ontario',
			desc:
				'Fund research and potential breakthroughs that will change lives.'
		},
		{
			title: 'Lung Health Foundation',
			img: lung,
			location: 'Kingston, Ontario',
			desc:
				'Dedicated to ending gaps in the prevention, diagnosis, and care of lung disease in Canada.'
		}
	];

	const renderOrgCards = () => {
		return orgs.map((org, i) => {
			return (
				<OrgCard
					title={org.title}
					img={org.img}
					location={org.location}
					desc={org.desc}
					key={i}
				/>
			);
		});
	};

	return (
		<div>
			<Navigation
				logo={logoBlack}
				fontColor='#000'
				background='#fff'
				signUpColor='#fff'
				signUpBackground='#437F55'
			/>
			{renderOrgCards()}
		</div>
	);
}
export default Donate;
