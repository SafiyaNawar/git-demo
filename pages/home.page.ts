import {Page, Locator} from '@playwright/test';

class HomePage{
    //page property is used multiple times 
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeText: Locator;
    navLinks: Locator;
    constructor(page){
        this.page=page;
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text=Think different. Make different.')
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
        this.homeText = page.locator('#zak-mobile-menu >> text=Home')
    }   
    //helper methods
    async navigate(){
        await this.page.goto('/');
    }
    //helper methods
    getNavLinksText(){//no need async as ther is return stmt
        return this.navLinks.allTextContents()
    }
}

export default HomePage;