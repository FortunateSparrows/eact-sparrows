import React from 'react';
import video from '../../images/video.mp4'
import video1 from '../../images/video1.mp4';
import video2 from '../../images/video2.mp4'
import Typical from 'react-typical'
import './Carousel.css'
import {Carousel} from "react-bootstrap";
const Home =()=>{
     
return(
 
    <Carousel fade>
    <Carousel.Item>
    
    
    <video className='d-block w-100' width={1000} height={800}   autoPlay loop muted>
    <source src={video} />
    </video>

      <Carousel.Caption>
      <h1>WHY FORTUNATE SPARROWS!??</h1>
       <h2> <Typical loop={Infinity}
        steps={['one-to-one Mentorship ',
        1000,
       'Life Time Material Access',
       1000,
       'Live Session',
       1000,
       'Portfolio Projects',
       1000,]} /> </h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <video className='d-block w-100' width={1000} height={800} autoPlay loop muted>
    <source src={video2} />
    </video>
  
      <Carousel.Caption>
        <h1>FREE EVENTS</h1>
      <details>  <p>It is a brief intensive educational program for a relatively small group of people that focuses especially on techniques and skills in a particular field.We can organise certified workshops</p> </details>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <video className='d-block w-100' width={1000} height={800} autoPlay loop muted>
    <source src={video1} />
    </video>
  
      <Carousel.Caption>
        <h1>FREE BOOTCAMPS</h1>
      <details>  <p>We have already organized a 2 week bootcamp for college students.we will frequently organize bootcamps totally free of cost in which students from various sectors join and benefit out of it</p> </details>
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>
 
);
}

export default Home;