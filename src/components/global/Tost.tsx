import ToastNotify from 'react-native-toast-message';

const Tost = ({
  status,
  data,
}: {
  data: {
    head: string;
    subData: string;
  };
  status: 'info' | 'error' | 'success';
}) => {
  ToastNotify.show({
    type: status,
    text1: data.head,
    text2: data.subData,
  });
};
export default Tost;
