import './main.css';
import images from './images/image-hero-desktop.png'

function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <h2>About</h2>
        <p>My tech journey has been an incredible odyssey of discovery and growth. From the first click of a computer mouse to diving deep into complex programming languages, I have been captivated by the limitless possibilities of technology. The thrill of solving intricate problems, the joy of creating innovative solutions, and the satisfaction of seeing my ideas come to life have fueled my passion. Along the way, I have embraced continuous learning, staying up-to-date with the latest trends and advancements. Through countless hours of experimentation, collaboration, and perseverance, I have honed my skills and expanded my knowledge. As I reflect on my journey, I am filled with excitement for the future, eager to explore new frontiers and make a meaningful impact in the ever-evolving world of technology.
        </p>
      </div>
      <div className="main-right">
       
         <img className="img-logo" src= {images} alt="desktop"/>
      </div>
    </div>
  )
}

export default Main
