import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/variables.css';

const CourseCard = ({ course }) => {
  // Mẫu dữ liệu khóa học
  const defaultCourse = {
    id: 1,
    title: 'Lập trình Python cơ bản',
    description: 'Khóa học lập trình Python từ cơ bản đến nâng cao, phù hợp cho người mới bắt đầu.',
    tutor: 'Nguyễn Văn A',
    price: 799000,
    rating: 4.8,
    totalReviews: 124,
    imageUrl: 'https://placehold.co/400x250',
    category: 'Lập trình'
  };

  // Sử dụng defaultCourse nếu không có dữ liệu được truyền vào
  const courseData = course || defaultCourse;

  // Format giá tiền
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="card h-100 border-0 shadow-sm">
      <img 
        src={courseData.imageUrl} 
        className="card-img-top" 
        alt={courseData.title}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <span 
            className="badge rounded-pill px-3 py-2" 
            style={{ 
              backgroundColor: 'var(--secondary)', 
              color: 'var(--link)' 
            }}
          >
            {courseData.category}
          </span>
          <div className="d-flex align-items-center">
            <i className="bi bi-star-fill me-1" style={{ color: 'var(--accent-secondary)' }}></i>
            <span style={{ color: 'var(--text)' }}>{courseData.rating}</span>
            <span className="ms-1 small text-muted">({courseData.totalReviews})</span>
          </div>
        </div>
        
        <h5 className="card-title" style={{ color: 'var(--link)' }}>
          {courseData.title}
        </h5>
        
        <p className="card-text" style={{ color: 'var(--text)' }}>
          {courseData.description.length > 100 
            ? `${courseData.description.substring(0, 100)}...` 
            : courseData.description}
        </p>
        
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-person-circle me-2" style={{ color: 'var(--primary)' }}></i>
          <span style={{ color: 'var(--text)' }}>{courseData.tutor}</span>
        </div>
        
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fs-5 fw-bold" style={{ color: 'var(--text)' }}>
            {formatPrice(courseData.price)}
          </span>
          <Link 
            to={`/courses/${courseData.id}`} 
            className="btn" 
            style={{ 
              backgroundColor: 'var(--accent)',
              color: 'var(--white)',
              borderRadius: '20px',
              padding: '0.5rem 1.25rem'
            }}
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;