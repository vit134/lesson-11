import { decl } from 'bem-react-core';

import LogoIcon from '../Logo/Logo@3x.png';

export default decl({
    block: 'Logo',
    tag: 'img',
    attrs() {
        return {
            src: LogoIcon
        
        };
    }
});