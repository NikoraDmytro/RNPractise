const ButtonsStack = ({ setComicNumber }) => {
  const GetRandomComic = () => {
    setComicNumber();
  };
  return (
    <View style={{ margin: 10 }}>
      <Button onPress={getRandomComic}>
        <Text>Random</Text>
      </Button>
    </View>
  );
};
