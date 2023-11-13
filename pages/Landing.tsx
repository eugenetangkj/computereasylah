import WLDLogo from "@/assets/WLDLogo.png";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Text from "@/common/Text";
import Iframe from "react-iframe";
import { useState, useEffect } from "react";


//Landing page
const Landing = () => {
  //Video link to intro video
  const videoLink = "https://www.youtube.com/embed/njLdIZNpsEY";
  const [showLineBreak, setShowLineBreak] = useState(false);

  const lgBreakPoint = 1024;

  useEffect(() => {
    const handleResize = () => {
      setShowLineBreak(window.innerWidth >= lgBreakPoint); //Lg breakpoint
    };

    // Initial check
    handleResize();

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    bodyElement.classList.remove('overflow-hidden');

  }, []);


  
  return (
    <Layout>
        <div className="flex flex-col justify-center items-center text-center mt-8 bg-white">
          {/* Hero */}
          <div className="flex flex-col justify-center items-center my-12 space-y-4 mx-8 md:grid md:grid-cols-5 md:text-left md:gap-x-8 md:place-items-center lg:mx-16 xl:mx-48 2xl:mx-64">
            <div className='space-y-4 col-span-3'>
            <h1 className='font-nunito text-4xl lg:text-5xl lg:leading-normal font-bold'>
              Bring Learning Beyond {showLineBreak && <br />}Computer Classes
            </h1>
              <h3 className='font-nunito text-lg lg:text-xl text-pale-gray-500 leading-8 lg:leading-9'>We provide an interactive platform, The Playground, that allows senior adults to learn and practice basic computer skills outside of classes.</h3>
            </div>
              <img src='/assets/home/collage.png' alt='CEL Collage' className='col-span-2 w-3/4 sm:w-1/2 md:w-3/4' />
          </div>

          {/* About Us */}
          <div id='about-us' className='flex flex-col justify-center items-center w-screen space-y-4 py-8 px-8 lg:px-16 lg:py-16 xl:px-48 2xl:px-64 bg-pale-gray-bg'>
            {/* Absolute positioning for the images */}
            <div className="hidden xl:block absolute left-0 top-1/2 transform -translate-y-3/4">
              <img
                src="/assets/playground/cursor.png"
                alt="Cursor"
                className="w-32 h-32"
              />
            </div>
            <div className="hidden xl:block absolute right-0 top-1/2 transform -translate-x-3/10 -translate-y-1/2">
              <img
                src="/assets/playground/mouse.png"
                alt="Cursor"
                className="w-32 h-32"
              />
            </div>

            <h2 className='font-nunito text-2xl lg:text-3xl 2xl:text-4xl font-bold'>
              It all began with our volunteer experience.
            </h2>
            <h3 className='font-nunito text-lg lg:text-xl text-pale-gray-500 leading-8 lg:leading-9'>
              During our volunteer work at Work Live Digital, a ground-up movement offering free computer classes to senior adults, we recognized a gap - participants lacked a structured way to practice what they learned outside of class. So, we started Computer, Easy Lah!. Our mission: To build an interactive platform to better enable learning and practice.
            </h3>
          </div>

          {/* Main Body */}
          <div className='flex flex-col justify-center items-center space-y-4 lg:space-y-8 py-2 px-8 mt-8 lg:py-16 2xl:px-64 '>
            <h2 className='font-nunito text-2xl lg:text-3xl 2xl:text-4xl font-bold px-8'>Organising computer workshops for senior adults?</h2>
            <button className="font-nunito bg-trust-blue-900 px-6 py-4 font-bold rounded-full text-lg text-white hover:bg-trust-blue-hover duration-300"
            onClick={() => window.location.href = '/resources'}
            >View Resources</button>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 place-items-center items-center text-center bg-white w-4/5" style={{ marginTop: '5%' }}>
                {/* Plan */}
                <div className=" flex flex-col mb-12 space-y-8 self-start">
                  {/* Text content */}
                  <div className="text-left space-y-4">
                      <Title text="01 Plan" />
                      <Text content="Develop your own lesson outline, or check out our curriculum guide which uses Work Live Digital&apos;s foundation class curriculum."/>
                  </div>
                  {/* Image content */}
                  <img
                  src="/assets/home/workshop-1.png"
                  alt="Plan"
                  className="self-center w-auto sm:w-1/2 lg:w-2/3" />
                </div>

                {/* Integrate */}
                <div className=" flex flex-col mb-12 space-y-8 self-start">
                  {/* Text content */}
                  <div className="text-left space-y-4">
                      <Title text="02 Integrate" />
                      <Text content="Explore The Playground and take a look at our curriculum and playground guides to learn how to best integrate The Playground into your lessons."/>
                  </div>
                  {/* Image content */}
                  <img
                  src="/assets/home/workshop-2.png"
                  alt="Plan"
                  className="self-center w-auto sm:w-1/2 lg:w-2/3" />
                </div>

                {/* Guide */}
                <div className=" flex flex-col mb-12 space-y-8 self-start">
                  {/* Text content */}
                  <div className="text-left space-y-4">
                      <Title text="03 Guide" />
                      <Text content="During lessons, demonstrate to participants how to use The Playground for their post-lesson practice. Guide them how to access it."/>
                  </div>
                  {/* Image content */}
                  <img
                  src="/assets/home/workshop-3.png"
                  alt="Guide"
                  className="self-center w-auto sm:w-1/2 lg:w-2/3" />
                </div>

                {/* Takeaway */}
                <div className=" flex flex-col mb-12 space-y-8 self-start">
                  {/* Text content */}
                  <div className="text-left space-y-4">
                      <Title text="04 Takeaway" />
                      <Text content="Explore The Printables, which offers printable templates to help participants manage their computer journeys during and after classes."/>
                  </div>
                  {/* Image content */}
                  <img
                  src="/assets/home/workshop-4.png"
                  alt="Takeaway"
                  className="self-center w-auto sm:w-1/2 lg:w-2/3" />
                </div>




            </div>
            <h2 className='font-nunito text-2xl lg:text-3xl 2xl:text-4xl font-bold'>Watch our project trailer</h2>
            {/* Video */}
              <Iframe
                url={videoLink}
                id=""
                className="w-340p h-320p md:w-540p"
              />
          </div>

          {/* Project Study Partners */}
          <div className='flex flex-col justify-center items-center space-y-4 py-2 px-8 mt-16 mb-16 lg:px-16 xl:px-24 2xl:px-64 '>
          <h2 className='font-nunito text-2xl lg:text-3xl 2xl:text-4xl font-bold'>Our Project Study Partners</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 place-items-center'>
              <div className='hidden sm:block'></div>
              <img src="/assets/home/partners/wld-logo.png" alt="Work Live Digital" className="w-4/5 sm:w-1/2" />
              <img src="/assets/home/partners/family-central-logo.webp" alt="Family Central" className="w-4/5 sm:w-1/2" />
              <div className='hidden sm:block'></div>
              {/* <img src="/assets/home/partners/wld-logo.png" alt="Work Live Digital" className="w-4/5 sm:w-1/2" />
              <img src="/assets/home/partners/family-central-logo.webp" alt="Family Central" className="w-4/5 sm:w-1/2" /> */}

            </div>
          </div>

          {/* Get In Touch */}
          <div className='flex flex-col justify-center items-center space-y-4 w-screen py-8 px-8 lg:px-16 lg:py-16 xl:px-48 2xl:px-64 bg-pink-50'>
            <h2 className='font-nunito text-2xl lg:text-3xl 2xl:text-4xl font-bold'>Get in Touch</h2>
            <h3 className='font-nunito text-lg lg:text-xl text-pale-gray-500 leading-8 lg:leading-9'>Have any suggestions or questions for us? We are happy to get in touch.</h3>
            <button className="font-nunito bg-creative-pink-900 px-12 py-4 font-bold rounded-full text-lg text-white hover:bg-creative-pink-hover duration-300"
            onClick={() => window.location.href = '/contact'}
            >Contact</button>
          </div>

        </div>
    </Layout>
  );
};

export default Landing;
