
import "./HotelImages.css"
export const HotelImages=({singleHotel})=>{
    console.log(singleHotel)
    
    const {image,imageArr}=singleHotel
    console.log(imageArr)

    return (
        <div className="hotel-image-container d-flex gap-small">
            <div className="primary-image-container">
                <img className="primary-img" src={image} alt="primary-image"/>
            </div>
            <div className="wrap gap-small">
            {imageArr &&
          imageArr.map((image) => (
            <img
              key={image}
              className="hotel-img"
              src={image}
              alt="hotel"
            />
          ))}
            </div>
        </div>
    )
}