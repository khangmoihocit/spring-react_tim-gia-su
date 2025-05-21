import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/variables.css';

const Footer = () => {
  return (
    <footer className="bg-light py-5" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3" style={{ color: 'var(--text)' }}>StudyMatch</h5>
            <p className="mb-3" style={{ color: 'var(--text)' }}>
              Nền tảng kết nối học viên với gia sư chất lượng cao, 
              giúp bạn cải thiện kỹ năng học tập và đạt được mục tiêu.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm" style={{ color: 'var(--link)' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-sm" style={{ color: 'var(--link)' }}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-sm" style={{ color: 'var(--link)' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-sm" style={{ color: 'var(--link)' }}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="col-md-2">
            <h6 className="mb-3" style={{ color: 'var(--text)' }}>Liên kết nhanh</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" style={{ color: 'var(--link)' }}>Trang chủ</Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" style={{ color: 'var(--link)' }}>Khóa học</Link>
              </li>
              <li className="mb-2">
                <Link to="/tutors" style={{ color: 'var(--link)' }}>Gia sư</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" style={{ color: 'var(--link)' }}>Giới thiệu</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-2">
            <h6 className="mb-3" style={{ color: 'var(--text)' }}>Hỗ trợ</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/help" style={{ color: 'var(--link)' }}>Trợ giúp</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" style={{ color: 'var(--link)' }}>FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" style={{ color: 'var(--link)' }}>Liên hệ</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" style={{ color: 'var(--link)' }}>Chính sách</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h6 className="mb-3" style={{ color: 'var(--text)' }}>Liên hệ</h6>
            <p className="mb-2" style={{ color: 'var(--text)' }}>
              <i className="bi bi-geo-alt me-2" style={{ color: 'var(--link)' }}></i>
              Quận 1, TP. Hồ Chí Minh
            </p>
            <p className="mb-2" style={{ color: 'var(--text)' }}>
              <i className="bi bi-envelope me-2" style={{ color: 'var(--link)' }}></i>
              contact@studymatch.vn
            </p>
            <p className="mb-4" style={{ color: 'var(--text)' }}>
              <i className="bi bi-telephone me-2" style={{ color: 'var(--link)' }}></i>
              (+84) 28 1234 5678
            </p>
            <form>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email của bạn" 
                  style={{ borderColor: 'var(--primary)' }}
                />
                <button 
                  className="btn" 
                  type="submit"
                  style={{ 
                    backgroundColor: 'var(--accent)', 
                    color: 'white',
                    borderColor: 'var(--accent)'
                  }}
                >
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="my-4" style={{ backgroundColor: 'var(--border)' }} />
        
        <div className="row">
          <div className="col-md-6">
            <p className="mb-md-0" style={{ color: 'var(--text)' }}>
              © 2025 StudyMatch. Tất cả các quyền được bảo lưu.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/terms" className="text-decoration-none me-3" style={{ color: 'var(--link)' }}>
              Điều khoản sử dụng
            </Link>
            <Link to="/privacy" className="text-decoration-none" style={{ color: 'var(--link)' }}>
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;