import Certificate from "../../image/certificate.jpg"
const AboutSecondTop = () => {
    return (
        <>
            <div className="about_top_second_outerBox">
                <div className="aboutSecondOneCenter">
                    <div className="aboutTopSecondLeftOne">

                        <div className="header_second abourSecondHeading">
                            <span className="one">
                            </span>
                            <br />
                            <span className="two">
                            </span>
                            <h1>Product</h1>

                        </div>
                        <br /><br /><br />
                        <div className="AboutSecondOneContext">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis odit temporibus, repellat cum fugit consectetur incidunt ullam, aut voluptates facilis iusto placeat totam quidem non velit, nisi nesciunt rerum illo.
                            </p>
                        </div>
                    </div>
                    <div className="aboutSecondRightOne">
                        <img src={Certificate} alt="" />
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default AboutSecondTop;