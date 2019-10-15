import React, { useState }  from 'react';
import { View, Animated } from 'react-native';
import { Header } from 'react-navigation-stack';
import { SCREEN_HEIGHT } from '.././../config/constants';
import { styles } from './styles';


import HeaderHome from '../../components/HeaderUser/HeaderUser';
import UserDetails from '../../components/UserDetails/UserDetails';
import ListAtividades from '../../components/ListAtividades/ListAtividades';

const SUGGESTED_HEIGHT = SCREEN_HEIGHT / 3.5;
const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

export default function HomeScreen({ navigation }) {
  const [scrollY] = useState(new Animated.Value(0));

  const translateY = scrollY.interpolate({
    inputRange: [0, HIDE_HEIGHT + 80],
    outputRange: [0, -HIDE_HEIGHT],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.safeArea}>
     <Animated.View
                    style={{translateY}}
                >
        <View>
          <View style={styles.header}>
            <HeaderHome navigation={navigation}/>
          </View>
          <UserDetails />
        </View>
        <View style={styles.tabsContainer}>
            <ListAtividades scrollY={scrollY}/>
        </View>
      </Animated.View>
    </View>
  );
}
