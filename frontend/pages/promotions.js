import { Navbar } from "../components/AdminBar";
import { useEffect, useState } from "react";
import React from 'react';
import Modal from "../components/Modal";
import AddPromotionForm from "../components/AddPromotionForm";

export default function Promotions() {
  const [open, setOpen] = useState(false);
          
  return (
            <div className="admin-promo">
        <Navbar />

<div className="text-center">Promotions</div>
<div
            onClick={() => setOpen(true)}
            className="text-sm text-center font-medium text-on-primary cursor-pointer hover:text-gray-100"
          >
            Add Promo
          </div>
          <Modal open={open} setOpen={setOpen} title="Add Promo">
            <AddPromotionForm />
          </Modal>
<table>
  <tbody>
  <tr>
    <th>Promotion</th>
    <th>Code</th>
    <th>Expiration Date</th>
    <th>Percentage</th>
    <th></th>
  </tr>
  <tr>
    <td>BOGO 10%</td>
    <td>EXG62FG</td>
    <td>10/20/2022</td>
    <th>10%</th>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>20% off children's ticket</td>
    <td>20KIDS</td>
    <td>10/20/2022</td>
    <th>20%</th>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>15% off Military Discount</td>
    <td>15MILITARY</td>
    <td>10/20/2022</td>
    <th>15%</th>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>25% Valentines Day</td>
    <td>BEMINEFOR25</td>
    <td>02/15/2023</td>
    <th>25%</th>
    <td><button id="button" type="submit">Delete</button></td>
  </tr>
  </tbody>
</table>
          </div>
        );
      };
