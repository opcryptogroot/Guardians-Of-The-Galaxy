import Contract from './Contract';
import abi from './guardian.json';

class Guard extends Contract {
    constructor(options, address) {
        super(options, "Guard", abi, address);
    }
}

export default Guard;