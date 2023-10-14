import TeachingImage from "@/assets/teaching_image.png"

const Hero = () => {
  return (
    <div className="relative bg-cover bg-teaching-image w-full h-screen ">
      <div className="absolute bottom-0 w-full text-5xl font-semibold text-white p-24 text-center bg-black bg-opacity-50">
        Equipping senior adults with the confidence and skills to use a computer.
      </div>
    </div>
  );
};

export default Hero;
