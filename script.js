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


// Dữ liệu cấu trúc bài viết và danh sách 24 ảnh của từng bộ sản phẩm S-HUNT
const S_HUNT_DATABASE = {
    mlem: {
        title: "Danh sách thẻ kiến thức - Bộ S-MLEM",
        items: Array.from({ length: 24 }, (_, i) => ({
            imgId: `mlem_${i + 1}`,
            name: `Thẻ kiến thức số ${i + 1}`,
            thumb: `/images/mlem/thumb_${i + 1}.jpg`,
            
            article: {
                title: `CHI TIẾT THẺ KIẾN THỨC SỐ ${i + 1}`,
                subtitle: `Hồ sơ mật: Khám phá cách chế biến, dụng cụ ăn, hương vị và các câu chuyện trải nghiệm độc đáo`,
                
                heading1: "1. Phương thức Chế biến & Hương vị Đặc trưng",
                text1: `Thẻ kiến thức số ${i + 1} sẽ bóc tách chi tiết về phương pháp chế biến đặc trưng (ninh, nấu, hấp, kho...) phối hợp cùng hệ thống icon nguyên liệu chính. Qua đó, người chơi có thể cảm nhận được kết cấu và hương vị đặc trưng (chua, cay, mặn, ngọt, bùi...) mang đậm nét tinh tế của ẩm thực vùng miền.`,
                img1: `/images/mlem/detail_a_${i + 1}.jpg`,
                source1: `Nguồn: Trích nội dung Hồ Sơ Mật - Dự án S-HUNT`,
                
                heading2: "2. Dụng cụ thưởng thức & Trải nghiệm thực tế",
                text2: `Không chỉ dừng lại ở món ăn, thẻ còn cung cấp các chỉ dẫn về dụng cụ ăn đi kèm truyền thống (mẹt, bát đất, đũa tre...) và cách bài trí chuẩn vị. Những "note" thú vị đi kèm mang lại góc nhìn mới mẻ, giúp người trẻ dễ dàng nhận diện và suy luận chính xác món ăn mà đối phương đang nắm giữ.`,
                
                heading3: "3. Tư liệu minh họa",
                img2: `/images/mlem/detail_b_${i + 1}.jpg`,
                link: "https://vi.wikipedia.org/wiki/Ẩm_thực_Việt_Nam"
            }
        }))
    },
    
    check: {
        title: "Danh sách Di sản - Bộ S-CHECK",
        items: Array.from({ length: 24 }, (_, i) => ({
            imgId: `check_${i + 1}`,
            name: `Di sản Văn hóa số ${i + 1}`,
            thumb: `/images/check/thumb_${i + 1}.jpg`,
            
            article: {
                title: `CHI TIẾT DI SẢN VĂN HÓA SỐ ${i + 1}`,
                subtitle: `Hành trình khám phá các kỳ quan và kiến trúc di sản Việt Nam`,
                heading1: "1. Lịch sử Hình thành & Kiến trúc độc đáo",
                text1: `Bài viết thuyết minh chi tiết về tiến trình lịch sử, niên đại xây dựng và những nét đặc sắc trong tư duy kiến trúc nghệ thuật của di sản số ${i + 1}.`,
                img1: `/images/check/detail_a_${i + 1}.jpg`,
                source1: `Nguồn: Cục Di sản văn hóa / UNESCO`,
                heading2: "2. Công tác Bảo tồn và Phát huy Giá trị",
                text2: `Mô tả thực trạng, ý nghĩa giáo dục và các hoạt động trải nghiệm, định hướng gìn giữ di sản này cho thế hệ mai sau trong hệ sinh thái board game S-HUNT.`,
                heading3: "3. Tư liệu minh họa",
                img2: `/images/check/detail_b_${i + 1}.jpg`,
                link: "https://vi.wikipedia.org/wiki/Di_sản_thế_giới_tại_Việt_Nam"
            }
        }))
    }
};