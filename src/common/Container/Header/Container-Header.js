import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

//import Main from 'e:Main';

export default decl({
    block: 'Container',
    elem: 'Header',
    tag: 'header',
    content() {
        return (
            <Fragment>
                header
            </Fragment>
        );
    }
});