import { MeetKatherine } from "./front_page/MeetKatherine";
import { Services } from "./front_page/Services";
import { FrontPageRecipes } from "./front_page/FrontPageRecipes";

export function FrontPage(props) {
  return (
    <div>
      <MeetKatherine />
      <Services />
      <FrontPageRecipes recipes={props.data} />
    </div>
  );
}
