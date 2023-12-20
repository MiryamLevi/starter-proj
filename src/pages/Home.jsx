import { EmailIndex } from "./EmailIndex";
import { Menu } from "../cmps/Menu";
import {HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { EmailDetails } from "../cmps/EmailDetails";

export function Home() {
  return (
    <section className="home">
      <Menu/>
      <Router>
        <article className="menu-item-content">
          <Routes>

          <Route path="/inbox" element={<EmailIndex/>} />
          <Route path="/inbox/:emailID" element={<EmailDetails/>} />
          {/* <Route path="/starred" element={<EmailIndex/>} />
          <Route path="/trash" element={<EmailIndex/>} />  */}
          <Route index element={<Navigate to="/inbox" />} />

          </Routes>
        </article>
      </Router>
    </section>
  );
}
