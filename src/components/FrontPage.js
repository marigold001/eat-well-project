import { MeetKatherine } from "./front-page/MeetKatherine";
import { Services } from "./front-page/Services";
import { FrontPageRecipes } from "./front-page/FrontPageRecipes";

export function FrontPage(props) {
  return (
    <div>
      <MeetKatherine />
      <Services />
      <FrontPageRecipes recipes={props.data} />
    </div>
  );
}
