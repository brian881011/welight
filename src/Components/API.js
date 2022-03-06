import React from 'react';
import { useEffect,useState } from 'react';

export const API = () => {

    const [data, setData] = useState("Hello");
    async function getQuestion() {
        const response = await fetch(
            "http://139.155.71.103:8081/activity/badge/claim",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                "activityId": 0,
                "address": "string",
                "claimDateTime": "2022-01-24T17:52:34.100Z",
                "seqNo": "string"
            }),
            }
          );
        const jsonResponse = await response.json();
        console.log(jsonResponse.result)
          
        }


    useEffect(() => {
            getQuestion();
      }, []);

    return (
        <div style={{color:"white",bacgroundColor:"grey",width:"100%", height:"10vh"}}>

        </div>
    )
}
