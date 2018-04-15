import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import Buttons from 'b:Buttons m:type_vertical';
import 'e:Footer';
import 'e:Description';

export default declMod({ size: 'm' }, {
    block: 'Item',
    content({description, image }) {
        return [
            this.__base(...arguments),
            [
                <Bem elem="Image-Wrapper">
                    <Bem elem="Item-Image" tag="img" src={`${image}@3x.png`}></Bem>
                </Bem>,
                <Bem elem="Footer">
                    <Bem elem="Description">{description}</Bem>
                    <Buttons type="vertical" />
                </Bem> 
            ]
        ]
    }
});