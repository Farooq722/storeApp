import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import AllItems from './AllItems';
import CreateScreens from './CreateScreens';

const data = [
  { id: 1, name: 'wheat', stock: 50, unit: '4kg' },
  { id: 2, name: 'rice', stock: 8, unit: '4kg' },
  { id: 3, name: 'dal', stock: 25, unit: '4kg' },
  { id: 4, name: 'masoori', stock: 19, unit: '4kg' },
  { id: 5, name: 'grains', stock: 35, unit: '4kg' },
  { id: 6, name: 'jari', stock: 11, unit: '4kg' },
  { id: 7, name: 'jari', stock: 22, unit: '4kg' },
  { id: 8, name: 'jari', stock: 1, unit: '4kg' },
  { id: 9, name: 'jari', stock: 89, unit: '4kg' },
  { id: 10, name: 'jari', stock: 32, unit: '4kg' },
  { id: 11, name: 'jari', stock: 32, unit: '4kg' },
  { id: 12, name: 'jari', stock: 25, unit: '4kg' },
  { id: 13, name: 'jari', stock: 35, unit: '4kg' },
  { id: 14, name: 'jari', stock: 3, unit: '4kg' },
];

const HomeScreen = () => {
  const [view, setView] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: "#B0E0E6" } : null,
          ]}
          onPress={() => {
            setView(0);
          }}
        >
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: "#B0E0E6" } : null,
          ]}
          onPress={() => {
            setView(1);
          }}
        >
          <Text style={styles.btnText}>Low Stock</Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: "#B0E0E6" } : null,
          ]}
          onPress={() => {
            setView(2);
          }}
        >
          <Text style={styles.btnText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter((item) => item.stock < 20)} />}
      {view === 2 && <CreateScreens data={data} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    minHeight: Dimensions.get('window').height + 100, // allow 100px scroll
    padding: 20,
    backgroundColor: '#7DF9FF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  btnText: {
    color: 'black',
    fontSize: 12,
  },
});
