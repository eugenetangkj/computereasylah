import NextLink from "next/link";
import { useRouter } from "next/router";
import { TermsData, Term } from "./dictionary/dictionaryData";
import { useState } from "react";

//Back button
export enum Topic {
  Typing,
  Applications,
  Email,
  Safety,
  Dictionary,
}

type BackButtonProps = {
  pathToReturnTo: string;
  displayText: string;
  category: Topic;
};

export default function BackButton({
  pathToReturnTo,
  displayText,
  category,
}: BackButtonProps) {
  let hoverColour =
    category == Topic.Typing
      ? "hover:text-energy-orange-hover"
      : category == Topic.Applications
      ? "hover:text-creative-pink-hover"
      : category == Topic.Email
      ? "hover:text-trust-blue-hover"
      : category == Topic.Safety
      ? "hover:text-passion-red-hover"
      : category == Topic.Dictionary
      ? "hover:text-wisdom-purple-hover"
      : "hover:text-black";

    let ringHoverColour =
    category == Topic.Typing
      ? "focus:ring-energy-orange-hover"
      : category == Topic.Applications
      ? "focus:ring-creative-pink-hover"
      : category == Topic.Email
      ? "focus:ring-trust-blue-hover"
      : category == Topic.Safety
      ? "focus:ring-passion-red-hover"
      : category == Topic.Dictionary
      ? "focus:ring-wisdom-purple-hover"
      : "focus:ring-text-black";
    
    let borderHoverColour =
    category == Topic.Typing
      ? "focus:border-energy-orange-hover"
      : category == Topic.Applications
      ? "focus:border-creative-pink-hover"
      : category == Topic.Email
      ? "focus:border-trust-blue-hover"
      : category == Topic.Safety
      ? "focus:border-passion-red-hover"
      : category == Topic.Dictionary
      ? "focus:border-wisdom-purple-hover"
      : "focus:border-text-black";
      
  

  
  //Constants for search bar
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTerms, setFilteredTerms] = useState<Term[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);


  const handleSearch = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowDropdown(true);
  
    // Check for an exact match
    const exactMatch = TermsData.terms.find(
      (item) => item.term.toLowerCase() === term.toLowerCase()
    );
  
    if (exactMatch) {
      // If an exact match is found, use it directly
      setFilteredTerms([exactMatch]);
    } else {
      // If no exact match, perform filtering
      const filtered = TermsData.terms.filter((item) =>
        item.term.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTerms(filtered);
    }
  };


  
  return (
  <div className={`flex justify-center items-center fixed w-full top-0 left-0 py-4 z-30 md:pt-8 bg-neutral-100 text-center`}>
    <div className="grid grid-cols-3 w-4/5 ">
  {/* Back button */}
  <NextLink href={pathToReturnTo} className="text-center w-fit mx-auto p-2">
    <h5
      className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}
    >
      {displayText}
    </h5>
  </NextLink>

  {/* Home button */}
  <NextLink href="/" className="text-center w-fit mx-auto p-2">
    <h5
      className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}
    >
      Home
    </h5>
  </NextLink>

  {/* Dictionary button */}
  <NextLink href="/dictionary" className="text-center w-fit mx-auto p-2 lg:hidden">
    <h5
      className={`font-nunito text-2xl lg:text-4xl font-bold ${hoverColour} duration-300`}
    >
      Dictionary
    </h5>
  </NextLink>



  {/* Search bar */}
  <div className="relative hidden lg:block">
      <input
        type="search"
        id='search-bar'
        className={`font-nunito p-2 text-lg sm:text-xl md:text-2xl text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-2 ${ ringHoverColour } ${ borderHoverColour } focus:border-wisdom-purple-hover outline-none`}
        placeholder="Search Computer Term"
        onChange={handleSearch}
        value={searchTerm}
        autoComplete="off"
      />

      {showDropdown && searchTerm && (
        <div className="absolute top-full left-0 w-full max-h-[400px] overflow-y-auto border bg-white py-4 px-8">
          {
          (filteredTerms.length == 1)
          ? (
            filteredTerms.map((term) => (
              <div key={term.term} className='flex flex-col justify-center items-center space-y-8'>
                <h3 className='font-gaegu text-5xl font-bold '>{term.term}</h3>
                <h5 className='font-gaegu text-3xl font-bold'>{term.leadingText}</h5>
                <img src={term.imageUrl} alt={term.term} className='w-1/2 xl:w-2/5' />
                <p className='font-nunito text-2xl xl:text-3xl' style={{ lineHeight: "3rem" }}>{term.explanation}</p>
              </div>
            )))
          : (filteredTerms.length > 1)
          ? (<p className='font-nunito text-2xl'>Be more specific!</p>)
          : (<p className='font-nunito text-2xl'>No results found.</p>)}
        </div>
      )}
    </div>

</div>
  </div>
    
  );
}
