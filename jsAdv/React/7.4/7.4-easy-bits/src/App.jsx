
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, netWorkAtom,notificationAtom,messagingAtom, totalSelector } from './atoms'
import { useMemo } from 'react'
//RecoilRoot

function App(){

  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
  
}

function MainApp(){
   const networkNotificationCount=useRecoilValue(netWorkAtom)
   const jobsNorificaionCoune=useRecoilValue(jobsAtom)
   const notificationCount=useRecoilValue(notificationAtom)
   const MessegingCount=useRecoilValue(messagingAtom)

   const total=useRecoilValue(totalSelector)
  //  const total2 =useMemo(()=>{
  //   return networkNotificationCount+jobsNorificaionCoune+notificationCount+MessegingCount
  //  },[networkNotificationCount,jobsNorificaionCoune,notificationCount,MessegingCount])     // if we use atom selector so no need to use the useMemo hook


  const finalValue=networkNotificationCount>=100?'99+':networkNotificationCount
  return(
    <>
    <button>Home</button>
    <button>My network {finalValue}</button>
    <button>jobs {jobsNorificaionCoune>=100?'99+':jobsNorificaionCoune}</button>
    <button>Messeging {MessegingCount>=100?'99+':MessegingCount} </button>
    <button>Notification {notificationCount>=100?'99+':notificationCount} </button>
    <button>Me {(total)}</button>
<ButtonUpdater/>
    </>
  )


  function ButtonUpdater(){
   const setNetworkAtomCount= useSetRecoilState(netWorkAtom) 
    return(
      <div>
        <button onClick={()=>setNetworkAtomCount(p=>p+1)}>networkUpdate</button>
        
      </div>
    )
  }
}
export default App
