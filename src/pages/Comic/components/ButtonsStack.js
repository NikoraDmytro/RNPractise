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
    <Button small style={{ marginRight: 5 }} {...props}>
      {props.children}
    </Button>
  );

  return (
    <View style={{ margin: 10, flexDirection: "row" }}>
      <StackButton onPress={firstComic} icon>
        <Icon name="verticleright" type="AntDesign" />
      </StackButton>
      <StackButton onPress={previousComic} iconLeft>
        <Icon name="left" type="AntDesign" />
        <Text>Prev</Text>
      </StackButton>
      <StackButton onPress={randomComic}>
        <Text>Random</Text>
      </StackButton>
      <StackButton onPress={nextComic} iconRight>
        <Text>Next</Text>
        <Icon name="right" type="AntDesign" />
      </StackButton>
      <StackButton onPress={lastComic} icon>
        <Icon name="verticleleft" type="AntDesign" />
      </StackButton>
    </View>
  );
};
