const IndexChanger = ({
  state,
  setCurrentIndex,
  setLoginData,
}: {
  state: string;
  setCurrentIndex: any;
  setLoginData: any;
}) => {
  if (state === 'login') {
    setCurrentIndex(0);
  } else if (state === 'forget') {
    setCurrentIndex(1);
  }
  setLoginData({
    login: {
      email: null,
      password: null,
    },
    forget: {
      phoneNumber: null,
    },
    verify: {
      otp: null,
    },
    reset: {
      newPass: null,
      ConformPass: null,
    },
  });
};
export default IndexChanger;
