import React from 'react'
import { NavLink } from 'react-router-dom'


const footerContent = [

    {
        topLinkHeading: 'COMPANY',
        topLinks: [
            {
                linkText: 'Home',
                URLlink: '/'
            },
            {
                linkText: 'About',
                URLlink: '/about'
            },

            {
                linkText: 'Contact',
                URLlink: '/contact'
            },
            {
                linkText: 'Services',
                URLlink: '/services'
            },

        ]
    },
    {
        topLinkHeading: 'Help center',
        topLinks: ['Discord Server', 'Twitter', 'Facebook', 'Contact us']
    },
    {
        topLinkHeading: 'Legal',
        topLinks: ['Privacy Policy', 'Licensing', 'Terms']
    },
    {
        topLinkHeading: 'COMPANY',
        topLinks: ['Home', 'About', 'Contact', 'Blog']
    },

    {
        topLinkHeading: 'Download',
        topLinks: ['iOS', 'Android', 'Windows', 'MacOS']
    },

]

const footerButtonContent = [
    {
        logoTitle: 'Landwind',
        copyright: '© 2021-2022 Landwind™. All Rights Reserved.',
        socailIcons1: [
            'images/icon1.svg',
            'images/icon2.svg',
            'images/icon3.svg',
            'images/icon4.svg',
            'images/icon5.svg',
        ]
    },
]

const Footer = () => {
    return (
        <div>
            <footer className="bg-indigo-500 dark:bg-gray-500">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {
                            footerContent.map((element, index) => {

                                return (
                                    <div key={index}>
                                        <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">{element.topLinkHeading}</h3>
                                        <ul className="text-gray-50 dark:text-gray-400">
                                            {
                                                element.topLinks.map((elementChild, index) => {
                                                    return (
                                                        <li className="mb-4" key={index}>
                                                            <NavLink to={elementChild.URLlink} className=" hover:underline">{elementChild.linkText ? elementChild.linkText : elementChild}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            }</ul>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className="text-center">
                        <NavLink className="flex items-center justify-center mb-5 text-2xl font-semibold text-white dark:text-white">
                            {footerButtonContent.logoTitle}
                        </NavLink>
                        <span className="block text-sm text-center text-gray-50 dark:text-gray-400">{footerButtonContent.copyright}</span>
                        <ul className="flex justify-center mt-5 space-x-5">

                            {
                                footerButtonContent.map((element) => {
                                    return (
                                        element.socailIcons1.map((e, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="text-gray-50 hover:y-2 dark:hover:text-white dark:text-gray-400">
                                                        <img src={e} alt="" className="w-10 h-10 invert drop-shadow-lg" />
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

