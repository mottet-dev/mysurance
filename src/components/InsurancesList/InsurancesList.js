import React, { Component } from 'react';
import { ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { textColor } from '../../constants';

class InsurancesList extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2']),
        };
    }

    renderRow(rowData) {
        return (
            <ListItem 
                title="Groupe Mutuel"
                subtitle="Health Insurance"
                chevronColor="black"
                titleStyle={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}
                subtitleStyle={{ color: textColor, fontSize: 16, fontWeight: 'normal' }}
                rightTitle="2000$"
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
                    dataSource={this.state.dataSource}
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


export default InsurancesList;