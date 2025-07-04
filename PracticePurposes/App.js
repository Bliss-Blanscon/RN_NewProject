import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, Pressable } from 'react-native';
import person from './assets/Images/person.png';
import widget from './assets/Images/bx_slider.png';
import searchBtn from './assets/Images/Vector.png';

export default function App() {
  const categories = [
    {
      key: '1',
      title: 'Exercise',
      time: '12 Tasks',
      image: require('./assets/Images/wonline.png'),
    },
    {
      key: '2',
      title: 'Study',
      time: '12 Tasks',
      image: require('./assets/Images/wdesk.png'),
    },
  ];

  const ongoingTasks = [
    { key: '1', title: 'Mobile App Development' },
    { key: '2', title: 'Web Development' },
    { key: '3', title: 'Push Ups' },
  ];

  return (
   
  <SafeAreaView style={styles.container}>
    {/* Hello Devs */}
    <View>
      <View style={styles.personMainText}>
        <Text style={styles.mainText}>Hello, Devs</Text>
        <Image source={person} style={styles.image} />
      </View>
      <Text style={styles.subText}>14 task today</Text>
    </View>

    {/* Search Section */}
    <View style={styles.searchWidgetView}>
      <TextInput placeholder="Search" style={styles.textInput} />
      <Image source={widget} style={styles.widget} />
      <Image source={searchBtn} style={styles.searchBtn} />
    </View>

    {/* Categories */}
    <View>
      <Text style={styles.categoriesMainText}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.taskBackgr}>
            <Text style={styles.tasksTask}>{item.title}</Text>
            <Text style={styles.tasksTime}>{item.time}</Text>
            <Image source={item.image} style={styles.tasksImage} />
          </View>
        )}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.tasksCategories}
      />
    </View>

    {/* Ongoing Task */}
    <View>
      <Text style={styles.OngoingMainText}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={styles.ongoingOutView}>
            <Text style={styles.Ongoingtext}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>

    <View>
      <Pressable style={styles.BtnPress}>
        <Text style={styles.btnText}>Go to Categories</Text>
      </Pressable>
    </View>
  </SafeAreaView>
);
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#efdecd",
    paddingHorizontal: 20,
  },
  personMainText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainText: {
    fontFamily: "Lato_Regular",
    fontSize: 32,
    fontWeight: "700",
  },
  image: {
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontFamily: "Lato_Regular",
    fontWeight: "500",
    fontSize: 12,
  },
  textInput: {
    backgroundColor: "#FBF9F7",
    width: 250,
    height: 48,
    borderRadius: 15,
    fontWeight: "700",
    color: "#000000",
    fontSize: 16,
    paddingLeft: 50,
  },
  searchBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: 17,
  },
  searchWidgetView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
  widget: {
    backgroundColor: "#F0522F",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 23,
  },
  tasksCategories: {
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 27,
  },
  taskBackgr: {
    backgroundColor: "#FBF9F7",
    borderRadius: 15,
    marginRight: 24,
    alignItems: "flex-start",
    padding: 10,
  },
  tasksTask: {
    fontFamily: "Lato_Regular",
    fontWeight: "700",
    fontSize: 16,
    paddingTop: 14,
    paddingLeft: 6,
  },
  tasksTime: {
    fontFamily: "Lato_Regular",
    fontWeight: "400",
    fontSize: 12,
    paddingLeft: 6,
  },
  tasksImage: {
    marginLeft: 6,
    marginRight: 12,
    marginBottom: 9,
  },
  categoriesMainText: {
    fontFamily: "Lato_Regular",
    fontWeight: "700",
    fontSize: 20,
  },
  ongoingOutView: {
    backgroundColor: "#ffffff",
    width: 320,
    height: 128,
    borderWidth: 1,
    borderColor: "#E8D1BA",
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  Ongoingtext: {
    fontFamily: "Lato_Regular",
    fontWeight: "700",
    fontSize: 16,
  },
  OngoingMainText: {
    fontFamily: "Lato_Regular",
    fontWeight: "700",
    fontSize: 20,
  },
});