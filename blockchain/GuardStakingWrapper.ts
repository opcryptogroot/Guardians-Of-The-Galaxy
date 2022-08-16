import Web3 from 'web3';
import GuardStakingRewards from './contracts/staking';
import { stakingAddress } from './constants';

export default class GuardStakingWrapper {
    web3: Web3;
    chainId: number;
    account: string;
    wrapperOptions: any;
    Contract: GuardStakingRewards;

    constructor(web3, chainId, account, options = {}) {

        this.web3 = web3;
        this.chainId = chainId;
        this.account = account;

        this.wrapperOptions = {
            web3, chainId, account, ...options
        }
        this.Contract = new GuardStakingRewards(this.wrapperOptions, stakingAddress.stakingGUARD[this.chainId]);
    }

    // @dev important info
    // earned -> How many tokens are available for claiming
    // rewardRate -> RewardForDuration (uint256) / RewardsDuration (seconds)

    async exit() {
        try {
            const tx = await this.Contract.send("exit", {from: this.account});
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }

    async getReward() {
        try {
            const tx = await this.Contract.send("getReward", {from: this.account});
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }

    async dailyRewardRate() : Promise<unknown> {
        try {
            const rewardRate = await this.Contract.call("rewardRate");
            return (Number(rewardRate) * 86400) / 1e18;
        } catch (error) {
            throw error;
        }
    }

    async totalStaked() : Promise<unknown> {
        try {
            const totalStaked = await this.Contract.call("totalSupply");
            return totalStaked;
        } catch (error) {
            throw error;
        }
    }

    async balanceOf() : Promise<unknown> {
        try {
            const balanceOf = await this.Contract.call("balanceOf", this.account);
            return balanceOf;
        } catch (error) {
            throw error;
        }
    }

    async earned() : Promise<unknown> {
        try {
            const earned = await this.Contract.call("earned", this.account);
            return earned;
        } catch (error) {
            throw error;
        }
    }
    
    async stake(value: string) {
        try {
            const tx = await this.Contract.send("stake", {from: this.account}, this.web3.utils.toWei(value, 'ether'));
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }
}