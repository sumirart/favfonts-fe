export default function Header() {
  return (
    <>
      <div className="flex justify-between mt-4 py-4  container mx-auto">
        <p className="text-xl font-semibold">Google Fonts</p>
        <nav>
          <ul className="flex gap-4">
            <li className="hover:cursor-pointer hover:underline">CATALOG</li>
            <li className="hover:cursor-pointer hover:underline">FEATURED</li>
            <li className="hover:cursor-pointer hover:underline">ARTICLES</li>
            <li className="hover:cursor-pointer hover:underline">ABOUT</li>
          </ul>
        </nav>
      </div>
      <div className="border-b" />
    </>
  );
}
