import React, { useState } from "react";
import { Image, Dimensions } from "react-native";
import { Container, Content, H1 } from "native-base";
import { DefaultHeader } from "../../components/DefaultHeader";
import useComicInfo from "./utils/hooks/useComicInfo";
import getRandomComicNumber from "./utils/functions/getRandomComicNumber";
import { DefaultLoading } from "../../components/DefaultLoading";

export const Comic = () => {
  const [comicNumber, setComicNumber] = useState(getRandomComicNumber());
  const comicInfo = useComicInfo(comicNumber);

  if (!comicInfo) return <DefaultLoading title="Comic" />;

  const width = Math.min(comicInfo.width, Dimensions.get("window").width - 20);
  const height = width * (comicInfo.height / comicInfo.width);

  return (
    <Container>
      <DefaultHeader title="Comic" />
      <Content
        padder
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <H1>{comicInfo.title}</H1>
        <Image
          source={{ uri: comicInfo.img }}
          style={{
            width: width,
            height: height,
          }}
        />
      </Content>
    </Container>
  );
};
