import { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
function App() {
  const [searchFont, setSearchFont] = useState("");
  const [sampleText, setSampleText] = useState("");
  const [fontSize, setFontSize] = useState("32px");

  const text = sampleText
    ? sampleText
    : "Then came the night of the first falling star.";

  const handleSearchFont = (e) => {
    setSearchFont(e.target.value);
  };
  const handleChangeSampleText = (e) => {
    setSampleText(e.target.value);
  };
  const handleChangeFontSize = (e) => {
    setFontSize(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="flex gap-5 flex-wrap">
          <input
            type="text"
            placeholder="Search fonts"
            value={searchFont}
            onChange={handleSearchFont}
          />
          <input
            type="text"
            placeholder="Type something.."
            value={sampleText}
            onChange={handleChangeSampleText}
          />
          <select name="" id="" onChange={handleChangeFontSize}>
            <option value="16px">16px</option>
            <option value="32px">32px</option>
          </select>
          <select name="" id="">
            <option value="white">white</option>
            <option value="black">black</option>
          </select>
          <p>List</p>
          <p>Reload</p>
        </div>
        <div>
          <CardContainer sampleText={text} fontSize={fontSize} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
