const InputDandler = ({
  data,
  state,
  LoginData,
  setLoginData,
}: {
  data: any;
  state: string;
  setLoginData: any;
  LoginData: any;
}) => {
  if (!LoginData) return;

  if (state === 'email') {
    setLoginData({
      ...LoginData,
      login: {
        ...LoginData.login,
        email: data,
      },
    });
  }

  if (state === 'password') {
    setLoginData({
      ...LoginData,
      login: {
        ...LoginData.login,
        password: data,
      },
    });
  }

  if (state === 'phoneNumber') {
    setLoginData({
      ...LoginData,
      forget: {
        ...LoginData.forget,
        phoneNumber: data,
      },
    });
  }

  if (state === 'otp') {
    setLoginData({
      ...LoginData,
      verify: {
        ...LoginData.verify,
        otp: data,
      },
    });
  }

  if (state === 'newPass') {
    setLoginData({
      ...LoginData,
      reset: {
        ...LoginData.reset,
        newPass: data,
      },
    });
  }

  if (state === 'ConformPass') {
    setLoginData({
      ...LoginData,
      reset: {
        ...LoginData.reset,
        ConformPass: data,
      },
    });
  }
};
export default InputDandler;
