import Link from 'next/link'
import React from 'react';

export default function EditProfiles() {

  //const [promotion, setPromotion] = useState(0);

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
              <input className="fields" type="text" placeholder="New Name"/>
              </div>
              <div>
              <input className="fields" type="text" placeholder="Billing Address" />
              </div>
              <div>
              <input className="fields" type="text" placeholder="New Phone Number"/>
              </div>
              <div>
              <input className="fields" type="text" placeholder="Card Number"/>
              </div>
              <div>
              <input className="fields" type="text" placeholder="Expiration Date"/>
              </div>
              <div>
              <input className="fields" type="text" placeholder="CVV"/>
              </div>
              <div>
              <input className="fields" type="text" placeholder="Zipcode"/>
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
