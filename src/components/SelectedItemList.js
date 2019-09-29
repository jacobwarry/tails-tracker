import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, deleteItem } from '../actions/';
import SelectedItem from './SelectedItem';

const SelectedItemList = ({items, onIncrement, onDecrement, onDeleteItem}) => {
    return  (
        <div className="tails-selected">
            <div className="big-title">Selected</div>
        {items.length ? items.map(item => 
            <SelectedItem
                key={item.id}
                item={item}
                onIncrement={() => onIncrement(item.id)}
                onDecrement={() => onDecrement(item.id)}
                onDeleteItem={() => onDeleteItem(item.id)}
            />    
        ) : <div>No items selected</div>}
        </div>
    )  
}

const mapStateToProps = (state) => {
    return {
        items: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (id) => dispatch(increment(id)),
        onDecrement: (id) => dispatch(decrement(id)),
        onDeleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemList);