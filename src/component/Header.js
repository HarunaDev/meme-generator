import MyImage from "../assets/meme-img.jpg"

export default function Header() {
    return (   
        <header className="header">
          <img src={MyImage} className="header-logo" alt="logo" />
          <h2>Meme Generator</h2>
        </header>
    );
  }