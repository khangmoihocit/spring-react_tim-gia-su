import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/variables.css';
import '../assets/styles/Home.css';

// Mock data for featured courses
const featuredCourses = [
  {
    id: 1,
    title: 'Toán học cao cấp',
    tutor: 'Nguyễn Văn A',
    price: 850000,
    location: 'Online',
    image: 'https://placehold.co/400x250/00B4D8/FFFFFF?text=Toán+học',
    rating: 4.8,
    description: 'Khóa học toán học cao cấp dành cho học sinh THPT chuẩn bị thi đại học.'
  },
  {
    id: 2,
    title: 'Tiếng Anh giao tiếp',
    tutor: 'Trần Thị B',
    price: 750000,
    location: 'TP.HCM',
    image: 'https://placehold.co/400x250/FFD93D/1A3C34?text=Tiếng+Anh',
    rating: 4.7,
    description: 'Khóa học tiếng Anh tập trung vào kỹ năng giao tiếp cho người đi làm.'
  },
  {
    id: 3,
    title: 'Lập trình Python cơ bản',
    tutor: 'Lê Văn C',
    price: 950000,
    location: 'Online',
    image: 'https://placehold.co/400x250/0077B6/FFFFFF?text=Python',
    rating: 4.9,
    description: 'Khóa học lập trình Python từ cơ bản đến nâng cao dành cho người mới bắt đầu.'
  }
];

// Why choose us data
const benefits = [
  {
    icon: 'bi-person-check',
    title: 'Gia sư chất lượng',
    description: 'Tất cả gia sư đều được kiểm duyệt kỹ lưỡng và có kinh nghiệm giảng dạy.'
  },
  {
    icon: 'bi-clock',
    title: 'Lịch học linh hoạt',
    description: 'Tự do lựa chọn thời gian học phù hợp với lịch trình cá nhân của bạn.'
  },
  {
    icon: 'bi-cash-coin',
    title: 'Giá cả hợp lý',
    description: 'Nhiều mức giá phù hợp với nhu cầu học tập và khả năng tài chính của bạn.'
  },
  {
    icon: 'bi-laptop',
    title: 'Học online hoặc offline',
    description: 'Lựa chọn hình thức học linh hoạt theo nhu cầu và điều kiện của bạn.'
  }
];

// Format price
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

export default function Home() {    // Animation for elements when they come into view
    const [animatedElements, setAnimatedElements] = useState({
        hero: false,
        featured: false,
        benefits: false,
        cta: false
    });

    // Simulate animation on page load
    useEffect(() => {
        const timer1 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, hero: true })), 100);
        const timer2 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, featured: true })), 500);
        const timer3 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, benefits: true })), 900);
        const timer4 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, cta: true })), 1300);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <>
            {/* 1. Hero Section */}
            <section 
                className={`hero-section py-5 ${animatedElements.hero ? 'fade-in active' : 'fade-in'}`}
                style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, #90E0EF 100%)',
                    minHeight: '500px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">                            <h1 
                                className="display-4 fw-bold mb-4"
                                style={{ color: 'var(--white)' }}
                            >
                                Học dễ dàng, kết nối gia sư nhanh chóng
                            </h1>
                            <p 
                                className="lead mb-4"
                                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                Tìm gia sư phù hợp hoặc đăng khóa học của bạn ngay hôm nay! Nền tảng kết nối học viên và gia sư uy tín hàng đầu Việt Nam.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link 
                                    to="/courses" 
                                    className="btn btn-lg px-4"
                                    style={{ 
                                        backgroundColor: 'var(--accent)',
                                        color: 'var(--white)',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Tìm khóa học
                                </Link>
                                <Link 
                                    to="/courses/create"
                                    className="btn btn-lg px-4"
                                    style={{ 
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'var(--white)',
                                        fontWeight: '600',
                                        borderColor: 'var(--white)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Đăng khóa học
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <img 
                                src="https://placehold.co/600x400/FFFFFF/1A3C34?text=Tutor+and+Student" 
                                alt="Gia sư và học sinh"
                                className="img-fluid rounded shadow-lg"
                                style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Featured Courses Section */}
            <section 
                className={`py-5 ${animatedElements.featured ? 'fade-in active' : 'fade-in'}`}
                style={{ backgroundColor: 'var(--secondary)' }}
            >
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="mb-3" style={{ color: 'var(--link)' }}>Khóa học nổi bật</h2>
                        <p className="lead" style={{ color: 'var(--text)' }}>
                            Khám phá những khóa học được yêu thích nhất
                        </p>
                    </div>

                    <div className="row g-4">
                        {featuredCourses.map(course => (                            <div key={course.id} className="col-md-6 col-lg-4">
                                <div 
                                    className="card h-100 border-0 shadow-sm course-card"
                                    style={{ transition: 'all 0.3s ease' }}
                                >
                                    <img 
                                        src={course.image} 
                                        className="card-img-top" 
                                        alt={course.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge rounded-pill" style={{ backgroundColor: 'var(--accent-secondary)', color: 'var(--text)' }}>
                                                {course.location}
                                            </span>
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-star-fill me-1" style={{ color: 'var(--accent-secondary)' }}></i>
                                                <span>{course.rating}</span>
                                            </div>
                                        </div>
                                        <h5 className="card-title" style={{ color: 'var(--link)' }}>{course.title}</h5>
                                        <p className="card-text small mb-3" style={{ color: 'var(--text)' }}>
                                            {course.description}
                                        </p>
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-person-circle me-2" style={{ color: 'var(--primary)' }}></i>
                                            <span style={{ color: 'var(--text)' }}>{course.tutor}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold" style={{ color: 'var(--text)' }}>                                                {formatPrice(course.price)}
                                            </span>
                                            <Link 
                                                to={`/courses/${course.id}`} 
                                                className="btn"
                                                style={{ 
                                                    backgroundColor: 'var(--accent)',
                                                    color: 'var(--white)',
                                                    borderRadius: '20px',
                                                    padding: '0.5rem 1rem'
                                                }}
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <Link 
                            to="/courses" 
                            className="btn btn-lg px-4"
                            style={{ 
                                backgroundColor: 'var(--accent)',
                                color: 'var(--white)',
                                fontWeight: '600'
                            }}
                        >
                            Xem tất cả khóa học
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us Section */}
            <section 
                className={`py-5 ${animatedElements.benefits ? 'fade-in active' : 'fade-in'}`}
                style={{ backgroundColor: 'var(--white)' }}
            >
                <div 
                    className="container py-4"
                    style={{ 
                        backgroundImage: 'url("https://placehold.co/50x50/00B4D8/FFFFFF?text=+")',
                        backgroundPosition: 'right bottom',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '200px'
                    }}
                >
                    <div className="text-center mb-5">
                        <h2 className="mb-3" style={{ color: 'var(--link)' }}>Tại sao chọn chúng tôi?</h2>
                        <p className="lead" style={{ color: 'var(--text)' }}>
                            Chúng tôi cung cấp dịch vụ kết nối gia sư chất lượng cao
                        </p>
                    </div>
                    
                    <div className="row g-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="text-center px-3 py-4 h-100">
                                    <div 
                                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 benefit-icon"
                                        style={{ 
                                            width: '80px', 
                                            height: '80px', 
                                            backgroundColor: 'var(--primary)', 
                                            color: 'var(--white)',
                                            fontSize: '28px'
                                        }}
                                    >
                                        <i className={`bi ${benefit.icon}`}></i>
                                    </div>
                                    <h4 className="mb-3" style={{ color: 'var(--link)' }}>{benefit.title}</h4>
                                    <p style={{ color: 'var(--text)' }}>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Call-to-Action Section */}
            <section 
                className={`py-5 ${animatedElements.cta ? 'fade-in active' : 'fade-in'}`}
                style={{ 
                    backgroundColor: 'var(--primary)', 
                    backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--link) 100%)'
                }}
            >
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--white)' }}>
                                Bắt đầu hành trình học tập ngay hôm nay!
                            </h2>
                            <p className="lead mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                Tham gia miễn phí và kết nối với gia sư tốt nhất. Hàng nghìn học viên đã tìm được gia sư phù hợp.
                            </p>
                            <Link 
                                to="/auth/register" 
                                className="btn btn-lg px-5 py-3 cta-btn"
                                style={{ 
                                    backgroundColor: 'var(--accent)',
                                    color: 'var(--white)',
                                    fontWeight: '600',
                                    fontSize: '1.2rem',
                                    borderRadius: '30px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Đăng ký ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}