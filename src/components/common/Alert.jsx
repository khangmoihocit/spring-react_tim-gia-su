import React from 'react';
import '../../assets/styles/variables.css';

const Alert = ({ type = 'info', message, onClose, showIcon = true }) => {
  // Define styling and icons based on alert type
  const alertStyles = {
    success: {
      backgroundColor: 'var(--success)',
      color: 'var(--text)',
      icon: 'bi-check-circle-fill'
    },
    error: {
      backgroundColor: 'var(--error)',
      color: 'var(--white)',
      icon: 'bi-x-circle-fill'
    },
    warning: {
      backgroundColor: 'var(--warning)',
      color: 'var(--text)',
      icon: 'bi-exclamation-triangle-fill'
    },
    info: {
      backgroundColor: 'var(--info)',
      color: 'var(--white)',
      icon: 'bi-info-circle-fill'
    }
  };

  const currentStyle = alertStyles[type] || alertStyles.info;

  return (
    <div 
      className="alert d-flex align-items-center" 
      role="alert"
      style={{ 
        backgroundColor: currentStyle.backgroundColor,
        color: currentStyle.color,
        border: 'none',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem'
      }}
    >
      {showIcon && (
        <i 
          className={`bi ${currentStyle.icon} me-2`} 
          style={{ fontSize: '1.25rem' }}
        ></i>
      )}
      <div>{message}</div>
      {onClose && (
        <button 
          type="button" 
          className="btn-close ms-auto" 
          aria-label="Close"
          onClick={onClose}
          style={{ 
            filter: currentStyle.color === 'var(--white)' ? 'invert(1)' : 'none',
            opacity: '0.7'
          }}
        ></button>
      )}
    </div>
  );
};

// Demo component to showcase all alert types
export const AlertDemo = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4" style={{ color: 'var(--text)' }}>Thông báo (Alerts)</h2>
      
      <Alert 
        type="success" 
        message="Thao tác thành công! Bạn đã đăng ký khóa học thành công." 
        onClose={() => console.log('Alert closed')}
      />
      
      <Alert 
        type="error" 
        message="Đã xảy ra lỗi! Không thể kết nối đến máy chủ, vui lòng thử lại sau." 
        onClose={() => console.log('Alert closed')}
      />
      
      <Alert 
        type="warning" 
        message="Cảnh báo! Bạn sắp hết thời gian làm bài kiểm tra." 
        onClose={() => console.log('Alert closed')}
      />
      
      <Alert 
        type="info" 
        message="Thông tin! Có khóa học mới đã được thêm vào hệ thống." 
        onClose={() => console.log('Alert closed')}
      />
    </div>
  );
};

export default Alert;