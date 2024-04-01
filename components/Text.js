import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextLabel = () => {
/*   const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  }; */

  return (
      <Text style={styles.firstInput}>
        First owner
      </Text>
  );
};

const styles = StyleSheet.create({
    firstInput: {
       fontSize:16,  
      },  
});

export default TextLabel;