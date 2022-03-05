import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css";

const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext);
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(

        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>{formatNumber(income+expense)} บาท</h1>
            <div className="report-container">
                <h4>รายรับ</h4>
                <p className="report plus">{formatNumber(income)}</p>
                <h4>รายจ่าย</h4>
                <p className="report minus">{formatNumber(expense)}</p>
                

            </div>
        </div>
    );
}

export default ReportComponent