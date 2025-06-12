import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Pages/Layout/Layout'
import IncomePage from '../Pages/IncomePage/IncomePage'
import CostPage from '../Pages/CostPage/CostPage'
import PlaceHolder from '../Pages/PlaceHolder/PlaceHolder'

export  const routs = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children : [
            {
                path:"/",
                element:<PlaceHolder/>
            },
            {
                path:"/income",
                element:<IncomePage/>
            },
            {
                path:"/cost",
                element:<CostPage/>
            },
        ]
    }
]) 