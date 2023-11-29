import { User } from './User.js';

export class Subscriber extends User {
    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.pages = pages;
        this.groups = groups;
        this.canMonetize = canMonetize;
    }

    getInfo() {
        return `${super.getInfo()}, Pages: ${this.pages.join(', ')}, Groups: ${this.groups.join(', ')}, Can Monetize: ${this.canMonetize}`;
    }
}
