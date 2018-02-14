import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { remove_insurance } from '../../actions/insurances_actions';
import Overlay from 'react-native-modal-overlay';
import PropTypes from 'prop-types';

import { textColor, backgroundColor, lightColor, strongColor } from '../../constants';
import ListHeader from '../ListHeader/ListHeader';

class InsurancesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            currentSelectedInsurance: {}
        };
    }

    renderRow(rowData) {
        return (
            <ListItem 
                title={rowData.title}
                subtitle={rowData.category}
                chevronColor="black"
                titleStyle={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}
                subtitleStyle={{ color: textColor, fontSize: 12, fontWeight: 'normal' }}
                rightTitle={`${rowData.premium} CHF`}
                rightTitleStyle={{ color: textColor, fontSize: 16, fontWeight: 'normal' }}
                onPress={() => this.setState({ showModal: true, currentSelectedInsurance: rowData })}
            />
        );
    }

    handleCancel() {
        this.setState({ showModal: false, currentSelectedInsurance: {} });
    }

    handleDelete() {
        this.props.remove_insurance(this.state.currentSelectedInsurance.id);
        this.setState({ showModal: false, currentSelectedInsurance: {} });
    }

    render() {
        const { 
            listStyle, 
            modalStrongTextStyle, 
            modalTextStyle, 
            modalButtonLayout,
            buttonMainStyle,
            buttonCancelStyle,
            buttonDeleteStyle,
            modalStyle
        } = styles;
        const { title, premium, category } = this.state.currentSelectedInsurance;

        return (
            <View>
                <List containerStyle={listStyle}>
                    <ListView
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.props.dataSource}
                        enableEmptySections={true}
                        renderHeader={() => <ListHeader premiumSum={this.props.premiumSum} />}
                    />
                </List>

                
                <Overlay 
                    visible={this.state.showModal}
                    childrenWrapperStyle={modalStyle}
                >
                    <Text style={[modalTextStyle, {fontSize: 18}]}>
                        Are you sure you want to delete this insurance ?
                    </Text>

                    <Text style={modalStrongTextStyle}>Title:</Text>
                    <Text style={modalTextStyle}>{title}</Text>

                    <Text style={modalStrongTextStyle}>Yearly Premium:</Text>
                    <Text style={modalTextStyle}>{premium}</Text>

                    <Text style={modalStrongTextStyle}>Category:</Text>
                    <Text style={modalTextStyle}>{category}</Text>
                    
                    <View style={modalButtonLayout}>
                        <Button 
                            title="Cancel"
                            buttonStyle={[buttonMainStyle, buttonCancelStyle]}
                            textStyle={{ color: textColor}}
                            onPress={() => this.handleCancel()}
                        />

                        <Button
                            title="Delete"
                            buttonStyle={[buttonMainStyle, buttonDeleteStyle]}
                            textStyle={{ color: lightColor}}
                            onPress={() => this.handleDelete()}
                        />
                    </View>
                </Overlay>
            </View>
        );
    }
}

const styles = {
    listStyle: {
        marginTop: 0,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    modalStyle: {
        backgroundColor: backgroundColor,
        minHeight: 300,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    modalStrongTextStyle: {
        fontWeight: 'bold',
        color: textColor
    },
    modalTextStyle: {
        color: textColor
    },
    modalButtonLayout: {
        flexDirection: 'row'
    },
    buttonMainStyle: {
        borderRadius: 50,
        width: 120
    },
    buttonCancelStyle: {
        backgroundColor: lightColor,
    },
    buttonDeleteStyle: {
        backgroundColor: strongColor
    },
}

InsurancesList.propTypes = {
    remove_insurance: PropTypes.func.isRequired,
    premiumSum: PropTypes.number.isRequired,
    dataSource: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let premiumSum = 0;

    const insurancesPremium = state.insurances.map(insurance => {
        return parseInt(insurance.premium, 10);
    });

    if (insurancesPremium.length > 0) {
        premiumSum = insurancesPremium.reduce((pv, cv) => pv + cv, 0);
    }
    
    return { 
        dataSource: ds.cloneWithRows(state.insurances), 
        premiumSum 
    };
}

export default connect(mapStateToProps, { remove_insurance })(InsurancesList);