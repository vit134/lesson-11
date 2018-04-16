import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Image from "e:Image";

export default decl({
    block: 'Item',
    elem: 'ImageWrapper',
    content({image}) {
        return (
            <Fragment>
                <Image image={image}/>
            </Fragment>
        )
    }
});