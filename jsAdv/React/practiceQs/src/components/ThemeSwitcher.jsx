import React, { useState, createContext, useContext, useEffect } from 'react'

// 👉 Create context
const ThemeContext = createContext()
const LanguageContext = createContext()
const AuthContext = createContext()
function ThemedComponent() {
  // 👉 Use theme from context
  const theme = useContext(ThemeContext)
  const lang = useContext(LanguageContext)

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h3>Current Theme: {theme}</h3>
      {lang === 'English' ? (
        <p>This component uses the theme from context!</p>
      ) : (
        <p>उसका घटक संदर्भ से विषय का उपयोग करता है!</p>
      )}
    </div>
  )
}

export default function ThemeApp() {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('Hindi')
  const [authorise, setAuthorise] = useState(false)
 

  const toggleTheme = () => {
    // 👉 Switch between "light" and "dark"
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === 'Hindi' ? 'English' : 'Hindi'))
  }
useEffect(()=>{
  
},[authorise])
  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <AuthContext.Provider value={{ authorise, setAuthorise }}>
          <div>
            <h2>Theme Switcher Example</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <button onClick={toggleLanguage}>Toggle Language</button>

            <ThemedComponent />
            {authorise ? <LogOut /> : <Login />}
          </div>
        </AuthContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

function Login() {
  const { authorise, setAuthorise } = useContext(AuthContext)
 const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleAuth = () => {
    if (username.trim() != '' && password.trim() != '') setAuthorise(true)
  }
  return(
    <form action=''>
    <input
      type='email'
      placeholder='Enter your Email or Username'
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type='password'
      placeholder='Enter the Password'
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleAuth}>Login</button>
  </form>
  )
  
}

function LogOut() {
  const { authorise, setAuthorise } = useContext(AuthContext)
  const handleLogOut = () => {
    setAuthorise(false)
  }
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}
