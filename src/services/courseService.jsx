// Course Service - API calls related to courses
import api from './api';

// Mock data for featured courses
const coursesData = [  {
    id: 1,
    title: 'Toán học cao cấp',
    tutorName: 'Nguyễn Văn A',
    price: 850000,
    location: 'Online',
    image: 'https://placehold.co/400x250/00B4D8/FFFFFF?text=Toán+học',
    rating: 4.8,
    reviewCount: 24,
    description: 'Khóa học toán học cao cấp dành cho học sinh THPT chuẩn bị thi đại học.',
    category: 'Toán học'
  },  {
    id: 2,
    title: 'Tiếng Anh giao tiếp',
    tutorName: 'Trần Thị B',
    price: 750000,
    location: 'TP.HCM',
    image: 'https://placehold.co/400x250/FFD93D/1A3C34?text=Tiếng+Anh',
    rating: 4.7,
    reviewCount: 18,
    description: 'Khóa học tiếng Anh tập trung vào kỹ năng giao tiếp cho người đi làm.',
    category: 'Ngoại ngữ'
  },  {
    id: 3,
    title: 'Lập trình Python cơ bản',
    tutorName: 'Lê Văn C',
    price: 950000,
    location: 'Online',
    image: 'https://placehold.co/400x250/0077B6/FFFFFF?text=Python',
    rating: 4.9,
    reviewCount: 32,
    description: 'Khóa học lập trình Python từ cơ bản đến nâng cao dành cho người mới bắt đầu.',
    category: 'Lập trình'
  }
];

// Detailed course data
const courseDetails = {
  1: {
    id: 1,
    title: 'Toán học cao cấp',
    tutorName: 'Nguyễn Văn A',
    price: 850000,
    location: 'Online',
    image: 'https://placehold.co/800x400/00B4D8/FFFFFF?text=Toán+học',
    rating: 4.8,
    reviewCount: 24,
    description: 'Khóa học toán học cao cấp dành cho học sinh THPT chuẩn bị thi đại học.',
    longDescription: `Khóa học Toán Học Cao Cấp là sự lựa chọn hoàn hảo cho các học sinh THPT đang chuẩn bị cho kỳ thi đại học. 
    
    Khóa học này được thiết kế để giúp học sinh nắm vững các khái niệm toán học phức tạp, phát triển tư duy logic và khả năng giải quyết vấn đề một cách hiệu quả.
    
    Chương trình học được biên soạn bởi các giáo viên giỏi, có nhiều năm kinh nghiệm trong việc giảng dạy và luyện thi đại học.`,
    curriculum: [
      'Đại số và hình học giải tích',
      'Hàm số và phương trình',
      'Giới hạn và đạo hàm',
      'Tích phân và ứng dụng',
      'Số phức và hình học trong không gian'
    ],
    requirements: [
      'Đã hoàn thành chương trình Toán lớp 10 và 11',
      'Có kiến thức cơ bản về đại số và hình học',
      'Máy tính có kết nối internet ổn định (đối với lớp online)'
    ],
    tutorInfo: {
      id: 101,
      name: 'Nguyễn Văn A',
      avatar: 'https://placehold.co/150x150/0077B6/FFFFFF?text=NVA',
      degree: 'Thạc sĩ Toán học',
      experience: '10 năm giảng dạy',
      introduction: 'Thầy Nguyễn Văn A tốt nghiệp Thạc sĩ Toán học tại Đại học Khoa học Tự nhiên. Thầy có hơn 10 năm kinh nghiệm giảng dạy và luyện thi đại học, với nhiều học sinh đạt điểm cao trong các kỳ thi quốc gia.'
    },
    schedule: [
      { day: 'Thứ 2', time: '19:30 - 21:30' },
      { day: 'Thứ 5', time: '19:30 - 21:30' }
    ],
    duration: '3 tháng (24 buổi)',
    startDate: '01/06/2025',
    classSize: '15-20 học viên',
    category: 'Toán học'
  },
  2: {
    id: 2,
    title: 'Tiếng Anh giao tiếp',
    tutorName: 'Trần Thị B',
    price: 750000,
    location: 'TP.HCM',
    image: 'https://placehold.co/800x400/FFD93D/1A3C34?text=Tiếng+Anh',
    rating: 4.7,
    reviewCount: 18,
    description: 'Khóa học tiếng Anh tập trung vào kỹ năng giao tiếp cho người đi làm.',
    longDescription: `Khóa học Tiếng Anh Giao Tiếp được thiết kế đặc biệt cho người đi làm, giúp bạn tự tin sử dụng tiếng Anh trong môi trường công việc và đời sống hàng ngày.
    
    Với phương pháp học tập trung vào thực hành, khóa học sẽ giúp bạn phát triển kỹ năng nghe, nói một cách toàn diện và hiệu quả.
    
    Các tình huống giao tiếp thực tế được mô phỏng trong lớp học, giúp học viên làm quen và tự tin đối mặt với nhiều tình huống khác nhau trong công việc và cuộc sống.`,
    curriculum: [
      'Giao tiếp trong môi trường công sở',
      'Giao tiếp trong các cuộc họp và thuyết trình',
      'Đàm phán và thương lượng',
      'Small talk và networking',
      'Giao tiếp qua điện thoại và email'
    ],
    requirements: [
      'Có kiến thức cơ bản về tiếng Anh (tương đương trình độ A2-B1)',
      'Có động lực học tập và sẵn sàng thực hành nói tiếng Anh',
      'Máy tính hoặc điện thoại thông minh có kết nối internet'
    ],
    tutorInfo: {
      id: 102,
      name: 'Trần Thị B',
      avatar: 'https://placehold.co/150x150/FF6B6B/FFFFFF?text=TTB',
      degree: 'Thạc sĩ Ngôn ngữ Anh',
      experience: '8 năm giảng dạy',
      introduction: 'Cô Trần Thị B tốt nghiệp Thạc sĩ Ngôn ngữ Anh tại Đại học Sư phạm TP.HCM. Cô có 8 năm kinh nghiệm giảng dạy tiếng Anh cho người đi làm, với phương pháp giảng dạy tương tác và thực tế.'
    },
    schedule: [
      { day: 'Thứ 3', time: '18:30 - 20:30' },
      { day: 'Thứ 7', time: '09:00 - 11:00' }
    ],
    duration: '2 tháng (16 buổi)',
    startDate: '15/06/2025',
    classSize: '10-15 học viên',
    category: 'Ngoại ngữ'
  },
  3: {
    id: 3,
    title: 'Lập trình Python cơ bản',
    tutorName: 'Lê Văn C',
    price: 950000,
    location: 'Online',
    image: 'https://placehold.co/800x400/0077B6/FFFFFF?text=Python',
    rating: 4.9,
    reviewCount: 32,
    description: 'Khóa học lập trình Python từ cơ bản đến nâng cao dành cho người mới bắt đầu.',
    longDescription: `Khóa học Lập trình Python Cơ bản là điểm khởi đầu hoàn hảo cho những người muốn bắt đầu sự nghiệp trong lĩnh vực lập trình.
    
    Python là ngôn ngữ lập trình dễ học, dễ sử dụng nhưng cực kỳ mạnh mẽ, được ứng dụng trong nhiều lĩnh vực từ phát triển web, phân tích dữ liệu đến trí tuệ nhân tạo.
    
    Qua khóa học này, học viên sẽ được trang bị kiến thức nền tảng vững chắc về Python, từ đó có thể tự tin khám phá và phát triển các ứng dụng thực tế.`,
    curriculum: [
      'Giới thiệu về Python và cài đặt môi trường lập trình',
      'Biến, kiểu dữ liệu và cấu trúc dữ liệu trong Python',
      'Cấu trúc điều khiển và vòng lặp',
      'Hàm và module trong Python',
      'Lập trình hướng đối tượng với Python',
      'Xử lý ngoại lệ và làm việc với file',
      'Mini project cuối khóa'
    ],
    requirements: [
      'Không yêu cầu kiến thức lập trình trước đó',
      'Máy tính cá nhân có kết nối internet ổn định',
      'Tinh thần học hỏi và kiên trì thực hành'
    ],
    tutorInfo: {
      id: 103,
      name: 'Lê Văn C',
      avatar: 'https://placehold.co/150x150/00B4D8/FFFFFF?text=LVC',
      degree: 'Kỹ sư Công nghệ thông tin',
      experience: '7 năm kinh nghiệm',
      introduction: 'Thầy Lê Văn C là kỹ sư CNTT với hơn 7 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và 5 năm giảng dạy. Thầy đã tham gia nhiều dự án lớn và có kinh nghiệm phong phú trong việc áp dụng Python vào các ứng dụng thực tế.'
    },
    schedule: [
      { day: 'Thứ 4', time: '19:00 - 21:00' },
      { day: 'Chủ nhật', time: '14:00 - 16:00' }
    ],
    duration: '2.5 tháng (20 buổi)',
    startDate: '10/06/2025',
    classSize: '15-20 học viên',
    category: 'Lập trình'
  }
};

// Get all courses
const getAllCourses = async () => {
  try {
    // In a real app, this would be an API call:
    // const response = await api.get('/courses');
    // return response.data;
    
    // For now, return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(coursesData);
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Get featured courses
const getFeaturedCourses = async () => {
  try {
    // In a real app, this would be an API call:
    // const response = await api.get('/courses/featured');
    // return response.data;
    
    // For now, return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(coursesData);
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching featured courses:', error);
    throw error;
  }
};

// Get course by ID
const getCourseById = async (id) => {
  try {
    // In a real app, this would be an API call:
    // const response = await api.get(`/courses/${id}`);
    // return response.data;
    
    // For now, return mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const course = courseDetails[id];
        if (course) {
          resolve(course);
        } else {
          reject(new Error('Course not found'));
        }
      }, 500);
    });
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error);
    throw error;
  }
};

// Search courses
const searchCourses = async (query) => {
  try {
    // In a real app, this would be an API call:
    // const response = await api.get(`/courses/search?q=${query}`);
    // return response.data;
    
    // For now, filter mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredCourses = coursesData.filter(course => 
          course.title.toLowerCase().includes(query.toLowerCase()) || 
          course.description.toLowerCase().includes(query.toLowerCase()) ||
          course.category.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredCourses);
      }, 500);
    });
  } catch (error) {
    console.error('Error searching courses:', error);
    throw error;
  }
};

// Export functions
const courseService = {
  getAllCourses,
  getFeaturedCourses,
  getCourseById,
  searchCourses
};

export default courseService;