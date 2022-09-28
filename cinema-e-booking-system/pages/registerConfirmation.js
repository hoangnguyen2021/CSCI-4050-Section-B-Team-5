import React,{useState} from "react";
import Link from 'next/link'
const Index = () => {
    const[show,setShow]=useState(false)
    return (
        <div>
            <div> 
               {show &&  <div className="py-12 bg-black dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-8 md:px-16 bg-black dark:bg-grey-600 dark:border-grey-700 shadow-md rounded border border-black">
                            <div className="w-full flex justify-center text-green-400 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width={56} height={56} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                            </div>
                            <h1 className="text-center text-white dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">Registration Successful</h1>
                            <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">Thank you for joing Bulldog Cinema. You will be redirected to Login. Please make sure to confirm your account so you will be able to purchase tickets</p>
                            <div className="flex items-center justify-center w-full">
                            <Link href="/">
                                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">Done</button>
                                </Link>
                            </div>
                            <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out" onClick={()=>setShow(!show)} >
                                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className="w-full flex justify-center py-12" id="submitButton">
                    <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onClick={()=>setShow(!show)}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Index;