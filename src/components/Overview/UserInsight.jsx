import React from 'react'
import dummyAvatar from './../../assets/images/avatars/avatar-1.png'

const UserInsight = () => {
  return (
    <div className='col-span-3 bg-white rounded-ten p-7'>
      <div className='flex flex-row pb-10 justify-between items-center gap-5'>
            <h4 className='font-avenirHeavy'>User Insight</h4>
            <label htmlFor="userInsightSearch" className='rounded-ten py-2.5 border-0.5 flex flex-row items-center gap-2 pl-2 border-brandGray4x w-sixtyPercent'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33334 13.3333C10.6471 13.3333 13.3333 10.647 13.3333 7.33325C13.3333 4.01954 10.6471 1.33325 7.33334 1.33325C4.01963 1.33325 1.33334 4.01954 1.33334 7.33325C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.4" d="M12.62 13.7931C12.9733 14.8598 13.78 14.9665 14.4 14.0331C14.9666 13.1798 14.5933 12.4798 13.5666 12.4798C12.8066 12.4731 12.38 13.0665 12.62 13.7931Z" stroke="#D6D6D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="search" name="user-insight-search" id="userInsightSearch" placeholder='Search by name. date, location or status' className='placeholder:text-xs w-full focus:outline-none focus:ring-none text-sm'/>
            </label>
      </div>

      <table className='table table-auto w-full text-left'>
          <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
              <th className='py-2'>
                  <input type="checkbox" name="master-check-user-insight" id="masterCheckUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
              </th>
              <th className='py-2'>
              </th>
              <th className='py-2'>
                Name
              </th>
              <th className='py-2'>
                Status
              </th>
              <th className='py-2'>
                Location
              </th>
              <th className='py-2'>
                Date
              </th>
              <th className='py-2'>
              </th>
              <th className='py-2'>
              </th>
          </thead>
          <tbody className=''>
              <tr className='even:bg-brandGray28x'>
                  <td className="py-3 px-1">
                    <input type="checkbox" name="check-user-insight" id="checkUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                  </td>
                  <td className="py-3 px-1">
                    <img src={dummyAvatar} alt="avatar" className='h-8 w-8' />
                  </td>
                  <td className="py-3 px-1">
                      <div>
                          <h5 className="text-xs">Angelique Jewelries</h5>
                          <p className='text-xxs text-brandGray27x'>Points: 140pts . Rate: 0.05g</p>
                      </div>
                  </td>
                  <td className="py-3 px-1">
                      <div className='text-xxs text-brandGreen5x bg-brandLightGreen1x py-1 px-2.5 rounded-forty w-fit h-fit text-center'>
                         Active
                      </div>
                  </td>
                  <td className="py-3 px-1">
                      <p className='text-xs'>Port Harcourt</p>
                  </td>
                  <td className="py-3 px-1">
                      <p className="text-brandGray29x text-xs">08-12-2022</p>
                  </td>
                  <td className="py-3 px-1">
                      <button type='button'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 4.48665C11.78 4.26665 9.54667 4.15332 7.32 4.15332C6 4.15332 4.68 4.21999 3.36 4.35332L2 4.48665" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M5.66667 3.81325L5.81334 2.93992C5.92001 2.30659 6 1.83325 7.12667 1.83325H8.87334C10 1.83325 10.0867 2.33325 10.1867 2.94659L10.3333 3.81325" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5667 6.59326L12.1333 13.3066C12.06 14.3533 12 15.1666 10.14 15.1666H5.86C4 15.1666 3.94 14.3533 3.86667 13.3066L3.43333 6.59326" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M6.88667 11.5H9.10667" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M6.33333 8.83325H9.66666" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='hidden'>Delete</p>
                      </button>
                  </td>
                  <td className="py-3 px-1">
                      <button type='button'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M7.33333 1.83325H5.99999C2.66666 1.83325 1.33333 3.16659 1.33333 6.49992V10.4999C1.33333 13.8333 2.66666 15.1666 5.99999 15.1666H9.99999C13.3333 15.1666 14.6667 13.8333 14.6667 10.4999V9.16658" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6933 2.51326L5.44 7.76659C5.24 7.96659 5.04 8.35992 5 8.64659L4.71333 10.6533C4.60666 11.3799 5.12 11.8866 5.84666 11.7866L7.85333 11.4999C8.13333 11.4599 8.52666 11.2599 8.73333 11.0599L13.9867 5.80659C14.8933 4.89992 15.32 3.84659 13.9867 2.51326C12.6533 1.17992 11.6 1.60659 10.6933 2.51326Z" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M9.94 3.2666C10.3867 4.85993 11.6333 6.1066 13.2333 6.55993" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='hidden'>Edit</p>
                      </button>
                  </td>
              </tr>
              <tr className='even:bg-brandGray28x'>
                  <td className="py-3 px-1">
                    <input type="checkbox" name="check-user-insight" id="checkUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                  </td>
                  <td className="py-3 px-1">
                    <img src={dummyAvatar} alt="avatar" className='h-8 w-8' />
                  </td>
                  <td className="py-3 px-1">
                      <div>
                          <h5 className="text-xs">Angelique Jewelries</h5>
                          <p className='text-xxs text-brandGray27x'>Points: 140pts . Rate: 0.05g</p>
                      </div>
                  </td>
                  <td className="py-3 px-1">
                      <div className='text-xxs text-brandGray31x bg-brandGray27x py-1 px-2.5 rounded-forty w-fit h-fit text-center'>
                        Inactive
                      </div>
                  </td>
                  <td className="py-3 px-1">
                      <p className='text-xs'>Port Harcourt</p>
                  </td>
                  <td className="py-3 px-1">
                      <p className="text-brandGray29x text-xs">08-12-2022</p>
                  </td>
                  <td className="py-3 px-1">
                      <button type='button'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 4.48665C11.78 4.26665 9.54667 4.15332 7.32 4.15332C6 4.15332 4.68 4.21999 3.36 4.35332L2 4.48665" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M5.66667 3.81325L5.81334 2.93992C5.92001 2.30659 6 1.83325 7.12667 1.83325H8.87334C10 1.83325 10.0867 2.33325 10.1867 2.94659L10.3333 3.81325" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5667 6.59326L12.1333 13.3066C12.06 14.3533 12 15.1666 10.14 15.1666H5.86C4 15.1666 3.94 14.3533 3.86667 13.3066L3.43333 6.59326" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M6.88667 11.5H9.10667" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M6.33333 8.83325H9.66666" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='hidden'>Delete</p>
                      </button>
                  </td>
                  <td className="py-3 px-1">
                      <button type='button'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M7.33333 1.83325H5.99999C2.66666 1.83325 1.33333 3.16659 1.33333 6.49992V10.4999C1.33333 13.8333 2.66666 15.1666 5.99999 15.1666H9.99999C13.3333 15.1666 14.6667 13.8333 14.6667 10.4999V9.16658" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6933 2.51326L5.44 7.76659C5.24 7.96659 5.04 8.35992 5 8.64659L4.71333 10.6533C4.60666 11.3799 5.12 11.8866 5.84666 11.7866L7.85333 11.4999C8.13333 11.4599 8.52666 11.2599 8.73333 11.0599L13.9867 5.80659C14.8933 4.89992 15.32 3.84659 13.9867 2.51326C12.6533 1.17992 11.6 1.60659 10.6933 2.51326Z" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M9.94 3.2666C10.3867 4.85993 11.6333 6.1066 13.2333 6.55993" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='hidden'>Edit</p>
                      </button>
                  </td>
              </tr>
              <tr className='even:bg-brandGray28x'>
                  <td className="py-3 px-1">
                    <input type="checkbox" name="check-user-insight" id="checkUserInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                  </td>
                  <td className="py-3 px-1">
                    <img src={dummyAvatar} alt="avatar" className='h-8 w-8' />
                  </td>
                  <td className="py-3 px-1">
                      <div>
                          <h5 className="text-xs">Angelique Jewelries</h5>
                          <p className='text-xxs text-brandGray27x'>Points: 140pts . Rate: 0.05g</p>
                      </div>
                  </td>
                  <td className="py-3 px-1">
                      <div className='text-xxs text-brandRed1x bg-brandLightRed2x py-1 px-2.5 rounded-forty w-fit h-fit text-center'>
                        Banned
                      </div>
                  </td>
                  <td className="py-3 px-1">
                      <p className='text-xs'>Port Harcourt</p>
                  </td>
                  <td className="py-3 px-1">
                      <p className="text-brandGray29x text-xs">08-12-2022</p>
                  </td>
                  <td className="py-3 px-1">
                      <button type='button'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 4.48665C11.78 4.26665 9.54667 4.15332 7.32 4.15332C6 4.15332 4.68 4.21999 3.36 4.35332L2 4.48665" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M5.66667 3.81325L5.81334 2.93992C5.92001 2.30659 6 1.83325 7.12667 1.83325H8.87334C10 1.83325 10.0867 2.33325 10.1867 2.94659L10.3333 3.81325" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5667 6.59326L12.1333 13.3066C12.06 14.3533 12 15.1666 10.14 15.1666H5.86C4 15.1666 3.94 14.3533 3.86667 13.3066L3.43333 6.59326" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M6.88667 11.5H9.10667" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M6.33333 8.83325H9.66666" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='hidden'>Delete</p>
                      </button>
                  </td>
                  <td className="py-3 px-1">
                      <button type='button'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M7.33333 1.83325H5.99999C2.66666 1.83325 1.33333 3.16659 1.33333 6.49992V10.4999C1.33333 13.8333 2.66666 15.1666 5.99999 15.1666H9.99999C13.3333 15.1666 14.6667 13.8333 14.6667 10.4999V9.16658" stroke="#3992CC" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.6933 2.51326L5.44 7.76659C5.24 7.96659 5.04 8.35992 5 8.64659L4.71333 10.6533C4.60666 11.3799 5.12 11.8866 5.84666 11.7866L7.85333 11.4999C8.13333 11.4599 8.52666 11.2599 8.73333 11.0599L13.9867 5.80659C14.8933 4.89992 15.32 3.84659 13.9867 2.51326C12.6533 1.17992 11.6 1.60659 10.6933 2.51326Z" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M9.94 3.2666C10.3867 4.85993 11.6333 6.1066 13.2333 6.55993" stroke="#3992CC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='hidden'>Edit</p>
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default UserInsight