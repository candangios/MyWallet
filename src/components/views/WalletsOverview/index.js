import React from 'react'
// import { HeaderIcon } from '@components/widgets'
import { inject, observer } from 'mobx-react';

import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View, Text } from 'react-native';


// @inject('prices', 'wallets')
export class WalletsOverview extends React.Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Wallets',
        // headerRight: (
        //     <HeaderIcon
        //         name='add'
        //         size='large'
        //         color={colors.white}
        //         onPress={() => navigation.navigate('NewWalletName')} />
        // )
    });

    render(){
        return(
            <View>
                <Text>hehe</Text>
            </View>
        );
    }
}