/* eslint-disable react/prop-types */
import { useEffect } from "react";
import WebFont from "webfontloader";
export default function CardContainer(props) {
  const { fontsData, sampleText, fontSize } = props;
  console.log(fontsData);
  return (
    <div className="fontcard__container">
      {fontsData.map((font, index) => (
        <Card
          font={font}
          key={index}
          sampleText={sampleText}
          fontSize={fontSize}
        />
      ))}
    </div>
  );
}

function Card({ font, sampleText, fontSize }) {
  const { family, category } = font;

  useEffect(() => {
    WebFont.load({
      google: {
        families: [family],
      },
    });
  }, [family]);

  const fontStyle = {
    fontSize,
    fontFamily: `${family}, ${category}`,
  };

  return (
    <div className="border-t py-2 fontcard__item">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{family}</p>
          <p className="text-slate-400">Christian Robertson</p>
        </div>
        <span className="text-4xl text-red-700 ">+</span>
      </div>
      <div className="min-h-[10rem] flex items-center minh">
        <p style={fontStyle}>{sampleText}</p>
      </div>
    </div>
  );
}
