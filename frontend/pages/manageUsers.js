import { Navbar } from "../components/AdminBar";
import React from 'react';
//import Dropdown from "../components/Dropdown";

export default function ManageUsers() {
          return (
            <div className="adminNav-users">

        <Navbar />
        
<div className="text-center">Users/Admins</div>

<table>
<tbody>
  <tr>
    <th>Email</th>
    <th>Account Type</th>
    <th>Status</th>
    <th className= "text-center">Suspend Account?</th>
    <th></th>
  </tr>
  <tr>
    <td>EmilyGreen@gmail.com</td>
    <td>User</td>
    <td>Active</td>
    <td><button id="button" type="submit">Suspend</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>JustinChance@gmail.com</td>
    <td>Admin</td>
    <td>Suspended</td>
    <td><button id="button" type="submit">Suspend</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>ErnstGaines@gmail.com</td>
    <td>Admin</td>
    <td>Active</td>
    <td><button id="button" type="submit">Suspend</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>HelenaDoward@gmail.com</td>
    <td>User</td>
    <td>Active</td>
    <td><button id="button" type="submit">Suspend</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>ImaniJames@gmail.com</td>
    <td>User</td>
    <td>Suspended</td>
    <td><button id="button" type="submit">Suspend</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>AdamKelly@gmail.com</td>
    <td>User</td>
    <td>Suspended</td>
    <td><button id="button" type="submit">Suspend</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  </tbody>
</table>
<form id="addPromo">
        <div className="promo-container">
          <div className="newPromoLabel">
          <label>Add new Admin?</label>
          </div>
          <input type="text" placeholder = "Admin Name" name="adminName" required />
        </div>
        <div className="promo-container">
          <input type="text" placeholder = "Admin Email" name="adminEmail" required />
        </div>
        <div className="promoButton-container">
          <input type="submit"/>
        </div>
      </form>
          </div>
        );
      };
