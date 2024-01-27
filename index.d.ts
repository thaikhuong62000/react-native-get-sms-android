declare module "react-native-get-sms-android" {
  export interface SmsAndroid {
    list: (
      filter: string,
      errorCallback: (error: string) => void,
      successCallback: (count: number, smsList: string) => void
    ) => void;
    // Un-used in official repo docs
    // send: (
    // 	addresses: string,
    // 	text: string,
    // 	errorCallback: (error: string) => void,
    // 	successCallback: (message: string) => void
    // ) => void;
    delete: (
      id: number,
      errorCallback: (error: string) => void,
      successCallback: (message: string) => void
    ) => void;
    autoSendMultiSim: (
      simSlot: number,
      phoneNumber: string,
      message: string,
      errorCallback: (error: string) => void,
      successCallback: (message: string) => void
    ) => void;
    autoSend: (
      phoneNumber: string,
      message: string,
      errorCallback: (error: string) => void,
      successCallback: (message: string) => void
    ) => void;
  }

  const SmsAndroid: SmsAndroid;
  export default SmsAndroid;
}
