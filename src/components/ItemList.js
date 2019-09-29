import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import Item from './Item';

const ItemList = ({ items, onAddItem }) => {
    return  (
        <div className="category-items">
            {items.map(item => 
                <Item
                    key={item.id}
                    {...item}
                    onAddItem={() => onAddItem(item)}
                />
            )}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (item) => dispatch(addItem(item))
    };
};

export default connect(null, mapDispatchToProps)(ItemList);