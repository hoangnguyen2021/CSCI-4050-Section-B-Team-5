import Link from 'next/link'

export default function Example() {
  return (
    <div className="overflow-hidden bg-black shadow">
      <div className="text-center">
        <Link href="/">
          <button className="home"> Back to Home</button>
        </Link>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-white-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-white-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white-500">Name</dt>
            <dd className="mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0">Mary Jane</dd>
          </div>
          <div className="bg-neutral-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white-500">Email address</dt>
            <dd className="mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0">maryjane@example.com</dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white-500">Billing Address</dt>
            <dd className="mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0">223 Oakwood Dr Longlake, OH 30303</dd>
          </div>
          <div className="bg-neutral-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white-500">Status</dt>
            <dd className="mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0">
              Active
            </dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-white-500">Card</dt>
            <dd className="mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0">
              Card Info
            </dd>
          </div>
          <div className="bg-black px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd className="mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0">
              <div className="ml-4 flex-shrink-0">
                <Link href="/editProfile" >
                  <div className="font-medium text-red-600 hover:text-red-500">Edit Profile</div>
                </Link>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}