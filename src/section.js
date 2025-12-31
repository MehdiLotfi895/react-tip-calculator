import { useState } from "react";
import "./Section.css"
function Section (){
    const[bill,setBill]=useState(0);
    const[percent1,setPercent1]=useState(0);
    const[percent2,setPercent2]=useState(0);
    
    const text=(bill)?(
        <div style={{marginTop:"25px"}}>
            you pay ${(bill)+(percent1+percent2)*bill/200}(${bill}+${(percent1+percent2)*bill/200} tip)
        </div>
    ):<div></div>;
    return(
        <div>
            <div>
            How much was the bill?<input value={bill} onChange={(e)=>{
                setBill(Number(e.target.value))
            }}/>
            </div>
            <div>
            How did you like the service?
            <select className="select" value={percent1}onChange={(e)=>{
                setPercent1(Number(e.target.value))
            }}>
                <option value={0}>Dissatisied(0%)</option>
                <option value={5}>it was okey(5%)</option>
                <option value={10}>it was good(10%)</option>
                <option value={20}>Absolutely amazing!(20%)</option>
            </select>
            </div>
            <div>
            How did your firend like the servis?
            <select className="select" value={percent2} onChange={(e)=>{
                setPercent2(Number(e.target.value))
            }}>
                <option value={0}>Dissatisied(0%)</option>
                <option value={5}>it was okey(5%)</option>
                <option value={10}>it was good(10%)</option>
                <option value={20}>Absolutely amazing!(20%)</option>
            </select>
            </div>
            
            {text}
            
            
            <button style={{marginTop:"25px"}} onClick={()=>{
             setBill(0) ;
             setPercent1(0);
             setPercent2(0);

            }}>Reset</button>

        </div>
    )
}

export default Section;