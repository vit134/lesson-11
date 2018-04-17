import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Buttons from 'b:Buttons m:type_vertical';
import ImageWrapper from 'e:ImageWrapper';

export default declMod({ size: 'l' }, {
    block: 'Item',
    content({ title, description, image }) {
        return [
            <Fragment>
                <Bem elem="Title">{title}</Bem>
                <ImageWrapper image={image} />
                <Bem elem="Text-col">
                    <Bem elem="Description">
                        <Bem elem="Description-Inner">
                            <Bem elem="Description-Text">{description}></Bem>
                        </Bem>
                    </Bem>
                    <Buttons type="vertical"/>
                </Bem>
            </Fragment>
        ]
    }
});