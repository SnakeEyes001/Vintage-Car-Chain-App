import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { COLORS } from '../constants';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "@expo/vector-icons/Ionicons";
import { Button } from 'react-native-elements';
import { IconButton, MD3Colors } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const DATA = [
  {
    id: '1',
    brand: 'Beetle',
    model: 'VW',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmSSNjd646ZfxJpq8ukpjDXCNRuZpDA8HhJ7Jypv5TV2Dd',
  },
  {
    id: '2',
    brand: 'Ford',
    model: 'T',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmQETESRrkbyittu2X44kpJuZrruG44zgZQ3XuTMnkEewk',
  },
  {
    id: '3',
    brand: 'Porsche',
    model: '356-C Coupe',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmTrCxZVxgkt3AUyBQUYsVozHPVNDyU5wPo11UHaNfkkBt',
  },
  {
    id: '4',
    brand: 'McLaren',
    model: 'F1',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmdU8FSjb9WPrLjWhrz8x6fTy5T6TUExUpFrnJfjjCgDM1',
  },
  {
    id: '5',
    brand: 'Volvo 1967',
    model: '1800s',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/Qma2fx5nLV4efeFZCvMrCNLktKsQHgFR3kP1jRo5GQCcQj',
  },
  {
    id: '6',
    brand: 'BMW 3.0',
    model: 'CSL',
    registration: 'AD-675-OP',
    imageUrl:'.https://violet-total-ox-159.mypinata.cloud/ipfs/QmZuxcT5EZVER35vRim1AVQrzVCcxg8cW7AqspHr6n5Zwm',
  },
  {
    id: '7',
    brand: 'Ferrari',
    model: '308 GTS',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/Qmd91HJn2RmGhk2my5cvrzQpXRYcgxFJsEmHVfY75TTMt5',
  },
  {
    id: '8',
    brand: 'Dodge',
    model: 'Viper GTS',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmRAWTGo9jeq2uHfPGCnewpyb247PzVA9W93rSFjfMUbLq',
  },
  {
    id: '9',
    brand: 'Cizeta',
    model: 'Moroder-V16T',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmZ779WwK19gDMnuHTWXNmwF1hdVKAsmcSNfqZ97CG2uar',
  },
  {
    id: '10',
    brand: 'Austin',
    model: 'Healey-3000',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmdKpNRHUKQefuMnvwenY5tWM84VvJJL18ETLNPGb5RPcK',
  },

  {
    id: '11',
    brand: 'Acura',
    model: 'NSX-2005',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmULzkphyA5M1AGHDzo8AvrDgkHG6RFhMD7FdpPG4oVPUT',
  },
  {
    id: '12',
    brand: 'Detomaso',
    model: 'Pantera 1972',
    registration: 'AD-675-OP',
    imageUrl:'.https://violet-total-ox-159.mypinata.cloud/ipfs/QmdAf89YvQoitqgvX54jvF6JJM1evWAmzS5eN9SGztQr4e',
  },
  {
    id: '13',
    brand: 'Datsun',
    model: '240z 1972',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmPuC51h3aRHjL8vHdCfTUwVnB5a5NNLUu4H2uqD3VBH7b',
  },
  {
    id: '14',
    brand: 'Lamborghini',
    model: 'Miura-sv 1971',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmfKq6ghHvjKCoQ2vZ2gzuCGxjXTFG12bDFHciCVYc9h8v',
  },
  {
    id: '15',
    brand: 'Jaguar',
    model: 'E-Type 1968',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmNUNJ1ewmLAqL3XeNQ1x1RC2XV38xSYgm4599XuGV7L6j',
  },
  {
    id: '16',
    brand: 'Fiat',
    model: '124 spider 1924',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmPitB3ddzSqy8rgcSkpcaXoZXY8sLShKfVaAnA8Fnu5Fn',
  },
  {
    id: '17',
    brand: 'Chevrolet',
    model: 'Corvette 1968',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmPGn5mW1xuYeqR4DT52pDH8Ph1kTMqMeSxeuVaie6wQeD',
  },
  {
    id: '18',
    brand: 'Porshe',
    model: '911-r 1967',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmfHrFHe8SiTsjUFgvjPD7Sq4kvvmjWtXZ8weNWCQQfk7t',
  },

  {
    id: '19',
    brand: 'Chevrolet',
    model: 'Camaro 1967',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmRDFkTUCiLcrqww4tg7UcXiAnJTzEJ1nnaJWg4uKJwUzK',
  },
  {
    id: '20',
    brand: 'Shelby',
    model: 'Cobra 1968',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmRSzH8Znp26yYN79ZyXRxdGtDeibdEusn1MBjWnS15JWn',
  },
  {
    id: '21',
    brand: 'Ferrari',
    model: '250 GTO 1962',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmVry8HmLueEJxi3Eac58d1yoYP2DmVk2Vm2J9N62DnsQF',
  },

  {
    id: '22',
    brand: 'Mercedes-Benz',
    model: '300sl-gullwing 1954 ',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmSSRhjxnLjSLk1xJTTf1LKhTgQ4vPCFUFMP5HMNiRYCHz',
  },
  {
    id: '23',
    brand: 'Jeep',
    model: '1954',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmRXMHe44se19mMhWUw1RAewSauPLLzg6rUnH6oZy7c1vm',
  },
  {
    id: '24',
    brand: 'Aston-Martin',
    model: 'DB4 1954',
    registration: 'AD-675-OP',
    imageUrl:'https://violet-total-ox-159.mypinata.cloud/ipfs/QmaR1myk4sdwSZeTtX6W5LE7VMhMuFVfvqzHbGMFrpGbZQ',
  },

  
  
];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          padding:10,
          paddingTop: StatusBar.currentHeight || 42,
          
        }}
        renderItem={({item}) =>{
          return (<>
          <View style={styles.itemView}>
            <Image   
            style={styles.itemImg}
            source={{uri:item.imageUrl}}
            />
           <View style={styles.item}>
              <Text style={styles.title1}>Brand : {item.brand}</Text>
              <Text style={styles.title2}>Model : {item.model}</Text>
              <Text style={styles.title2}>Annee : {item.model}</Text>
              <Text style={styles.title3}>Registred : {item.registration}</Text>
              <Text style={styles.title3}>Registred : {item.registration}</Text>
              <Text style={styles.title3}>Registred : {item.registration}</Text>
              <View>
            
              </View>
            </View>
       
          </View>
          <View style={styles.itemView1}>
          <View style={styles.fixToText}>
                       {/* <Button
                        icon={
                          <MaterialIcons name="details" size={20} color="white" />
                        }
                        style={styles.Btn}
                        onPress={() => setModalVisible(true)}
                      /> */}
                         <Pressable
                          style={[styles.button, styles.buttonOpen]}
                          onPress={() => setModalVisible(true)}>
                          <MaterialIcons name="details" size={20} color={COLORS.orange} />
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonOpen]}
                          onPress={() => setModalVisible(true)}>
                          <MaterialIcons name="update" size={20} color={COLORS.orange} />
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonOpen]}
                          onPress={() => setModalVisible(true)}>
                          <MaterialIcons name="delete" size={20} color={COLORS.orange} />
                        </Pressable>
                     {/*      <Button
                        icon={
                          <MaterialIcons name="update" size={20} color="white" />
                        }
                      />
                          <Button
                        icon={
                          <AntDesign name="delete" size={20} color="white" />
                        }
                      /> */}
              </View>
          </View>
          </>
          )
        }}
        
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#fff'
  },
  item: {
    //backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title1: {
    fontSize: 18,
    fontWeight:'700',
  },
  title2: {
    fontSize: 16,
    opacity:.7,
  },
  title3: {
    fontSize: 14,
    opacity:.8,
    color:'#0099cc',
  },
  itemImg:{
    width:140,
    height:150,
    borderRadius:30,
    marginRight:10,
    padding:10,
  },
  itemView:{
    flexDirection:'row',
    padding:5, 
    marginBottom:20, 
    backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:15,
    borderColor:COLORS.orange,
    //borderBottomRightRadius:0,
    //borderBottomLeftRadius:0,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:.3,
    shadowRadius:20,
    elevation: 30,
  },

  itemView1:{
    width:200,
    //flexDirection:'row',
    padding:10,
    marginTop:-19, 
    marginBottom:20,
    marginLeft:85,
    //backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:15,
    //borderTopRightRadius:0,
    //borderTopLeftRadius:0,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:.3,
    shadowRadius:20,
    elevation: 30,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop:20,
  },

  Btn:{
    marginRight:50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.gruna,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;







/* import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";

const baseURL = "http://192.168.43.132:8081/network-connection/allAssets/org1";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ListViewAssets = () => {
  const [assets, setAssets] = React.useState(null);

  React.useEffect(() => {
    try {
      const allAssets = async () => {
        await axios.get(baseURL).then((res) => {
          console.log("res :", res.data);
          setAssets(res.data);
        });
      };
      allAssets();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={assets}
        renderItem={({ item }) => <Text style={styles.item}>{item.ID}</Text>}
      />
    </View>
  );
};

export default ListViewAssets; */
