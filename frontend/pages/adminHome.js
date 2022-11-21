import AdminPortalNav from "../components/AdminPortalNav";

export default function AdminHome() {
    return (
        <div className="dark:bg-gray-800 bg-black relative overflow-hidden h-screen">
            <AdminPortalNav />
            <div className="h-24 sm:h-32 flex items-center z-30 w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">

                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Welcome Admin,
                            <span className="text-5xl sm:text-7xl">
                                *Insert Name*
                            </span>
                        </h1>

                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Ff359881d-6bb2-4391-aba6-779f7084edd4%2Fda77owx-686f11bd-64e9-4a51-9b1c-7d0b27c22dc9.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGE3N293eC02ODZmMTFiZC02NGU5LTRhNTEtOWIxYy03ZDBiMjdjMjJkYzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hRhigowX0Bmavl7Y5g5JyF81Tv0YC2p7-A-e80Gkoyc&f=1&nofb=1&ipt=8172c16e93aa7bd1a995d6e01a21dd8e6b86f92f57eb5ad7d1dd965d64bc04c7&ipo=images" class="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}