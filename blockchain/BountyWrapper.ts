import Web3 from 'web3';
import Bounty from './contracts/bounty';
import { putinBountyToken, stakingAddress } from './constants';
import { Prediction } from '../utils';

export default class BountyWrapper {
    web3: Web3;
    chainId: number;
    account: string;
    wrapperOptions: any;
    Contract: Bounty;

    constructor(web3, chainId, account, options = {}) {

        this.web3 = web3;
        this.chainId = chainId;
        this.account = account;

        this.wrapperOptions = {
            web3, chainId, account, ...options
        }
        this.Contract = new Bounty(this.wrapperOptions, putinBountyToken.Contract[this.chainId]);
    }

    async approve() {
        const value = '100000';
        try {
            const tx = await this.Contract.send("approve", {from: this.account}, stakingAddress.stakingPBTY[this.chainId], this.web3.utils.toWei(value, 'ether'));
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }

    async allowance() : Promise<unknown> {
        try {
            const allowance = await this.Contract.call("allowance", this.account, stakingAddress.stakingPBTY[this.chainId]);
            return allowance;
        } catch (error) {
            throw error;
        }
    }

    async state() : Promise<unknown> {
        try {
            const state = await this.Contract.call("state");
            return state;
        } catch (error) {
            throw error;
        }
    }

    async contribution() : Promise<string> {
        try {
            const contribution = await this.web3.eth.getBalance(putinBountyToken.Contract[this.chainId]);
            return contribution;
        } catch (error) {
            throw error;
        }
    }

    async sendContribution(amount: string, account: string) {
        try {
            const tx = await this.web3.eth.sendTransaction({from: account, to: putinBountyToken.Contract[this.chainId], value: this.web3.utils.toWei(amount, 'ether')});
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }

    async getCommitment(prediction: Prediction) {
        try {
            console.log(prediction.date)
            console.log(prediction.salt)
            const tx = await this.Contract.call("getCommitment", prediction.date, prediction.salt);
            return tx;
        } catch (error) {
            throw error;
        }
    }

    async predictRemoval(commitment: unknown, value: string) {
        try {
            const tx = await this.Contract.send("predictRemoval", {from: this.account, value: this.web3.utils.toWei(value, 'ether')} , String(commitment));
            console.log(tx);
        } catch (error) {
            throw error;
        }
    }
}