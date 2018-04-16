import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'b:Header';
import Main from 'b:Main';

import 'b:YSText';

export default decl({
    block: 'Container',
    content() {
        return (
            <Fragment>
                <Header />
                <Main /> 
            </Fragment>
        );
    }
});