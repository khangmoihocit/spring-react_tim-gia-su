import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/styles/Navbar.css";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    logout();
    // Additional cleanup if needed
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
          <span>StudyMatch</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarContent"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Khóa học
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tutors">
                Gia sư
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Liên hệ
              </NavLink>
            </li>
          </ul>

          {user ? (
            <div className="dropdown">
              <button
                className="btn dropdown-toggle d-flex align-items-center"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    user.avatar ||
                    "https://ui-avatars.com/api/?name=" + user.name
                  }
                  alt="User Avatar"
                  className="user-avatar me-2"
                />
                <span className="text-white">{user.name}</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bi bi-person me-2"></i>Hồ sơ cá nhân
                  </Link>
                </li>
                {user.role === "TUTOR" && (
                  <li>
                    <Link className="dropdown-item" to="/tutor/dashboard">
                      <i className="bi bi-speedometer2 me-2"></i>Bảng điều khiển
                    </Link>
                  </li>
                )}
                {user.role === "STUDENT" && (
                  <li>
                    <Link className="dropdown-item" to="/student/dashboard">
                      <i className="bi bi-book me-2"></i>Lịch học của tôi
                    </Link>
                  </li>
                )}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item logout"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>Đăng xuất
                  </button>
                </li>
              </ul>
            </div>          ) : (
            <div className="auth-buttons d-flex">
              <Link to="/auth/login" className="btn btn-sign-in">
                Đăng nhập
              </Link>
              <Link to="/auth/register" className="btn btn-sign-up">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
