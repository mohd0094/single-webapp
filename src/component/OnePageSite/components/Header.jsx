import React from 'react'
import { NavLink } from 'react-router-dom';


const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
];


function Header() {
  return (
    <div>
      <header className="w-full">
        <nav className="bg-indigo-100 border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <NavLink to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LOGO</span>
            </NavLink>

            <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                {navigation.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => (isActive ? 'active bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-800 px-3 py-2 text-sm rounded-md hover:bg-gray-700 hover:text-white')}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
