import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
      <h1>About Me:</h1>
        <p>Hello, my name is STONEd. </p>
        <p>Father, Developer, Navy Veteran.</p>
        <p>Self-taught developer, currently located in Solana Beach, California. </p>
        <p>I started learning to code at the age of 12, and started taking it seriously in the last 3 years.</p>
        <p>Hobbies include: Banging my head on my keyboard, reading documents, and watching youtube videos.</p>
    
      <h1>Goals:</h1>
        <p>Pursue Blockchain Development and Game Development. 🎮</p>
        {/* <p>Become giga-chad CT influencer. 😜</p> */}
        <p>Make code to make life easier. 😴</p>
        <p>Just build cool shit in general. 🚀</p>
      </div>
      <div className="right">
      <h1>Credentials:</h1>
        <p>Experience in the following areas:</p>
          <p>HTML/CSS</p>
          <p>JavaScript</p>
          <p>Python</p>
          <p>React.js</p>
          <p>Sass</p>
          
        

      </div>
    </div>
  )
}
