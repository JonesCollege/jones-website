import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { IoMdCalendar } from "react-icons/io";
import { LuBookmarkPlus } from "react-icons/lu";
import Tooltip from "../Tooltip";
import CalendarModal from "../calendar/CalendarModal";
import Dropdown from "./Dropdown";
import { insertLineBreak } from "../../utility";
import "./nav.css";
import { Tabs } from "./INFO/NavbarTabs";

const DesktopNav = () => {
  const [openCalModal, setOpenCalModal] = useState(false);

  return (
    <div
      className="nav-grid-container"
      style={{ zIndex: `${openCalModal ? 0 : 50}` }}
    >
      <ul className="nav-grid">
        <ReserveRoomButton />
        <CalendarButton setOpenCalModal={setOpenCalModal} />
        <NavTabs />
      </ul>
      <Modal
        isOpen={openCalModal}
        className="calendar-modal"
        onRequestClose={() => setOpenCalModal(false)}
        centered
        style={{ zIndex: "99 !important" }}
      >
        <CalendarModal closeModal={() => setOpenCalModal(false)} />
      </Modal>
    </div>
  );
};

export default DesktopNav;

const ReserveRoomButton = () => (
  <li className="nav-item">
    <Tooltip text="Reserve a room">
    <button
    onClick={() => window.open("/reserve-room", "_blank")}
    className="room-reservation-button"
    >
        <LuBookmarkPlus size={20} />
      </button>
    </Tooltip>
  </li>
);

const CalendarButton = ({ setOpenCalModal }) => (
  <li className="nav-item">
    <Tooltip text="Calendar">
      <button onClick={() => setOpenCalModal(true)} className="calendar-button">
        <IoMdCalendar size={20} />
      </button>
    </Tooltip>
  </li>
);

const NavTabs = () => {
  return Tabs.map((item, index) => {
    if (item.route)
      return (
        <li className="nav-item" index={index}>
          <Link to={item.route} className="nav-links">
            {insertLineBreak(item.title)}
          </Link>
        </li>
      );
    else return <DropdownTab item={item} index={index} />;
  });
};

const DropdownTab = ({ item, index }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <li
      className="nav-item"
      index={index}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button
        className="nav-links hover-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {insertLineBreak(item.title)}
      </button>
      {showDropdown && <Dropdown arr={item.dropdownItems} />}
    </li>
  );
};
