import { useState } from "react";
import me from "../src/img/me.png";

export default function About() {
  const [title, setTitle] = useState("");

  function getTitle() {
    setTitle((document.title = "FOUND IT!!!!!"));
  }
  const styles = {
    text: {
      color: "white",
    },
    p: {
      fontSize: "20px",
      color: "white",
      fontWeight: "bold",
    },
  };
  return (
    <section className="about-section">
      <div>
        <img onClick={getTitle} className="img2" src={me} />
        <h1 style={styles.text}>What's up my name is Eric!</h1>
        <p style={styles.p} className="p">
          Hi my name is Eric i'm 22 years old, from New York from there moved to
          Florida orlando and now i'm a student in a bootcamp for software
          engineering. This is a breif story about some jobs i had before making
          this career change and a little about myself as well. Before i started
          this bootcamp i was in and out of jobs going back and fourth, a couple
          of places i work at were funspot, a warehouse, a restaurant called
          boston market, restaurant depot, and a car lot at an airport. At first
          i started working to build up my resume so i can find a very good job
          that i can stick with and make a career out of it but i came to
          realize that these jobs were not for me and i have no interest or
          motivation to keep pursuing until i found coding. I went on the
          internet and starting searching careers that pay well and could be
          life changing no matter how challeging they are, I ran into the ucf
          coding bootcamp and sign up and put in my information and waited for
          them to call. Then from there i went through all the steps to get
          enrolled into this bootcamp and prepared to start my journey as a
          coder.
        </p>
      </div>
    </section>
  );
}
