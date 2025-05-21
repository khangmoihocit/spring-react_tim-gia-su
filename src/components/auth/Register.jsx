import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Alert from '../common/Alert';
import '../../assets/styles/variables.css';

const Register = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'STUDENT' // Default role
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field-specific error when user edits
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate fullName
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Họ tên không được để trống';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Họ tên phải có ít nhất 3 ký tự';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email không hợp lệ';
      }
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Mật khẩu không được để trống';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    
    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }
    
    // Validate phone
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ (10-11 số)';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    
    try {
      // Giả lập API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      setSuccessMessage('Đăng ký thành công! Vui lòng đăng nhập.');
      
      // Automatically redirect after successful registration after 2 seconds
      setTimeout(() => {
        navigate('/auth/login');
      }, 2000);
      
    } catch (err) {
      setErrorMessage('Đăng ký không thành công. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4" style={{ color: 'var(--link)' }}>Đăng ký tài khoản</h2>
              
              {successMessage && (
                <Alert 
                  type="success" 
                  message={successMessage} 
                  onClose={() => setSuccessMessage('')}
                />
              )}
              
              {errorMessage && (
                <Alert 
                  type="error" 
                  message={errorMessage} 
                  onClose={() => setErrorMessage('')}
                />
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label" style={{ color: 'var(--text)' }}>
                    Họ tên <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{ color: 'var(--text)' }}>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="password" className="form-label" style={{ color: 'var(--text)' }}>
                      Mật khẩu <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="confirmPassword" className="form-label" style={{ color: 'var(--text)' }}>
                      Xác nhận mật khẩu <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label" style={{ color: 'var(--text)' }}>
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0901234567"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="form-label" style={{ color: 'var(--text)' }}>
                    Bạn là ai? <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="roleStudent"
                        value="STUDENT"
                        checked={formData.role === 'STUDENT'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="roleStudent" style={{ color: 'var(--text)' }}>
                        Học viên
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        id="roleTutor"
                        value="TUTOR"
                        checked={formData.role === 'TUTOR'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="roleTutor" style={{ color: 'var(--text)' }}>
                        Gia sư
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-lg"
                    style={{ 
                      backgroundColor: 'var(--accent)',
                      color: 'var(--white)'
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Đang xử lý...
                      </>
                    ) : 'Đăng ký'}
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p style={{ color: 'var(--text)' }}>
                    Đã có tài khoản? 
                    <Link 
                      to="/auth/login" 
                      className="ms-2"
                      style={{ color: 'var(--link)' }}
                    >
                      Đăng nhập
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;