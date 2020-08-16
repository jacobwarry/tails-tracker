import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class Item extends React.Component {
    render() {
        const tooltip = (
            <Tooltip>{this.props.title}</Tooltip>
        );

        return (
            <div className="item" data-id={this.props.id} onClick={() => this.props.onAddItem()}>
                <OverlayTrigger placement="top" overlay={tooltip}>
                    <img src={`${process.env.PUBLIC_URL}/images/${this.props.image}`} alt={this.props.title} />
                </OverlayTrigger>
            </div>
        );
    }
}

export default Item;