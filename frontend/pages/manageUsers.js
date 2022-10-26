import { Navbar } from "../components/AdminBar";
import React from 'react';

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
    <th>Edit</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>EmilyGreen@gmail.com</td>
    <td>User</td>
    <td>Active</td>
    <select className="fields2" id="rating" name="rating">
                <option value="Active">Active</option>
                <option value="Suspend">Suspend</option>
              </select>
              <td><button id="button" type="submit">Update</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>JustinChance@gmail.com</td>
    <td>Admin</td>
    <td>Suspended</td>
    <select className="fields2" id="status" name="status">
                <option value="Active">Active</option>
                <option value="Suspend">Suspend</option>
              </select>
              <td><button id="button" type="submit">Update</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>ErnstGaines@gmail.com</td>
    <td>Admin</td>
    <td>Active</td>
    <select className="fields2" id="status" name="status">
                <option value="Active">Active</option>
                <option value="Suspend">Suspend</option>
              </select>
              <td><button id="button" type="submit">Update</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>HelenaDoward@gmail.com</td>
    <td>User</td>
    <td>Active</td>
    <select className="fields2" id="status" name="status">
                <option value="Active">Active</option>
                <option value="Suspend">Suspend</option>
              </select>
              <td><button id="button" type="submit">Update</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>ImaniJames@gmail.com</td>
    <td>User</td>
    <td>Suspended</td>
    <select className="fields2" id="status" name="status">
                <option value="Active">Active</option>
                <option value="Suspend">Suspend</option>
              </select>
              <td><button id="button" type="submit">Update</button></td>
              <td><button id="button" type="submit">Delete</button></td>
  </tr>
  <tr>
    <td>AdamKelly@gmail.com</td>
    <td>User</td>
    <td>Suspended</td>
    <select className="fields2" id="status" name="status">
                <option value="Active">Active</option>
                <option value="Suspend">Suspend</option>
              </select>
              <td><button id="button" type="submit">Update</button></td>
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
