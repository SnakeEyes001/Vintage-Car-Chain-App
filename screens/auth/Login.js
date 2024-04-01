import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, ROUTES } from "../../constants";
import Logo from "../../assets/icons/LOGO.svg";
import { useNavigation } from "@react-navigation/native";
import LogoApp from '../../assets/logo-app.png'
import Spiner from "../../components/Spiner";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { baseURL } from "../../constants/utils";

const Login = (props) => {
  // const {navigation} = props;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  
  const {
    control,
    reset,
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid,isDirty },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log('data', data);
    let result = null;
    const email = data.email;
    const passowrd = data.passowrd;
    try {
      const config = {
        headers:{"Accept":"application/json, text/plain, /"}
      };
      const res = await axios
      .get(`${baseURL}/users/login/${email}/${passowrd}`,config)
      .then((response) => {
        console.log(response);
        result=response.data;
        return response.data;
      });
      if(result==true){
        reset();
        navigation.navigate(ROUTES.HOME);
      }
      else{
        reset();
        setModalVisible(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPressModal = () => {
    navigation.navigate(ROUTES.LOGIN)
    setModalVisible(!modalVisible)
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* <ScrollView style={styles.scrollView}> */}
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
          <Image
            style={styles.logoApp}
            source={require('../../assets/logo-app.png')}
          />
            
          </View>
          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <Controller
                control={control}
                //{...register("firstName", { required: true })}
                name="email"
                defaultValue=""
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    //iconName="person"
                    //iconType="MaterialIcons"
                    placeholder="Email"
                    style={styles.emailInput}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
              />
          <Controller
                control={control}
                //{...register("firstName", { required: true })}
                name="password"
                defaultValue=""
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    //iconName="person"
                    //iconType="MaterialIcons"
                    placeholder="Password"
                    style={styles.passwordInput}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
              />
          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.gradientForm1]}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 1.0, x: 0.0 }}
            >
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.7}
                style={styles.loginBtn}
              >
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                userId: "X0001",
              })
            }
            style={styles.forgotPassBtn}
          >
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
   {/*  </ScrollView> */}
    
{/*    <View style={styles.centeredView}>
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
            <Text style={styles.modalText}>This user does not exist, please check your email and password</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={
                () => onPressModal()
              }>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View> */}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  brandAvec: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
    opacity: 0.9,
  },
  brandChain: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.gradientForm,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  emailInput: {
    marginRight: 18,
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    width: "100%",
    paddingVertical: 0,
  },
    passwordInput: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    width: "100%",
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
  },
  loginText: {
    color: COLORS.orange,
    fontSize: 16,
    fontWeight: "400",
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },
  // footer
  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    flexDirection: "row",
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: "bold",
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  // utils
  wFull: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },

  logoApp:{
     width:200,
     height:200,
  },
   // css modal
   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
    backgroundColor: '#F194FF',
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
