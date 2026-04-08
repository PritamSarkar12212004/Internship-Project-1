import Theme from './theme/Theme';
import RoutesPath from './routes/RoutesPath';
import AuthRoutes from './apiRoutes/auth/AuthRoutes';
import StorageKeys from './keys/StorageKeys';
const Provider = {
  THEME: Theme,
  ROUTES: RoutesPath,
  KEYS: {
    STORAGE: StorageKeys,
  },
  API_ROUTE: {
    AUTH_ROUTE: AuthRoutes,
  },
};
export default Provider;
