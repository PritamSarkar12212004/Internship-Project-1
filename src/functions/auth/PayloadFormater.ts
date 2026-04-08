const PayloadFormater = (
  SignupData: any,
  FarmInfo: any,
  BussnessTiming: any[],
  Verification: any,
  deviceToken: string,
) => {
  const dayMap: any = {
    M: 'mon',
    T: 'tue',
    W: 'wed',
    Th: 'thu',
    F: 'fri',
    Sa: 'sat',
    Su: 'sun',
  };

  const business_hours: any = {};
  BussnessTiming.forEach(dayObj => {
    const apiDay = dayMap[dayObj.Day];

    business_hours[apiDay] = dayObj.Time.map(
      (t: any) => `${t.Start} - ${t.End}`,
    );
  });
  return {
    full_name: SignupData.FullName,
    email: SignupData.Email,
    phone: SignupData.Phone,
    password: SignupData.Password,
    role: 'farmer',

    business_name: FarmInfo.BussnessName,
    informal_name: FarmInfo.InformalName,
    address: FarmInfo.StreetAddress,
    city: FarmInfo.City,
    state: FarmInfo.State,
    zip_code: FarmInfo.ZipCode,

    registration_proof: Verification.Doc,

    business_hours,

    device_token: deviceToken,
    type: 'email',
    social_id: deviceToken,
  };
};

export default PayloadFormater;
