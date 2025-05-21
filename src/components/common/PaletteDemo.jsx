import React from 'react';
import Alert from './Alert';
import CourseCard from '../course/CourseCard';
import { Link } from 'react-router-dom';

const PaletteDemo = () => {
  // Sample course data for demonstration
  const sampleCourse = {
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

  return (
    <div className="container my-5">
      <h2 className="mb-4" style={{ color: 'var(--text)' }}>Bảng màu hệ thống</h2>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">Màu chính</div>
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Primary: #00B4D8</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--secondary)', color: 'var(--text)' }}>Secondary: #F0F4F8</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>Accent: #FF6B6B</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--accent-secondary)', color: 'var(--text)' }}>Accent Secondary: #FFD93D</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">Màu văn bản và liên kết</div>
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--text)', color: 'white' }}>Text: #1A3C34</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--link)', color: 'white' }}>Link: #0077B6</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'white', color: 'var(--text)', border: '1px solid #dee2e6' }}>Background: #FFFFFF</div>
              </div>
              <p className="mt-3">Mẫu văn bản với <a href="#">liên kết</a> sử dụng biến màu.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">Màu trạng thái</div>
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--success)', color: 'var(--text)' }}>Success: #FFD93D</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--error)', color: 'var(--white)' }}>Error: #FF8787</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--warning)', color: 'var(--text)' }}>Warning: #FFB07C</div>
                <div className="p-3 mb-2" style={{ backgroundColor: 'var(--info)', color: 'var(--white)' }}>Info: #00B4D8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Nút bấm</div>
            <div className="card-body">
              <button className="btn btn-primary me-2 mb-2">Nút Primary</button>
              <button className="btn btn-secondary me-2 mb-2">Nút Secondary</button>
              <button className="btn btn-outline-primary me-2 mb-2">Nút Outline</button>
              <button className="btn btn-cancel me-2 mb-2">Nút Hủy</button>
              <div className="mt-3">
                <span className="me-2">Đăng nhập / Đăng ký:</span>
                <Link to="/auth/login" className="btn btn-sign-in me-2 mb-2">Đăng nhập</Link>
                <Link to="/auth/register" className="btn btn-sign-up me-2 mb-2">Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Thông báo</div>
            <div className="card-body">
              <Alert 
                type="success" 
                message="Thông báo thành công!" 
                onClose={() => {}}
              />
              <Alert 
                type="error" 
                message="Thông báo lỗi!" 
                onClose={() => {}}
              />
              <Alert 
                type="warning" 
                message="Thông báo cảnh báo!" 
                onClose={() => {}}
              />
              <Alert 
                type="info" 
                message="Thông báo thông tin!" 
                onClose={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Form Elements</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">Nhãn input</label>
                  <input type="text" className="form-control" id="exampleInput" placeholder="Placeholder text" />
                  <div className="form-text" style={{ color: 'var(--gray)' }}>Văn bản hỗ trợ mô tả trường này.</div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="exampleSelect" className="form-label">Dropdown select</label>
                  <select className="form-select" id="exampleSelect">
                    <option>Lựa chọn 1</option>
                    <option>Lựa chọn 2</option>
                    <option>Lựa chọn 3</option>
                  </select>
                </div>
                
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck" />
                  <label className="form-check-label" htmlFor="exampleCheck">Checkbox</label>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Card Khóa học</div>
            <div className="card-body p-0">
              <CourseCard course={sampleCourse} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header">Bảng (Table)</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td style={{ color: 'var(--link)' }}>Lập trình Python cơ bản</td>
                    <td>Lập trình</td>
                    <td>799.000 đ</td>
                    <td><span className="badge" style={{ backgroundColor: 'var(--success)', color: 'var(--text)' }}>Đang hoạt động</span></td>
                    <td>
                      <button className="btn btn-sm" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Xem</button>
                      <button className="btn btn-sm ms-2" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>Sửa</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td style={{ color: 'var(--link)' }}>Tiếng Anh giao tiếp</td>
                    <td>Ngoại ngữ</td>
                    <td>650.000 đ</td>
                    <td><span className="badge" style={{ backgroundColor: 'var(--warning)', color: 'var(--text)' }}>Chờ duyệt</span></td>
                    <td>
                      <button className="btn btn-sm" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Xem</button>
                      <button className="btn btn-sm ms-2" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>Sửa</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td style={{ color: 'var(--link)' }}>Toán học ứng dụng</td>
                    <td>Toán học</td>
                    <td>850.000 đ</td>
                    <td><span className="badge" style={{ backgroundColor: 'var(--error)', color: 'white' }}>Tạm ngưng</span></td>
                    <td>
                      <button className="btn btn-sm" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Xem</button>
                      <button className="btn btn-sm ms-2" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>Sửa</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PaletteDemo;
