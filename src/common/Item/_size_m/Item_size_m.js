import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import Buttons from 'b:Buttons m:type_vertical';
import ImageWrapper from 'e:ImageWrapper';

import 'e:Footer';
import 'e:Description';

export default declMod({ size: 'm' }, {
    block: 'Item',
    content({description, image }) {
        return [
            this.__base(...arguments),
            [
                <ImageWrapper image={image} />,
                <Bem elem="Footer">
                    <Bem elem="Description">{description}</Bem>
                    <Buttons type="vertical" />
                </Bem> 
            ]
        ]
    }
});