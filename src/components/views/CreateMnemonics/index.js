import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import autobind from 'autobind-decorator';
import {colors, measures} from '../../../common/styles';
import { autorun } from 'mobx';
import { Wallet as WalletUtils } from '@common/utils';
import { Button, TextBullet } from '../../widgets';

export class CreateMnemonics extends React.Component{
    static navigationOptions = {
        title: 'Create Wallet'
    }
    state = { mnemonics: null };
    @autobind
    onPressProceed(){
        const {mnemonics} = this.state;
        const {walletName, walletDescription} = this.props.navigation.state.params;
        this.props.navigation.navigate('ConfirmMnemonics',{mnemonics, walletName, walletDescription});
    }

    componentDidMount(){
        this.onPressGenerateMmenonics();
    }
    @autobind
    onPressGenerateMmenonics(){
        const mnemonics = WalletUtils.generateMnemonics();
        this.setState({mnemonics});
    }

    renderMnenonic = (mnemonic, index ) => (
        <View style={styles.mnemonic} key={index}>
            <TextBullet>{mnemonic}</TextBullet>
        </View>
    );

    renderBody(){
        const {mnemonics} = this.state;
        if (!mnemonics){
            return <Button onPress = {this.onPressGenerateMmenonics}>Generate Mnemonics</Button>;
        } 
        return(
            <View style={styles.mnemonicsContainer}>
                {mnemonics.map(this.renderMnenonic)}
            </View>
        ); 
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.message}>Save carefully your sequence of mnemonics:</Text>
                {this.renderBody()}
                <View style={styles.buttonsContainer}>
                    {this.state.mnemonics && (
                        <Button onPress={this.onPressProceed}>Proceed</Button>
                    )}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 2,
        backgroundColor: colors.defaultBackground,
        padding: measures.defaultPadding,
    },
    message:{
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: measures.defaultMargin,
        marginHorizontal: 32,
    },
    mnemonicsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%',
    },
    mnemonic: {
        margin: 4,
    },
    buttonContainer:{
        width: '100%',
        justifyContent: 'flex-end',
        height: 104,
    },

})