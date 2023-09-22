import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, Linking, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { ReactStyles } from '../react/ReactStyles';

const ReactNative = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadApp = async () => {
      setLoading(true);
      content();
 
    }

    loadApp();

  }, []);

  const content = () => {
    axios
      .get(`https://api.stackexchange.com//2.3/questions?tagged=react-native&site=stackoverflow&page=${page}`)
      .then(function (response) {

        setQuestions(response.data.items)
        if(questions != null || questions != ""){
          setQuestions((prevQuestions) => [...prevQuestions, ...response.data.items]);
          setPage((prevPage) => prevPage + 1);
          setLoading(false)
        }
       
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }

  const loadMoreQuestions = () => {
      content()
  };

  return (
    <View>
      {loading ? (
        <View style={ReactStyles.loading}>
          <ActivityIndicator size={'large'} color={'#F2740D'}/>
        </View>
      ) : (
        <FlatList
          data={questions}
          keyExtractor={(item) => item.question_id.toString()}
          renderItem={({ item }) => (
            <View style={ReactStyles.flatlistcontainer}>
              <Text style={ReactStyles.questions}>Questions: {item.title}</Text>
              <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL(item.link)}>
                {item.link}
              </Text>
            </View>
          )}
          onEndReached={loadMoreQuestions}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  )
}

export default ReactNative