import { MeetKatherine } from "./front_page/MeetKatherine";
import { Services } from "./front_page/Services";
import { RecipesAndBlog } from "./front_page/RecipesAndBlog";

export function FrontPage(props) {
  return (
    <div>
      <MeetKatherine />
      <Services />
      <RecipesAndBlog recipes={props.data} />
    </div>
  );
}
