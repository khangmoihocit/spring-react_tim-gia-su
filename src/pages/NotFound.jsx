import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/variables.css';

export default function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ 
            minHeight: 'calc(100vh - 200px)',
            backgroundColor: 'var(--secondary)'
        }}>
            <div className="text-center">
                <h1 className="display-1 fw-bold" style={{ color: 'var(--primary)' }}>404</h1>
                <p className="fs-3" style={{ color: 'var(--text)' }}>
                    <span className="text-danger">Oops!</span> Trang không tìm thấy.
                </p>
                <p className="lead" style={{ color: 'var(--text)' }}>
                    Trang bạn đang tìm kiếm không tồn tại.
                </p>
                <Link to="/" className="btn btn-lg px-4" style={{ 
                    backgroundColor: 'var(--accent)',
                    color: 'var(--white)'
                }}>
                    Về trang chủ
                </Link>
            </div>
        </div>
    );
}