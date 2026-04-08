interface LoginOptionsType {
  icon: any;
  Function: () => {};
}
interface Input {
  Type: string | null | any;
  state: string | null;
  keyboard: string | null | any;
  Icon: {
    name: string | null | any;
    color: string | null | any;
    size: number | null | any;
  };
}
interface SignUpInterfaceType {
  Page: string | null | any;
  Heading: string | null | any;
  SubHeading: string | null | any;
  State: string | null | any;
  Attachment: boolean;
  LoginOptions: LoginOptionsType[];
  Input: Input[];
  DropDown: boolean;
  Navigation: {
    Back: {
      Icon: any;
      Text: string | null | any;
    };
    Forward: {
      Button: string | null | any;
    };
  };
}
export default SignUpInterfaceType;

