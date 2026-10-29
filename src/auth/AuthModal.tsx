import { useState, type FormEvent } from 'react'
import ModalPortal from '../components/ModalPortal'
import { useAuth, type SignUpProfile } from './useAuth'

interface AuthModalProps {
  onClose: () => void
  /** Gọi khi đăng nhập/đăng ký thành công */
  onSuccess?: () => void
}

type Mode = 'login' | 'register'

function AuthModal({ onClose, onSuccess }: AuthModalProps) {
  const { signIn, signUp } = useAuth()
  const [mode, setMode] = useState<Mode>('login')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // Trường dùng chung
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Trường đăng ký
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [bio, setBio] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      if (mode === 'login') {
        await signIn(email, password)
      } else {
        const profile: SignUpProfile = {
          username,
          fullName,
          dob,
          gender,
          phone,
          address,
          bio,
        }
        await signUp(email, password, profile)
      }
      onSuccess?.()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra.')
    } finally {
      setSubmitting(false)
    }
  }

  function notImplemented(provider: string) {
    setError(`Đăng nhập bằng ${provider} sẽ được bổ sung sau.`)
  }

  return (
    <ModalPortal onClose={onClose}>
      <div className="modal-overlay" onClick={onClose} role="presentation">
        <div
          className="modal auth-modal"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
        >
          <button className="modal-close" onClick={onClose} aria-label="Đóng">
            ×
          </button>

          <h2 className="modal-title">
            {mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
          </h2>

          <div className="oauth-buttons">
            <button
              type="button"
              className="oauth-btn oauth-google"
              onClick={() => notImplemented('Google')}
            >
              <svg
                className="oauth-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="18"
                height="18"
              >
                <path
                  fill="currentColor"
                  d="M12 11v3.2h4.5c-.2 1.2-1.4 3.5-4.5 3.5-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.6.7 3.2 1.2l2.2-2.1C16.8 4.6 14.6 3.6 12 3.6c-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4c4.9 0 8.1-3.4 8.1-8.2 0-.6 0-1-.1-1.4H12z"
                />
              </svg>
              Tiếp tục với Google
            </button>
            <button
              type="button"
              className="oauth-btn oauth-facebook"
              onClick={() => notImplemented('Facebook')}
            >
              <svg
                className="oauth-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="18"
                height="18"
              >
                <path
                  fill="currentColor"
                  d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z"
                />
              </svg>
              Tiếp tục với Facebook
            </button>
          </div>

          <div className="oauth-divider">
            <span>hoặc dùng email</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <label>
              Email *
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </label>
            <label>
              Mật khẩu *
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={
                  mode === 'login' ? 'current-password' : 'new-password'
                }
              />
            </label>

            {mode === 'register' && (
              <>
                <label>
                  Tên đăng nhập *
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Họ và tên *
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Ngày sinh *
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Giới tính
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">— Không chọn —</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </label>
                <label>
                  Số điện thoại
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  Địa chỉ
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label>
                  Giới thiệu bản thân
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={2}
                  />
                </label>
              </>
            )}

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-submit" disabled={submitting}>
              {submitting
                ? 'Đang xử lý…'
                : mode === 'login'
                  ? 'Đăng nhập'
                  : 'Đăng ký'}
            </button>
          </form>

          <p className="auth-switch">
            {mode === 'login' ? (
              <>
                Chưa có tài khoản?{' '}
                <button type="button" onClick={() => setMode('register')}>
                  Đăng ký
                </button>
              </>
            ) : (
              <>
                Đã có tài khoản?{' '}
                <button type="button" onClick={() => setMode('login')}>
                  Đăng nhập
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </ModalPortal>
  )
}

export default AuthModal
