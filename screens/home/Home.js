import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { COLORS } from "../../constants";
import ListViewAssets from "../../components/ListViewAssets";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <ListViewAssets />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
