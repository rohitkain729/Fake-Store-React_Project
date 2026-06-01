import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakeStoreIndex } from "./fakestore-components/fakestore-index";
import { FakeStoreCategories } from "./fakestore-components/fakestore-categories";
import { FakeStoreProducts } from "./fakestore-components/fakesstore-product";
import { FakeStoreDetails } from "./fakestore-components/fakestore-details";
import { FakeStoreRatings } from "./fakestore-components/fakestore-rating";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="d-flex justify-content-between p-3 bg-dark text-white">
          <div className="fs-4 fw-bold text-danger">FakeStore.</div>
          <div>
            <span className="me-3 fs-5">
              <Link to="/" className=" text-white text-decoration-none">
                Home
              </Link>
            </span>
            <span className="me-3 fs-5">
              {" "}
              <Link
                to="categories"
                className=" text-white text-decoration-none"
              >
                Shop
              </Link>
            </span>
            <span className="me-3 fs-5">
              {" "}
              <Link className=" text-white text-decoration-none">
                Contact
              </Link>{" "}
            </span>
          </div>
          <div>
            <span className="bi bi-search me-3 fs-5"></span>
            <span className="bi bi-heart me-3 fs-5"></span>
            <span className="bi bi-person-fill me-3 fs-5"></span>
            <span className="bi bi-cart4 fs-5"></span>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<FakeStoreIndex />} />
          <Route path="categories" element={<FakeStoreCategories />} />
          <Route path='products/:category' element={<FakeStoreProducts/>} >
          <Route path='details/:id' element={<FakeStoreDetails/>} >
          <Route path="rating/:id" element = {<FakeStoreRatings/>} />
          </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
