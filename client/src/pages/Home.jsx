function Home() {
  return (
    <>
      <div className="dampy-container">
        <h1 className="dampy-heading">Welcome to FindCityWeather</h1>
        <div className="dampy-content-row">
          <div className="dampy-content">Main content goes here.</div>
          <div className="dampy-image-wrapper">
            <img
              src="../src/assets/demo_rain.webp"
              alt="rainy weather"
              className="dampy-image"
            />
          </div>
          <ul className="dampy-points">
            <li>Find your citie's weather in an instant</li>
            <li>Updated in real time</li>
            <li>Discover several parameters</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
