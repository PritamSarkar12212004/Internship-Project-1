import FunProvider from '../../../functions/Provider';
import Api from '../../../services/api/Api';
import ConstProvider from '../../../consts/Provider';
import Tost from '../../../components/global/Tost';
import { saveAuthData } from '../../../functions/storage/AuthStorage';

const SignUpApi = async ({ data }: { data: any }) => {
  try {
    const formateData = FunProvider.AUTH.DATA_FORMATER.SIGNUP_FORMATE(
      data.SignupData,
      data.FarmInfo,
      data.BussnessTiming,
      data.Verification,
      data.deviceToken,
    );

    const response = await Api.post(
      ConstProvider.API_ROUTE.AUTH_ROUTE.SIGNUP,
      formateData,
    );

    const resData = response.data;

    if (!resData?.success) {
      Tost({
        status: 'error',
        data: {
          head: 'Signup Failed',
          subData: resData?.message,
        },
      });
      return null;
    }

    Tost({
      status: 'success',
      data: {
        head: 'Success',
        subData: resData?.message,
      },
    });

    saveAuthData(resData);
    return resData;
  } catch (error: any) {
    Tost({
      status: 'error',
      data: {
        head: 'Server Error',
        subData: error?.message || 'Try again later',
      },
    });

    return null;
  }
};

export default SignUpApi;
