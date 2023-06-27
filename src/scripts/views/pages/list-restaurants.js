import RestaurantDbSource from '../../data/restaurantsdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
        <section class="content">
          <h2 class="list-restaurant-label">These restaurants may suit you. Let's check them out</h2>
          <div class="list-restaurant"></div>
        </section>
    `;
  },

  async afterRender() {
    const restos = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.list-restaurant');

    restos.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListResto;
