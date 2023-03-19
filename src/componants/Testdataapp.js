import React from 'react';
import testData from './testData';
import { useState } from 'react';

const Testdataapp = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);


    function getData1(e){
        let inputData = e.target.value;
        const foundObject = testData.find(obj => obj.country === inputData );
        setData1(foundObject)
    }
    function getData2(e){
        let inputData = e.target.value;
        const foundObject = testData.find(obj => obj.country === inputData );
        setData2(foundObject)
        
    }

    return (
        <>
        {/* -----------------First Element-------------------------- */}
            <div>
            <label>The Country:</label>
            <input type={"text"}  onChange={getData1} />
            <label style={{display: 'inline-block'}} > The Average: <span>{data1 ? `${data1.score}` : <span> - </span> }</span></label>
            {data1 && <div >
                <div
                    style={{
                    width: `${data1.score/5}%`,
                    height: '10px',
                    backgroundColor: 'green',
                    display: 'inline-block'
                        }}
                />
            </div>}
            </div>
{/* ----------------------Second Element------------------------------ */}
            <div>
            <label>The Country:</label>
            <input type={"text"}  onChange={getData2} />
            <label style={{display: 'inline-block'}} > The Average: <span>{data2 ? `${data2.score}` : <span> - </span> }</span></label>
            {data2 && <div >
                <div
                    style={{
                    width: `${data2.score/5}%`,
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

export default Testdataapp;
