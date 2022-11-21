import { useState } from "react";
import Modal from "../components/Modal";
import AddAdminForm from "../components/AddAdminForm";
import AdminPortalNav from "../components/AdminPortalNav";
import { navs } from "../utils/config";

export default function ManageUsers() {
  const [open, setOpen] = useState(false);
  return (
    <div className="adminNav-users">
      <AdminPortalNav navs={navs} />
      <div className="text-center">Users/Admins</div>
      <div
        onClick={() => setOpen(true)}
        className="text-sm text-center font-medium text-on-primary cursor-pointer hover:text-gray-100"
      >
        Add Admin
      </div>
      <Modal open={open} setOpen={setOpen} title="Add Admin">
        <AddAdminForm />
      </Modal>
      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <th>Account Type</th>
            <th>Status</th>
            <th className="text-center">Suspend Account?</th>
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
    </div>
  );
};
