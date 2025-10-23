import React from "react";
// import Hub from "../../../../../components/home/Hub";
import InvestorRelationsNavbar from "../InvestorRelationsNavbar/InvestorRelationsNavbar";
import Hub from "../../../../../components/home/Hub";
import InvestorRelationsMain from "./InvestorRelationsMain";
import ShortCards from "../../../../../components/home/ShortCards";
import MissionStatement from "./MissionStatement";
import MakingIndiaAllElectric from "./MakingIndiaAllElectric";
import DistributionNetwork from "./DistributionNetwork";
import Footer from "../../../../../components/ui/Footer";

const InvestorRelationHomePage = () => {
  return (
    <div>
      <InvestorRelationsMain />
      <MissionStatement />
      <Hub />
      <ShortCards />
      <MakingIndiaAllElectric />
      <DistributionNetwork />
      <Footer/>
    </div>
  );
};

export default InvestorRelationHomePage;
