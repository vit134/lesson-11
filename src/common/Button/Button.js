import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Button',
    mods() {        
        return { icon: this.props.icon }
    },
    content() {
        return (
            <Fragment></Fragment>
        )
    }
});