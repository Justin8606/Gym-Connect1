// import Slider from '../../components/slider/slider';
// import MapView from '../../components/mapView/MapView';
// import Rating from '../../components/rating/Rating'; // Import the rating component
// import './singlePage.scss';
// import { singlePostData, userData } from "../../lib/dummydata";

// function SinglePage() {
//   return (
//     <div className='singlePage'>
//       <div className="details">
//         <div className="wrapper">
//           <Slider images={singlePostData.images}/>
//           <div className="info">
//             <div className="top">
//               <div className="post">
//                 <h1>{singlePostData.title}</h1>
//                 <div className="address">
//                   <img src="/pin.png" alt="" />
//                   <span>{singlePostData.address}</span>
//                 </div>
//                 <div className="price">$ {singlePostData.price}</div>
//               </div>
//               <div className="user">
//                 <img src={userData.img} alt="" />
//                 <span>{userData.name}</span>
//               </div>
//             </div>
//             <div className="bottom">
//               {singlePostData.description}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="features">
//         <div className="wrapper">
//           <p className='title'>Gym Overview:</p>
//           <div className="listVertical"></div>
//           <p className='title'>Gym Facilities:</p>
//           <div className="listVertical"></div>
//           <p className='title'>Location:</p>
//           <div className="mapContainer">
//             <MapView items={[singlePostData]}/>
//           </div>

          
//           <Rating />

//           <div className="buttons">
//             {/* Other buttons for booking and payment */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SinglePage;


import Slider from '../../components/slider/slider'
import MapView from '../../components/mapView/MapView'
import Rating from '../../components/rating/Rating'; // Import the rating component
import './singlePage.scss'
import { singlePostData, userData } from "../../lib/dummydata"
import { useState } from 'react'

function SinglePage() {
  // State to manage booking time (morning/evening)
  const [bookingTime, setBookingTime] = useState('morning')

  const handleBooking = () => {
    // Handle the booking submission here
    alert(`You have booked for the ${bookingTime} slot.`)
  }

  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className='title'>Gym Facilities:</p>
          <div className="listVertical">
            <div className="feature">
            <div className="featureText">
              <span>Equipment</span>
              <p> treadmills, free weights, squat racks</p>
              <span>Special Facilities</span>
              <p> saunas, yoga rooms</p>
              <span>Classes Offered</span>
              <p> Zumba, yoga, HIIT</p>
              <span>Personal Trainers:</span>
              <p> </p>
              <span>Locker Rooms and Showers</span>
              <p> Available</p>
            </div>
            </div>
          </div>



          

          <p className='title'>Rating:</p>
          <div className="ratingContainer">
            <button>Give Rating</button>
            <Rating/>
          </div>

          <p className='title'>Book a Time Slot:</p>
          <div className="bookingContainer">
            <label>
              <input
                type="radio"
                value="morning"
                checked={bookingTime === 'morning'}
                onChange={() => setBookingTime('morning')}
              />
              Morning (6 AM - 12 PM)
            </label>
            <label>
              <input
                type="radio"
                value="evening"
                checked={bookingTime === 'evening'}
                onChange={() => setBookingTime('evening')}
              />
              Evening (4 PM - 10 PM)
            </label>

            <button onClick={handleBooking} className="bookingButton">Book Now</button>
          </div>

          <p className='title'>Payment:</p>
          <div className="paymentContainer">
            <button>Proceed to Payment</button>
            {/* You can add your payment logic here */}
          </div>
          <p className='title'>Location:</p>
          <div className="mapContainer">
            <MapView items={[singlePostData]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage

