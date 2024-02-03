import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Modal } from './components/Modal/Modal';
function App() {
  const [createIsClicked, setCreateIsClicked] = useState(false)
  const [showIsClicked, setShowIsClicked] = useState(false)
  return (
    <div className="App">
      <div className="buttons">
        <Button onClick={() => setCreateIsClicked(true)} type={'main'}>Create User</Button>
        <Button onClick={() => setShowIsClicked(true)} type={'secondary'}>Show Users</Button>
      </div>
      {
        createIsClicked && <Modal />
      }
    </div>
  );
}

export default App;
