import React, { useState, useEffect } from 'react';
import CourseCard from '../components/course/CourseCard';
import { Link } from 'react-router-dom';
import '../assets/styles/variables.css';

export default function CourseListPage() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    
    // Danh sách các danh mục khóa học
    const categories = [
        { id: 'all', name: 'Tất cả' },
        { id: 'programming', name: 'Lập trình' },
        { id: 'language', name: 'Ngoại ngữ' },
        { id: 'math', name: 'Toán học' },
        { id: 'science', name: 'Khoa học' },
        { id: 'art', name: 'Nghệ thuật' }
    ];
    
    useEffect(() => {
        // Mô phỏng việc tải dữ liệu từ API
        const fetchCourses = async () => {
            try {
                // Giả lập API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Dữ liệu mẫu
                const mockCourses = [
                    {
                        id: 1,
                        title: 'Lập trình Python cơ bản',
                        description: 'Khóa học lập trình Python từ cơ bản đến nâng cao, phù hợp cho người mới bắt đầu.',
                        tutor: 'Nguyễn Văn A',
                        price: 799000,
                        rating: 4.8,
                        totalReviews: 124,
                        imageUrl: 'https://placehold.co/400x250',
                        category: 'Lập trình'
                    },
                    {
                        id: 2,
                        title: 'Tiếng Anh giao tiếp',
                        description: 'Khóa học tiếng Anh giao tiếp cho người đi làm, tập trung vào phát âm và ngữ pháp cơ bản.',
                        tutor: 'Trần Thị B',
                        price: 650000,
                        rating: 4.5,
                        totalReviews: 98,
                        imageUrl: 'https://placehold.co/400x250',
                        category: 'Ngoại ngữ'
                    },
                    {
                        id: 3,
                        title: 'Toán học ứng dụng',
                        description: 'Khóa học toán học ứng dụng cho học sinh THPT, chuẩn bị cho kỳ thi đại học.',
                        tutor: 'Lê Văn C',
                        price: 850000,
                        rating: 4.9,
                        totalReviews: 156,
                        imageUrl: 'https://placehold.co/400x250',
                        category: 'Toán học'
                    },
                    {
                        id: 4,
                        title: 'Hóa học đại cương',
                        description: 'Khóa học hóa học đại cương cho học sinh THPT, giúp nâng cao kiến thức và kỹ năng giải bài tập.',
                        tutor: 'Phạm Văn D',
                        price: 720000,
                        rating: 4.7,
                        totalReviews: 112,
                        imageUrl: 'https://placehold.co/400x250',
                        category: 'Khoa học'
                    },
                    {
                        id: 5,
                        title: 'Vẽ tranh sơn dầu',
                        description: 'Khóa học vẽ tranh sơn dầu cho người mới bắt đầu, từ kỹ thuật cơ bản đến nâng cao.',
                        tutor: 'Hoàng Thị E',
                        price: 950000,
                        rating: 4.6,
                        totalReviews: 87,
                        imageUrl: 'https://placehold.co/400x250',
                        category: 'Nghệ thuật'
                    },
                    {
                        id: 6,
                        title: 'JavaScript nâng cao',
                        description: 'Khóa học JavaScript nâng cao, giúp bạn thành thạo các kỹ thuật lập trình hiện đại.',
                        tutor: 'Ngô Văn F',
                        price: 899000,
                        rating: 4.9,
                        totalReviews: 145,
                        imageUrl: 'https://placehold.co/400x250',
                        category: 'Lập trình'
                    }
                ];
                
                setCourses(mockCourses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchCourses();
    }, []);
    
    // Lọc khóa học theo danh mục
    const filteredCourses = activeCategory === 'all' 
        ? courses 
        : courses.filter(course => 
            course.category.toLowerCase() === categories.find(cat => cat.id === activeCategory)?.name.toLowerCase()
        );
    
    return (
        <div className="course-grid py-5" style={{ backgroundColor: 'var(--secondary)' }}>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-8">
                        <h2 className="mb-3" style={{ color: 'var(--text)' }}>Khóa học</h2>
                        <p className="lead" style={{ color: 'var(--text)' }}>
                            Khám phá các khóa học chất lượng cao từ những gia sư hàng đầu
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <Link 
                            to="/courses/create" 
                            className="btn btn-lg"
                            style={{ 
                                backgroundColor: 'var(--accent)',
                                color: 'var(--white)'
                            }}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Tạo khóa học
                        </Link>
                    </div>
                </div>
                
                <div className="mb-4 d-flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`btn ${activeCategory === category.id ? 'active' : ''}`}
                            style={{ 
                                backgroundColor: activeCategory === category.id ? 'var(--accent)' : 'var(--white)',
                                color: activeCategory === category.id ? 'var(--white)' : 'var(--text)',
                                borderRadius: '20px',
                                padding: '0.5rem 1.25rem'
                            }}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status" style={{ color: 'var(--primary)' }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3" style={{ color: 'var(--text)' }}>Đang tải khóa học...</p>
                    </div>
                ) : (
                    <div className="row g-4">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <div key={course.id} className="col-md-6 col-lg-4">
                                    <CourseCard course={course} />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <i className="bi bi-search display-1" style={{ color: 'var(--primary)' }}></i>
                                <h4 className="mt-3" style={{ color: 'var(--text)' }}>Không tìm thấy khóa học</h4>
                                <p style={{ color: 'var(--text)' }}>Không có khóa học nào trong danh mục này.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}