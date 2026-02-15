import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ open, onClose }) => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>
      {/* Backdrop */}
      {open && <div className="sidebar-backdrop" onClick={onClose} />}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <NavLink to="/books" onClick={onClose}>
            All Books
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink to="/my-books" onClick={onClose}>
                My Books
              </NavLink>

              <NavLink to="/reading-list" onClick={onClose}>
                Reading List
              </NavLink>

              <NavLink to="/add" onClick={onClose}>
                Add Book
              </NavLink>

              <button className="sidebar-logout" onClick={logout}>
                Logout
              </button>

              {/* 🔽 Account section pinned to bottom */}
              <NavLink
                to="/account"
                className="sidebar-account"
                onClick={onClose}
              >
                <img src="/account-icon.svg" alt="Account" />
                <span>{user.username}</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={onClose}>
                Login
              </NavLink>
              <NavLink to="/register" onClick={onClose}>
                Register
              </NavLink>
            </>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
