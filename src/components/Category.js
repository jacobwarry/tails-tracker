import React from 'react';
import ItemList from './ItemList'

class Category extends React.Component {
    constructor(props) {
        super(props)

        this.toggleItemList = this.toggleItemList.bind(this);
    }

    toggleItemList() {
    }

    render() {
        return (
            <div className="category">
                <div className="big-title" onClick={this.toggleItemList}>{this.props.name}</div>
                <ItemList items={this.props.items} />
            </div>
        );
    }
}

export default Category;