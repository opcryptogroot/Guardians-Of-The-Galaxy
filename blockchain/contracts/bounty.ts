import Contract from './Contract';
import abi from './bounty.json';

class Bounty extends Contract {
    constructor(options, address) {
        super(options, "Bounty" , abi, address);
    }
}

export default Bounty;