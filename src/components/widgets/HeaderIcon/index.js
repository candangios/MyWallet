import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../widgets';
import { measures, colors } from '../../../common/styles';

export const HeaderIcon = ({ onPress, ...props }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            
            {/* <Icon {...props} /> */}
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        marginHorizontal: measures.defaultMargin * 2,
        backgroundColor: colors.green
        
    }
});