import React from 'react';
import { useState, useEffect } from 'react';

const Serverdataapp = () => {
    const [scores, setScores] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://assessments.reliscore.com/api/cric-scores/');
          const data = await response.json();
          setScores(data);
        };
        fetchData();
      }, 
    []);

    function getData1(e){
        let inputData = e.target.value;
        const subArray = scores.find(array => array.some(item => item === inputData));
        setData1(subArray)
    }
    function getData2(e){
        let inputData = e.target.value;
        const subArray = scores.find(array => array.some(item => item === inputData));
        setData2(subArray)
    }
    return (
        <>
{/* --------------- first Element---------------- */}
        
        <div>
            <label>The Country:</label>
            <input type={"text"}  onChange={getData1} />
            <label style={{display: 'inline-block'}} > The Average: <span>{data1 ? `${data1[1]}` : <span> - </span> }</span></label>
            {data1 && <div >
                <div
                    style={{
                    width: `${data1[1]/5}%`,
                    height: '10px',
                    backgroundColor: 'green',
                    display: 'inline-block'
                        }}
                />
            </div>}
        </div>


{/* --------------- Second Element---------------- */}
        <div>
            <label>The Country:</label>
            <input type={"text"}  onChange={getData2} />
            <label style={{display: 'inline-block'}} > The Average: <span>{data2 ? `${data2[1]}` : <span> - </span> }</span></label>
            {data2 && <div >
                <div
                    style={{
                    width: `${data2[1]/5}%`,
                    height: '10px',
                    backgroundColor: 'green',
                    display: 'inline-block'
                        }}
                />
            </div>}
        </div>
    
    </>
    );
}

export default Serverdataapp;
