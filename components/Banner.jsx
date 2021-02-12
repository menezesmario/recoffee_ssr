// import Link from "next/link";
// import { useState } from "react";
// import styles from "../styles/Banner.module.css";
export const Banner = () => {
  // const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <main
      className="h-screen flex items-center px-6 lg:px-32 bg-yellow-900 text-white relative"
      style={{
        backgroundImage: `url("https://pausecoffee.co.za/wp-content/uploads/2017/06/shutterstock_289584713_sml.jpg")`, backgroundSize: 'cover', overflow: 'hiden',
      }}
    >
      {/* <video src='./images/coffeebanner.mp4' autoPlay loop muted /> */}
       
      <section className="w-full md:w-9/12 xl:w-8/12" style={{marginTop: '40vh'}}>
        <h1 className="text-3xl lg:text-5xl font-bold text-white">reCoffee</h1>
        <p className="font-bold mb-1">
          Os melhores cafés diretamente do produtor
        </p>
        <p>Descontos especiais para programadores</p>
      </section>
    </main>
  );
};

//   You could also try setting style inline without using a variable, like so:

// style={{"height" : "100%"}} or,

// for multiple attributes: style={{"height" : "100%", "width" : "50%"}}
