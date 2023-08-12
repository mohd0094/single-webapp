
import CallToAction from './CallToAction';
import Banner from './Banner'
import FAQ from './FAQ';
import BrandSection from './BrandSection';


const About = () => {
    return (
        <div>
            <Banner
                title="Building digital products & brands."
                paragraph="This free and open-source landing page template was built using the utility classNamees from."
                visit="/contact"
                btnName="Contact Now"
                imgsrc='./images/11.jpg'
            />
            <BrandSection/>
            <FAQ/>
            <CallToAction />
            

        </div>
    )
}

export default About
