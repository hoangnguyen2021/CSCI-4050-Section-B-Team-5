import Link from 'next/link'
export default function MovieForm() {
    
  return (
    <div className="manageMovies bg-black">
        <div className="text-center">Add new Movie</div>
        <div className="back-to-home">
        <Link href="/manageMovies">
    <button className="back text-primary"> Back to Manage Movies</button>
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
              type="email"
              name="email"
              id="email"
              placeholder="Movie Title"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="genre"
              class="mb-3 block text-base font-medium text-white"
            >
              Genre
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Genre"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-white outline-none focus:border-red-600 focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="description"
              class="mb-3 block text-base font-medium text-white"
            >
              Description
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Description"
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