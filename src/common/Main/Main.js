import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import data from './Data';

import Item from 'b:Item m:size_m m:size_s m:size_l m:size_text';

export default decl({
    block: 'Main',
    content() {
        return (
            <Fragment>
                {data.map((post, i) => <Item key={i} {...post}/>)}
            </Fragment>
        );
    }
});