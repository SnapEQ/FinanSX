const fs = require("fs");
const path = require("path");
const {app} = require("electron");

class Store{
    constructor(){
        this.path = path.join(app.getPath("userData"), "settings.json");
        this.data = this.loadData();
    }

    loadData(){
        try{
            return JSON.parse(fs.readFileSync(this.path));
        } catch{
            return {balance: 4.20};
        }   
    }

    saveData(){
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }

    getBalance(){
        return this.data.balance;
    }

    setBalance(amount){
        this.data.balance = amount;
        this.saveData();
    }



}

module.exports = Store;