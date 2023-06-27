import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <a href="/#/detail/${restaurant.id}">
      <img class="restaurant-item-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="restaurant-item-content">
        <p class="restaurant-item-city">${restaurant.city}  <span class="restaurant-item-rating" aria-label="rating restaurant ${restaurant.rating}"><i class="fa fa-star"></i>${restaurant.rating}</span></p>
        <h3 class="restaurant-item-name">${restaurant.name}</h3>
        <h4 class="restaurant-item-description">${restaurant.description}</h4>
      </div>
    </a>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail-wrapper">
    <div class="restaurant-detail-info">
      <h2 class="restaurant-detail-name">${restaurant.name}</h2>
      <p class="restaurant-detail-about">${restaurant.categories.map((cates) => `<span class="restaurant-detail-category">${cates.name}</span>`).join('')}</p>
      <p class="restaurant-detail-location"><h4> Location </h4>${restaurant.address}, ${restaurant.city}</p>
      <img class="restaurant-detail-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <p class="restaurant-detail-description">${restaurant.description}</p>
    </div>
    
    <div class="restaurant-prop">
        <h3>Menu List</h3>
    </div>

    <div class="restaurant-detail-menu-list">
      <div class="foods">
        <h4>FOODS</h4>
        <ul class="restaurant-detail-foods">${restaurant.menus.foods.map((food) => `<li>${food.name}</a></li>`).join('')}</ul>
      </div>

      <div class="drinks">
        <h4>DRINKS</h4>
        <ul class="restaurant-detail-drinks">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="restaurant-prop">
        <h3>What Costumers say about us ?</h3>
    </div>

    <div class="restaurant-detail-review">${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
