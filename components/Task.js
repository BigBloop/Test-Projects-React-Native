import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.ItemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  square: {
    backgroundColor: "#B4E0F9",
    width: 24,
    height: 24,
    borderRadius: 3,
    marginRight: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  ItemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#56B8F4",
    borderRadius: 4,
    borderWidth: 2
  },
});

export default Task;
