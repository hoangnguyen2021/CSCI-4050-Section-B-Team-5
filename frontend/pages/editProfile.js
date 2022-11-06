import Link from 'next/link'
import React from 'react';
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import SubmitButton from "../../components/SubmitButton";

export default function EditProfiles() {

  //const [promotion, setPromotion] = useState(0);
  const {post} = useFetch();
  const [Formdata , setFormData] =  useState({
    name: '',
    phonenumber: '' ,
    cardnum: '',
    cvv: '' ,
    expiration_year: '',
    zip_code: '' 
});
  const handleChange= e => setFormData({ ...FormData, [e.target.name]: e.target.value });
  const onSubmit= e => { e.preventDefault() ;
    try {
      const token = await localStorage.getItem("access");
      if( token == null)
      {
        toast.error("The user is not logged in");
      }
      else{
        try {
          const  response = await post("auth/users/me/"),{
            ...Formdata
          }
          if( )
        }

      }
     }
     catch(error){


     }

  let handleCheckbox = async (e) => {

    if (promotion == 0) {
      setPromotion(1);
    } else {
      setPromotion(0);
    }
  };
        return (
          <div className="edit-profiles">
                    <div className="back-to-home">
        <Link href="/">
    <button className="home"> Back to Home</button>
    </Link>
    </div>
        <div id="editprofile">
            <form>
              <div className="form1">
              <h1 className="text-center">Update your Information</h1>
              <h3>Profile Info</h3>
              <div>
              <input className="fields" type="text" name= "name" placeholder="New Name" onChange={handleChange}/>
              </div>
              <div>
              <input className="fields" type="text" name= "zip_code" placeholder="zip_code" onChange={handleChange} />
              </div>
              <div>
              <input className="fields" type="text" name= "phonenumber"  placeholder="New Phone Number" onChange={handleChange} />
              </div>
              <div>
              <input className="fields" type="text" name= "cardnum"  placeholder="Card Number" onChange={handleChange}/>
              </div>
              <div>
              <input className="fields" type="text" name = "expiration_year"   placeholder="Expiration Date" onChange={handleChange} />
              </div>
              <div>
              <input className="fields" type="text" name= "cvv" placeholder="CVV" onChange={handleChange} />
              </div>
              <div className="createSpan text-center">
          <Link href="/changePassword">
          <button className="text-primary"> Change Password </button>
          </Link>
        </div>
              <div>
              <span>Subscribe to Promotions</span>
              <input  type="checkbox" onChange={handleCheckbox}/>
              </div>
              <h3 id="incorrect-credentials" style={{color: 'red'}}></h3>
              <button id="buttonstyle" type="submit">Update account information</button>
              </div>
            </form>
          </div>
          </div>
        );
      };
