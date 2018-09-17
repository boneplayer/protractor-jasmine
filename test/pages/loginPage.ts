import { $, ElementFinder, element, by } from "protractor";

export class LoginPage {
    public loginLink: ElementFinder;
    public username: ElementFinder;
    public password: ElementFinder;
    public submit : ElementFinder;
    public dashboardText: ElementFinder;
    public loggedInText : string;

    constructor() {
        this.loginLink = element(by.css("div.alert a[href='#/login']"));
        this.username = element(by.id("username"));
        this.password = element(by.id("password"));
        this.submit = $("button[type='submit']");
        this.dashboardText =  $('div.ng-binding');
        this.loggedInText = 'You are logged in as user "admin".';
    }
}
