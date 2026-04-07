import Api from '../../../services/api/Api';
import ConstProvider from '../../../consts/Provider';
const ForgetPassword = async ({ phone }: { phone: string }) => {
  const response = await Api.post(
    ConstProvider.API_ROUTE.AUTH_ROUTE.FORGET_PASSWORD,
    {
      mobile: `+91${phone}`,
    },
  );
  if (response.status === 200) {
    console.log(response);
  } else {
    console.log(response);
  }
};
export default ForgetPassword;
