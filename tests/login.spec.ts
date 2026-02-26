import { test, expect } from '@playwright/test'
import { Login } from '../pages/login';

import data from '../data/data.json';

test('Login', async ({ page }) => {
const Login_Page = new Login(page);
    await Login_Page.GoTo();
    await Login_Page.login(data.validUser.username,data.validUser.password); //Si no se tiene JSON poner únicamente los datos directos
})