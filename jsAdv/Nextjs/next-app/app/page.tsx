import Image from "next/image";

import axios from 'axios'
export default async function user(){

    const response = await axios.get('http://localhost:3000/api/v1/user')
    new Promise(r=>setTimeout(r,5000))
    const data=  response.data


    return <div>
     <div>   User page</div>
        {data.user } <br/>
        {data.email }
    </div>
}