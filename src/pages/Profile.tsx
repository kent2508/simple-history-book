import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { updateProfile } from '../lib/profileApi'

function Profile() {
  const { user, profile, loading, refreshProfile } = useAuth()

  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [bio, setBio] = useState('')

  const [editing, setEditing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Nạp giá trị hiện tại vào form rồi chuyển sang chế độ chỉnh sửa.
  function startEditing() {
    if (!profile) return
    setUsername(profile.username)
    setFullName(profile.fullName)
    setDob(profile.dob)
    setGender(profile.gender ?? '')
    setPhone(profile.phone ?? '')
    setAddress(profile.address ?? '')
    setBio(profile.bio ?? '')
    setSaved(false)
    setError(null)
    setEditing(true)
  }

  if (loading) {
    return <p className="route-loading">Đang tải…</p>
  }

  if (!user || !profile) {
    return (
      <div className="detail-page">
        <p className="detail-notfound">
          Bạn cần đăng nhập để xem trang cá nhân.
        </p>
        <Link to="/" className="back-link">
          ← Về trang chủ
        </Link>
      </div>
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!user) return
    setError(null)
    setSaved(false)
    setSubmitting(true)
    try {
      await updateProfile(user.id, {
        username: username.trim(),
        fullName: fullName.trim(),
        dob,
        gender: gender || null,
        phone: phone || null,
        address: address || null,
        bio: bio || null,
      })
      await refreshProfile()
      setEditing(false)
      setSaved(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra.')
    } finally {
      setSubmitting(false)
    }
  }

  const genderLabel: Record<string, string> = {
    male: 'Nam',
    female: 'Nữ',
    other: 'Khác',
  }

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">
        ← Về trang chủ
      </Link>

      <header className="detail-header">
        <h1>
          Trang cá nhân
          {profile.role === 'admin' && (
            <span className="role-badge">admin</span>
          )}
        </h1>
      </header>

      {!editing ? (
        <div className="profile-view">
          <dl className="profile-grid">
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Tên đăng nhập</dt>
            <dd>{profile.username}</dd>
            <dt>Họ và tên</dt>
            <dd>{profile.fullName}</dd>
            <dt>Ngày sinh</dt>
            <dd>{profile.dob}</dd>
            <dt>Giới tính</dt>
            <dd>{profile.gender ? genderLabel[profile.gender] : '—'}</dd>
            <dt>Số điện thoại</dt>
            <dd>{profile.phone || '—'}</dd>
            <dt>Địa chỉ</dt>
            <dd>{profile.address || '—'}</dd>
            <dt>Giới thiệu</dt>
            <dd>{profile.bio || '—'}</dd>
          </dl>

          {saved && <p className="profile-saved">Đã lưu thay đổi.</p>}

          <button
            type="button"
            className="auth-submit"
            onClick={startEditing}
          >
            Chỉnh sửa thông tin
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email (không sửa được)
            <input type="email" value={user.email ?? ''} disabled />
          </label>
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
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
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
              rows={3}
            />
          </label>

          {error && <p className="auth-error">{error}</p>}

          <div className="profile-form-actions">
            <button type="submit" className="auth-submit" disabled={submitting}>
              {submitting ? 'Đang lưu…' : 'Lưu thay đổi'}
            </button>
            <button
              type="button"
              className="action-btn"
              onClick={() => {
                setEditing(false)
                setError(null)
              }}
            >
              Hủy
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Profile
