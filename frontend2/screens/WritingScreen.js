import { View, StyleSheet, ScrollView } from "react-native";
import WritingForm from "../components/WritingOutput/WritingForm";
import { GlobalStyles } from "../constants/styles";
import { StoriesContext } from "../store/stories-context";
import { useContext } from "react";
import IconButton from "../UI/IconButton";

function WritingScreen({ navigation, route }) {
  const storiesCtx = useContext(StoriesContext);
  const editedStoryId = route.params?.id;
  const isEditing = !!editedStoryId;

  const selectedStory = storiesCtx.stories.find(
    (story) => story.id == editedStoryId
  );

  function confirmHandler(storyData) {
    if (isEditing) {
      storiesCtx.updateStory(editedStoryId, storyData);
    } else {
      storiesCtx.addStory(storyData);
    }
    navigation.goBack();
  }

  function lightBulbHandler() {
    navigation.navigate("HttpsScreen", { content: selectedStory });
  }

  return (
    <ScrollView style={styles.container}>
      <WritingForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedStory}
      ></WritingForm>
      <View style={styles.lightbulb}>
        <IconButton
          icon="bulb-outline"
          color={GlobalStyles.colors.accent500}
          size={36}
          onPress={lightBulbHandler}
        />
      </View>
    </ScrollView>
  );
}

export default WritingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  innerContainer: {
    flex: 1,
  },
  lightbulb: {
    marginTop: 16,
    paddingTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
