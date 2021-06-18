import { Container, Content, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { DefaultHeader } from "../../components/DefaultHeader";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

const requestGeolocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message:
          "Weather.js app needs access to your geolocation" +
          "so that it can check the weather in your region.",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

const hasGeolocationPermission = async () => {
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );

  if (hasPermission) {
    return true;
  }

  const permissionGiven = await requestGeolocationPermission();

  return permissionGiven;
};

export const Weather = () => {
  const [deviceGeolocation, setDeviceGeolocation] = useState();

  useEffect(() => {
    const getGeolocation = async () => {
      const permission = await hasGeolocationPermission();

      if (permission) {
        Geolocation.getCurrentPosition(
          (position) => setDeviceGeolocation(position),
          (err) => console.log(err),
          {
            showLocationDialog: true,
            forceRequestLocation: true,
            timeout: 15000,
            maximumAge: 10000,
          }
        );
      } else {
        setDeviceGeolocation(null);
      }
    };

    if (!deviceGeolocation) {
      getGeolocation();
    }
  });

  return (
    <Container>
      <DefaultHeader />
      <Content padder>
        <Text>TODO LATER!</Text>
        <Text>{deviceGeolocation.latitude}</Text>
        <Text>{deviceGeolocation.longitude}</Text>
      </Content>
    </Container>
  );
};
