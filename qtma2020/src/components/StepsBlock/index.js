import React from 'react';
import './index.css';

function StepsBlock() {
	return (
		<div>
			<div className='containerg'>
				<div className='step-subtitle'>
					Amplify the impact of your donations
				</div>
				<div className='step-impact'>
					One donation with Voluntera can make a bigger impact than
					you think
				</div>

				<div className='grid2'>
					<img
						src='magnifying_glass.svg'
						alt='magnifying glass'
						className='center'
					></img>
					<img src='coins.svg' alt='coins' className='center'></img>
					<img src='leaf.svg' alt='leaf' className='center'></img>

					<div className='step-number'>STEP 1</div>
					<div className='step-number'>STEP 2</div>
					<div className='step-number'>STEP 3</div>

					<div className='step-title'>
						<b>Choose an Organization</b>
					</div>
					<div className='step-title'>
						<b>Donate money</b>
					</div>
					<div className='step-title'>
						<b>Amplify your impact</b>
					</div>

					<div className='step-explain'>
						Find an organization you want to support
					</div>
					<div className='step-explain'>
						Help fund your organization's cause with as little as $5
					</div>
					<div className='step-explain'>
						For every $5 donated, a local Kingston student will do 1
						hour of volunteer work
					</div>
				</div>
			</div>
		</div>
	);
}

// Import into another file by writing "import StepsBlock from '../StepsBlock';" at the top of the file,
//then declaring it in the return function as <StepsBlock></StepsBlock>

export default StepsBlock;
