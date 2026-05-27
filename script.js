// 1. Tính năng theo dõi cuộn trang (Scrollspy) để làm nổi bật Menu tương ứng
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Trừ đi 150px để tính năng đổi màu mượt mà hơn khi chạm gần tới vùng nội dung mới
        if (window.pageYOffset >= sectionTop - 150) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

// 2. Xử lý sự kiện gửi Form Đăng ký
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn trang tải lại khi bấm Submit
        
        const name = document.getElementById('username').value;
        const email = document.getElementById('useremail').value;
        
        // Hiện thông báo chào mừng giả lập
        alert(`Cảm ơn ${name}! Bạn đã đăng ký nhận ưu đãi thành công với email: ${email}`);
        
        // Reset (xóa trống) các ô nhập liệu sau khi gửi thành công
        registerForm.reset();
    });
}

// Dữ liệu giả lập cho 2 sản phẩm
const productData = {
    mlem: {
        name: "S-MLEM",
        price: "$1.00",
        img: "/images/s-mlem.jpg",
        desc: "S-mlem khai thác tối đa niềm đam mê ẩm thực của đại chúng. Nhờ việc bóc tách các món ăn quen thuộc, trò chơi tạo ra những khoảnh khắc 'à hóa ra là vậy', giúp người chơi thêm trân trọng sự phong phú của nghệ thuật ẩm thực ba miền."
    },
    check: {
        name: "S-CHECK",
        price: "$1.00",
        img: "/images/s-check.jpg",
        desc: "S-check mở ra hành trình khám phá các địa danh, di sản văn hóa đặc sắc khắp chiều dài đất nước. Các câu hỏi tư duy và hệ thống nhận diện thông minh giúp người chơi vừa giải trí vừa tích lũy kiến thức địa lý toàn diện."
    }
};

// Hiển thị màn hình chi tiết sản phẩm
function showProductDetail(key) {
    const product = productData[key];
    if (!product) return;

    document.getElementById('detailImg').src = product.img;
    document.getElementById('detailImg').alt = product.name;
    document.getElementById('detailName').innerText = product.name;
    document.getElementById('detailPrice').innerText = product.price;
    document.getElementById('detailDesc').innerText = product.desc;
    document.getElementById('quantityInput').value = "1";

    document.getElementById('productMainList').style.display = 'none';
    document.getElementById('productDetailView').style.display = 'block';
}

// Quay lại danh sách chính
function hideProductDetail() {
    document.getElementById('productDetailView').style.display = 'none';
    document.getElementById('productMainList').style.display = 'grid';
}

// Tăng giảm số lượng sản phẩm
function changeQuantity(amount) {
    const input = document.getElementById('quantityInput');
    let value = parseInt(input.value) + amount;
    if (value < 1) value = 1;
    input.value = value;
}

// Đóng mở Hộp thoại đặt hàng (Modal)
function openOrderModal() {
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('orderForm').reset();
    
    document.getElementById('orderAddress').classList.remove('invalid');
    document.getElementById('orderPhone').classList.remove('invalid');
    document.getElementById('addressError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
}

// Xử lý xác thực form khi bấm đặt hàng
function handleOrderSubmit(event) {
    event.preventDefault();
    
    const addressInput = document.getElementById('orderAddress');
    const phoneInput = document.getElementById('orderPhone');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    
    let isValid = true;

    if (addressInput.value.trim() === "") {
        addressInput.classList.add('invalid');
        addressError.style.display = 'block';
        isValid = false;
    } else {
        addressInput.classList.remove('invalid');
        addressError.style.display = 'none';
    }

    if (phoneInput.value.trim() === "") {
        phoneInput.classList.add('invalid');
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneInput.classList.remove('invalid');
        phoneError.style.display = 'none';
    }

    if (isValid) {
        alert("Đặt hàng thành công! Chúng tôi sẽ liên hệ lại sớm nhất.");
        closeOrderModal();
    }
}