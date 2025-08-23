import { useState,useEffect } from "react";

function JokeApp() {
  const [joke, setJoke] = useState({});
  const [error,setError]=useState(null)
  const [newJoke,setNewJoke]=useState(0)
  const [loading,setLoading]=useState(true)
  console.log({})
  const fetchJoke = async () => {
    setLoading(true)
  try{
     const response= await fetch('https://official-joke-api.appspot.com/random_joke')
     if(!response.ok){
      throw new Error("data fetching error")
     }
   const data= await response.json()
console.log(data)
   setJoke(data)
   setLoading(false)
  }catch(e){
    console.error(e)
  }
  };

  useEffect(() => {
    // 👉 Call fetchJoke when component mounts
    fetchJoke()
  }, [newJoke]);

return(
    <div>
      <h2>Random Joke</h2>
      <p>{joke?joke.setup:null}</p>
      <p>{joke?joke.punchline:null}</p>
      <button onClick={()=>setNewJoke(prev=>prev+1)}>Get New Joke</button>
    </div>
)


}

export default JokeApp