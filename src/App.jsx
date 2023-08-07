import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  // Fetch Tours

  // 1. Buat useState Loading
  const [isLoading, setIsLoading] = useState(true);
  // 2. Buat useState buat data tours
  const [tours, setTours] = useState([]);

  // 9. Remove tour handler
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTour);
  };

  // 3. Fetching data Tours
  const fetchTours = async () => {
    // set Loading
    setIsLoading(true);
    // Try catch fetch data
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      console.log(tours);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // 4. useEffect fetch data tours
  useEffect(() => {
    fetchTours();
  }, []);

  // 5. Loading Condition
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // 13. Refetch data tours
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h1>No tours left</h1>
          <button
            type="button"
            className="btn"
            onClick={() => fetchTours()}
            style={{ marginTop: "2rem" }}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  // 10. Remove Tour
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};
export default App;
