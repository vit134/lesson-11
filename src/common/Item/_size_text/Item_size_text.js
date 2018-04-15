import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import Buttons from 'b:Buttons m:type_horizontal';

export default declMod({ size: 'text' }, {
    block: 'Item',
    content({ title, titleColor, description, image, channelName }) {
        return [
            <Bem elem="Title" style={{ color: titleColor }}>{title}</Bem>,
            [
                <Bem elem="Description">{description}</Bem>,
                <Bem elem="Footer">
                    <Bem elem="Author">{channelName}</Bem>
                    <Buttons type="horizontal"/>
                </Bem>    
            ]
        ]
    }
});