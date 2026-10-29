import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal'
import { useAuth } from './useAuth'

function AuthBar() {
  const { user, profile, signOut, loading } = useAuth()
  const [showAuth, setShowAuth] = useState(false)

  if (loading) return <div className="auth-bar" />

  const displayName = profile?.username ?? user?.email

  return (
    <div className="auth-bar">
      {user ? (
        <>
          <Link to="/profile" className="auth-user" title="Trang cá nhân">
            {displayName}
            {profile?.role === 'admin' && (
              <span className="role-badge">admin</span>
            )}
          </Link>
          <button
            type="button"
            className="auth-bar-btn"
            onClick={() => signOut()}
          >
            Đăng xuất
          </button>
        </>
      ) : (
        <button
          type="button"
          className="auth-bar-btn"
          onClick={() => setShowAuth(true)}
        >
          Đăng nhập
        </button>
      )}

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  )
}

export default AuthBar
