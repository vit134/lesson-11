import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';
//import Main from 'e:Main';

export default decl({
    block: 'Container',
    content() {
        return (
            <Fragment>
                <Header />
                {/* <Main /> */}
            </Fragment>
        );
    }
});