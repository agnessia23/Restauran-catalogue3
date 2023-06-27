import ListResto from '../views/pages/list-restaurants';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': ListResto, // default page
  '/list-restaurants': ListResto,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
