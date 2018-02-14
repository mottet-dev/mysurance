import React from 'react';
import { Icon } from 'react-native-elements';

import { lightColor } from '../../constants';

const NavigationChevron = props => {
    const styles = {
        containerStyle: {
            width: 28,
            height: 28
        }
    };

    return (
        <Icon 
            name="chevron-left"
            color={lightColor}
            containerStyle={styles.containerStyle}
            onPress={() => props.navigateInsurances()}
        />
    );
};

export default NavigationChevron;