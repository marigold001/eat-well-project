import { Link } from "react-router-dom";

export function MeetKatherine() {
  return (
    <div className=" text-white container mx-auto p-5 bg-stone-500">
      <h2 className="text-4xl text-center tracking-[0.3em] mt-6">
        MEET KATHERINE WILDE
      </h2>
      <div className="w-1/4 border-b border-amber-300 mx-auto mt-4"></div>
      <div className=" md:p-9 lg:flex justify-center">
        <div className="md:mr-10 w-full lg:w-2/5 mx-auto pt-4">
          <img
            src={require("../../../assets/images/front_page_katherine.jpg")}
            alt="Katherine"
            className="mx-auto mt-6"
          />
        </div>
        {/* <div className="hidden md:hidden lg:block w-2 h-96 bg-black items-center"></div> */}

        <div className="text-left max-w-lg text-2xl md:text-lg lg:text-xl sm:mx-auto p-2">
          <p className="mt-16">
            <strong>Chef Katherine</strong> wiil show you how to incorporate
            fresh foods into your everyday eating lifestyle. She guides you on
            how to prepare quick and easy recipes using fresh ingredients.
            <strong> Chef Katherine</strong> teaches about how foods that are
            healthy bring about wellbeing of our body and mind.
          </p>
          <p>
            You can check out our fresh and delicious <Link to="/recipes" className="text-rose-300 font-black underline">recipes</Link> for your everyday
            needs.
          </p>
          <p>
            <strong>Chef Katherine</strong> will help you learn how to eat
            unprocessed foods without feeling unsatisfied, by:
          </p>
          <ul className="list-disc text-2xl md:text-lg lg:text-xl">
            <li className="ml-14">Eating minimally processed foods</li>
            <li className="ml-14">Choosing fresh foods that are in season</li>
            <li className="ml-14">
              We will make tasty foods that are healthy!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
