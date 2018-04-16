import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Buttons from 'b:Buttons m:type_horizontal';
import ImageWrapper from 'e:ImageWrapper';

import 'e:Footer';
import 'e:Description';
import 'e:Text-col';

export default declMod({ size: 'l' }, {
    block: 'Item',
    content({ title, description, image }) {
        return [
            <Fragment>
                <ImageWrapper image={image} />,
                <Bem elem="Text-col">
                    <Bem elem="Title">{title}</Bem>
                    <Bem elem="Description">
                        <Bem elem="Description-Inner">
                            <Bem elem="Description-Text">{description}></Bem>
                        </Bem>
                    </Bem>
                    <Buttons />
                </Bem>
            </Fragment>
        ]
    }
});