const RoutesPath = {
  ROOT_PATH: 'root_path_navigation',
  SPLASH_PATH: {
    ROOT_PATH: 'splash_root_navigation',
    SCREEN_PATH: {
      MAIN_SCREEN_PATH: 'splash_main_screen',
    },
  },
  AUTH_PATH: {
    ROOT_PATH: 'auth_root_navigation',
    SCREEN_PATH: {
      AUTH_FLOW: 'auth_flow_screen',
      SSIGNUP_FLOW: 'auth_signup_screen',
    },
  },
  MAIN_PATH: {
    ROOT_PATH: 'main_root_navigation',
    SCREEN_PATH: {
      MAIN_SCREEN: 'main_screen',
    },
  },
};
export default RoutesPath;
