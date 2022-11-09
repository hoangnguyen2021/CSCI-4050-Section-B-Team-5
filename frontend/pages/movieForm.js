import Link from 'next/link'
import Dropdown from "../components/Dropdown";
export default function MovieForm() {
  const ratings = [
    { id: 0, name: "G" },
    { id: 1, name: "PG" },
    { id: 2, name: "PG-13" },
    { id: 3, name: "R" },
    { id: 4, name: "NC-17" }
  ];

  const days = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
    { id: 11, name: "11" },
    { id: 12, name: "12" },
    { id: 13, name: "13" },
    { id: 14, name: "14" },
    { id: 15, name: "15" },
    { id: 16, name: "16" },
    { id: 17, name: "17" },
    { id: 18, name: "18" },
    { id: 19, name: "19" },
    { id: 20, name: "20" },
    { id: 21, name: "21" },
    { id: 22, name: "22" },
    { id: 23, name: "23" },
    { id: 24, name: "24" },
    { id: 25, name: "25" },
    { id: 26, name: "26" },
    { id: 27, name: "27" },
    { id: 28, name: "28" },
    { id: 29, name: "29" },
    { id: 30, name: "30" },
    { id: 31, name: "31" },
  ];

  const months = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Feb" },
    { id: 3, name: "Mar" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "Jun" },
    { id: 7, name: "Jul" },
    { id: 8, name: "Aug" },
    { id: 9, name: "Sep" },
    { id: 10, name: "Oct" },
    { id: 11, name: "Nov" },
    { id: 12, name: "Dec" },
  ];
  
  const years = [
    { id: 1, name: 2004 },
    { id: 2, name: 2005 },
    { id: 3, name: 2006 },
    { id: 4, name: 2007 },
    { id: 5, name: 2008 },
    { id: 6, name: 2009 },
    { id: 7, name: 2010 },
    { id: 8, name: 2011 },
    { id: 9, name: 2012 },
    { id: 10, name: 2013 },
    { id: 11, name: 2014 },
    { id: 12, name: 2015 },
    { id: 13, name: 2016 },
    { id: 14, name: 2017 },
    { id: 15, name: 2018 },
    { id: 16, name: 2019 },
    { id: 17, name: 2020 },
    { id: 18, name: 2021 },
    { id: 19, name: 2022 },
  ];
  return (
    <div className="manageMovies bg-black">
        <div className="text-center">Add new Movie</div>
        <div className="back-to-home text-center">
        <Link href="/manageMovies">
    <button className= "text-red-600"> Back to Manage Movies </button>
    </Link>
    </div>
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="mb-5">
            <label
              for="movieTitle"
              class="mb-3 block text-base font-medium text-white"
            >
              Movie Title
            </label>
            <input
              type="title"
              name="title"
              id="title"
              placeholder="Movie Title"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="Category"
              class="mb-3 block text-base font-medium text-white"
            >
              Category
            </label>
            <input
              type="category"
              name="category"
              id="category"
              placeholder="Category"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <Dropdown label="Rating" options={ratings} />
          </div>
          <div className="mb-5">
            <label
              for="Synopsis"
              class="mb-3 block text-base font-medium text-white"
            >
              Synopsis
            </label>
            <textarea
              rows="4"
              name="synposis"
              id="synopsis"
              placeholder="Synopsis"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              for="Director"
              class="mb-3 block text-base font-medium text-white"
            >
              Director
            </label>
            <textarea
              rows="1"
              name="director"
              id="director"
              placeholder="Director"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              for="Producer"
              class="mb-3 block text-base font-medium text-white"
            >
              Producer
            </label>
            <textarea
              rows="1"
              name="producer"
              id="producer"
              placeholder="Producer"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              for="cast"
              class="mb-3 block text-base font-medium text-white"
            >
              Cast
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Cast"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <div>Release Date</div>
            <div></div>
            <Dropdown label="Day" options={days} />
            <Dropdown label="Month" options={months} />
            <Dropdown label="Year" options={years} />
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    );
  };
