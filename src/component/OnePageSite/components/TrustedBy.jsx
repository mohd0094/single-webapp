import React from 'react'
import { NavLink } from 'react-router-dom'

const TrustedByContent = {
    title: 'Trusted Worldwide',
    heading: 'Trusted by over 600 million users and 10,000 teams',
    paragraph: 'Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.',
    btn1: 'Explore Legality Guide',
    btn2: 'Visit the Trust Center',
    iconsContent: [
        {
            id:1,
            iconImg: './images/11.jpg',
            iconHeading: '99.99% uptime',
            iconParagraph: 'For Landwind, with zero maintenance downtime'

        },
        {
            id:11,
            iconImg: './images/12.jpg',
            iconHeading: '600M+ Users',
            iconParagraph: 'Trusted by over 600 milion users around the world'
        },
        {
            id:12,
            iconImg: './images/13.jpg',
            iconHeading: '100+ countries',
            iconParagraph: 'Have used Landwind to create functional websites'
        },
        {
            id:13,
            iconImg: './images/14.jpg',
            iconHeading: '5+ Million',
            iconParagraph: 'Transactions per day'
        }

    ]

}



const TrustedBy = () => {
    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <p className="text-lg font-medium text-purple-600 dark:text-purple-500"> {TrustedByContent.title}</p>
                        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                            {TrustedByContent.heading}
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"> {TrustedByContent.paragraph}</p>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">

                            <div>
                                <NavLink className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                    {TrustedByContent.btn1}
                                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                    {TrustedByContent.btn2}
                                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">

                        {
                            TrustedByContent.iconsContent.map((Element) => {
                                return (
                                    <div key={Element.id}>
                                        <img src={Element.iconImg} alt="" className='w-[150px] h-[150px] object-cover' />
                                        <h3 className="mt-3 mb-2 text-2xl font-bold dark:text-white">{Element.iconHeading}</h3>
                                        <p className="font-light text-gray-500 dark:text-gray-400">{Element.iconParagraph}</p>
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

export default TrustedBy
