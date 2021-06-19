import RNLocation from "react-native-location";

export const requestGeolocationPermission = async () => {
  try {
    const granted = await RNLocation.requestPermission({
      android: {
        detail: "fine",
        rationale: {
          title: "Geolocation Permission",
          message:
            "Weather.js app needs access to your geolocation" +
            "so that it can check the weather in your region.",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      },
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};
