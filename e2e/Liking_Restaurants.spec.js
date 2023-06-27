const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/Favorites');
  });

Scenario('showing empty liked restaurants', ({ I }) => {
   //I.seeElement('#query');
   //I.see('There is no Favorit restaurant yet');
   I.waitForElement('.empty-resto-text');
   I.see('There is no Favorit restaurant yet', '.empty-resto-text');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.empty-resto-text', 5);
  I.see('There is no Favorit restaurant yet', '.empty-resto-text');

  I.amOnPage('#/list-restaurants');
  I.waitForElement('.restaurant-item-name', 10);
  I.seeElement('.restaurant-item-name');

  const firstRestaurants = locate('.restaurant-item-name').first();
  const firstRestaurantsTitle = await I.grabTextFrom(firstRestaurants);
  I.click(firstRestaurants);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  const likedRestaurantsTitle = await I.grabTextFrom('.restaurant-detail-name');

  assert.strictEqual(firstRestaurantsTitle, likedRestaurantsTitle);
});
Scenario('Unliking one restaurant', async ({ I }) => {
  I.waitForElement('.empty-resto-text', 5);
  I.see('There is no Favorit restaurant yet', '.empty-resto-text');

  I.amOnPage('/');
  // pause();

  I.waitForElement('.restaurant-item-name');
  I.seeElement('.restaurant-item-name');

  const firstRestaurants = locate('.restaurant-item-name').first();
  const firstRestaurantsTitle = await I.grabTextFrom(firstRestaurants);
  I.click(firstRestaurants);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');
  const likedRestaurantsTitle = await I.grabTextFrom('.restaurant-item-name');

  assert.strictEqual(firstRestaurantsTitle, likedRestaurantsTitle);
  I.wait(1);

  I.click(likedRestaurantsTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.empty-resto-text');
  const unlikedRestaurantsTitle = await I.grabTextFrom('.empty-resto-text');
  assert.strictEqual(unlikedRestaurantsTitle, 'There is no Favorit restaurant yet');
});