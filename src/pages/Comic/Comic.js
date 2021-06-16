import React, { useRef, useState } from "react";
import { Dimensions, View, Image } from "react-native";
import { Container, Content, H1, Spinner } from "native-base";
import { DefaultHeader } from "../../components/DefaultHeader";
import useComicInfo from "./utils/hooks/useComicInfo";
import getRandomComicNumber from "./utils/functions/getRandomComicNumber";
import { DefaultLoading } from "../../components/DefaultLoading";
import { ButtonsStack } from "./components/ButtonsStack.js";
import Swipeable from "react-native-gesture-handler/Swipeable";

export const Comic = () => {
  const [comicNumber, setComicNumber] = useState(getRandomComicNumber());
  const comicInfo = useComicInfo(comicNumber);
  const swipeable = useRef();

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
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <H1>{comicInfo.title}</H1>
        <ButtonsStack
          comicNumber={comicNumber}
          setComicNumber={setComicNumber}
        />

        {comicNumber == comicInfo.num ? (
          <Swipeable
            ref={swipeable}
            onSwipeableLeftOpen={() => {
              swipeable.current.close();
              setComicNumber(comicNumber - 1);
            }}
            onSwipeableRightOpen={() => {
              swipeable.current.close();
              setComicNumber(comicNumber + 1);
            }}
            renderRightActions={() => <View style={{ flex: 1 }}></View>}
            renderLeftActions={() => <View style={{ flex: 1 }}></View>}
          >
            <Image
              source={{ uri: comicInfo.img }}
              style={{
                width: width,
                height: height,
              }}
            />
          </Swipeable>
        ) : (
          <Spinner />
        )}

        <ButtonsStack
          comicNumber={comicNumber}
          setComicNumber={setComicNumber}
        />
      </Content>
    </Container>
  );
};
