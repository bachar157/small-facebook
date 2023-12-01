'use stict'



import User from './User.js';

export default class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages = [], groups = [], canMonetize = false) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo}, Pages: ${this.#pages.join(', ')}, Groups: ${this.#groups.join(', ')}, Can Monetize: ${this.#canMonetize}`;
    }
}
