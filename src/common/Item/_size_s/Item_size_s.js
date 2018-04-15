import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import Buttons from 'b:Buttons m:type_horizontal';
import 'e:Footer';
import 'e:Author';

export default declMod({ size: 's' }, {
    block: 'Item',
    content({ title, titleColor, description, image, channelName }) {
        return [
            this.__base(...arguments),
            image ? (
                <Bem elem="Image-Wrapper">
                    <Bem elem="Item-Image" tag="img" src={`${image}@3x.png`}></Bem>
                </Bem>
            ) : ([
                <Bem elem="Description">{description}</Bem>,
                <Bem elem="Footer">
                    <Bem elem="Author">{channelName}</Bem>
                    <Buttons type="horizontal"/>
                </Bem>    
            ])
        ]
    }
});