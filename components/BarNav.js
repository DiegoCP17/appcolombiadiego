import MainPage from "./MainPage";
import { Icon } from "react-native-elements";
import Regiones from "./Regiones";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import presidentes from "./Presidentes";

const Tab = createBottomTabNavigator();

function BarNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={MainPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="font-awesome" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Regiones"
        component={Regiones}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" type="font-awesome" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Presidentes"
        component={presidentes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BarNav;
