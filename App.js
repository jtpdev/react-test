import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AddBoardScreen from './components/AddBoardScreen';
import BoardDetailScreen from './components/BoardDetailScreen';
import BoardScreen from './components/BoardScreen';
import EditBoardScreen from './components/EditBoardScreen';

const RootStack = createStackNavigator(
  {
    Board: BoardScreen,
    BoardDetails: BoardDetailScreen,
    AddBoard: AddBoardScreen,
    EditBoard: EditBoardScreen,
  },
  {
    initialRouteName: 'Board',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;