import { Navbar } from "../components/AdminBar";
import React from 'react';

export default function Promotions() {

          return (
            <div className="admin-promo">
        <Navbar />

<div className="text-center">Promotions</div>

<table>
  <tbody>
  <tr>
    <th>Promotion</th>
    <th>Code</th>
    <th>Expiration Date</th>
    <th></th>
  </tr>
  <tr>
    <td>BOGO 10%</td>
    <td>EXG62FG</td>
    <td>10/20/2022</td>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>20% off children's ticket</td>
    <td>20KIDS</td>
    <td>10/20/2022</td>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>15% off Military Discount</td>
    <td>15MILITARY</td>
    <td>10/20/2022</td>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>25% Valentines Day</td>
    <td>BEMINEFOR25</td>
    <td>02/15/2023</td>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  </tbody>
</table>
<form id="addPromo">
        <div className="promo-container">
          <div className="newPromoLabel">
          <label>Add new promotion?</label>
          </div>
          <input type="text" placeholder = "New Promotion" name="promo" required />
        </div>
        <div className="promo-container">
          <input type="text" placeholder = "Code" name="promocode" required />
        </div>
        <div className="promo-container">
          <input type="text" placeholder = "Expiration Date" name="expiredate" required />
        </div>
        <div className="promoButton-container">
          <input type="submit"/>
        </div>
      </form>
          </div>
        );
      };
