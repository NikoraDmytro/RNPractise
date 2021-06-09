import React, { useEffect, useState } from "react";
import { Container, Content, H1, Spinner } from "native-base";
import { DefaultHeader } from "../../components/DefaultHeader";

const LAST_COMIC = 2473;

function getRandomInt() {
  return Math.floor(Math.random() * LAST_COMIC) + 1;
}

export const Comic = () => {
  const [comicNumber, setComicNumber] = useState(getRandomInt());
  const [comicInfo, setComicInfo] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://xkcd.com/${comicNumber}/info.0.json`
        );
        const json = await response.json();

        setComicInfo(json);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [comicNumber]);

  return (
    <Container>
      <DefaultHeader title="Comic" />
      <Content>
        {comicInfo === undefined ? <Spinner /> : <H1>{comicInfo.title}</H1>}
      </Content>
    </Container>
  );
};
