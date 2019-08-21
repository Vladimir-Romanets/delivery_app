import sortBy from "lodash/sortBy";
import size from "lodash/size";
import types from '../const';

const initialState = {
	tableHeader: null,
	tableEntry: null,
	editingItem: null,
	services: null,
	checkAllItems: false,
	checkedList: {},
	modalInfo: {},
	currentServ: 0 // service in master table
};

const masterTable = (state = initialState, action) => {
	switch (action.type){
		case types.SET_MASTER_TABLE_HEADER:
			return {
				...state,
				tableHeader: action.tableHeader
			}
		case types.MT_SERVICES_GET_SUCCESS:
			return { ...state, services: sortBy(action.data, 'id') };
		case types.MASTER_TABLE_GET_ENTRY_SUCCESS:
			return {
				...state,
				checkedList: {},
				checkAllItems: false,
				tableEntry: action.data
			}
		case types.MT_EDITABLE_ENTRY_RESPONSE:
			return {
				...state,
				editingItem: action.data
			}
		case types.MT_EDITABLE_ENTRY_CLOSE:
			return {
				...state,
				editingItem: null
			}
		case types.MT_SELECT_ITEM: {
			const { payload = {} } = action;
			const key = Object.keys(payload)[0];
			const newList = {
				...state.checkedList,
				...payload,
			}
			if (!payload[key]) delete newList[key];

			const checkAllItems = size(newList) === state.tableEntry.length;
			return {
				...state,
				checkedList: newList,
				checkAllItems,
			}
		}
		case types.MT_SELECT_ALL_ITEM: {
			const newList = action.payload ?
				state.tableEntry.reduce((prev, { delivery_id }) => ({
						...prev,
						[delivery_id]: true,
					}), {}) : {};
			return {
				...state,
				checkedList: newList,
				checkAllItems: action.payload,
			}
		}
		case types.MT_CHANGE_SERVICE: {
			const { currentServ = 0 } = action.payload;
			return {
				...state,
				currentServ
			}
		}
		case types.GROUP_PAYMENT_CHANGE_SUCCESS: {
			const { payment } = action.payload;
			const checked = Object.keys(state.checkedList);
			const tableEntry = state.tableEntry.map(el => {
				const id = `${el.delivery_id}`;
				if (~checked.indexOf(id)) return { ...el, ...payment };
				return el;
			});

			return {
				...state,
				tableEntry,
			}
		}
		case types.GROUP_COURIER_CHANGE_SUCCESS: {
			const { changedList, fio } = action.payload;
			const tableEntry = state.tableEntry.map(el => {
				const id = `${el.delivery_id}`;
				if (~changedList.indexOf(id)) return { ...el, courier: fio };
				return el;
			});

			return {
				...state,
				tableEntry,
			}
		}
		case types.GROUP_DATE_CHANGE_SUCCESS: {
			const { changedList, dateRecive } = action.payload;
			const tableEntry = state.tableEntry.map(el => {
				const id = `${el.delivery_id}`;
				if (~changedList.indexOf(id)) return { ...el, dateRecive };
				return el;
			});

			return {
				...state,
				tableEntry,
			}
		}
		case types.MT_MODALINFO_SET: {
			const { suggestion, entity } = action.payload;
			return {
				...state,
				modalInfo: {
					...state.modalInfo,
					[entity]: suggestion,
				}
			}
		}
		case types.MT_MODALINFO_CLEAR: {
			const { entity } = action.payload;
			const newModalInfo = {
				...state.modalInfo,
				[entity]: {...state.modalInfo[entity]},
			};
			delete newModalInfo[entity];

			return {
				...state,
				modalInfo: newModalInfo,
			}
		}
		case types.MASTER_TABLE_RESET:
			return initialState
		default:
			return state;
	}
};

export default masterTable;