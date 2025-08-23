import React, { useEffect, useState } from 'react'

function OnlineOflineNavigator() {
    console.log('hello1')
    const [online,setOnline]=useState(navigator.onLine)
    const [loading,setLoading]=useState(true)
        console.log('hello2')

    useEffect(()=>{
    console.log('hello4')

        const handleOnline=()=>{
                console.log('hello5')

            setOnline(true)
            setLoading(false)
        }
        const handleOffline=()=>{
                console.log('hello6')

            setOnline(false)
            setLoading(false)
        }
        setLoading(true)
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)

          return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };

    },[])
    console.log('hello3')

    
  return (
    <div>
       {online ? (
        <p>You are online!</p>
      ) : (
        <p>You are offline. Please check your internet connection.</p>
      )}
    </div>
  )
}

export default OnlineOflineNavigator
