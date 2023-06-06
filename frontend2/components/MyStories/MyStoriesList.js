import { View, Pressable, FlatList, StyleSheet } from "react-native";
import MyStoryItem from "./MyStoryItem";

function MyStoriesList({ stories }) {
  /**
   * itemData here contains a story
   * Story is deconstructed and all members are passed to MyStoryItem as props
   */
  function renderStoryItem(itemData) {
    return <MyStoryItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={stories}
      renderItem={renderStoryItem}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

export default MyStoriesList;

const styles = StyleSheet.create({});
