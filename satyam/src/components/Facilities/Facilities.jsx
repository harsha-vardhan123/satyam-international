import React from 'react';
import {FacItems} from './FacilitiesData';
import "../Facilities/Facilities.css";
import Content from './Content';
import Content_two from './Content_two';

const Facilities = () => {
  return (
    <div>
      <div className='grid md:grid-cols-4  place-items-center gap-4 w-full  mt-12 p-4'>
        {FacItems.map((item)=>{
            return(
                <div data-aos="fade-up" data-aos-delay={item.aosDelay} key={item.id} className='facCad'>
                    <img src={item.image} alt="" className='facIcon'/>
                    <h1 className='facTitle'>{item.title}</h1>
                    <p className='facDesc'>{item.description}</p>
                    </div>
            )

        })}
        
        
        

      </div>
      <Content/>
      <Content_two/>
    </div>
  )
}

export default Facilities;
