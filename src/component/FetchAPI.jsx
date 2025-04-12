import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [dataItems, setData] = useState([]);

    useEffect(() => {

        // const getData =async()=>{ // we can do like this. this called Arrow function

        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            console.log(data);

            if(data && data.length)setData(data)
                       
        }

        getData()
     
    }, [])
    

  return (
    <div>
        <h1>Fetch</h1>
        {dataItems.length>0 ? <h2>{dataItems[0].title}</h2>:<p>Loda.......</p>}

        {dataItems.map((item,indx)=>(
              
              <div key={indx}>
                  <li>Title:- {item.title}</li>
                  <p>Body:- {item.body}</p>
                {/* <p className='' >Completed:- {String (item.completed)}</p> */}
              {/* {String (item.completed)}  using this type print boolean value into UI and also convert this boolean into string   */}
                
                </div>
            ))
        }
    </div>
  )
}

export default FetchAPI