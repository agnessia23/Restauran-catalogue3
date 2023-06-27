import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <main id="main" tabindex="0">
        <section class="content-favorit">
          <h2 class="list-favorite-restoran-label">
            Restaurant Favorit
          </h2>
          <div class="list-favorite-restoran"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.list-favorite-restoran');
    const mainContainer = document.querySelector('#main');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
        <p class="empty-resto-text">There is no Favorit restaurant yet</p>
      `; 
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
