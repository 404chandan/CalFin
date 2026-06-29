import React from 'react'

function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="py-4 px-4 md:px-8 w-full">
        <div className="grid items-center gap-6 max-w-6xl mx-auto lg:grid-cols-2">
          <div className="border border-slate-300 rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0">
            <div className="mb-8">
              <h1 className="text-slate-900 text-3xl font-bold mb-4">
                Sign Up
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                Sign up to your account to access your dashboard and manage your
                projects.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@readymadeui.com"
                  required
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 text-slate-900 font-medium text-sm inline-block"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="flex items-start flex-wrap gap-2">
                <label className="flex items-center group has-[input:checked]:text-slate-900">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="sr-only"
                  />

                  {/* Custom box */}
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                    aria-hidden="true"
                  >
                    {/* Checkmark */}
                    <svg
                      className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                      viewBox="0 0 12 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 5l3 3 7-7" />
                    </svg>
                  </span>

                  <span className="ml-3 text-sm text-slate-700">
                    Remember me
                  </span>
                </label>

                {/* <a
                  href="#"
                  className="ml-auto text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Forgot password?
                </a> */}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Sign Up
              </button>

              <div className="text-slate-900 text-sm text-center">
                Already have an account?
                <a
                  href="/login"
                  className="text-blue-700 hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Login
                </a>
              </div>
            </form>
          </div>

          <div className="aspect-[71/50] max-lg:w-4/5 mx-auto">
            <img
              src="https://readymadeui.com/images/integration-illus.webp"
              className="w-full object-cover"
              alt="Login"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage