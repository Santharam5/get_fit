import './contact_us.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';

const Contact=()=>{
  const [formData,setFormData]=useState({name:'',phone:'',email:'',msg:''});
  const handleChange=useCallback((e)=>{
    const {name,value}=e.target;
    if (name === 'phone' && !/^\d*$/.test(value)) {
      return;
    }
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  },[])
  const handlesubmit=useCallback((e)=>{
    e.preventDefault();  
     if (formData.phone.length !== 10) {
      return;
  }
  console.log(formData);
  setFormData({name: '', phone: '', email: '', msg: '' })
  
},[formData])
    return(
        <>
        <section className='contactus' id='contactus'>
        <div className="backimg-testimonial">
            <h2 className="testimonial-center">TESTIMONIAL</h2>
            <hr></hr>
    <div className="container my-3">
      <Carousel>
        <Carousel.Item style={{ minHeight: '200px' }}>
          <div className="d-flex align-items-center justify-content-center testi-color-1  text-white p-5 rounded">
            <div className="text-center">
              <h5 className="mb-4 contact-para">Amazing staff.!!! Hygiene is always a priority here. There are lockers to keep our bags. The personal trainers are extremely helpful. I have been training under Pranay Bane and sir has been most motivating.</h5>
              <p className="testi-color contact-para"><small>- Markpilier</small></p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ minHeight: '200px' }}>
          <div className="d-flex align-items-center justify-content-center testi-color-2 p-5 text-white rounded">
            <div className="text-center">
              <h5 className="mb-4 contact-para">"I have been training under Pranay Bane and sir has been most motivating.Amazing staff.!!! Hygiene is always a priority here. There are lockers to keep our bags. The personal trainers are extremely helpful."</h5>
              <p className="text-white contact-para"><small>- IshowSpeed</small></p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ minHeight: '200px' }}>
          <div className="d-flex align-items-center justify-content-center testi-color-3 p-5 text-white rounded">
            <div className="text-center">
              <h5 className="mb-4 contact-para">" Hygiene is always a priority here. There are lockers to keep our bags.I have been training under Pranay Bane and sir has been most motivating.Amazing staff.!!! The personal trainers are extremely helpful."</h5>
              <p className="text-white contact-para"><small>- Santa</small></p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div></div>
    <div className="d-flex justify-content-center align-items-center"  style={{ minHeight: "100vh" }}>
      <div>
     <h2 className="testimonial-center">Need Help Dont worry contact us!</h2>
     <hr></hr>
     <h3 className="testimonial-center">Contact us with below form</h3>
       <Form onSubmit={handlesubmit} data-aos="fade-up">
         <Form.Group className="mb-3" controlId="exampleForm.ControlName">
        <Form.Control type="text" name="name" placeholder="Enter a Name" maxLength={40} value={formData.name} onChange={handleChange} required/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlPhone">
        <Form.Control type="tel" name="phone"  pattern="\d{10}" maxLength={10} placeholder="Enter a Phone number"
    value={formData.phone} onChange={handleChange}  
     required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlEmail"  >
        
        <Form.Control type="email" name="email" placeholder="Enter a Email" value={formData.email} onChange={handleChange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} name="msg" value={formData.msg} placeholder='Enter your Queries' onChange={handleChange} required/>
      </Form.Group><div className='button-contact-form'>
      <Button variant='success' type="submit">
        Submit
      </Button></div>
    </Form></div>
    </div></section>
        </>
    )
}
export default Contact;