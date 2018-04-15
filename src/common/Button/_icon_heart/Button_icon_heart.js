import { declMod } from 'bem-react-core';

export default declMod({ icon: 'heart' }, {
    block: 'Button',
    content() {
        return [
            this.__base(...arguments)
        ]
    }
});