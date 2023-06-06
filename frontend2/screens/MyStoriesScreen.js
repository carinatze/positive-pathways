import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import MyStoriesList from "../components/MyStories/MyStoriesList";
import { STORIES } from "../data/dummy-stories";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { StoriesContext } from "../store/stories-context";

function MyStoriesScreen() {
  const storiesCtx = useContext(StoriesContext);

  return (
    <View style={styles.root}>
      <MyStoriesList stories={storiesCtx.stories} />
    </View>
  );
}

export default MyStoriesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
  },
});
