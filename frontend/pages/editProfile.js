import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../hooks/useFetch";

let handleCheckbox = async (e) => {
  if (promotion == 0) {
    setPromotion(1);
  } else {
    setPromotion(0);
  }
}

const EditProfilePage = () => {
  const { post } = useFetch();
  const [newName, setNewName] = useState("");
  const [newPhonenumber, setNewPhone] = useState("");
  const [newCardNum, setNewCardNum] = useState("");
  const [newCVV, setCVV] = useState("");
  const [newExpiration, setNewExpirationDate] = useState("");
  const [newZipCode, setNewZip] = useState("");
  const router = useRouter();
  const { uid, token } = router.query;

  const updateUser = async (e) => {
    e.preventDefault();
    if (uid && token) {
      try {
        const response = await post("auth/users/me/", {
          newName: newName,
          newPhonenumber: newPhonenumber,
          newCardNum: newCardNum,
          newCVV: newCVV,
          newExpiration: newExpiration,
          newZipCode: newZipCode
        });
        toast.success("Your account was changed successfully!");
        router.push('/login');
        const responseData = response.data;
        console.log(responseData);
      } catch (error) {
        const responseData = error.response?.data;
        if (responseData) {
          if (responseData.new_password) {
            responseData.new_password.forEach(item => toast.error(item));
          }
          if (responseData.token) {
            toast.error(responseData.token);
          }
        } else {
          toast.error("Cannot change your information!");
        }
        console.error(error);
      }
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
              <input className="fields" type="text" placeholder="Team B5" name={newName}
                setNewName={setNewName} />
            </div>
            <div>
              <input className="fields" type="text" placeholder="4044440004" phonenumber={newPhonenumber}
                setNewPhone={setNewPhone} />
            </div>
            <div>
              <input className="fields" type="text" placeholder="Card Number" cardnum={newCardNum}
                setNewCardNum={setNewCardNum} />
            </div>
            <div>
              <input className="fields" type="text" placeholder="Expiration Date" expiration_year={newExpiration}
                setNewExpirationDate={setNewExpirationDate} />
            </div>
            <div>
              <input className="fields" type="text" placeholder="CVV" cvv={newCVV}
                setCVV={setCVV} />
            </div>
            <div>
              <input className="fields" type="text" placeholder="Zipcode" zip_code={newZipCode}
                setNewZip={setNewZip} />
            </div>
            <div className="createSpan text-center">
              <Link href="/changePassword">
                <button className="text-primary"> Change Password </button>
              </Link>
            </div>
            <div>
              <span>Subscribe to Promotions</span>
              <input type="checkbox" onChange={handleCheckbox} />
            </div>
            <h3 id="incorrect-credentials" style={{ color: 'red' }}></h3>
            <button id="buttonstyle" type="submit" onSubmit={updateUser}>Update account information</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
