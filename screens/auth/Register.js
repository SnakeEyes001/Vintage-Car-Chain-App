import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
  Modal,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { baseURL } from "../../constants/utils";
import TextLabel from "../../components/Text";


const Register = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
    defaultValues: {
      firstName: "",
    },
  });

  const resetFields = () => {
    resetField("firstName")
  }

  const onSubmit = async (data) => {
    console.log('data', data);
    try {
      const dataParams = {
        userHash: '',
        firstName: data.firstName,
        lastName: data.lastName,
        adress: data.adress,
        phone: data.phone,
        email: data.email,
        password: data.password,
        firstOwner: isEnabled,
      };
      const config = {
        headers:{"Accept":"application/json, text/plain, /"}
      };
      const res = await axios
      .post(`${baseURL}/users/newUser`,dataParams,config)
      .then((response) => {
        console.log(response);
        return response.data;
      });
      reset();
      setModalVisible(true)
    } catch (error) {
      console.log(error);
    }
 /*      const res = await axios
      .get(`${baseURL}/users/allUsers`,{headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"}})
      .then((response) => {
        console.log(response);
        return response.data;
      });
    } catch (error) {
      console.log(error);
    } */ 
 /*  const configurationObject = {
      url:`${baseURL}/users/newUser`,
      method: "POST",
      data:payload,
    };
    axios(configurationObject)
      .then((response) => {
        console.log("res :", response);
        if (response.status === 200) {
          alert(
            ` You have posted new Patient: ${JSON.stringify(response.data)}`
          );
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        alert("An error has occurred");
        setIsLoading(false);
      }); */
/*     const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const dataParams = {
      userHash: '',
      firstname: data.firstName,
      lastname: data.lastName,
      adress: data.adress,
      phone: data.phone,
      email: data.email,
      password: data.passowrd,
      firstOwner: isEnabled,
    };

    try {
    const res = await axios
        .post(`${baseURL}/users/newUser`, dataParams, config)
        .then((response) => {
          console.log(response);
          return response.data;
        });
 
      console.log('data :', data);
    } catch (error) {
      console.log(error);
    } */
 /*    const configurationObject = {
      url:`${baseURL}/users/newUser`,
      method: "POST",
      data: {
        userHash: '',
        firstname: data.firstName,
        lastname: data.lastName,
        adress: data.adress,
        phone: data.phone,
        email: data.email,
        password: data.passowrd,
        firstOwner: isEnabled,
      },
    };
    axios(configurationObject)
      .then((response) => {
        console.log("res :", response);
        if (response.status === 200) {
          alert(
            ` You have posted new Patient: ${JSON.stringify(response.data)}`
          );
        } else {
          throw new Error("An error has occurred");
        }
      })
      .catch((error) => {
        alert("An error has occurred");
        setIsLoading(false);
      }); */
    //navigation.navigate(ROUTES.LOGIN);
    //console.log(result);
  };

  const onPress = (e) => {
    console.log("iccii :", e.values);
  };

  const onPressModal = () => {
    navigation.navigate(ROUTES.LOGIN)
    setModalVisible(!modalVisible)
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <Text style={styles.loginContinueTxt}>Enter your infos</Text>
            <View style={styles.firstInput}>
              <Controller
                control={control}
                //{...register("firstName", { required: true })}
                name="firstName"
                defaultValue=""
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    //iconName="person"
                    //iconType="MaterialIcons"
                    placeholder="Firstname"
                    style={styles.firstNameInput}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
              />
              <Controller
                control={control}
                //{...register("lastName", { required: true })}
                name="lastName"
                defaultValue=""
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    placeholder="lastname"
                    style={styles.lastNameInput}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                  />
                )}
              />
            </View>
   {/*          <Controller
              control={control}
              name="dateofbirth"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  placeholder="DateOfBirth"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            /> */}
            <Controller
              control={control}
              //{...register("adress", { required: true })}
              name="adress"
              defaultValue=""
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  placeholder="Adress"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
            <Controller
              control={control}
              //{...register("phone", { required: true })}
              name="phone"
              defaultValue=""
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  placeholder="Phone"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
            <Controller
              control={control}
              //{...register("email", { required: true })}
              name="email"
              defaultValue=""
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
            <Controller
              control={control}
              //{...register("password", { required: true })}
              name="password"
              defaultValue=""
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
            <View style={styles.firstInput}>
            <Text style={styles.labelText}>
              First owner
            </Text>
            <Controller
              control={control}
              //{...register("firstOwner", { required: true })}
              name="firstOwner"
              defaultValue=""
              render={({ field: { onChange, value, onBlur } }) => (
                <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              )}
            />
            </View>

            <View style={styles.loginBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
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
                  <Text style={styles.loginText}>Create account</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View style={styles.footer}></View>
        </View>
      </ScrollView>
      <View style={styles.centeredView}>
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
            <Text style={styles.modalText}>Your account has been successfully created</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={
                () => onPressModal()
              }>
              <Text style={styles.textStyle}>Log in </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
   {/*    <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
    </SafeAreaView>
  );
};

export default Register;

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
  firstInput: {
    textAlign: "center",
    flexDirection: "row",
  },
  firstNameInput: {
    marginRight: 18,
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    width: "47%",
    paddingVertical: 0,
  },
  lastNameInput: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    width: "47%",
    paddingVertical: 0,
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
    color: COLORS.white,
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

  labelText:{
    marginLeft: 10,
    marginTop:12,
    color : COLORS.gray,
    marginHorizontal:40,
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
