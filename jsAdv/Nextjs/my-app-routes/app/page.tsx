// 'use client'
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
const session= await getServerSession()

return(
  <div>
    {JSON.stringify(session)}
  </div>
)
// return <SessionProvider>
//   <RealHome/>
// </SessionProvider>
  
}


// function RealHome(){
//   const session=useSession();
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
// {session.status==='authenticated'&&<button onClick={()=>signOut()}>Logout</button>}
// {session.status==='unauthenticated'&&<button onClick={()=>signIn()}>Login</button>}
//     </div>
//   );
// }