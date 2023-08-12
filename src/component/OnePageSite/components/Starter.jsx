import React from 'react'
import { NavLink } from 'react-router-dom'

const priceList = {
    heading: "Designed for business teams like yours",
    pargharaph: "Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    listOfTable: [
        {
            heading: "Starter",
            title: "Best option for personal use & for your next project.",
            price: "$29",
            priceTime: "/month",
            todoList: ["Individual configuration", "No setup, or hidden fees", "Team size: 1 developer", "Premium support: 6 months", "Free updates: 6 months"],
            btnName: "Get Started",
        },
        {
            heading: "Company",
            title: "Relevant for multiple users, extended & premium support.",
            price: "$99",
            priceTime: "/month",
            todoList: ["Individual configuration", "No setup, or hidden fees", "Team size: 10 developer", "Premium support: 24 months", "Free updates: 24 months"],
            btnName: "Get Started",
        },
        {
            heading: "Enterprise",
            title: "Best option for personal use & for your next project.",
            price: "$499",
            priceTime: "/month",
            todoList: ["Individual configuration", "No setup, or hidden fees", "Team size: 1 developer", "Premium support: 6 months", "Free updates: 6 months"],
            btnName: "Get Started",
        },
    ],


}



const Starter = () => {


    return (
      
        <div>

            <section className="bg-gray-900 dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white dark:text-white">{priceList.heading}</h2>
                        <p className="mb-5 font-light text-gray-400 sm:text-xl dark:text-gray-400">{priceList.pargharaph}</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {
                            priceList.listOfTable.map((element,index) => {
                                return (
                                
                                    <div key={index} className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                        <h3 className="mb-4 text-2xl font-semibold">{element.heading}</h3>
                                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{element.title}</p>
                                        <div className="flex items-baseline justify-center my-8">
                                            <span className="mr-2 text-5xl font-extrabold">{element.price}</span>
                                            <span className="text-gray-500 dark:text-gray-400">{element.priceTime}</span>
                                        </div>

                                        <ul className="mb-8 space-y-4 text-left">
                                            {
                                                element.todoList.map((el,index) => {

                                                    return (
                                                        <li key={index} className="flex items-center space-x-3">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                            <span>{el}</span>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                        <NavLink to='/' className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">{element.btnName}</NavLink>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Starter
