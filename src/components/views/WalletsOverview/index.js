import React from 'react'
import { HeaderIcon } from '../../widgets'
import { inject, observer } from 'mobx-react';
import {colors,measures} from '@common/styles'

import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View, Text } from 'react-native';
import { Wallets as WalletsActions, Prices as PricesActions } from '@common/actions';


@inject('prices','wallets')
@observer
export class WalletsOverview extends React.Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Wallets',
        headerRight: (
            <HeaderIcon
                name='add'
                size='large'
                color={colors.white}
                onPress={() => navigation.navigate('NewWalletName')} />

        )
    });

    componentDidMount(){

    }
    async populate(){
        try {
            await Promise.all([
                WalletsActions.loadWallets(),
                PricesActions.getPrice()
            ]);
        } catch (e){
            console.warn(e)
        }
    }
    renderItem = ({item}) => {

    }
    renderBody = (list) => {

    }

    render(){
        const {wallets} = this.props;
        debugger;
        console.log(wallets);
        return(
            <View>
                <Text>{wallets.list}</Text>
              
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: measures.defaultPadding,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    content: {
        marginTop: measures.defaultMargin
    }
});