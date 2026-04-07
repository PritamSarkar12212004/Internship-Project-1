import AssetProvider from '../../assets/Provider';

const AuthScreenData = [
  {
    Page: 1,
    Head: 'Welcome back!',
    state: 'login',
    Helper: {
      Support: 'New here? ',
      Action: 'Create account',
      Function: () => {},
    },
    Input: [
      {
        Type: 'Email Address',
        state: 'email',
        keyboard: 'email-address',
        Icon: {
          name: 'at',
          color: 'gray',
          size: 20,
        },
        Adistional: null,
      },
      {
        Type: 'Password',
        state: 'password',
        keyboard: 'default',
        Icon: {
          name: 'lock',
          color: 'gray',
          size: 20,
        },
        Adistional: {
          Head: 'Forgot?',
          Function: () => {},
        },
      },
    ],
    Button: {
      MainButton: {
        Head: 'Login',
        Function: () => {},
      },
      SubButton: null,
      OptionButton: [
        {
          icon: AssetProvider.IMAGE.AUTH.GOOGLE,
          Function: () => {},
        },
        {
          icon: AssetProvider.IMAGE.AUTH.APPLE,
          Function: () => {},
        },
        {
          icon: AssetProvider.IMAGE.AUTH.FACEBOOK,
          Function: () => {},
        },
      ],
    },
  },
  {
    Page: 2,
    Head: 'Forgot Password?',
    Helper: {
      Support: 'Remember your pasword?  Login',
      Action: 'Login',
      Function: () => {},
    },
    Input: [
      {
        Type: 'Phone Number',
        state: 'phoneNumber',
        keyboard: 'phone-pad',
        Icon: {
          name: 'phone',
          color: 'gray',
          size: 20,
        },
        Adistional: null,
      },
    ],
    Button: {
      MainButton: {
        Head: 'Send Code',
        Function: () => {},
      },
      SubButton: null,
      OptionButton: null,
    },
  },

  {
    Page: 3,
    Head: 'Reset Password',
    Helper: {
      Support: 'Remember your pasword?  Login',
      Action: 'Login',
    },
    Input: [
      {
        Type: 'New Password',
        state: 'newPass',
        keyboard: 'default',
        Icon: {
          name: 'lock',
          color: 'gray',
          size: 20,
        },
        Adistional: null,
      },
      {
        Type: 'Confirm New Password',
        state: 'ConformPass',
        keyboard: 'default',
        Icon: {
          name: 'lock',
          color: 'gray',
          size: 20,
        },
        Adistional: null,
      },
    ],
    Button: {
      MainButton: {
        Head: 'Submit',
        Function: () => {},
      },
      SubButton: null,
      OptionButton: null,
    },
  },
];
export default AuthScreenData;
