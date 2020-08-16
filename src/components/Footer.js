import React from 'react';
import Moment from 'moment';

const Footer = () => {
    return (
        <footer>
            <div>FINAL FANTASY XIV © 2010 - {moment().format('YYYY')} SQUARE ENIX CO., LTD. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer;