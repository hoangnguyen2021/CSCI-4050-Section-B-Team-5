import { useState } from "react";
import Link from "next/link";
import PillButton from "./PillButton";
//import { EditSvg } from "./Svg";



const initialFormData = Object.freeze({ //accessing via name
  promo_name: "",
  promo_code: "",
  percentage: "",
  expire_date: ""
});

const AddPromotionForm = () => {
  /*const [promoCode, setPromoCode] = useState(true);
  const [expireDate, setExpireDate] = useState(true);
  const [promoName, setPromoName] = useState(true);
  const [percentage, setPercentage] = useState(true);*/

      
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => { //onchange, it saves data to particular vaiable
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => { // on submission to save button, it shows all the data
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
  };


  return (

    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between space-x-3 items-end">
        <div>Promo Name</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
         placeholder = "Promo Name" name="promo_name" onChange={handleChange}/>
      </div>

      <div className="flex justify-between space-x-3 items-end">
      <div>Promo Code</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
         placeholder = "Promo Code" name="promo_code" onChange={handleChange}/>
      </div>

      <div className="flex justify-between space-x-3 items-end">
      <div>Percentage</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
         placeholder = "Percentage" name="percentage" onChange={handleChange} />
      </div>

      <div className="flex justify-between space-x-3 items-end">
      <div>Expire Date</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
         placeholder = "Expire Date" name="expire_date" onChange={handleChange} />
      </div>

      <div className="pt-5">
        <PillButton text="Save" onClick={handleSubmit}/>
      </div>

    </div>
    
    /*<div className="flex flex-col gap-y-5">
      <div className="flex justify-between space-x-3 items-end">
        <div>Promo Name</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary" placeholder = "Promo Name" readOnly={promoName} />
        <button onClick={() => setPromoName(false)}>
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
      <div>Promo Code</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary" placeholder = "Promo Code" readOnly={promoCode} />
        <button onClick={() => setPromoCode(false)}>
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
      <div>Percentage</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary" placeholder = "Percentage" readOnly={percentage} />
        <button onClick={() => setPercentage(false)}>
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
      <div>Expire Date</div>
        <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary" placeholder = "Expire Date" readOnly={expireDate} />
        <button onClick={() => setExpireDate(false)}>
        </button>
      </div>
      <div className="pt-5">
        <PillButton text="Save" />
      </div>
    </div>*/
  );
};

export default AddPromotionForm;
