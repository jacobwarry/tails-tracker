import { createStore } from 'redux'

const change_item = (state = {}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                count: state.count+1
            };
        case 'DECREMENT':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                count: state.count-1
            };
        default:
            return state;
    }
}

const items = (state = [], action) => {
    if (state.length) {
        const existingItem = state.filter((item) => item.id === action.id)[0];
        if (existingItem) {
            switch (action.type) {
                case 'ADD_ITEM':
                    if (existingItem.count === 99) {
                        return state;
                    }                     
                    action.type = 'INCREMENT';
                    break;
                case 'DECREMENT':
                    if (existingItem.count === 1) {
                        action.type = 'DELETE_ITEM';
                    }
                    break;
                case 'INCREMENT':
                    if (existingItem.count === 99) {
                        return state;
                    }               
                    break;         
                default:
                    break;
            }
        }
    }

    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, {
                id: action.id,
                title: action.title,
                image: action.image,
                count: 1}
            ];
        case 'DELETE_ITEM':
            return state.filter(({id}) => id !== action.id);
        case 'INCREMENT':
            return state.map(item => change_item(item, action)); 
        case 'DECREMENT':
            return state.map(item => change_item(item, action));
        default:
            return state;
    }
}

export default createStore(items);