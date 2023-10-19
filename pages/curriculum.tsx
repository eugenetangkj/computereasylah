import Navbar from "@/components/Navbar";
import Title from "@/common/Title";
import Text from "@/common/Text";

interface CurriculumProps {
  // Define your props if needed
}

const Curriculum: React.FC<CurriculumProps> = (props) => {
  // You can use the props and state here

  return (
    <div className="bg-white h-screen ">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center bg-white w-screen overflow-y-hidden">
        <Title text="Curriculum" />
        <Text content="Our Foundation Class Curriculum, designed by Work Live Digital, is specifically tailored to instill essential computer skills in senior adults, starting from the very basics. We believe in empowering seniors to confidently navigate the digital world, and our curriculum serves as the starting point on their digital journey." />
      </div>
    </div>
  );
};

export default Curriculum;
