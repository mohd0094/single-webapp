import React from 'react';
// import { NavLink } from 'react-router-dom' ;
import './Faq.css';

import PropTypes from 'prop-types';
// import {AccordionContext} from './AccordionWrapper';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const FAQ = () => {
    const data = [
        {
            "title": "Item 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
        },
        {
            "title": "Item 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
        },
        {
            "title": "Item 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
        },
        {
            "title": "Item 4",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
        }
    ];

    return (
        <div>
            <section className="bg-white mt-20 dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
                    <div className="max-w-screen-md mx-auto">
                        <Accordion className='grid divide-y divide-neutral-200 mx-auto mt-8'>

                            {
                                data.map((e, i) => {
                                    return (
                                        <AccordionItem key={i} className="group">
                                            <AccordionItemHeading className="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <AccordionItemButton>
                                                    {e.title}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className='text-neutral-600 my-3 px-5 group-open:animate-fadeIn'>
                                                    {e.description}
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }


                        </Accordion>
                    </div>


                </div>
            </section>
        </div>
    )
}

FAQ.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default FAQ
