import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/';
import SelectedItem from './SelectedItem';

const SelectedItemList = ({items, onIncrement, onDecrement}) => {
    return  (
        <div className="tails-selected">
            <div className="tails-selected-title">SELECTED</div>
        {items.length ? items.map(item => 
            <SelectedItem
                key={item.id}
                item={item}
                onIncrement={() => onIncrement(item.id)}
                onDecrement={() => onDecrement(item.id)}
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
        onDecrement: (id) => dispatch(decrement(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemList);