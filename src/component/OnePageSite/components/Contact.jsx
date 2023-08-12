import React, { useState } from 'react'

const Contact = () => {
// const [text, setText] = useState('Enter your words');

// const onkeyEvent = () =>{
//     let newtxt = text.toUpperCase();
//     setText(newtxt);
// }


// const textEvent = (event) => {
//     setText(event.target.value);
// }



const [data, setData] = useState({
    fullName : '',
    phone : '',
    email : '',
    msg : ''
});

const enterValue = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
        return {
            ...preVal,
            [name]: value,
        }
    })
}

const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullName}  ${data.phone}  ${data.email}   ${data.msg}`)
}


  return (

      <div className="flex min-h-[70vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact Form
          </h2>
        </div>


        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            
        {/* <div className='mb-5'>
              <div className="flex items-center justify-between">
                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                 Text Uppercase
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="text"
                  type="text"
                  autoComplete="text"
                  min="1" 
                  value={text}
                  onChange={textEvent}
                  onKeyUp={onkeyEvent}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <h2 name="text" className='text-lg'>{text.split(" ").length} Words and {text.length} Characters</h2>
            </div> */}
          <form className="space-y-6" action="#" method="POST" onSubmit={formSubmit}>
          
          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="Full Name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  value={data.fullName}
                  onChange={enterValue}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="Mobile No." className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile No.
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="phone"
                  min="1" 
                  value={data.phone}
                  onChange={enterValue}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={enterValue}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="Mobile No." className="block text-sm font-medium leading-6 text-gray-900">
                 Message
                </label>

              </div>
              <div className="mt-2">
                <textarea
                  id="msg"
                  name="msg"
                  autoComplete="mobile"
                  rows="6"
                  required
                  value={data.msg}
                  onChange={enterValue}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit
              </button>
            </div>
          </form>

          
        </div>
      </div>
  )
}

export default Contact
