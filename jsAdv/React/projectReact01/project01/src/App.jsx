import { useEffect, useState } from 'react'
import Header from './component/Header/Header'
import Post from './component/Header/Post'

const todolist=[{
  title:'go to gym',
  done:true
},
{
  title:'have a food',
  done:false
}]

const comp=todolist.map(todo=><Card key={todo.id} title={todo.title} done={todo.done} />)
function App() {
  const [like,setlike]=useState(0)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: 'gray'
      }}
    >
    <Todo/>
      <Post
        name={"Rohit Singh"}
        title={"Full stack web developer | DSA @leetc..."}
        image={'https://media.licdn.com/dms/image/v2/D5635AQFDrmEJNqv61Q/profile-framedphoto-shrink_100_100/B56ZcTBHK.HgAk-/0/1748370748429?e=1754118000&v=beta&t=2FFiH2DGbjLK8RgiVo0tCgIR0J95yRxtecxk81fl8lw'}
        time={"1w."}
        desc={'Day 140 - Solved Rotten Orange on GFG 160 days challenge...'}
        like={like}
      />

      <Post
        name={'Aakash'}
        title={'Promoted'}
        image={"https://avatars.githubusercontent.com/u/158845488?v=4"} // Fix added here
        desc={"Feeling proud to be promoted! 🎉"}
        linkk={[
          "https://media.licdn.com/dms/image/v2/D4D22AQE30vuDIeSnHA/feedshare-shrink_800/B4DZgypwE5H4Ag-/0/1753196465893?e=1756339200&v=beta&t=mkUfeRHNPSbBK4QoHPy2JHuQKJ223s0ewmfDPj_Lvqw",
          "https://media.licdn.com/dms/image/v2/D4D22AQGVyzyvjMfDlw/feedshare-shrink_800/B4DZgypwEkG8Ak-/0/1753196465608?e=1756339200&v=beta&t=f0y5VQ25WGcK1XlFjm0TPCA8XznlJqGZjH6oaEH4r-Q"
        ]}
        like={like}
      />
      
      {/* Optional: Add header or other post styles */}
      {/* <Header /> */}
      {/* <PostComponent /> */}
      {comp}
    </div>
  )
}
function Card({title,done,key}){
  return(
    <div>
      {key}{title}
      {done?"Done":"please finish the task"}
    </div>
  )
}

const style = {
  width: 200,
  backgroundColor: "gray",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  display: "flex",
  gap: 10,
  padding: 10,
  alignItems: "center"
};

function PostComponent() {
  return (
    <div style={style}>
      <img
        src="https://avatars.githubusercontent.com/u/158845488?v=4"
        alt=""
        style={{
          width: 30,
          height: 30,
          borderRadius: 20
        }}
      />
      <div>
        <b>shekharpandey10</b> <br />
        <div>2000 Followers</div>
        <div>12min</div>
      </div>
    </div>
  );
}

function Todo(){
   const [todo, setTodo] = useState(1);
  const [list, setList] = useState({});
  console.log('first ',list)
  if (Object.keys(list).length === 0) {
    console.log('api call')
    fetch("https://jsonplaceholder.typicode.com/todos/" + todo)
      .then(res => res.json())
      .then((json) =>{ 
        console.log('get data',json)
        setList(json)});
      console.log('set the state')
  }
  return(
    
    <div>
      {console.log('third')}
      <button onClick={()=>setTodo(1)} style={{color:todo===1?'red':'black'}}>todo1</button>
      <button onClick={()=>setTodo(2)} style={{color:todo===2?'red':'black'}}>todo2</button>
      <button onClick={()=>setTodo(3)} style={{color:todo===3?'red':'black'}}>todo3</button>
      <button onClick={()=>setTodo(4)} style={{color:todo===4?'red':'black'}}>todo4</button>
      <button onClick={()=>setTodo(5)} style={{color:todo===5?'red':'black'}}>todo5</button>
      <br />
      {list.title}
    </div>
  )

}
export default App;
