import NextLink from "next/link";
import { useRouter } from "next/router";

//Back button for dictionary

export default function BackButtonDictionary() {
  const router = useRouter();


  const handleGoBack = () => {
    router.back();
  };

 
  return (
    <div className={`flex justify-start items-center fixed w-full top-0 left-0 py-4 z-30 md:pt-8 bg-neutral-100 text-center`}>
  <div className="grid grid-cols-3 w-4/5">
    {/* Back button */}
    <button onClick={handleGoBack} className="text-center">
        <h5 className={`font-nunito text-2xl lg:text-4xl font-bold hover:text-wisdom-purple-hover duration-300`}>Back</h5>
      </button>
  </div>
</div>
    
  );
}
