import Theme from './theme/Theme';
import RoutesPath from './routes/RoutesPath';
import AuthRoutes from './apiRoutes/auth/AuthRoutes';
const Provider = {
  THEME: Theme,
  ROUTES: RoutesPath,
  API_ROUTE: {
    AUTH_ROUTE: AuthRoutes,
  },
};
export default Provider;
