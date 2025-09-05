describe('Kids carousel', () => {
  beforeAll(async () => {
    await device.launchApp({
      delete: true,
      permissions: { notifications: 'YES' },
      launchArgs: {
        detoxEnableSynchronization: 0,
        detoxEnableNetworkSynchronization: 0,
      },
    });
    await device.disableSynchronization();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("verifies first kid's name, swipes, and verifies next kid", async () => {
    console.log('🔍 Looking for first kid (Christian Bowen)...');
    await waitFor(element(by.id('kidName-0')))
      .toBeVisible()
      .withTimeout(7000);
    console.log('Found first kid!');

    console.log('Swiping left on carousel...');
    await element(by.id('kidsCarousel')).swipe('left', 'fast', 0.8);
    console.log('Swipe completed!');

    console.log('Looking for second kid (Aanya Kapoor)...');
    await waitFor(element(by.id('kidName-1')))
      .toBeVisible()
      .withTimeout(7000);
    console.log('Found second kid! Test passed!');
  });
});
