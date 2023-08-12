import React from 'react'
import { NavLink } from 'react-router-dom'
import AirbndLogo from './img/airbnd.svg';
import GoogleLogo from './img/google.svg';
import MicrosoftLogo from './img/microsoft.svg';
import SpotifyLogo from './img/spotify.svg';
import MailchimpLogo from './img/mailchimp.svg';
import MashableLogo from './img/mashable.svg';

const brandLogos = [AirbndLogo, GoogleLogo, MicrosoftLogo, SpotifyLogo, MailchimpLogo, MashableLogo];

const BrandSection = () => {
  return (
    <div>
      <section className="bg-purple-500 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto ">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {
              brandLogos.map((element,index) => {
                return (
                  <NavLink key={index} className="flex items-center lg:justify-center">
                    <img src={element} alt="" className='invert drop-shadow-lg' />
                  </NavLink>
                );
              })
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default BrandSection

