import './UsersLists.css'
import { useSelector, useDispatch } from 'react-redux'
import { User } from '../User/User'
import { showHandle } from '../../store/slices/appSlice'

export const UsersLists = () => {
  //doesnt work after refresh
  const users = useSelector(state => state.app.users)
  const dispatch = useDispatch()
  return (
    <div className="usersList">
      <button onClick={() => dispatch(showHandle({ showClick: false }))} className='closeBtn'>Close this</button>
      {
        users.length ? users.map(({ id, userName, email }) => {
          return (
            <User key={id} userName={userName} email={email} />
          )
        }):'Create USERS'
      }
    </div>
  )
}
