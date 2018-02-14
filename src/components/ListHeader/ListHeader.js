import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { textColor, strongColor } from '../../constants';

const ListHeader = props => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                Total Yearly Premium: {props.premiumSum} CHF
            </Text>
        </View>
    );
};

ListHeader.propTypes = {
    premiumSum: PropTypes.number.isRequired
};

const styles = {
    textStyle: {
        fontSize: 18,
        color: textColor,
        fontWeight: 'bold'
    },
    containerStyle: {
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: strongColor,
    }
};

export default ListHeader;