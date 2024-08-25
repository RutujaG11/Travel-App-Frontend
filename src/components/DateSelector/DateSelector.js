import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css"
import { useDate } from "../../context";
export const DateSelector = ({placeholder,checkInType}) => {
    const {checkInDate,checkOutDate,dateDispatch}=useDate()
    const handleDataChange=(date)=>{
        dateDispatch({
            type:checkInType ==='in'?"CHECK_IN":"CHECK_OUT",
            payload:date
        })
    }
    const handleDataFocus=()=>{
      dateDispatch({
        type:"DATE_FOCUS"
      })
    }
   
    return (
    <DatePicker
    selected={checkInType==="in"?checkInDate:checkOutDate}
    onChange={(date)=> handleDataChange(date)}
    className="search-dest input"
      dateFormat="dd/MM/yyyy"
      onFocus={handleDataFocus}
      placeholderText="Add Dates"
      closeOnScroll={true}
    />
  );
};
