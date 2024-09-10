/** @format */
import ChartList from './chartList/ChartList'
import './list.css'
import Userinfo from './userInfo/Userinfo'
const List = () => {
    return (
        <div className='list'>
            <Userinfo />
            <ChartList />
        </div>
    )
}
export default List
