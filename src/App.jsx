import Search from "./components/Search";


function App() {
  return (
    <>
      
      <div className="max-container h-screen w-full flex flex-col items-center justify-between px-8 py-5 bg-gradient-to-tl from-blue-700 from-10% to-amber-400 to-90%" >
        <h1 className="my-7 text-[23px] font-bold font-montserrat">Enter The City Name</h1>
        <Search />
      </div>
    </>
  );
}

export default App;
