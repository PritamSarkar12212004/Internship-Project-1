import ComProvider from '../../components/Provider';
const LoginSubmit = ({
  email,
  password,
}: {
  email: string | any;
  password: string | any;
}) => {
  if (!email || !password) return null;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    ComProvider.GLOBAL.TOST({
      status: 'info',
      data: {
        head: 'Email is required',
        subData: 'Enter Email Address',
      },
    });
  } else if (!emailRegex.test(email)) {
    ComProvider.GLOBAL.TOST({
      status: 'info',
      data: {
        head: 'Invalid Email',
        subData: 'Please enter a valid emails',
      },
    });
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  if (!password) {
    ComProvider.GLOBAL.TOST({
      status: 'info',
      data: {
        head: 'Password is required',
        subData: 'Enter Password',
      },
    });
  } else if (!passwordRegex.test(password)) {
    ComProvider.GLOBAL.TOST({
      status: 'info',
      data: {
        head: 'Enter Valid Password',
        subData:
          'Password must be 5+ chars, include uppercase, lowercase, number & special char',
      },
    });
  }
};

export { LoginSubmit };
