const {When, Then, After} = require('@cucumber/cucumber');
const assert = require('assert');
const {Builder, By, until} = require('selenium-webdriver');

When('I scrap {string}', async function (url) {
    this.driver = new Builder()
        .forBrowser('firefox')
        .build();

    this.driver.wait(until.elementLocated(By.tagName('body')));

    await this.driver.get(url);
    return true;
});

Then('there should be a link {string} to {string} labeled {string}', async function (id, url, label) {
    const element = await this.driver.findElement(By.id(id));
    assert.equal(await element.getAttribute('href'), url);
    assert.equal(await element.getText(), label);
});

Then('there should be a paragraph {string} inside a {string} element', async function (content, parentTag) {
    const elements = await this.driver.findElements(By.tagName(parentTag));
    const found = elements.filter(
        async e => (
            await findChildren(e, By.tagName('p'))
        ).some(async (p,r,q) => (await p.getText()) === content)
    );
    assert.ok(found.length >= 1);
});

async function findChildren(element, by) {
    try {
        return await element.findElements(by);
    } catch (NoSuchElementError) {
        return [];
    }
}