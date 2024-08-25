import { Fragment, useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import { HotelDetails, HotelImages, Navbar,FinalPrice } from "../../components";
import "./SingleHotel.css"
export const SingleHotel=()=>{
    const {id}=useParams();
    const [singleHotel,setSingleHotel]=useState({})
    useEffect(()=>{
        (async ()=>{
            try{
                //const {data}=await axios.get(`http://localhost:3500/api/Hotels/${id}`)
                const {data}=await axios.get(`https://travelappbackend-dnmq.onrender.com/api/Hotels/${id}`)
                console.log(data)
                setSingleHotel(data);
            }catch(err){
                console.log(err)
            }
        })()
    },[id])
    const {name,state}=singleHotel
    return (
        <Fragment>
        <Navbar/>
        <main className="single-hotel-page">
           <p className="hotel-name-add">{name},{state}</p>
            <HotelImages singleHotel={singleHotel}/>
            <div className="d-flex">
                <HotelDetails singleHotel={singleHotel}/>
                <FinalPrice singleHotel={singleHotel}/>
            </div>

        </main>
        </Fragment>
      
    )
}