
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './Header';
import MentalTasks from './MentalTasks';
import ProgrammingTasks from './ProgrammingTasks';
const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
function App() {

  const StartPage = styled.div`
 width:100%;
 height:80vh;
 display:flex;
 align-items:center;
 justify-content:center;
 color:lightgray;
 font-size:56px;
 font-weight:900;

 `
  return (
    <Container className="App">
      <Header />
      <Routes>
        <Route path='/mental_tasks' element={<MentalTasks />} />
        <Route path='/programming_tasks' element={<ProgrammingTasks />} />
        <Route path='*' element={<StartPage ><div>Выберите Раздел</div></StartPage>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
