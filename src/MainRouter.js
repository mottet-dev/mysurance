import { TabNavigator } from 'react-navigation';
import AddInsuranceScreen from './screens/AddInsuranceScreen';

const MainRouter = TabNavigator({
    insurances: { screen: },
    addinsurance: { screen: AddInsuranceScreen };
});