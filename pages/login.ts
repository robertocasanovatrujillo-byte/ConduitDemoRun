import {Page, Locator} from '@playwright/test'

export class Login {

    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;

    constructor(page:Page) {

        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
        //this.url=page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username:string, password:string){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async GoTo(){
        await this.page.goto('https://the-internet.herokuapp.com/login');

    }
}