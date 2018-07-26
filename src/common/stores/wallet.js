import {action, observable} from 'mobx';
import { Transaction as TransactionUtils } from '../utils';
import ethers from 'ethers';
const  INITILA = {
    items: null,
    history:[],
    pendingtrasactions:[],
    loading: false
};

export class WalletStore{
    @observable items = INITILA.items;
    @observable history = INITILA.history;
    @observable pendingtrasactions = INITILA.pendingtrasactions;
    @observable loading = INITILA.loading;

    @action isloading(state){
        this.loading = Boolean(state)
    }
    @action select(wallet){
        if (!(wallet instanceof ethers.Wallet)) throw('Invaild Wallet');
        this.items = wallet
    }
    @action setHistory(history){
        if (!this.items) throw(`can't update the history, No wallet selected.`);
        if (!history instanceof Array) throw(`The history must by an Array`);
        this.history = history
    }
    @action addPendingTransaction(txn){
        this.pendingtrasactions.push(txn)
    }
    @action moveToHistory(txn){
        const pending = this.pendingtrasactions.filter(tx => txn !== tx.hash);
        this.pendingtrasactions = pending;
        this.history.push(txn);
    }
    @action reset() {
        this.item = INITIAL.item;
        this.history = INITIAL.history;
        this.pendingTransactions = INITIAL.pendingTransactions;
        this.loading = INITIAL.loading;
    }
    
}
export default new WalletStore();