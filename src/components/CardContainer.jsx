export default function CardContainer(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {arr.map((_, index) => (
        <Card {...props} key={index} />
      ))}
    </div>
  );
}

function Card({ sampleText, fontSize }) {
  return (
    <div className="border-t py-2">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Roboto</p>
          <p className="text-slate-400">Christian Robertson</p>
        </div>
        <span className="text-4xl text-red-700 ">+</span>
      </div>
      <div className="min-h-[10rem] flex items-center minh">
        <p style={{ fontSize }}>{sampleText}</p>
      </div>
    </div>
  );
}
