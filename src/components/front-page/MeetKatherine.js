import { Link } from "react-router-dom";
import "./MeetKatherine.css";

export function MeetKatherine() {
  return (
    <div className=" container mx-auto mt-4 xl:mt-12">
      <h2 className="text-center tracking-[0.3em]">MEET KATHERINE WILDE</h2>
      <div className="w-1/4 border-b border-amber-300 mx-auto mt-4"></div>
      <div className=" lg:flex justify-center">
        <div className="md:mr-10 w-full lg:w-2/5 mx-auto pt-4">
          <img
            src={require("./../../assets/images/front_page_katherine.jpg")}
            alt="Katherine"
            className="mx-auto 2xl:ml-auto 2xl:mr-16 mt-6 adjust-height"
          />
        </div>
        {/* <div className="hidden md:hidden lg:block w-2 h-96 bg-black items-center"></div> */}

        <div className="text-left max-w-lg mx-auto xl:mr-auto xl:ml-0 p-2">
          <p className="mt-8">
            Katherine is an educated nutrition and diet expert. She{" "}
            <i>
              <strong>develops recipes</strong>
            </i>{" "}
            and{" "}
            <i>
              <strong>guides</strong>
            </i>{" "}
            and{" "}
            <i>
              <strong>teaches</strong>
            </i>{" "}
            people on how to eat well.
          </p>
          <p>
            To live a long and healthy life you need to eat healthy. Eating
            healthy isn’t hard it is actually something easy that you will enjoy
            even more than eating foods that are unhealthy.
          </p>
          <p>
            <i>
              <strong>"Healthy eating"</strong>
            </i>{" "}
            means fueling your body with nutritious food. People when they think
            about eating healthz think about eating a certain amount of
            calories even though calories are important you primary focus should
            be nutrients. That’s because your body needs nutrients to work
            properly, like carbs, protein, fat, vitamins, and minerals.
          </p>
          <p>
            You can learn more about <i>Nutrient Density</i>, <i>Diversity</i>, and{" "}
            <i>Macronutrients</i> on my <a href="/guidance">Healthy Eating Guidance</a> page.
          </p>
        </div>
      </div>
    </div>
  );
}
