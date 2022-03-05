import logo from "./logo.svg";
import "./App.css";
import Items from "./components/items";
import { v4 as uuidv4 } from "uuid";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import { useContext } from "react";
import ReportComponent from "./components/ReportComponent";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const data = [];
const design = { color: "#254565", textAlign: "center" };
const Title = () => <h1 style={design}>เเอพรายรับรายจ่าย</h1>;
const Description = () => <p>บันทึกข้อมูลบัญชี</p>;
const Transaction = (props) => {
  const { items } = props;
  const data = [
    { id: 1, title: "ค่ากาเเฟ", amount: 2500 },
    { id: 2, title: "ค่าx", amount: 2400 },
    { id: 3, title: "ค่าy", amount: 2100 },
  ];
  const { income, expense } = useContext(DataContext);
  return (
    <>
      <ul>
        {items.map((element) => {
          return <Items {...element} key={element.id} />;
        })}
      </ul>
    </>
  );
};
function App() {
  // const data = [];
  const initState = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -2000 },
    { id: 8, title: "ค่าเช่าบ้าน2", amount: -2000 },
    { id: 2, title: "ค่าเดินทาง", amount: 500 },
    { id: 3, title: "พ่อให้เงิน", amount: 500 },
  ];
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
    console.log("ข้อมูลที่ส่งมา  ", newItem);
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense = amounts
      .filter((element) => element < 0)
      .reduce((total, element) => (total += element), 0);
    setReportIncome(income);
    setReportExpense(expense);
  }, [items]);

  //redecer state
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      <DataContext.Provider
        value={{
          income: reportIncome,
          expense: reportExpense,
        }}
      >
        <Title />
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/" >ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert" >รายการรายรับ-รายจ่าย</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<ReportComponent />}/>              
              <Route path="/insert" element={<Transaction items={items} />}/>
                
            </Routes>
            <FormComponent onAdditem={onAddNewItem} />
          </div>
        </Router>
      </DataContext.Provider>

      <div></div>
    </>
  );
}

export default App;
