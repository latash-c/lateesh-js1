import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main
        style={{
          padding: "20px"
        }}
      >
        <h2>Welcome to LateeshBook</h2>

        <p>
          Creator Social Network Platform
        </p>
      </main>

      <Footer />
    </>
  );
}

export default App;