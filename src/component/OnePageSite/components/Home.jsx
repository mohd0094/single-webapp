import React from 'react'
import Banner from './Banner'
import BrandSection from './BrandSection';
import LeftRight from './LeftRight';
import TrustedBy from './TrustedBy';

const Home = () => {
    // this.props.setProgress(100);
    return (
        <div>
            <Banner
                title="Building digital products & brands."
                paragraph="This free and open-source landing page template was built using the utility classNamees from."
                visit="/contact"
                btnName="Contact Now"
                imgsrc='./images/1.jpg'

            ></Banner>

            <BrandSection></BrandSection>

            <LeftRight></LeftRight>

            <TrustedBy></TrustedBy>

        </div>
    )
}

export default Home
