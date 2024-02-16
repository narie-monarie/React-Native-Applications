import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const Cat = () => {
  const [catData, setCatData] = useState([{}]);

  useEffect(() => {
   
    const fetchData = async () => {
        try {
          const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
          setCatData(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData()
  }, []);
  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item.url }}
      style={{ width: 200, height: 200 }}
    />
  )
  return (
     <View style={{ flex: 1 }}>
     {catData.length > 0 ? (
       <FlatList
         data={catData}
         renderItem={renderItem}
         keyExtractor={(item, index) => index.toString()}
       />
     ) : (
       <Text>Loading...</Text>
     )}
   </View>
  );
};

export default Cat;
