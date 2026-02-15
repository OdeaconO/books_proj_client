import { useAuth } from "../context/AuthContext";

const Account = () => {
  // 🔹 AuthContext hook (top-level, inside component)
  const { user, logout } = useAuth();

  // Safety check (should rarely happen because route is protected)
  if (!user) return null;

  return (
    <div className="page">
      <main className="page-content">
        <div className="form-card account-card">
          <div className="form">
            <h1>ACCOUNT DETAILS</h1>

            <p>
              <strong>User ID:</strong> {user.id}
            </p>

            <p>
              <strong>Username:</strong> {user.username}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <button className="formButton" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
