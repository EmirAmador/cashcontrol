import React, {useEffect, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from "react-native";
import { Context as IngresoContext } from "../../providers/IngresoContext";
import { Context as AuthContext } from "../../providers/AuthContext";
import Ingreso from "./ingreso";
const { width, height } = Dimensions.get("window");

const ListaIngreso = ({ navigation, ingresos }) => {
  const { state} = useContext(AuthContext);

    const { state: ingresoState,setCurrentIngreso,deleteIngreso } = useContext(IngresoContext);
    useEffect(() => {
      ingresoState.currentIngreso
    }, [ingresoState.currentIngreso]);
    
    const handleDeleteIngreso = (ingreso) => {
      deleteIngreso(ingreso.id);
      navigation.navigate("listadoIngresos");
    };

    const handleSelectIngreso = (ingreso) => {
      setCurrentIngreso(ingreso);
      navigation.navigate("modificarIngreso");
    };
   
    const emptyFlatList = (
      <View style={styles.emptyNotes}>
        <Text>Aun no tienes ingresos para mostrar...</Text>
      </View>
    );

    const alertDelete = (ingreso) => {
      setCurrentIngreso(ingreso);
      Alert.alert(
        "Eliminar Ingreso",
        "Estas seguro de eliminar este ingreso?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => handleDeleteIngreso(ingreso)}
        ]
      );
    }
    return (
      <View style={styles.lista}>
          
        <FlatList
          data={ingresos}
          numColumns={2}
          renderItem={({item }) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  handleSelectIngreso(item);
                }}
                onLongPress={() => {
                  alertDelete(item);
                }}
              >
                  
                <Ingreso
                  key={item.id}
                  descripcion={item.descripcion}
                  monto={item.monto}
                />
              </TouchableOpacity>
            </>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    lista:{
        backgroundColor:"white",
        height: height * 0.75,
        width: width * 0.9,
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 8
    },
    emptyNotes: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
    },
  });
  
  export default ListaIngreso;
  