export default function Nav() {
  return (
    <div className="flex gap-5">
      <input type="text" placeholder="Search fonts" />
      <input type="text" placeholder="Type something.." />
      <select name="" id="">
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
  );
}
