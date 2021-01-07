import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import App from './App'
import Login from './sign-in'



const RealStack=createStackNavigator({
    Home:{
        screen:App
    },
    Login:{
        screen:Login
    }
})

export default createAppContainer(RealStack)                    