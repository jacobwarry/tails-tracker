import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class Item extends React.Component {
    render() {
        const tooltip = (
            <Tooltip>{this.props.title}</Tooltip>
        );

        return (
            <div className="item" onClick={() => this.props.onAddItem()}>
                <OverlayTrigger placement="top" overlay={tooltip}>
                    <img src={'./images/' + this.props.image} alt={this.props.title} />
                </OverlayTrigger>
            </div>
        );
    }
}

export default Item;