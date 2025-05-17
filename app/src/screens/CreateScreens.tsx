import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const CreateScreens = ({ data }: any) => {
  const [itemName, setItemName] = useState("");
  const [stockAmt, setStockAmt] = useState("");

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View>
          <TextInput
            placeholder="Enter an item"
            placeholderTextColor="#999"
            style={styles.input}
            value={itemName}
            onChangeText={(item) => setItemName(item)}
          />
          <TextInput
            placeholder="Enter stock amount"
            placeholderTextColor="#999"
            style={styles.input}
            value={stockAmt}
            onChangeText={(item) => setStockAmt(item)}
          />
          <Pressable style={styles.btn}>
            {({ pressed }) => (
              <Text
                style={[styles.textBtn, { color: pressed ? "black" : "white" }]}
              >
                Add Stock
              </Text>
            )}
          </Pressable>

          <Text style={styles.headingText}>All Items In Stock</Text>
        </View>
      }
      renderItem={({ item }) => (
        <View
          style={[
            styles.itemContainer,
            { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BF" },
          ]}
        >
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>{item.stock}</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={styles.itemText}>Edit</Text>
            <Text style={styles.itemText}>Delete</Text>
          </View>
        </View>
      )}
    />
  );
};

export default CreateScreens;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
    paddingHorizontal: 15,
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#CABFEEFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  headingText: {
    fontWeight: "500",
    fontSize: 14,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginBottom: 8,
  },
  itemText: {
    fontWeight: "400",
    fontSize: 14,
    textTransform: "uppercase",
  },
});
