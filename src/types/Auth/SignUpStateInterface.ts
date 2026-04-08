interface TimeSlot {
  Start: string;
  End: string;
}

interface BusinessDayTiming {
  Day: string;
  Time: TimeSlot[];
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
  BussnessTiming: BusinessDayTiming[];
}

