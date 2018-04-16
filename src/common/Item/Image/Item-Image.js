import { decl } from 'bem-react-core';

export default decl({
    block: 'Item',
    elem: 'Image',
    tag: 'img',
    attrs({ image }) {
        return { 
            src: `${image}@3x.png`,
            srcSet: `${image}.png 320w, ${image}@2x.png 640w, ${image}@3x.png 1024w`
        };
    }
});