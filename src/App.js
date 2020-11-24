import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav.js';
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="TV Shows" fetchURL={requests.fetchTv} />
      <Row title="Upcoming" fetchURL={requests.fetchUpcoming} />

    </div>
  );
}

export default App;
