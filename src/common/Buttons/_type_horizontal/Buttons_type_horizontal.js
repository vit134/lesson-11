import { declMod } from 'bem-react-core';

export default declMod({ type: 'horizontal' }, {
    block: 'Buttons',
    content() {
        return [
            this.__base(...arguments)
        ]
    }
});