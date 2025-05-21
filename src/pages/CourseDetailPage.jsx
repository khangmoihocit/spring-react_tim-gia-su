import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Spinner, Card, ListGroup } from 'react-bootstrap';
import '../assets/styles/variables.css';
import '../assets/styles/CourseDetail.css';
import courseService from '../services/courseService';

// Format price
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    // Fetch course data from the course service
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const data = await courseService.getCourseById(id);
        setCourse(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course:', error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  // Show error message if course is not found
  if (!course) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Không tìm thấy khóa học</h2>
          <p>Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/courses" className="btn btn-primary mt-3">Xem tất cả các khóa học</Link>
        </div>
      </Container>
    );
  }

  // Get tutor information
  const tutorName = course.tutorName || (course.tutorInfo ? course.tutorInfo.name : 'Chưa cập nhật');

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <div 
        className="hero-section py-5" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 30, 60, 0.8)), url(${course.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="fade-in">
              <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--white)' }}>
                {course.title}
              </h1>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3 d-flex align-items-center">
                  <i className="bi bi-star-fill me-1" style={{ color: 'var(--accent-secondary)' }}></i>
                  <span style={{ color: 'var(--white)' }}>{course.rating} ({course.reviewCount} đánh giá)</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-person-circle me-1" style={{ color: 'var(--accent-secondary)' }}></i>
                  <span style={{ color: 'var(--white)' }}>{tutorName}</span>
                </div>
              </div>
              <p className="lead mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {course.description}
              </p>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 me-3" style={{ color: 'var(--white)' }}>{formatPrice(course.price)}</h2>
                <Button 
                  size="lg" 
                  className="me-2" 
                  style={{ 
                    backgroundColor: 'var(--accent)', 
                    borderColor: 'var(--accent)',
                    color: 'var(--white)'
                  }}
                >
                  Đăng ký ngay
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                >
                  <i className="bi bi-bookmark-plus"></i> Lưu khóa học
                </Button>
              </div>
              <div className="d-flex">
                <Badge 
                  pill 
                  bg="light" 
                  text="dark" 
                  className="me-2"
                  style={{ fontSize: '0.85rem' }}
                >
                  <i className="bi bi-calendar me-1"></i> {course.duration}
                </Badge>
                <Badge 
                  pill 
                  bg="light" 
                  text="dark" 
                  className="me-2"
                  style={{ fontSize: '0.85rem' }}
                >
                  <i className="bi bi-geo-alt me-1"></i> {course.location}
                </Badge>
                <Badge 
                  pill 
                  bg="light" 
                  text="dark"
                  style={{ fontSize: '0.85rem' }}
                >
                  <i className="bi bi-people me-1"></i> {course.classSize}
                </Badge>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="py-5">
        <Row>
          <Col lg={8} className="fade-in-delayed">
            {/* Tabs Navigation */}
            <div className="mb-4 border-bottom">
              <ul className="nav nav-tabs border-0">
                <li className="nav-item">
                  <button 
                    className={`nav-link border-0 ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => handleTabChange('description')}
                    style={{ 
                      color: activeTab === 'description' ? 'var(--primary)' : 'var(--text)',
                      fontWeight: activeTab === 'description' ? 'bold' : 'normal'
                    }}
                  >
                    Mô tả khóa học
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link border-0 ${activeTab === 'curriculum' ? 'active' : ''}`}
                    onClick={() => handleTabChange('curriculum')}
                    style={{ 
                      color: activeTab === 'curriculum' ? 'var(--primary)' : 'var(--text)',
                      fontWeight: activeTab === 'curriculum' ? 'bold' : 'normal'
                    }}
                  >
                    Chương trình học
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link border-0 ${activeTab === 'schedule' ? 'active' : ''}`}
                    onClick={() => handleTabChange('schedule')}
                    style={{ 
                      color: activeTab === 'schedule' ? 'var(--primary)' : 'var(--text)',
                      fontWeight: activeTab === 'schedule' ? 'bold' : 'normal'
                    }}
                  >
                    Lịch học
                  </button>
                </li>
              </ul>
            </div>

            {/* Tab Content */}
            <div className="tab-content p-0">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div>
                  <div className="mb-4" style={{ color: 'var(--text)' }}>
                    <h4 className="mb-3" style={{ color: 'var(--heading)' }}>Mô tả chi tiết</h4>
                    <div style={{ whiteSpace: 'pre-line' }}>{course.longDescription}</div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-3" style={{ color: 'var(--heading)' }}>Yêu cầu khóa học</h4>
                    <ul className="list-group list-group-flush">
                      {course.requirements.map((requirement, index) => (
                        <li 
                          key={index} 
                          className="list-group-item border-0 ps-0"
                          style={{ backgroundColor: 'transparent', color: 'var(--text)' }}
                        >
                          <i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--success)' }}></i>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3" style={{ color: 'var(--heading)' }}>Chia sẻ khóa học</h4>
                    <div className="d-flex">
                      <Button variant="outline-primary" className="me-2">
                        <i className="bi bi-facebook"></i>
                      </Button>
                      <Button variant="outline-info" className="me-2">
                        <i className="bi bi-twitter"></i>
                      </Button>
                      <Button variant="outline-success" className="me-2">
                        <i className="bi bi-whatsapp"></i>
                      </Button>
                      <Button variant="outline-secondary">
                        <i className="bi bi-link-45deg"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--heading)' }}>Nội dung khóa học</h4>
                  <div className="accordion" id="curriculumAccordion">
                    {course.curriculum.map((item, index) => (
                      <div className="accordion-item border mb-3 rounded" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="false" 
                            aria-controls={`collapse${index}`}
                            style={{ color: 'var(--text)' }}
                          >
                            <i className="bi bi-journal-text me-2" style={{ color: 'var(--primary)' }}></i>
                            <strong>Chủ đề {index + 1}:</strong> <span className="ms-2">{item}</span>
                          </button>
                        </h2>
                        <div 
                          id={`collapse${index}`} 
                          className="accordion-collapse collapse" 
                          aria-labelledby={`heading${index}`} 
                          data-bs-parent="#curriculumAccordion"
                        >
                          <div className="accordion-body" style={{ color: 'var(--text)' }}>
                            <p>Chi tiết nội dung học sẽ được cập nhật sau.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Schedule Tab */}
              {activeTab === 'schedule' && (
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--heading)' }}>Lịch học</h4>
                  <div className="card mb-4">
                    <div className="card-header" style={{ backgroundColor: 'var(--primary-light)' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span style={{ color: 'var(--primary)' }}><i className="bi bi-calendar2-check me-2"></i>Ngày bắt đầu</span>
                        <strong style={{ color: 'var(--primary)' }}>{course.startDate}</strong>
                      </div>
                    </div>
                    <ul className="list-group list-group-flush">
                      {course.schedule.map((item, index) => (
                        <li 
                          key={index} 
                          className="list-group-item d-flex justify-content-between align-items-center"
                          style={{ color: 'var(--text)' }}
                        >
                          <div><i className="bi bi-clock me-2" style={{ color: 'var(--primary)' }}></i>{item.day}</div>
                          <div>{item.time}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="alert alert-info d-flex align-items-center" role="alert">
                    <i className="bi bi-info-circle-fill me-2"></i>
                    <div>Lịch học có thể thay đổi tùy theo nhu cầu của học viên, vui lòng liên hệ với chúng tôi để biết thêm chi tiết.</div>
                  </div>
                </div>
              )}
            </div>
          </Col>

          <Col lg={4} className="mt-4 mt-lg-0 fade-in-delayed">
            {/* Tutor Card */}
            <Card className="mb-4 shadow-sm hover-effect">
              <Card.Header className="bg-white border-bottom-0 pt-3">
                <h5 className="mb-0" style={{ color: 'var(--heading)' }}>Giảng viên</h5>
              </Card.Header>
              {course.tutorInfo ? (
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src={course.tutorInfo.avatar} 
                      alt={course.tutorInfo.name} 
                      className="rounded-circle" 
                      style={{ width: '100px', height: '100px' }}
                    />
                    <h5 className="mt-3 mb-1" style={{ color: 'var(--link)' }}>{course.tutorInfo.name}</h5>
                    <p className="text-muted">{course.tutorInfo.degree}</p>
                  </div>
                  
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center">
                      <i className="bi bi-briefcase me-2" style={{ color: 'var(--primary)' }}></i>
                      <span>{course.tutorInfo.experience}</span>
                    </ListGroup.Item>
                  </ListGroup>
                  
                  <div className="mt-3">
                    <p style={{ color: 'var(--text)' }}>{course.tutorInfo.introduction}</p>
                  </div>
                  
                  <Button 
                    variant="outline-primary"
                    className="w-100 mt-3"
                    style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                    onClick={() => alert('Chức năng liên hệ với giảng viên sẽ được cập nhật sau!')}
                  >
                    Liên hệ với giảng viên
                  </Button>
                </Card.Body>
              ) : (
                <Card.Body>
                  <div className="text-center mb-3">
                    <img 
                      src={`https://placehold.co/150x150/00B4D8/FFFFFF?text=${tutorName.charAt(0)}`} 
                      alt={tutorName} 
                      className="rounded-circle" 
                      style={{ width: '100px', height: '100px' }}
                    />
                    <h5 className="mt-3 mb-1" style={{ color: 'var(--link)' }}>{tutorName}</h5>
                    <p className="text-muted">Giảng viên</p>
                  </div>
                  
                  <div className="mt-3">
                    <p style={{ color: 'var(--text)' }}>Thông tin chi tiết về giảng viên sẽ được cập nhật sau.</p>
                  </div>
                  
                  <Button 
                    variant="outline-primary"
                    className="w-100 mt-3"
                    style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                    onClick={() => alert('Chức năng liên hệ với giảng viên sẽ được cập nhật sau!')}
                  >
                    Liên hệ với giảng viên
                  </Button>
                </Card.Body>
              )}
            </Card>

            {/* Registration Card */}
            <Card className="mb-4 shadow-sm hover-effect">
              <Card.Header className="bg-white border-bottom-0 pt-3">
                <h5 className="mb-0" style={{ color: 'var(--heading)' }}>Đăng ký khóa học</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span style={{ color: 'var(--text)' }}>Học phí:</span>
                  <h4 className="mb-0" style={{ color: 'var(--primary)' }}>{formatPrice(course.price)}</h4>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded">
                  <span style={{ color: 'var(--text)' }}>Thời lượng:</span>
                  <span>{course.duration}</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded">
                  <span style={{ color: 'var(--text)' }}>Ngày khai giảng:</span>
                  <span>{course.startDate}</span>
                </div>
                  <div className="d-flex justify-content-between align-items-center mb-4 p-2 bg-light rounded">
                  <span style={{ color: 'var(--text)' }}>Sĩ số lớp:</span>
                  <span>{course.classSize}</span>
                </div>
                
                <Button 
                  className="w-100 mb-2" 
                  size="lg"
                  style={{ 
                    backgroundColor: 'var(--accent)', 
                    borderColor: 'var(--accent)',
                    color: 'var(--white)'
                  }}
                >
                  Đăng ký ngay
                </Button>
                
                <Button 
                  variant="outline-primary" 
                  className="w-100"
                >
                  <i className="bi bi-chat-text-fill me-2"></i> Đặt câu hỏi
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetailPage;
