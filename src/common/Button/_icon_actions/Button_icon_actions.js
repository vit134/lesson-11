import { declMod } from 'bem-react-core';

export default declMod({ icon: 'actions' }, {
    block: 'Buttonasd',
    content() {
        return [
            this.__base(...arguments),
            'asdasdasd'
        ]
    }
});