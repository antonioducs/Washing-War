import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation-stack';

import theme from '../../styles/theme';
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT } from '../../config/constants';


export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.backgroundGray
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 130,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
    margin: 8,
    marginVertical: 4
  },
  tabsContainer: {
    height: SCREEN_HEIGHT - Header.HEIGHT - STATUSBAR_HEIGHT
  },
  header: {
    height: Header.HEIGHT,
    marginTop: STATUSBAR_HEIGHT
  }
});
