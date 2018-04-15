import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';
import LogoIcon from '../Logo/Container-Logo@2x.png';

export default decl({
    block: 'Container',
    elem: 'Header',
    tag: 'header',
    content() {
        return (
            <Fragment>
                <Bem elem="Logo" tag="img" src={LogoIcon} alt="logo"/>
            </Fragment>
        );
    }
});