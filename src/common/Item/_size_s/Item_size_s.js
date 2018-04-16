import React from 'react';
import { declMod, Bem } from 'bem-react-core';

import ImageWrapper from 'e:ImageWrapper';

import 'e:Footer';
import 'e:Author';

export default declMod({ size: 's' }, {
    block: 'Item',
    content({ title, titleColor, description, image, channelName }) {
        return [
            this.__base(...arguments),
            <ImageWrapper image={image}/>,
        ]
    }
});