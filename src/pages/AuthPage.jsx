import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import '../assets/styles/variables.css';

export default function AuthPage() {
    const { action } = useParams();
    
    // Redirect to login if action isn't valid
    if (action !== 'login' && action !== 'register' && action !== 'reset-password') {
        return <Navigate to="/auth/login" replace />;
    }
    
    return (
        <div style={{ backgroundColor: 'var(--secondary)', minHeight: 'calc(100vh - 70px)' }}>
            {action === 'login' && <Login />}
            {action === 'register' && <Register />}
            {action === 'reset-password' && (
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-4 p-md-5">
                                    <h2 className="text-center mb-4" style={{ color: 'var(--link)' }}>Khôi phục mật khẩu</h2>
                                    <p className="text-center mb-4" style={{ color: 'var(--text)' }}>
                                        Nhập email của bạn và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu.
                                    </p>
                                    
                                    <form>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label" style={{ color: 'var(--text)' }}>
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="example@email.com"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="d-grid">
                                            <button 
                                                type="submit" 
                                                className="btn btn-lg"
                                                style={{ 
                                                    backgroundColor: 'var(--accent)',
                                                    color: 'var(--white)'
                                                }}
                                            >
                                                Gửi liên kết khôi phục
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}