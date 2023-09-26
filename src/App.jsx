import Header from "./components/header";
import Nav from "./components/nav";
import CardContainer from "./components/CardContainer";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Nav />
        <div>
          <CardContainer />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
