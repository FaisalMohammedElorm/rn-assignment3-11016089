import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { categoriesData } from './mockData/categories';
import { taskData } from './mockData/task';

const App = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.main}>
    <View style={styles.header}>
      <View style={styles.salutationContainer}>
        <Text style={styles.salutation}>Hello, Devs </Text>
        <View style={styles.subTextContainer}>
        <Text style={styles.subText}>14 tasks today</Text>
        </View>
      </View>
      <View style={styles.personImageContainer}>
          <Image style={styles.personImage} source={require("./assets/person.png")}/>
      </View> 
    </View>
     
     <View style={styles.textInputContainer}>
     <TouchableOpacity>
     <View style={styles.icon}>
     <Feather name="search" size={25} color="black"/>
     </View>
     
    
     </TouchableOpacity>
     
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText = {text => setText(text)}
        value={text}
      />
      <TouchableOpacity>
      <View style={{marginLeft:60 }}>
        <Image source={require("./assets/Filter.png")}/>
      </View>
      </TouchableOpacity>
         

       
     </View>
     <View style={{marginTop:50, marginLeft:20}}>
      <Text style={{fontSize: 25, fontWeight:"600", marginLeft: 10}}>Categories</Text>
      <FlatList
        data={categoriesData}
        renderItem={({item}) => 
        (
          <View style={styles.categoriesItem}>
          <View>
            <Text style={styles.categoryTitle}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
          <Image source={item.image}/>

          </View>
        )

        } 
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator ={false}
          
      />
     </View>
     {/** Ongoing Tasks to undertake */}
     <View style={styles.taskContainer}>
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      <FlatList
        data={taskData}
        renderItem={({item}) =>
        (
          <View style={styles.taskItem}>

            <View>
            <Text style={styles.taskTitle}>{item.name}</Text>

            </View>
          </View>


        )
        }
        keyExtractor={(item) => item.id}
      />
     </View>

    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F7F0E8",
    flex:1
  },
  salutation:{
    fontSize:40,
    fontWeight: "600"
  },
  salutationContainer:{
    paddingLeft: 20
  },
  
  subText:{
    fontSize:15
  },
  personImageContainer:{
    alignSelf:"flex-end",
    backgroundColor: "#fff",
    marginLeft: 130,
    marginBottom:20,
    borderRadius:20
  },
  header:{
    flexDirection:"row",
  },
  personImage:{
    height:50,
    width: 50,
  },
  textInputContainer:{
    backgroundColor: "#fff",
    width: 320,
    height: 65,
    padding: 20,
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 45,
    marginLeft:20, 
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center"
   
    
  },
  searchInput:{
    fontSize: 22,
    fontWeight: "700",
    marginRight:160,
    
    
  },
  categoriesItem:{
    backgroundColor:"#fff",
    marginRight:20,
    padding:20,
    borderRadius:20,
    gap:5
  },
  categoryTitle:{
    fontSize: 20,
    fontWeight: "700",
    letterSpacing:1.5
  },
  sectionTitle:{
    fontSize:25,
    fontWeight:"bold",
    marginLeft:27,
    marginTop:10

  },
  taskContainer:{
    gap:5
  },
  taskItem:{
    backgroundColor: "#fff",
    borderColor: "#E8D1BA",
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 10,
    padding: 20,
    height:130,
    justifyContent:"center",
    margin:10
  },
  taskTitle:{
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1.25
  }
  
});
export default App