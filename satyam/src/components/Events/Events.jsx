import { React, useState } from 'react';
import "./Events.css";
import { EventCardData, Card_data } from "./EcardData";

const Events = ({ image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className=' md:m-20'>
      {/* Our Event Section */}
      <div className='flex flex-col justify-around  bg-[#E4D6A7] md:h-[800px] pb-10 md:pb-0'>
        {/* Heading */}
        <div className='text-center pt-4'>
          <h1 data-aos="fade-up" className='heading'><span className='text-[#FAA327]'>Our</span> Events</h1>
          <p data-aos="fade-up" className='sub-heading'>Our Activities & Programs</p>
        </div>

        {/* Our Events Card */}
        <div className='flex flex-col md:flex-row justify-center items-center '>


          {/* Card-1 */}
          <div
            className="card" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src="./images/Ecard1.png" alt="Image" className="card-img" />
            <h1 className='title'>Sports Meet</h1>
            {hovered && <div className="card-overlay">
              <h1 className='title-overlay'>Sports Meet</h1>
              <p className='desc-overlay'>With memories to last for lifetime, at Satyam International School Ballari. We experienced a magnificent display of ath</p>
              <button className='btn-overlay'>Learn More</button>
            </div>}
          </div>

          {/* Card-2 */}
          <div
            className="card" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src="./images/Ecard2.png" alt="Image" className="card-img" />
            <h1 className='title'>Investiture Ceremony</h1>
            {hovered && <div className="card-overlay">
              <h1 className='title-overlay'>Investiture Ceremony</h1>
              <p className='desc-overlay'>With memories to last for lifetime, at Satyam International School Ballari. We experienced a magnificent display of ath</p>
              <button className='btn-overlay'>Learn More</button>
            </div>}
          </div>


          {/* Card-3 */}
          <div
            className="card" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src="./images/Ecard3.png" alt="Image" className="card-img" />
            <h1 className='title'>Quiz Competition</h1>
            {hovered && <div className="card-overlay">
              <h1 className='title-overlay'>Quiz Competition</h1>
              <p className='desc-overlay'>With memories to last for lifetime, at Satyam International School Ballari. We experienced a magnificent display of ath</p>
              <button className='btn-overlay'>Learn More</button>
            </div>}
          </div>
        </div>

        {/* Section button */}
        <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center items-center'>
        <button className='section_btn'>Explore</button>
        </div>
        




      </div>
    </div>
  )
}

export default Events;




{/* <div className=' grid md:grid-cols-3 place-items-center space-y-[200px] md:space-y-0 md:gap-4 mt-[50px]'>
          {EventCardData.map((data) => {
            return (
              <div data-aos="zoom-in" data-aos-delay={data.aosDelay} key={data.id} className='cName'>
                <img src={data.image} alt="" />
                </div>
                 )
          })}
           </div> */}

{/* <div className='Card'>
                  {Card_data.map((items) => {
                    return (
                      <div className='Card_item' key={items.id}>
                        <h1 className='card_titles'>{items.title}</h1>
                    <p className='card_descriptions'>{items.article}</p>
                    <button className='btn'>{items.button}</button>
                        </div>
                    
                    )
                  })}
                </div> */}