import './FormComponent.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useEffect} from 'react';



const FormComponent = (props) =>{


    const[title,setTitle] = useState('')
    const[amount,setAmount] = useState(0)
    const[formVaild,setFormVaild] = useState(false);
    


    const inputTitle = (event)=>{
        setTitle(event.target.value);
    }
    
    const inputAmount = (event)=>{
        setAmount(event.target.value);
    }
    
    const saveItem = (event)=>{
        event.preventDefault();
        const itemData ={
            id:uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAdditem(itemData);
        setTitle('');
        setAmount(0);
        setFormVaild(false)
    }

    //ตรวจจับ event ว่ามีการเปลี่ยนเเปลงไหม
    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !== 0
        if(checkData){
            setFormVaild(true)
        }
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text"placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน </label>
                    <input type="text"placeholder="(+รายรับ , -รายจ่าย)"onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formVaild}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;