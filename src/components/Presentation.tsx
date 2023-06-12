import React from "react";
import { Routes, Route, redirect } from "react-router-dom";
import CoverSlide from "../slides/CoverSlide";
import DomVirtualDomSlide from "../slides/DomVirtualDomSlide";
import MotivationHistorySlide from "../slides/MotivationHistorySlide";
import FunctioningSlide from "../slides/FunctioningSlide";
import HooksSlide from "../slides/HooksSlide";
import OtherTechnologiesSlide from "../slides/OtherTechnologiesSlide";
import RoutingSlide from "../slides/RoutingSlide";
import ConclusionSlide from "../slides/ConclusionSlide";
import SlideNavigation from "./SlideNavigation";

const Presentation = () => (
  <div className="presentation">
    <SlideNavigation />
    <Routes>
      <Route path="/" element={<CoverSlide />} />
      <Route path="/dom-virtual-dom" element={<DomVirtualDomSlide />} />
      <Route path="/motivation-history" element={<MotivationHistorySlide />} />
      <Route path="/functioning" element={<FunctioningSlide />} />
      <Route path="/hooks" element={<HooksSlide />} />
      <Route path="/other-technologies" element={<OtherTechnologiesSlide />} />
      <Route path="/routing" element={<RoutingSlide />} />
      <Route path="/conclusion" element={<ConclusionSlide />} />
      <Route action={() => redirect("/")} />
    </Routes>
  </div>
);

export default Presentation;
