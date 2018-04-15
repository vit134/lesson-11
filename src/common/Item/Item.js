import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Title';

export default decl({
    block: 'Item',
    mods() {
        return {size: this.props.size}
    },
    content({ title, titleColor, description, image, channelName }) {
        return (
            <Fragment>
                <Bem elem="Title" style={{ color: titleColor }}>
                    <Bem elem="Title-Text">{title}</Bem>
                </Bem>
            </Fragment>
        )
    }
});