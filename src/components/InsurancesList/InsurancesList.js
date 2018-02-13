import React, { Component } from 'react';
import { ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { textColor } from '../../constants';

class InsurancesList extends Component {
    renderRow(rowData) {
        return (
            <ListItem 
                title={rowData.title}
                subtitle={rowData.category}
                chevronColor="black"
                titleStyle={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}
                subtitleStyle={{ color: textColor, fontSize: 16, fontWeight: 'normal' }}
                rightTitle={rowData.premium}
                rightTitleStyle={{ color: textColor, fontSize: 16, fontWeight: 'normal' }}
            />
        );
    }

    render() {
        const { listStyle } = styles;

        return (
            <List containerStyle={listStyle}>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.props.dataSource}
                />
            </List>
        );
    }
}

const styles = {
    listStyle: {
        marginTop: 0,
        backgroundColor: 'rgba(0,0,0,0)'
    }
}

const mapStateToProps = state => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return { dataSource: ds.cloneWithRows(state.insurances) };
}

export default connect(mapStateToProps)(InsurancesList);