import { TabNavigator } from 'react-navigation';

import AddInsuranceScreen from './screens/AddInsuranceScreen';
import InsurancesScreen from './screens/InsurancesScreen';

const MainRouter = TabNavigator({
    insurances: { screen: InsurancesScreen },
    addinsurance: { screen: AddInsuranceScreen },
}, {
    navigationOptions: {
        tabBarVisible: false
    },
    lazy: true
});

export default MainRouter;