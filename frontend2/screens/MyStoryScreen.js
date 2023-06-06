import { ScrollView, StyleSheet, Text, View } from "react-native";
import { getFormattedDate } from "../util/date";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { StoriesContext } from "../store/stories-context";

import Button from "../UI/Button";

function MyStoryScreen({ route, navigation }) {
  const currentStoryId = route.params.storyId;
  const storiesCtx = useContext(StoriesContext);
  const currentStory = storiesCtx.stories.find(
    (story) => story.id === currentStoryId
  );

  function editButtonHandler() {
    navigation.navigate("WritingScreen", { id: currentStoryId });
  }

  function deleteButtonHandler() {
    storiesCtx.deleteStory(currentStoryId);
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{currentStory.title}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.date}>
          Composed: {getFormattedDate(currentStory.date)}
        </Text>
      </View>
      <View style={[styles.textContainer, styles.descriptionContainer]}>
        <Text style={styles.description}>{currentStory.description}</Text>
      </View>
      <View style={styles.buttons}>
        <Button onPress={editButtonHandler} style={styles.button}>
          Edit
        </Button>
        <Button mode="flat" onPress={deleteButtonHandler} style={styles.button}>
          Delete
        </Button>
      </View>
    </ScrollView>
  );
}

export default MyStoryScreen;

const styles = StyleSheet.create({
  root: {
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent500,
    paddingBottom: 8,
    marginTop: 8,
    marginHorizontal: 8,
  },
  date: {
    color: GlobalStyles.colors.accent500,
  },
  description: {
    fontSize: 16,
    color: GlobalStyles.colors.accent500,
  },
  descriptionContainer: {
    minHeight: 400,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    minWidth: 100,
    marginHorizontal: 8,
  },
});
