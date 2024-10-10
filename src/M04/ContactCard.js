 import React from 'react'
 
 const ContactCard = (props) => {
   return (
     <div className='contact'>
       <h3>{props.nama}</h3>
       <h4>{props.nomor_hp}</h4>
     </div>
   )
 }
 
 export default ContactCard
