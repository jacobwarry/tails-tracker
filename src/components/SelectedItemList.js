import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/';
import SelectedItem from './SelectedItem';

const SelectedItemList = ({items, onDeleteItem}) => {
    return  (
        <div className="tails-selected">
            <div className="big-title">Selected</div>
        {items.length ? items.map(item => 
            <SelectedItem
                key={item.id}
                item={item}
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
        onDeleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItemList);