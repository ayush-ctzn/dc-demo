import { useState } from "react"

/**
 * 
 * @param {'48K-W44-556Z', 'sk1', 'wzrkt.com'} param0 
 * @returns 
 */
export const AuthForm = ({ submitFn, connected, disconnect }) => {
  const [cuid, setCuid] = useState("")
  const [dcAccId, setDcAccId] = useState("61a52046f56a14cb19a1e9cc")
  const [dcApikey, setDcApikey] = useState("9dcced09dae16c5e3606c22346d92361b77efdb360425913850bea4f22d812dd")
  const [ctAccId, setCtAccId] = useState("48K-W44-556Z")
  const [cc, setCC] = useState("")
  const [phone, setPhone] = useState("")


  const submit = (e) => {
    e.preventDefault();
    if (!connected) {
      submitFn({
        cuid: cuid,
        accountId: dcAccId,
        apikey: dcApikey,
        ctAccId,
        cc,
        phone
      })
    } else {
      disconnect()
    }
  }

  return (
    <>
      <div className="m-auto mt-10 sm:mt-0 w-9/12">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" className="text-left" onSubmit={submit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid gap-6 mb-6">
                  <div className="col-span-12 sm:col-span-12">
                    <label htmlFor="cuid" className="block text-sm font-medium text-gray-700">
                      Cuid
                    </label>
                    <div>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="cuid"
                          id="cuid"
                          autoComplete="cuid"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                          required={true}
                          value={cuid}
                          onChange={e => setCuid(e.target.value)}
                          placeholder="email@clevertap.com"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          @clevertap.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 ">

                  <div className="col-span-12 sm:col-span-12">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      DC Account Id *
                    </label>
                    <input
                      type="text"
                      name="dc-accountid"
                      id="dc-accountid"
                      placeholder="Direct Call's account id available in the dashboard"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required={true}
                      value={dcAccId}
                      disabled={true}
                      onChange={e => setDcAccId(e.target.value)}
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-12">
                    <label htmlFor="dc-api-key" className="block text-sm font-medium text-gray-700">
                      DC Api Key *
                    </label>
                    <input
                      type="text"
                      name="dc-api-key"
                      id="dc-api-key"
                      autoComplete="dc-apikey"
                      placeholder="Direct Call's api key available in the dashboard"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required={true}
                      value={dcApikey}
                      disabled={true}
                      onChange={e => setDcApikey(e.target.value)}
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-12">
                    <label htmlFor="ct-account-id" className="block text-sm font-medium text-gray-700">
                      Clevertap Account Id *
                    </label>
                    <input
                      type="text"
                      name="ct-account-id"
                      id="ct-account-id"
                      autoComplete="ct-account-id"
                      placeholder="Clevertap's account id available in the dashboard"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required={true}
                      disabled={true}
                      value={ctAccId}
                      onChange={e => setCtAccId(e.target.value)}
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="cc" className="block text-sm font-medium text-gray-700">
                      CC
                    </label>
                    <input
                      type="number"
                      name="cc"
                      id="cc"
                      autoComplete="cc"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={cc}
                      min="1"
                      onChange={e => setCC(e.target.value)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={phone}
                      min="1"
                      type="number"
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 mt-5">
                {
                  connected ? <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  >
                    Disconnect
                  </button> : <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Connect
                  </button>
                }

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}