import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import Main from 'e:Main';

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