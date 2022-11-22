import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import AdminPortalNav from "../../components/AdminPortalNav";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import { navs, ratings } from "../../utils/config";
import Modal from "../../components/Modal";
import AddAdminForm from "../../components/AddAdminForm";
import AddButton from "../../components/AddButton";
import PillButton from "../../components/PillButton";
import InputField from "../../components/InputField";
import EmailField from "../../components/EmailField";
import { EditSvg } from "../../components/Svg";

const ManageUsersPage = () => {
    const [open, setOpen] = useState(false);
    const [adminName, setAdminName] = useState(true);
    const [email, setEmail] = useState(true);
    const [visibility, setVisibility] = useState(true);

  return (
    <div className="bg-background">
      <AdminPortalNav navs={navs} />
      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://wallpaper.dog/large/20493433.jpg"
          opacity={70}
        />
        <div className="relative flex justify-center items-center py-20">
          <div className="basis-5/6 flex flex-col gap-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h3 className="text-xl text-on-primary font-semibold text-center">Manage Users</h3>
            <table className="table-auto border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="border border-slate-600">Email</th>
                  <th className="border border-slate-600">Account Type</th>
                  <th className="border border-slate-600">Status</th>
                </tr>
              </thead>
              <tbody>{/*}
                {movies && movies.map(movie => {
                  return (
                    <tr key={movie.id}>
                      <td className="border border-slate-700">{movie.id}</td>
                      <td className="border border-slate-700">{movie.movie_title}</td>
                      <td className="border border-slate-700">{movie.movie_category}</td>
                      <td className="border border-slate-700">{ratings.find(r => r.id === movie.rating).name}</td>
                      <td className="border border-slate-700">{movie.movie_duration}</td>
                      <td className="border border-slate-700">{movie.director}</td>
                      <td className="border border-slate-700">{movie.producer}</td>
                      <td className="border border-slate-700">{movie.movie_cast}</td>
                      <td className="border border-slate-700">{movie.synopsis}</td>
                    </tr>);
                })}
            */}
              </tbody>
            </table>
            <AddButton text="Add Admin" open={open} setOpen={setOpen} />
                        <Modal open={open} setOpen={setOpen} visible = {visibility} title="Add Admin">
                        <div className="flex justify-between space-x-3 items-end">
       {/* <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary" placeholder = "Admin Name" readOnly={adminName} />*/}
       <InputField label="Admin Name" readOnly={adminName} />
        <button onClick={() => setAdminName(false)}>
        <EditSvg />
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
        <EmailField label="Email" readOnly={email} />
        <button onClick={() => setEmail(false)}>
        <EditSvg />
        </button>
        </div>
      <div className="pt-5">
        <PillButton text="Save" />
      </div>
                        </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;
