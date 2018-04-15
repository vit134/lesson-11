import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Button from 'b:Button m:icon_actions m:icon_heart';

export default decl({
    block: 'Buttons',
    mods() {
        return { type: this.props.type }
    },
    content() {
        return (
            <Fragment>
                <Button icon="actions" />
                <Button icon="heart" />
            </Fragment>
        )
    }
});