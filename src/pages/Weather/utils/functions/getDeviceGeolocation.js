import RNLocation from "react-native-location";

RNLocation.configure({ distanceFilter: 0 });

const hasGeolocationPermission = async () => {
  try {
    const hasPermission = await RNLocation.checkPermission({
      ios: "whenInUse",
      android: {
        detail: "fine",
      },
    });

    if (hasPermission) {
      return true;
    }

    const permissionGiven = await requestGeolocationPermission();

    return permissionGiven;
  } catch (err) {
    console.log(err);
  }
};

export const getDeviceGeolocation = async () => {
  try {
    const permission = await hasGeolocationPermission();

    if (permission) {
      const deviceGeolocation = await RNLocation.getLatestLocation({
        timeout: 15000,
      });

      return deviceGeolocation;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};
