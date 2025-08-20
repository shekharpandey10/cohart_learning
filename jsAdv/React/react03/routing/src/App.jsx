import { useEffect, useState,useRef } from 'react'
import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from 'react-router-dom'
import { Abc } from './Abc'
import {useCounter} from './hooks/useFetch'
function App() {
  return (
  <div>
    <Comp/>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Root/>}/>
          <Route path='/hello' element={<Hello/>}/>
          <Route path='/ji' element={<Ji />}/>
          {/* <Route path='*' element={<Abc/>}/> */}
          

          </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
function PageNotFound(){
  return(
    <div>
      Page is not found
    </div>
  )
}
function Root(){
  return (
    <div>
      root page
       <Form/>
    </div>
  )
}
function Hello(){
  const navigate=useNavigate()
  
  useEffect(()=>{
    const time=setTimeout(()=>{
      navigate('/')
    },10000)

    return ()=>clearTimeout(time)
  })
  return(
    <div>
      Hello
    </div>
  )
}

function Layout(){
  return(
    <div>
      <Link to='/'>Home page</Link>
    <Link to='/hello'>Team Hello</Link>
    <Link to="ji">Team ji</Link>
      <Outlet/>
      FOOTER
    </div>
  )
}
function Ji(){
const {s} = Abc()
const {count,increase}=useCounter()
const x=useRef()
console.log(x )
   return(
    <div>
     <button onClick={increase}>{count}</button>
     <h1>{x.current}</h1>
     India
    </div>
  )
}
function Form(){
  const [message,setMessage]=useState(['hello','how are you'])
  const chatBoxRaf=useRef(null)
  function addMesage(message){
    setMessage((prevMsg)=>[...prevMsg,"new message"])
  }

  useEffect(()=>{
    chatBoxRaf.current.scrollTop=chatBoxRaf.current.scrollHeight
  },[message])
return(
  <div
    ref={chatBoxRaf}
    style={{height:'400px', overflow:'scroll', border:'1px solid green'}}
  >
      <div>
        {message.map((msg,idx)=>
          <div>{msg}</div>
        )}
      </div>
      <button onClick={addMesage}>Add msg</button>
  </div>
)
}

function Comp(){
  const a = useRef();
  useEffect(()=>{
    console.log(a["current"], "himanshu")
    
  },[])
  
  return <>
  <input ref = {a}/>
  
  </>
}


export default App
