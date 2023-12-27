import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";

const NoMatch = () => <h1>Page Not Found.</h1>;

function App() {
  return (
    <div className="App">
      {/* Start coding here */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/edit/:id" element={<EditProductPage />} />
          <Route path="/product/view/:id" element={<ViewProductPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
