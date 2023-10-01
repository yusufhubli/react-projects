
import Review from './Review';


function App() {
    return(
      <main className=' flex justify-center'>
        <section>
          <div className=' text-center my-3 text-2xl'>
            <h2>Our reiviews</h2>
            <div className=' h-[2px] my-2 bg-black'></div>
          </div>
          <Review/>
        </section>
      </main>
    )
  }
  

export default App;
