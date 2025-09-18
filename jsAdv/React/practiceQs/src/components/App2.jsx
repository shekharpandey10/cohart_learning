// import React, { createContext, useReducer, useContext } from 'react'

// // 1. Context
// const AppContext = createContext()

// // 2. Reducer function
// function reducerFun(state, action) {
//     console.log(state,"hello1")
//     console.log(action,"hello2")
//   switch (action.type) {
//     case 'THEME':
//       return {...state, theme: state.theme === 'light' ? 'dark' : 'light' }
//     case 'LANGUAGE':
//       return {...state, language: state.language === 'en' ? 'hi' : 'en' }
//     default:
//       return state
//   }
// }

// // 3. Provider
// export function AppProvider({ children }) {
//     // console.log('hello0')
//   const [state, dispatch] = useReducer(reducerFun, {
//     theme: 'light',
//     language: 'en'
//   })

//   return (
//     <AppContext.Provider value={{state, dispatch}}>
//       {children}
//     </AppContext.Provider>
//   )
// }

// // 4. Consumer
// function HomePage() {
//   const { state, dispatch } = useContext(AppContext)
// // console.log('hello2')
//   const text = state.language === 'en' ? 'Hello, User!' : 'नमस्ते, उपयोगकर्ता!'

//   return (
//     <div style={{
//       backgroundColor: state.theme === 'light' ? 'black' : 'white',
//       color: state.theme === 'light' ? 'white' : 'black',
//       height: '100vh'
//     }}>
//       <p>{text}</p>
//       <button onClick={() => dispatch({type: 'THEME'})}>Toggle Theme</button>
//       <button onClick={() => dispatch({type: 'LANGUAGE'})}>Toggle Language</button>
//     </div>
//   )
// }

// export default function App2(){
//     // console.log('hello1')
//   return (
//     <AppProvider>
//       <HomePage />
//     </AppProvider>
//   )
// }





// import React, { createContext, useContext } from "react";

// const UserContext = createContext({ name: "Guest" });

// function Profile() {
//     console.log('hello2')
//   const { name } = useContext(UserContext);
//   return <h1>Welcome, {name && name.toUpperCase()}</h1>;
// }

// export default function App() {
//     console.log('hello1')
//   return (
//     <UserContext.Provider value={{name:"Guest"}}>
//       <Profile />
//     </UserContext.Provider>
//   );
// }






// import React, { createContext, useReducer, useContext } from "react";

// const CartContext = createContext();

// function reducer(state, action) {
//     console.log(state,"state")
//     console.log(action,"action")
//   switch (action.type) {
//     case "ADD":
//       return { items: [...state.items, action.payload] };
//     case "REMOVE":
//       return { items: state.items.slice(0,-1) };
//     default:
//       return state;
//   }
// }

// export default function App2() {
//   const [state, dispatch] = useReducer(reducer, { items: [] });
//   console.log('app2')

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       <Cart />
//     </CartContext.Provider>
//   );
// }

// function Cart() {
//   const { state, dispatch } = useContext(CartContext);

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "ADD", payload: "Apple" })}>
//         Add Apple
//       </button>
//       <button onClick={() => dispatch({ type: "REMOVE", payload: "Apple" })}>
//         Remove Apple
//       </button>
//       <p>{JSON.stringify(state)}</p>
//     </div>
//   );
// }


// import React, { createContext, useContext } from "react";

// const ThemeContext = createContext();
// const AuthContext = createContext();

// function Navbar() {
//   const { theme } = useContext(ThemeContext);
//   const { user } = useContext(AuthContext);

//   return (
//     <nav style={{ background: theme==='light'?'white':"black" }}>
//       <h1>Hello, {user.name}</h1>
//     </nav>
//   );
// }

// export default function App() {
    
//   return (
//       <AuthContext.Provider value={{user:{name:'shekhar'}}}>
//     <ThemeContext.Provider value={{ theme: "light" }}>
//         <Navbar />
//     </ThemeContext.Provider>
//       </AuthContext.Provider>
//   );
// }




// const CounterContext = createContext();

// function Display() {
//   const { count } = useContext(CounterContext);
//   return <h1>{count}</h1>;
// }

// function Increment() {
//   const { setCount } = useContext(CounterContext);
//   return <button onClick={() => setCount(c => c + 1)}>+</button>;
// }

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <CounterContext.Provider value={{ count, setCount }}>
//       <Display />
//       <Increment />
//     </CounterContext.Provider>
//   );
// }




// import React, { createContext, useContext, useReducer } from "react";

// const AppContext = createContext();

// function reducer(state, action) {
//   switch (action.type) {
//     case "login":
//       return { ...state, user: action.payload };
//     case "logout":
//       return { ...state, user: null };
//     case "toggleTheme":
//     //   state.theme = state.theme === "light" ? "dark" : "light"; // ❌ Bug
//     //   return state;
//     return{
//        ...state,
//        theme : state.theme === "light" ? "dark" : "light"
//     }
//     default:
//       return state;
//   }
// }

// function Navbar() {
//   const { state, dispatch } = useContext(AppContext);
//   return (
//     <nav style={{ background: state.theme === "light" ? "white" : "black" }}>
//       <h1>{state.user ? `Hi, ${state.user}` : "Guest"}</h1>
//       <button onClick={() => dispatch({ type: "toggleTheme" })}>
//         Toggle Theme
//       </button>
//       <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
//     </nav>
//   );
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, { user: "Shekhar", theme: "light" });

//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       <Navbar />
//     </AppContext.Provider>
//   );
// }


// import React, { useReducer } from "react";

// const initialState = { todos: [] };

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       return { todos: [...state.todos, action.payload] };
//     case "REMOVE":
//         console.log(state.todos, action)
//       return { todos: state.todos.slice(0,-1) };
//     default:
//       return state;
//   }
// }

//  function App2() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state)

//   return (
//     <div>
//       <button
//         onClick={() =>
//           dispatch({ type: "ADD", payload: { id: 1, text: "Learn React" } })
//         }
//       >
//         Add Todo
//       </button>

//       <button onClick={() => dispatch({ type: "REMOVE" })}>Remove Todo</button>

//       <ul>
//         {state.todos.map((t) => (
//           <li key={t.id}>{t.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App2



// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();
// const AuthContext = createContext();

// function Navbar() {
//   const { theme } = useContext(ThemeContext);
//   const { user } = useContext(AuthContext);

//   return (
//     <nav style={{ background: theme === "dark" ? "black" : "white", color:theme==="dark"?"white":'black' }}>
//       <h1>Hello {user.name}</h1>
//     </nav>
//   );
// }

// export default function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme }}>
//       <AuthContext.Provider value={{ user: { name: "Shekhar" } }}>
//         <Navbar />
//         <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//           Toggle Theme
//         </button>
//       </AuthContext.Provider>
//     </ThemeContext.Provider>
//   );
// }




// import React, { useMemo, useState ,useRef} from "react";
// const num=0
// function ExpensiveList({ items }) {
//     const count=useRef(0)
//   const sortedItems = useMemo(() => {
   
//     console.log("Sorting...",count);
//     return [...items].sort((a,b)=>{
//         return a.localeCompare(b)
//     }); // ❌
//   }, [items]);

//   return (
//     <ul>
//       {sortedItems.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default function App2() {
//   const [list, setList] = useState(["Banana", "Apple", "Orange"]);
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <ExpensiveList items={list} />
//       <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
//     </div>
//   );
// }




// import React, { useReducer, useEffect } from "react";

// const initialState = { loading: false, users: [], error: null };

// function reducer(state, action) {
//   switch (action.type) {
//     case "FETCH_START":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { loading: false, users: action.payload, error: null };
//     case "FETCH_ERROR":
//       return { loading: false, users: [], error: action.error };
//     default:
//       return state;
//   }
// }

// export default function App2() {
//   const [state, dispatch] = useReducer(reducer, initialState);
// console.log('helo')
//   useEffect(() => {
//     dispatch({ type: "FETCH_START" });
//     fetch("https://jsonplaceholder.typicode.com/users") // ❌ Wrong URL
//       .then((res) => res.json())
//       .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
//       .catch((err) => dispatch({ type: "FETCH_ERROR", error: err.message }));
//       console.log("end")
//   }, []);

//   return (
//     <div>
//       {state.loading && <p>Loading...</p>}
//       {state.error && <p style={{ color: "red" }}>{state.error}</p>}
//       <ul>
//         {state.users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React, { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// function cartReducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       return [...state, action.item];
//     case "REMOVE":
//       return [...state].filter((i) => i.id !== action.id);
//     default:
//       return state;
//   }
// }

// function Cart() {
//   const { state, dispatch } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       <ul>
//         {state.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => dispatch({ type: "REMOVE",id:item.id })}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function App2() {
//   const [state, dispatch] = useReducer(cartReducer, []);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       <button
//         onClick={() => {
//             const timeStemp=Date.now()
//             dispatch({ type: "ADD", item: { id: timeStemp, name: "Book" } })
//         }}
//       >
//         Add Book
//       </button>
//       <Cart />
//     </CartContext.Provider>
//   );
// }



// import React, { useState, useMemo } from "react";

// const products = Array.from({ length: 1000 }, (_, i) => ({
//   id: i,
//   name: `Product ${i}`,
//   category: i % 2 === 0 ? "Electronics" : "Clothing",
//   price: Math.floor(Math.random() * 1000)
// }));

// export default function App2() {
//   const [category, setCategory] = useState("All");

//   const filteredProducts = useMemo(() => {
//     console.log("Filtering products...");
//     return products
//       .filter(p => category === "All" || p.category === category)
//       .sort((a, b) => a.price - b.price);
//   }, [products, category]);

//   return (
//     <div>
//       <select onChange={e => setCategory(e.target.value)} value={category}>
//         <option value="All">All</option>
//         <option value="Electronics">Electronics</option>
//         <option value="Clothing">Clothing</option>
//       </select>
//       <ul>
//         {filteredProducts.map(p => (
//           <li key={p.id}>
//             {p.name} - ${p.price} ({p.category})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React, { useState, useMemo } from "react";

// const orders = Array.from({ length: 5000 }, (_, i) => ({
//   id: i,
//   amount: Math.floor(Math.random() * 500)
// }));

// export default function App2() {
//   const [counter, setCounter] = useState(0);

//   const stats = useMemo(() => {
//     console.log("Calculating stats...");
//     const total = orders.reduce((acc, o) => acc + o.amount, 0);
//     const avg = total / orders.length;
//     return { total, avg };
//   }, [orders]);

//   return (
//     <div>
//       <h2>Dashboard Stats</h2>
//       <p>Total Revenue: ${stats.total}</p>
//       <p>Average Order: ${stats.avg.toFixed(2)}</p>
//       <button onClick={() => setCounter(c => c + 1)}>Re-render {counter}</button>
//     </div>
//   );
// }

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
}

export default function App2() {
  const handleClick = () => console.log("Clicked");
  return <Child onClick={handleClick} />;
}
