

import React from 'react';
import {Text,Button} from 'react-native';
import DealsApp from './DealApp/DealsApp';
import {useNetInfo} from "@react-native-community/netinfo";


const App = () => {

  const netInfo = useNetInfo();
  console.log(netInfo.isInternetReachable);

  return (
    <DealsApp/>
  );
};

export default App;
