import React, { useEffect, useState } from "react";
import { Image, Dimensions } from "react-native";
import {
  Button,
  Container,
  Content,
  H1,
  Spinner,
  Text,
  View,
} from "native-base";
import { DefaultHeader } from "../../components/DefaultHeader";

const LAST_COMIC = 2473;

function getRandomComic() {
  return Math.floor(Math.random() * LAST_COMIC) + 1;
}

export const Comic = () => {
  const [comicNumber, setComicNumber] = useState(getRandomComic());
  const [comicInfo, setComicInfo] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://xkcd.com/${comicNumber}/info.0.json`
        );
        const json = await response.json();
        await Image.getSize(json.img, (width, height) => {
          json.width = width;
          json.height = height;
        });

        setComicInfo(json);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [comicNumber]);

  if (!comicInfo)
    return (
      <Container>
        <DefaultHeader />
        <Spinner />
      </Container>
    );

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
        <View style={{ margin: 10 }}>
          <Button onPress={() => setComicNumber(getRandomComic())}>
            <Text>Random</Text>
          </Button>
        </View>
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
