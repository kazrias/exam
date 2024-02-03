import './App.css';
import { Button } from './components/Button/Button';
import { ModalBox } from './components/ModalBox/ModalBox';
import { useDispatch, useSelector } from 'react-redux'
import { createHandle, showHandle } from './store/slices/appSlice'
import { UsersLists } from './components/UsersLists/UsersLists';
function App() {
  const createClick = useSelector(state => state.app.createIsClicked)
  const showClick = useSelector(state => state.app.showIsClicked)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="buttons">
        <Button onClick={() => dispatch(createHandle({ createClick: true }))} type={'main'}>Create User</Button>
        <Button onClick={() => dispatch(showHandle({ showClick: true }))} type={'secondary'}>Show Users</Button>
      </div>
      {createClick && <ModalBox />}
      {showClick && <UsersLists />}



    </div>
  );
}

export default App;
