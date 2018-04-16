import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Logo from 'b:Logo';

export default decl({
    block: 'Container',
    elem: 'Header',
    tag: 'header',
    content() {
        return (
            <Fragment>
                <Logo />
            </Fragment>
        );
    }
});