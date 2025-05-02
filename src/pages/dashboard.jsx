import React from 'react'

export default function Dashboard() {
  return (
    <div>

<span
  aria-checked="false"
  class="focus:shadow-outline relative inline-block h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none"
  role="checkbox"
  tabindex="0"
>
  <span
    aria-hidden="true"
    class="inline-block size-5 translate-x-0 transform rounded-full bg-white shadow transition duration-200 ease-in-out"
  ></span>
</span>

      <section className="h-screen flex flex-col justify-center items-center bg-gray-100">
  <h1 className="text-4xl font-bold mb-4">Welcome</h1>
  <p className="text-lg mb-6">Start building your dream product today.</p>
  <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
</section>
    </div>
  )
}
