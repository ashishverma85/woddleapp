describe('Kids carousel', () => {
  beforeAll(async () => {
    // Platform-specific launch configuration
    const launchConfig = {
      delete: true,
      permissions: { notifications: 'YES' },
    };

    // Add platform-specific launch args
    if (device.getPlatform() === 'android') {
      launchConfig.launchArgs = {
        detoxEnableSynchronization: 0,
        detoxEnableNetworkSynchronization: 0,
      };
    }

    await device.launchApp(launchConfig);
    await device.disableSynchronization();
  });

  beforeEach(async () => {
    // Skip reloadReactNative for iOS due to AppDelegate compatibility issues
    if (device.getPlatform() === 'android') {
      await device.reloadReactNative();
    }
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