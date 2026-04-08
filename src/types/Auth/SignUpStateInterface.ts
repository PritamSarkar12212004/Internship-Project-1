interface TimeSlot {
  Start: string | null;
  End: string | null;
}

interface BusinessDayTiming {
  Day: string | null;
  Time: TimeSlot[] | null;
}
interface SignupSection {
  FullName: string | null;
  Email: string | null;
  Phone: string | null;
  Password: string | null;
  ConPassword: string | null;
}

interface FarmInfoSection {
  BussnessName: string | null;
  InformalName: string | null;
  StreetAddress: string | null;
  City: string | null;
  State: string | null;
  ZipCode: string | null;
}

interface VerificationSection {
  Doc: string | null;
}

export interface SignupFormState {
  SignupData: SignupSection;
  FarmInfo: FarmInfoSection;
  Verification: VerificationSection;
  BussnessTiming: BusinessDayTiming[] | null;
}

