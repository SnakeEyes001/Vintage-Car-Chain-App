import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../constants';
import ListViewAssets from "../../components/ListViewAssets";

const Offers = () => {
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

export default Offers;

const styles = StyleSheet.create({});