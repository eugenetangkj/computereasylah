import NextLink from "next/link";

const SafetyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
      <h1 className="text-5xl text-blue-600 font-bold mb-20 scale-125">
        Safety
      </h1>
      <NextLink href="/safety/quiz">
        <button className="bg-blue-500 rounded-3xl h-12 w-36 mb-10 scale-125">
          Quiz
        </button>
      </NextLink>
      <NextLink href="/safety/practical">
        <button className="bg-blue-500 rounded-3xl h-12 w-36 mb-10 scale-125">
          Practical
        </button>
      </NextLink>
    </div>
  );
};

export default SafetyPage;
