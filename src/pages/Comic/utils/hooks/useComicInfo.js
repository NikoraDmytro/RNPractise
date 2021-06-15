import { useEffect, useState } from "react";
import { Image } from "react-native";

export default function useComicInfo(comicNumber) {
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

  return comicInfo;
}
