import React from 'react'

const LetContent ={
    heading : 'Work with tools you already use',
    paragraph : 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
    dotoList : [
        'Continuous integration and deployment',
        'Development workflow',
        'Knowledge management'
    ],
    dotoPara : 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions.',
    img: './images/2.jpg'
}

const RightContent ={
    heading : 'We invest in the world’s potential',
    paragraph : 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
    dotoList : [
        'Dynamic reports and dashboards',
        'Templates for everyone',
        'Knowledge management',
        'Limitless business automation',
        'Development workflow',
        'Knowledge management'
    ],
    dotoPara : 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions.',
    img: './images/3.jpg'
}

const LeftRight = () => {
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            {LetContent.heading}
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">{LetContent.paragraph }</p>

                            <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                {
                                    LetContent.dotoList.map((element,index)=> {
                                        return (
                                            <li className="flex space-x-3" key={index}>
                                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{element}</span>
                                        </li>
                                        )
                                    })
                                }
                               

                               
                            </ul>
                            <p className="mb-8 font-light lg:text-xl">{LetContent.dotoPara}</p>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={LetContent.img} alt="dashboard feature " />
                    </div>

                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={RightContent.img} alt="feature  2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                {RightContent.heading}
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">{RightContent.paragraph}</p>

                            <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                {
                                    RightContent.dotoList.map((element,index) => {
                                        return(
                                            <li className="flex space-x-3" key={index}><svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg><span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{element}</span></li>
                                        )
                                    })
                                }
                            </ul>
                            <p className="font-light lg:text-xl">{RightContent.dotoPara}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LeftRight
