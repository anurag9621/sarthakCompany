import image from "../../image/people.png";
const AboutOurPeople = (props) => {
  return (
    <>
      <div className="outerbox">
        <div className="our_people_header">
          <div className="our_people_context">
            <h1>{props.heading}</h1>
            <br />

            <p>{props.context}</p>
          </div>
          <div className="our_people_img">
            <img src={props.img} alt="" />
          </div>
              </div>
              <br /><br />
        <div className="our_people_header">
          <div className="our_people_context">
            <h1>{props.heading2}</h1>
            <br />

            <p>{props.context2}</p>
          </div>
          <div className="our_people_img">
            <img src={props.img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutOurPeople;
