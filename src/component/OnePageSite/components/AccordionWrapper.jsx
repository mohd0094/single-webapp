import React, {createContext, useState} from 'react';
import FAQ from './FAQ';
import './Faq.css';

export const AccordionContext = createContext({
    active: 0,
    setActive: () => {}
});

const AccordionWrapper = () => {
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


    const [active, setActive] = useState(0);

    return (
        <AccordionContext.Provider
            value={{
                active, setActive
            }}
        >
        <div className="accordion-wrapper">
            <form>
            <AccordionWrapper>
            {data.map((item, index) => (
              <FAQ key={index} index={index} title={item.title} description={item.description} />
            ))}
            </AccordionWrapper>
            </form>
        </div>
        </AccordionContext.Provider>
    )
}

export default AccordionWrapper; 