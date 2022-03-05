import PropTypes from 'prop-types'; // ES6
import './Items.css'
import DataContext from "../data/DataContext";
import {useContext} from "react";
const Items = (props) => {

    const {title,amount} = props
    const formatNumber=(num)=> {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
    // การใช้ if eles โดยไม่ต้องใช้ if eles
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "":"+"
    const name = useContext(DataContext)
  return(
    <><li className={status}>
      <p>{title}    {symbol}{formatNumber(amount)}
        </p></li>
      </>);
};


Items.propTypes = {
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}

export default Items;
