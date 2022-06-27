import AboutOurPeople from "./AboutOurPeople";
import image from "../../image/people.png";

const AboutFourthTop = () => {
  return (
    <>
      <div className="about_top_outerfourth_box">
        <div className="fourth_second">
          <div className="contce-AboutFourth">
            <div className="header_second aboutFourthHeading">
              <span className="one"></span>
              <br />
              <span className="two"></span>
              <h1>Our Vision</h1>
            </div>
            <br />
            <br />
            <div className="AboutFourthContext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, accusamus. Veniam eius commodi quibusdam a dolores
                laboriosam, nulla, id quod consequatur, vitae voluptatem soluta
                eligendi. Fugiat nostrum voluptatem ab quisquam.
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="aboutVisionBlock">
            <AboutOurPeople
              heading="Our People"
              context="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laboriosam, aperiam vero amet, obcaecati magnam eum facilis alias, numquam veritatis officia. Corporis velit fugiat soluta reprehenderit laboriosam veniam mollitia distinctio."
              img={image}
              heading2="Our People"
              context2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laboriosam, aperiam vero amet, obcaecati magnam eum facilis alias, numquam veritatis officia. Corporis velit fugiat soluta reprehenderit laboriosam veniam mollitia distinctio."
              img2={image}
            />
            <AboutOurPeople
              heading="Our People"
              context="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laboriosam, aperiam vero amet, obcaecati magnam eum facilis alias, numquam veritatis officia. Corporis velit fugiat soluta reprehenderit laboriosam veniam mollitia distinctio."
              img={image}
              heading2="Our People"
              context2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laboriosam, aperiam vero amet, obcaecati magnam eum facilis alias, numquam veritatis officia. Corporis velit fugiat soluta reprehenderit laboriosam veniam mollitia distinctio."
              img2={image}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutFourthTop;
