import About from "./components/About";
import HeaderNav from "./components/HeaderNav";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const aboutDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque lobortis dui, at convallis ante rhoncus et. Etiam feugiat vestibulum felis, quis consequat nunc maximus nec. In hac habitasse platea dictumst. Quisque convallis ligula nec posuere ultrices. Etiam vehicula dui sed nibh consequat, sed ornare tortor dictum. Cras nec dictum nisl. Nulla id ligula laoreet lorem tempus accumsan. Mauris et tortor in diam viverra auctor laoreet quis ex. Nunc commodo ante nec ante placerat.";
function App() {
  return (
    <div className="text-center">
      <HeaderNav />
      <Hero />
      <Heading id={'aboutHeading'} heading="ABOUT US" description={aboutDescription} />
      <About />
      <Heading id={'skillsHeading'} heading="SKILLS" description="" />
      <Skills />
      <div className="mt-5 p-5"></div>
    </div>
  );
}
export default App;
