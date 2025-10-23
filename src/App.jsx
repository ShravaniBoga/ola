import { Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import ScooterDropdown from "./pages/navbarPages/VehicleDropdown/Scooters/ScooterDropdown";
import MotorcycleDropdown from "./pages/navbarPages/VehicleDropdown/Motorcycles/MotorcycleDropdown";
import TestRidePage from "./pages/navbarPages/Test Ride/TestRidePage";
import OrderNowPage from "./pages/navbarPages/Order now/OrderNowPage";
import HomePage from "./pages/homepage/HomePage";
import InvestorRelationHomePage from "./pages/navbarPages/Investor Relations/InvestorRelationPages/InvestorHome/InvestorRelationHomePage";
import Financials from "./pages/navbarPages/Investor Relations/InvestorRelationPages/Financials/FinancialsComponent";
import Policies from "./pages/navbarPages/Investor Relations/InvestorRelationPages/Governance/Policies/Policies";
import Board from "./pages/navbarPages/Investor Relations/InvestorRelationPages/Governance/Board/Board";
import Disclosures from "./pages/navbarPages/Investor Relations/InvestorRelationPages/Shareholder Info/Disclosures";
import Announcements from "./pages/navbarPages/Investor Relations/InvestorRelationPages/announcements/Announcements";
import NewsEvents from "./pages/navbarPages/Investor Relations/InvestorRelationPages/NewsEvents/NewsEvents";
import InvestorRelationsNavbar from "./pages/navbarPages/Investor Relations/InvestorRelationPages/InvestorRelationsNavbar/InvestorRelationsNavbar";
import HamburgerMenu from "./pages/navbarPages/Investor Relations/InvestorRelationPages/hamburger menu/HamburgerMenu";
import SignIn from "./pages/authentication/SignIn";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn/>} /> {/* ✅ added */}
        <Route path="/scooters" element={<ScooterDropdown />} />
        <Route path="/motorcycles" element={<MotorcycleDropdown />} />
        {/* 🧱 Investor Relations Layout Route */}
        <Route path="/investor-relations" element={<InvestorRelationsNavbar />}>
          <Route index element={<InvestorRelationHomePage />} />{" "}
          {/* default content */}
          <Route path="financials" element={<Financials />} />
          <Route path="policies" element={<Policies />} />
          <Route path="board" element={<Board />} />
          <Route path="disclosures" element={<Disclosures />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="news-events" element={<NewsEvents />} />
        </Route>
        <Route path="/test-ride" element={<TestRidePage />} />
        <Route path="/order-now" element={<OrderNowPage />} />
        <Route path="/menu" element={<HamburgerMenu />} />
      </Routes>
    </div>
  );
}

export default App;
