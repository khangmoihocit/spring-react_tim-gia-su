import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Alert from '../components/common/Alert';
import '../assets/styles/variables.css';

export default function CreateCoursePage() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        duration: '',
        level: 'BEGINNER',
        imageFile: null,
        imageUrl: ''
    });
    
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);
    
    // Danh sách các danh mục khóa học
    const categories = [
        { id: 'programming', name: 'Lập trình' },
        { id: 'language', name: 'Ngoại ngữ' },
        { id: 'math', name: 'Toán học' },
        { id: 'science', name: 'Khoa học' },
        { id: 'art', name: 'Nghệ thuật' }
    ];
    
    // Danh sách cấp độ khóa học
    const levels = [
        { id: 'BEGINNER', name: 'Cơ bản' },
        { id: 'INTERMEDIATE', name: 'Trung cấp' },
        { id: 'ADVANCED', name: 'Nâng cao' },
        { id: 'ALL_LEVELS', name: 'Tất cả cấp độ' }
    ];
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            const file = files[0];
            if (file) {
                // Preview hình ảnh
                const reader = new FileReader();
                reader.onload = (event) => {
                    setFormData({
                        ...formData,
                        imageFile: file,
                        imageUrl: event.target.result
                    });
                };
                reader.readAsDataURL(file);
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        
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
        
        if (!formData.title.trim()) {
            newErrors.title = 'Tiêu đề không được để trống';
        }
        
        if (!formData.description.trim()) {
            newErrors.description = 'Mô tả không được để trống';
        } else if (formData.description.trim().length < 50) {
            newErrors.description = 'Mô tả phải có ít nhất 50 ký tự';
        }
        
        if (!formData.category) {
            newErrors.category = 'Vui lòng chọn danh mục';
        }
        
        if (!formData.price.trim()) {
            newErrors.price = 'Giá không được để trống';
        } else if (isNaN(formData.price) || parseFloat(formData.price) < 0) {
            newErrors.price = 'Giá phải là số dương';
        }
        
        if (!formData.duration.trim()) {
            newErrors.duration = 'Thời lượng không được để trống';
        } else if (isNaN(formData.duration) || parseInt(formData.duration) <= 0) {
            newErrors.duration = 'Thời lượng phải là số nguyên dương';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);
        setMessage({ type: '', text: '' });
        
        try {
            // Mô phỏng gửi dữ liệu lên server
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setMessage({
                type: 'success',
                text: 'Tạo khóa học thành công! Khóa học đang chờ phê duyệt.'
            });
            
            // Chuyển hướng sau 2 giây
            setTimeout(() => {
                navigate('/courses');
            }, 2000);
            
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'Đã xảy ra lỗi. Vui lòng thử lại sau.'
            });
        } finally {
            setLoading(false);
        }
    };
    
    // Nếu người dùng chưa đăng nhập hoặc không phải gia sư, chuyển hướng
    if (!user || user.role !== 'TUTOR') {
        return (
            <div className="container my-5">
                <Alert 
                    type="warning" 
                    message="Bạn cần đăng nhập với tài khoản gia sư để tạo khóa học."
                />
                <div className="text-center mt-4">
                    <button 
                        className="btn" 
                        onClick={() => navigate('/auth/login')}
                        style={{ 
                            backgroundColor: 'var(--accent)',
                            color: 'var(--white)'
                        }}
                    >
                        Đăng nhập ngay
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="py-5" style={{ backgroundColor: 'var(--secondary)' }}>
            <div className="container">
                <div className="mb-4">
                    <h2 style={{ color: 'var(--text)' }}>Tạo khóa học mới</h2>
                    <p className="lead" style={{ color: 'var(--text)' }}>
                        Điền đầy đủ thông tin để tạo khóa học mới
                    </p>
                </div>
                
                {message.text && (
                    <Alert 
                        type={message.type} 
                        message={message.text} 
                        onClose={() => setMessage({ type: '', text: '' })}
                    />
                )}
                
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label" style={{ color: 'var(--text)' }}>
                                            Tiêu đề khóa học <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                            id="title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder="Nhập tiêu đề khóa học"
                                        />
                                        {errors.title && (
                                            <div className="invalid-feedback">{errors.title}</div>
                                        )}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label" style={{ color: 'var(--text)' }}>
                                            Mô tả khóa học <span className="text-danger">*</span>
                                        </label>
                                        <textarea
                                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Mô tả chi tiết về khóa học của bạn"
                                            rows="6"
                                        ></textarea>
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="imageFile" className="form-label" style={{ color: 'var(--text)' }}>
                                            Hình ảnh khóa học
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control mb-2"
                                            id="imageFile"
                                            name="imageFile"
                                            accept="image/*"
                                            onChange={handleChange}
                                        />
                                        {formData.imageUrl && (
                                            <div className="mt-2 text-center">
                                                <img 
                                                    src={formData.imageUrl} 
                                                    alt="Course Preview" 
                                                    className="img-fluid rounded" 
                                                    style={{ maxHeight: '200px' }} 
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label" style={{ color: 'var(--text)' }}>
                                            Danh mục <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                        >
                                            <option value="">Chọn danh mục</option>
                                            {categories.map(category => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category && (
                                            <div className="invalid-feedback">{errors.category}</div>
                                        )}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="level" className="form-label" style={{ color: 'var(--text)' }}>
                                            Cấp độ <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="form-select"
                                            id="level"
                                            name="level"
                                            value={formData.level}
                                            onChange={handleChange}
                                        >
                                            {levels.map(level => (
                                                <option key={level.id} value={level.id}>
                                                    {level.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label" style={{ color: 'var(--text)' }}>
                                            Giá (VNĐ) <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Ví dụ: 799000"
                                        />
                                        {errors.price && (
                                            <div className="invalid-feedback">{errors.price}</div>
                                        )}
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="duration" className="form-label" style={{ color: 'var(--text)' }}>
                                            Thời lượng (giờ) <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.duration ? 'is-invalid' : ''}`}
                                            id="duration"
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            placeholder="Ví dụ: 20"
                                        />
                                        {errors.duration && (
                                            <div className="invalid-feedback">{errors.duration}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 d-flex justify-content-end gap-3">
                                <button
                                    type="button"
                                    className="btn btn-lg"
                                    onClick={() => navigate('/courses')}
                                    style={{ 
                                        backgroundColor: 'var(--text)',
                                        color: 'var(--white)'
                                    }}
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-lg"
                                    disabled={loading}
                                    style={{ 
                                        backgroundColor: 'var(--accent)',
                                        color: 'var(--white)'
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Đang xử lý...
                                        </>
                                    ) : 'Tạo khóa học'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}