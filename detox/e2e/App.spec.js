describe('App screen', () => {
  beforeEach(async () => {
     await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
     await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should have a startButton', async () => {
     await expect(element(by.id('runningState'))).toHaveText('Stopped');
     await element(by.id('startButton')).tap();
     await expect(element(by.id('runningState'))).toHaveText('Running');
  });

  it('should write into TextInput', async () => {
       await waitFor(element(by.id('input'))).toBeVisible().withTimeout(3000);
       await element(by.id('input')).typeText("Hello King!")
       await element(by.id('input')).clearText();
       await element(by.id('input')).typeText("Maxwell you are Blessed!")
    // await expect(element(by.text('World!!!'))).toBeVisible();
  });

    it('should scroll the name by 1', async () => {
        await waitFor(element(by.id('input'))).toBeVisible().withTimeout(3000);
        await element(by.id('list')).scroll(100, 'down')
    });

    it('should scroll till list end', async () => {
        await waitFor(element(by.id('input'))).toBeVisible().withTimeout(3000);
        await element(by.id('list')).scrollTo('bottom')
    });

    it('should scroll till list end', async () => {
        await waitFor(element(by.id('input'))).toBeVisible().withTimeout(3000);
        await element(by.id('list')).swipe('up', 'slow')
    });

})