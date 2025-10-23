// import React from "react";
// import Footer from "../../../../../components/ui/Footer";
// import DocumentLink from "./DocumentLink";

// const Disclosures = () => {
//   return <div>
//     <DocumentLink/>
//     <Footer/>
//   </div>;
// };

// export default Disclosures;

import React from "react";
import "./Disclosures.css";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";

const disclosuresData = [
  "Details of business",
  "Memorandum of Association and Articles of Association",
  "Brief profile of board of directors including directorship and full-time positions in body corporates",
  "Terms and conditions of appointment of independent directors",
  "Composition of various committees of Board of Directors.",
  "Code of conduct of board of directors and senior management personnel.",
  "Details of establishment of vigil mechanism/ Whistle Blower policy",
  "Criteria of making payments to non-executive directors, if the same has not been disclosed in annual report.",
  "Policy on dealing with related party transactions.",
  "Policy for determining 'material' subsidiaries.",
  "Details of familiarization programmes imparted to independent directors including the following details:-",
  "Number of programmes attended by independent directors (during the year and on a cumulative basis till date),",
  "Number of hours spent by independent directors in such programmes (during the year and on cumulative basis till date), and",
  "Other relevant details",
  "The email address for grievance redressal and other relevant details.",
  "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances.",
  "Financial information including:",
  "Notice of meeting of the board of directors where financial results shall be discussed",
  "Financial Information including:",
  "Financial results, on conclusion of the meeting of the board of directors where the financial results were approved",
  "Complete copy of the annual report including balance sheet, profit and loss account, directors report, corporate governance report etc.",
  "Shareholding Pattern",
  "Details of agreements entered into the media companies and/or their associates, etc.",
  "Schedule of analysts or institutional investors meet and presentations made by the listed entity to analysts or institutional investors",
  "Audio or video recordings and transcripts of post earnings/quarterly calls",
  "New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change.",
  "Items published in the newspaper:",
  "Financial results, as specified in regulation 33, along-with the modified opinion(s) or reservation(s), if any, expressed by the auditor:",
  "Notices given to shareholders by advertisement.",
  "All credit ratings obtained by the entity for all its outstanding instruments, updated immediately as and when there is any revision in any of the ratings",
  "Separate audited financial statements of each subsidiary of the listed entity in respect of a relevant financial year, uploaded at least 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year",
  "Secretarial compliance report",
  "Disclosure of the policy for determination of materiality of events or information.",
  "Disclosure of contact details of key managerial personnel who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange(s)",
  "All such events or information which have been disclosed to stock exchange(s) under regulation 30 of LODR",
  "Statements of deviation(s) or variation(s) as specified in regulation 32 of these regulations",
  "Dividend distribution policy by listed entities based on market capitalization as specified in sub-regulation (1) of regulation 43A",
  "Annual return as provided under section 92 of the Companies Act, 2013 and the rules made thereunder.",
  "Employee Benefit Scheme Documents",
];

const Disclosures = () => {
  return (
    <div className="disclosures-container">
      <h2 className="disclosures-title">Disclosures</h2>
      <div className="disclosures-list">
        {disclosuresData.map((item, index) => (
          <div className="disclosure-item" key={index}>
            <div className="disclosure-left">
              <FaFileAlt className="disclosure-icon" />
              <span>{item}</span>
            </div>
            <FaArrowRight className="disclosure-arrow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disclosures;
