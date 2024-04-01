import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants';
import ListViewAssets from "../../components/ListViewAssets";
const History = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <ListViewAssets />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});