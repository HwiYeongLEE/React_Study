
import { useState } from 'react';
import './App.css';



function App() {
  return (
    <div>
      <h3 className="App">블로그 만들기</h3>
      <Posting title='new title1'/>
      <Posting title='new title2'/>
      <Posting title='new title3'/>
    </div>
  );
}
function Posting(prop) {
  let [like, setLike] = useState(0)
  return(
    <div className="App">
      {prop.title}
      <span onClick={()=> setLike(like+1)}>  LIKE 👍</span>
      {like}
    </div>
  )
}

export default App;
