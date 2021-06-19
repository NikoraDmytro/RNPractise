import React from "react";
import { View, Button, Icon, Text } from "native-base";
import getRandomComicNumber from "../utils/functions/getRandomComicNumber.js";

const MAX_COMIC_NUMBER = 2473;

export const ButtonsStack = ({ comicNumber, setComicNumber }) => {
  const randomComic = () => {
    setComicNumber(getRandomComicNumber());
  };

  const nextComic = () => {
    setComicNumber(comicNumber + 1);
  };

  const previousComic = () => {
    setComicNumber(comicNumber - 1);
  };

  const lastComic = () => {
    setComicNumber(MAX_COMIC_NUMBER);
  };

  const firstComic = () => {
    setComicNumber(1);
  };

  const StackButton = (props) => (
    <Button small style={{ marginRight: 5, padding: 2 }} {...props}>
      {props.children}
    </Button>
  );

  const SmallIcon = (props) => (
    <Icon
      {...props}
      type="AntDesign"
      style={{ fontSize: 20, marginLeft: 0, marginRight: 0 }}
    />
  );

  const SmallText = (props) => (
    <Text style={{ fontSize: 14 }}>{props.children}</Text>
  );

  return (
    <View style={{ margin: 10, flexDirection: "row" }}>
      <StackButton onPress={firstComic} icon>
        <SmallIcon name="verticleright" />
      </StackButton>
      <StackButton onPress={previousComic} iconLeft>
        <SmallIcon name="left" />
        <SmallText>Prev</SmallText>
      </StackButton>
      <StackButton onPress={randomComic}>
        <SmallText>Random</SmallText>
      </StackButton>
      <StackButton onPress={nextComic} iconRight>
        <SmallText>Next</SmallText>
        <SmallIcon name="right" />
      </StackButton>
      <StackButton onPress={lastComic} icon>
        <SmallIcon name="verticleleft" />
      </StackButton>
    </View>
  );
};
