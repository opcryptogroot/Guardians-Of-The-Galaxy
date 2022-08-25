import Contract from "./Contract";
import abi from "./stake.json";

class StakingRewards extends Contract {
    constructor(options, address) {
        super(options, "StakingRewards", abi, address);
    }
}

export default StakingRewards;