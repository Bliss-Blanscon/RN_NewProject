import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';
import person from './assets/Images/person.png'
import Lato_Regular from './assets/fonts/Lato-Regular.ttf'
import widget from './assets/Images/bx_slider.png'
import searchBtn from './assets/Images/Vector.png'

export default function App() {

const data = [
  {
    image: Image.source,
    Task: Text.Text,
    Time:"12 Tasks"
  },
  
]

  return (
    <SafeAreaView style={styles.container}>

      {/* Hello Devs */}
<View>
  <View style={styles.personMainText}>
    <Text style={styles.mainText}>Hello , Devs</Text>
  <Image source={person} style={styles.image}/>
  </View>
  <Text style={styles.subText}>14 task today</Text>
</View>

{/* Search Section */}
<View style={styles.searchWidgetView}>
   
  <TextInput placeholder='Search' style={styles.textInput}/>
  <Image source={widget}  style={styles.widget}/>
   <Image source={searchBtn}  style={styles.searchBtn}/>
</View>



{/* Categories */}
<View>
  <Text style={styles.categoriesMainText}>Categories</Text>
  <FlatList data={data}
  renderItem={({ item }) =>{
    return(
      
      <View style={styles.tasksCategories}>
        <View style={styles.taskBackgr}>
          <Text style={styles.tasksTask}>{"Exercise"}</Text>       
        <Text style={styles.tasksTime}>{item.Time}</Text>
        <Image source={require('./assets/Images/wonline.png')} style={styles.tasksImage}/>
        </View>

        <View style={styles.taskBackgr}>
          <Text style={styles.tasksTask}>{"Study"}</Text>       
        <Text style={styles.tasksTime}>{item.Time}</Text>
        <Image source={require('./assets/Images/wdesk.png')} style={styles.tasksImage}/>
        </View>
 </View>    
)
  }}
  />
</View>



{/* Ongoing Task */}
<View>
  <Text>Ongoing Task</Text>
</View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
    backgroundColor:"#efdecd",
    paddingHorizontal:20
  },
  personMainText:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  mainText:{
    fontFamily:"Lato_Regular",
    fontSize:32,
    fontWeight:700,

  },
  image:{
    backgroundColor:"white",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"
  },
  subText:{
    fontFamily:"Lato_Regular",
    fontWeight:500,
    fontSize:12
  },
  textInput:{
    backgroundColor:"#FBF9F7",
    width:250,
    height:48,
    borderRadius:15,
    fontWeight:"700",
    color:"#000000",
    fontSize:16,
    paddingLeft:50
  },
  searchBtn:{
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
  margin:20,
  marginTop:17
  },
  searchWidgetView:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:30,
    paddingBottom:30

  },
  widget:{
    backgroundColor:"#F0522F",
    borderRadius:14,
    justifyContent:"center",
    alignItems:"center",
    padding:23
  },
  tasksCategories:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:12,
    paddingBottom:27
   
  },
  taskBackgr:{
    backgroundColor:"#FBF9F7",
    borderRadius:15,
     marginRight:24
  },
  tasksTask:{
    fontFamily:"lato",
    fontWeight:"700",
    fontSize:16,
    paddingTop:14,
    paddingLeft:16
  },
  tasksTime:{
     fontFamily:"lato",
    fontWeight:"400",
    fontSize:12,
    paddingLeft:16
  },
  tasksImage:{
marginLeft:19,
marginRight:12,
marginBottom:9,

  },
  categoriesMainText:{
    fontFamily:"lato",
    fontWeight:"700",
    fontSize:20,

  }
  
});
