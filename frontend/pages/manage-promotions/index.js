import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import AdminPortalNav from "../../components/AdminPortalNav";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import AddButton from "../../components/AddButton";
import Modal from "../../components/Modal";
import InputField from "../../components/InputField";
import NumberField from "../../components/NumberField";
import DateField from "../../components/DateField";
import { navs } from "../../utils/config";

const ManagePromotionsPage = () => {
    const [promotions, setPromotions] = useState([]);
    const [open, setOpen] = useState(false);

    const { get } = useFetch();

    useEffect(() => {
        getPromotions();
    }, []);

    const getPromotions = async () => {
        try {
            const response = await get("api/movie/list");
            //const responseData = response.data;
            const responseData = [
                {
                    name: "BOGO 10%",
                    code: "EXG62FG",
                    expiration_date: "10/20/2022",
                    percentage: "10%"
                },
                {
                    name: "20% off children's ticket",
                    code: "20KIDS",
                    expiration_date: "10/20/2022",
                    percentage: "20%"
                },
                {
                    name: "15% off Military Discount",
                    code: "15MILITARY",
                    expiration_date: "10/20/2022",
                    percentage: "15%"
                },
                {
                    name: "25% Valentines Day",
                    code: "BEMINEFOR25",
                    expiration_date: "02/15/2023",
                    percentage: "25%"
                },
            ];
            if (responseData) {
                setPromotions(responseData);
                console.log(responseData);
            }
        } catch (e) {
            toast.error("Failed to get movies!");
        }
    };

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
                        <form className="w-full flex flex-col gap-y-3">
                            <h3 className="text-xl font-semibold text-center">Manage Promotions</h3>
                            <table className="table-auto border-collapse border border-slate-500">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-600">Promotion</th>
                                        <th className="border border-slate-600">Code</th>
                                        <th className="border border-slate-600">Expiration Date</th>
                                        <th className="border border-slate-600">Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promotions && promotions.map(promotion => {
                                        return (
                                            <tr key={promotion.id}>
                                                <td className="border border-slate-700">{promotion.name}</td>
                                                <td className="border border-slate-700">{promotion.code}</td>
                                                <td className="border border-slate-700">{promotion.expiration_date}</td>
                                                <td className="border border-slate-700">{promotion.percentage}</td>
                                            </tr>);
                                    })}
                                </tbody>
                            </table>
                        </form>
                        <AddButton text="Add Promotion" open={open} setOpen={setOpen} />
                        <Modal open={open} setOpen={setOpen} title="Add Promotion">
                            <div className="flex flex-col gap-y-5">
                                <InputField label="Promo Name" />
                                <DateField label="Expiration Date" />
                                <InputField label="Promo Code" />
                                <NumberField label="Percentage" />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePromotionsPage;