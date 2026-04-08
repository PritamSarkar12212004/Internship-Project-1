import AssetProvider from '../../assets/Provider';
const SignupScreenData = [
  {
    Page: 1,
    Heading: 'Welcome!',
    SubHeading: null,
    State: 'name',
    Attachment: false,
    LoginOptions: [
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
    Input: [
      {
        Type: 'Full Name',
        state: 'FullName',
        keyboard: 'default',
        Icon: {
          name: 'user',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'Email Address',
        state: 'Email',
        keyboard: 'email-address',
        Icon: {
          name: 'at',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'Phone Number',
        state: 'Phone',
        keyboard: 'phone-pad',
        Icon: {
          name: 'phone',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'New Password',
        state: 'Password',
        keyboard: 'default',
        Icon: {
          name: 'lock',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'Confirm New Password',
        state: 'ConPassword',
        keyboard: 'default',
        Icon: {
          name: 'lock',
          color: 'gray',
          size: 20,
        },
      },
    ],
    DropDown: false,
    Navigation: {
      Back: {
        Icon: null,
        Text: 'Login',
      },
      Forward: {
        Button: 'Continue',
      },
    },
  },
  {
    Page: 2,
    Heading: 'Farm Info',
    SubHeading: null,
    State: 'businessName',
    Attachment: false,
    LoginOptions: null,
    Input: [
      {
        Type: 'Business Name',
        state: 'BussnessName',
        keyboard: 'default',
        Icon: {
          name: 'pen-to-square',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'Informal Name',
        state: 'InformalName',
        keyboard: 'default',
        Icon: {
          name: 'at',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'Street Address',
        state: 'StreetAddress',
        keyboard: 'default',
        Icon: {
          name: 'home',
          color: 'gray',
          size: 20,
        },
      },
      {
        Type: 'City',
        state: 'City',
        keyboard: 'default',
        Icon: {
          name: 'location',
          color: 'gray',
          size: 20,
        },
      },
    ],
    DropDown: true,
    Navigation: {
      Back: {
        Icon: 'arrow-left',
        Text: null,
      },
      Forward: {
        Button: 'Continue',
      },
    },
  },
  {
    Page: 3,
    Heading: 'Verification',
    SubHeading:
      'Attached proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic',
    State: 'verification',
    Attachment: true,
    LoginOptions: null,
    Input: null,
    DropDown: false,
    Navigation: {
      Back: {
        Icon: 'arrow-left',
        Text: null,
      },
      Forward: {
        Button: 'Submit',
      },
    },
  },
  {
    Page: 4,
    Heading: 'Business Hours',
    SubHeading:
      'Choose the hours your farm is open for pickups. This will allow customers to order deliveries.',
    State: 'Date',
    Attachment: false,
    LoginOptions: null,
    Input: null,
    DropDown: false,
    Navigation: {
      Back: {
        Icon: 'arrow-left',
        Text: null,
      },
      Forward: {
        Button: 'Signup',
      },
    },
  },
  {
    Page: 5,
    Heading: 'Done',
    SubHeading: null,
    State: 'Done',
    Attachment: false,
    LoginOptions: null,
    Input: null,
    DropDown: false,
    Navigation: null,
  },
];

export default SignupScreenData;
