import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import { Slides } from "@/common/Slides";

//Curriculum page
const Curriculum = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden mb-32">
        <div className="flex flex-col items-center text-center bg-white lg:mx-16 xl:mx-48 2xl:mx-64">
          <div className="mx-auto w-11/12 mb-8 md:mb-12">
            <Title
              className="p-4 md:p-12 items-center"
              text="Curriculum"
            />
            <Text
              className=""
              content="The content on our platform aligns with the Foundation Class curriculum designed by Work Live Digital, which is specifically tailored to instill fundamental computer skills in senior adults, starting from the very basics."
            />
          </div>
    

          {/* Curriculum grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 lg:gap-12 xl:gap-20">

            {/* Introduction */}
            <div className={`border-4 border-introduction-green-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Introduction
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  What is a computer? What parts does it contain?
                </h5>
            </div>

            {/* Using a Computer */}
            <div className={`border-4 border-using-computer-lime-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Using a Computer
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How can I use the basic features of a computer?
                </h5>
            </div>

            {/* Typing */}
            <div className={`border-4 border-energy-orange-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Typing
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                How do I type into the computer using a keyboard?
                </h5>
            </div>

            {/* File Management */}
            <div className={`border-4 border-file-management-blue-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                File Management
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                How do I store and open files on a computer?
                </h5>
            </div>

            {/* Applications */}
            <div className={`border-4 border-creative-pink-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Applications
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                What are the main apps I can use on a computer?
                </h5>
            </div>

            {/* Internet */}
            <div className={`border-4 border-internet-purple-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Internet
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How do I browse the Internet using a computer?
                </h5>
            </div>

            {/* Email */}
            <div className={`border-4 border-trust-blue-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Email
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How do I use the computer to send emails?
                </h5>
            </div>

            {/* Safety */}
            <div className={`border-4 border-passion-red-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                  Safety
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How can I safely use a computer and the Internet?
                </h5>
            </div>
          </div>
       
          {/* <Slides /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Curriculum;
