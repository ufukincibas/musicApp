import React , {useState}from "react";
import { StyleSheet, Text , Button , View, SafeAreaView , FlatList} from "react-native";
import music_data from './music-data.json';
import Songcard from './Components/SongCard/SongCard';
import SearchBar from "./Components/searchBar/searchBar";

function App() {

  const renderSeparotor = () => <View style = {styles.seperator}/>
  const handleSearch = text => {
const filteredList = music_data.filter(song => {
const searchedText = text.toLowerCase();
const currentTitle = song.title.toLowerCase();
return currentTitle.indexOf(searchedText) > -1;

})
  setList(filteredList);
  }

  const [list , setList] = useState (music_data)
  
return(
  <SafeAreaView style={styles.container}>
    <SearchBar onSearch={handleSearch}  />
    <View style={styles.container}>
      <FlatList 
      ItemSeparatorComponent={renderSeparotor}
      keyExtractor={item => item.id}
      data={list}
      renderItem={({item}) => <Songcard song= {item}/>}
      
      />
    </View>
  </SafeAreaView>

)
}

export default App;

const styles = StyleSheet.create({

  container:{
      flex:1
  },
  seperator : {
    borderWidth:1,
    borderColor:'#e0e0e0',
    


}



})