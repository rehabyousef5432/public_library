import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Authors from "./components/Authors/Authors";
import Categories from "./components/Categories/Categories";
import Book from "./components/Books/Book";
import BookAdd from "./components/Books/BookAdd";
import DisplayImage from "./components/Books/UploadImage";
import DetailsCopies from "./components/Books/DetailsCopies";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import RentalDetails from "./pages/rentalDetails/RentalDetails";
import Admin from "./pages/admin/Admin";
import SubscribersDetails from "./pages/subscribersDetails/SubscribersDetails";

function App() {
  return (
    <div>
      {/* <DisplayImage /> */}

      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/rental-details" element={<RentalDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/subscribersDetails" element={<SubscribersDetails />} />

        {/* <Dashboard/> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookadd" element={<BookAdd />} />
        <Route path="/detailscopies" element={<DetailsCopies />} />
      </Routes>
    </div>
  );
}

export default App;
