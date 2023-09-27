import conf from "../conf/conf"

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
            this.account = new Account(this.client)
    }

    async createAccount({name, email, password}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
        } catch (err) {
            
        }
    }
}

const authService = new AuthService();


export default authService;