import marthas from '../../assets/img/marthas.jpg';
import lung from '../../assets/img/lung.jpg';
import kidney from '../../assets/img/kidney.jpg';
import amhs from '../../assets/img/amhs.png';
import cnib from '../../assets/img/cnib.png';
import foodbank from '../../assets/img/foodbank.png';
import bfo from '../../assets/img/bfo.png';
import cfc from '../../assets/img/cfc.png';
import neads from '../../assets/img/neads.png';
import dimes from '../../assets/img/dimes.png';
import {
	ADD_TO_CART,
	REMOVE_ITEM,
	SUB_QUANTITY,
	ADD_QUANTITY,
	ADD_SHIPPING
} from '../actions/action-types/cart-actions';

const initState = {
	items: [
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
		},
		{
			title: 'Addiction and Mental Health Services ',
			img: amhs,
			location: 'Kingston, Ontario',
			desc:
				'A community where people have wellness, acceptance and a sense of belonging.'
		},
		{
			title: 'CNIB Foundation',
			img: cnib,
			location: 'Kingston, Ontario',
			desc:
				'Assisting Canadians who are blind or living with vision loss.'
		},
		{
			title: 'Kingston Foodbank',
			img: foodbank,
			location: 'Kingston, Ontario',
			desc:
				'Monetary and food donations help us to nourish local families by providing groceries.'
		},
		{
			title: 'Bereaved Families of Ontario - Rotaty Club of Kingston',
			img: bfo,
			location: 'Kingston, Ontario',
			desc:
				'We are the bereaved helping the bereaved learn to live with grief. '
		},
		{
			title: 'Cystic Fibrosis Canada',
			img: cfc,
			location: 'Kingston, Ontario',
			desc:
				'Committed to improving and lengthening the lives of people living with cystic fibrosis.'
		},
		{
			title: 'National Education Association of Disabled Students',
			img: neads,
			location: 'Kingston, Ontario',
			desc:
				'Access to education and employment for students with disabilities.'
		},
		{
			title: 'March of Dimes',
			img: dimes,
			location: 'Kingston, Ontario',
			desc:
				'Maximize the independence, personal empowerment and community participation of people with physical disabilities.'
		}
	],
	addedItems: [],
	total: 0
};
const cartReducer = (state = initState, action) => {
	//INSIDE HOME COMPONENT
	if (action.type === ADD_TO_CART) {
		let addedItem = state.items.find((item) => item.title === action.title);
		//check if the action id exists in the addedItems
		let existed_item = state.addedItems.find(
			(item) => action.title === item.title
		);
		if (existed_item) {
			let itemToRemove = state.addedItems.find(
				(item) => action.title === item.title
			);
			let new_items = state.addedItems.filter(
				(item) => action.title !== item.title
			);

			//calculating the total
			let newTotal = state.total - itemToRemove.amount;
			state.addedItems = new_items;
			state.total = newTotal;
			addedItem.amount = action.amount;
			return {
				...state,
				addedItems: [...state.addedItems, addedItem],
				total: state.total + addedItem.amount
			};
		} else {
			addedItem.amount = action.amount;
			//calculating the total
			let newTotal = state.total + addedItem.amount;

			return {
				...state,
				addedItems: [...state.addedItems, addedItem],
				total: newTotal
			};
		}
	}
	if (action.type === REMOVE_ITEM) {
		let itemToRemove = state.addedItems.find(
			(item) => action.title === item.title
		);
		let new_items = state.addedItems.filter(
			(item) => action.title !== item.title
		);

		//calculating the total
		let newTotal = state.total - itemToRemove.amount;
		return {
			...state,
			addedItems: new_items,
			total: newTotal
		};
	}
	//INSIDE CART COMPONENT
	if (action.type === ADD_QUANTITY) {
		let addedItem = state.items.find((item) => item.id === action.id);
		addedItem.quantity += 1;
		let newTotal = state.total + addedItem.price;
		return {
			...state,
			total: newTotal
		};
	}
	if (action.type === SUB_QUANTITY) {
		let addedItem = state.items.find((item) => item.id === action.id);
		//if the qt == 0 then it should be removed
		if (addedItem.quantity === 1) {
			let new_items = state.addedItems.filter(
				(item) => item.id !== action.id
			);
			let newTotal = state.total - addedItem.price;
			return {
				...state,
				addedItems: new_items,
				total: newTotal
			};
		} else {
			addedItem.quantity -= 1;
			let newTotal = state.total - addedItem.price;
			return {
				...state,
				total: newTotal
			};
		}
	}

	if (action.type === ADD_SHIPPING) {
		return {
			...state,
			total: state.total + 6
		};
	}

	if (action.type === 'SUB_SHIPPING') {
		return {
			...state,
			total: state.total - 6
		};
	} else {
		return state;
	}
};

export default cartReducer;
