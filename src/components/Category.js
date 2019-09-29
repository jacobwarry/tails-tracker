import React from 'react';
import ItemList from './ItemList'

class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <div className="category-title">{this.props.name}</div>
                <ItemList items={this.props.items} />
            </div>
        );
    }
}

export default Category;