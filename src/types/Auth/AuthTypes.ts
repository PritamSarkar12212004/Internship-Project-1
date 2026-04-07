type opTionButton = {
  icon: any;
  Function: () => void;
};
type InputField = {
  Type: string;
  keyboard: any;
  state: string;
  Icon: {
    name: any;
    color: string;
    size: number;
  };
  Adistional: {
    Head: string;
    Function: () => void;
  } | null;
};

type AuthPage = {
  Page: number;
  state: string;
  Head: string;
  Helper: {
    Support: string;
    Action: string;
    Function: () => void;
  };
  Input: InputField[];
  Button: {
    MainButton: {
      Head: string;
      Function: () => void;
    };
    SubButton: null;
    OptionButton: opTionButton[];
  };
};
