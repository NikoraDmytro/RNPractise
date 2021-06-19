import { Container, Content, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { DefaultHeader } from "../../components/DefaultHeader";
import { DefaultLoading } from "../../components/DefaultLoading";
import { getDeviceGeolocation } from "./utils/functions/getDeviceGeolocation";

export const Weather = () => {
  const [deviceGeolocation, setDeviceGeolocation] = useState();

  useEffect(() => {
    const getGeolocation = async () => {
      const location = await getDeviceGeolocation();

      setDeviceGeolocation(location);
    };

    if (!deviceGeolocation) {
      getGeolocation();
    }
  });

  if (!deviceGeolocation) return <DefaultLoading title="Weather" />;
  console.log(deviceGeolocation);

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
