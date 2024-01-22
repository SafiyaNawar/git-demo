import { test, expect} from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    //Hook: Before Each Test
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        await homePage.navigate()
        
    })
    

    test('Open HomePage and verify title', async ({ page }) => {
    //verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');       
    })

    test('Click get started btn using CSS selector', async ({ page }) => {
        //click btn using CSS selector
        //.click has Promise feature hence add await keyword
        //await page.locator('#get-started').click();
        await homePage.getStartedBtn.click();
        //verify url has #get-started
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');      
        })
       

        //Text selector
        test('Verify heading tesxt visibility using Text selector', async ({ page }) => {
            //find text locator (text shud be unique) 
            //'Case Insensitive' and "Case Sensitive"
           // const headingText = page.locator('text=Think different. Make different.')
            const headingText = await homePage.headingText
            //verify heading text is visible in whichever page
            await expect(headingText).toBeVisible();
            })
    

            //Text and CSS selector
            test('Verify link is enabled using CSS and text selector', async ({ page }) => {
                //find text locator that is unique under the sub section/locator
                //const homeText1 = await page.locator('#zak-mobile-menu >> text=Home')
                const hometext1 = await homePage.homeText
                const homeText2 = page.locator('#zak-mobile-menu:has-text("Home")')
                //verify heading text is visible in whichever page
                await expect(homeText2).toBeEnabled();                      
                })

                //multiple elements at once
                test('Verify test of all nav bar links', async ({ page }) => {            
                    const expectedLinks=["Home", "About", "Shop", "Blog", "Contact", "My account"];
                    //open url
                    //await page.goto('https://practice.sdetunicorns.com');
                    await homePage.navigate()
                    //find nav links thta has 6 anchor links
                    const navLinks = homePage.navLinks    
                    //verify heading text is visible in whichever page
                    expect(await navLinks.allTextContents()).toEqual(expectedLinks);                        
                    })

                    //only the nth element from a list/array
                test('Verify test of nth nav bar link', async ({ page }) => {
                    const expectedLinks=["Home", "About", "Shop", "Blog", "Contact", "My account"];
                    //open url
                    //await page.goto('https://practice.sdetunicorns.com');
                    await homePage.navigate()
                    //only the nth link
                    //first, last also can be used
                    const navLinks = homePage.navLinks.nth(3)        
                    //verify heading text is visible in whichever page
                    expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
                    //expect(await navLinks.textContent()).toEqual("Blog"); works to                 
                    })

                    test('Verify test of all nav link using for loop', async ({ page }) => {
                        const expectedLinks=["Home", "About", "Shop", "Blog", "Contact", "My account"];
                        //open url
                       // await page.goto('https://practice.sdetunicorns.com');
                       await homePage.navigate()
                        //find nav links thta has 6 anchor links
                        const navLinks = homePage.navLinks
                        //printing the links out using for loop and console.log
                        for (const el of await navLinks.elementHandles()){
                            console.log(await el.textContent());
                        }
                        //verify heading text is visible in whichever page
                        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);                               
                        })


                        // test('upload test file', async ({ page }) => {

                        //     await homePage.navigate()
                        //     //const filePath = Path.join(__dirname, '../data/3fd9383c25fec7438c4ea6b1ecd99092.jpg');
                        //    // await page.setInputFiles('inputid', filePath);
                        //     await page.locator('Upload btn id').click();
                        //     await expect(page.locator("Success")).toContainText("Successfully uploaded.");

                            
                        // })
                        
        
})
//new Xpath
//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']