import React from "react";
import { useState } from "react";
import styles from"./comp.module.css"


const PaymentDetails = ({ payment }) => {
  return (
    <div className={payment.id %2==0 ? styles.compbox:styles.compbox1}>
     
        {/* {/* {payment.map((...item)=>(
      <div>  {item} </div> 
     ))} */}



<div className={styles.dateimg} > <span className={styles.date}>{payment.date} </span>  <img className={styles.logo}src={payment.logo}alt="" /></div>

<h4 className={styles.casestudy}>{payment.extra} </h4>


<h1 className={styles.heading}>{payment.heading}</h1>


      <h1 className={styles.subheading}> {payment.subheading}</h1>

    
  
      
      

      <div className={styles.devices}> <span>{payment.devices}</span> <span className={styles.icon}> {payment.icon} </span></div>
    
    </div>
  );
};

export default PaymentDetails;
