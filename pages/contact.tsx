import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Head from "next/head";
import { useEffect } from "react";
import { Slides } from "@/common/Slides";

//Contact page
const Contact = () => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    bodyElement.classList.remove('overflow-hidden');

  }, []);

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <Layout>
        <div className="overflow-x-hidden mb-32">
            <div className="flex flex-col items-center text-center bg-white lg:mx-16 xl:mx-48 2xl:mx-64">
                <div className="mx-auto w-11/12 mb-8 md:mb-12">
                <Title
                    className="p-4 md:p-12 items-center"
                    text="Say Hello!"
                />
                <Text
                    className=""
                    content="We are always on the lookout for collaboration opportunities and are open to any ideas that would improve our initiative as a whole. Feel free to leave us a message."
                />
                </div>
                <Slides />
        
            </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
