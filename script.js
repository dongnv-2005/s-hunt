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
        items: [
            {
                imgId: "mlem_1",
                name: "Phở Bò Hà Nội",
                thumb: "/images/mlem/thumb_1.jpg",
                article: {
                    title: "CHI TIẾT THẺ PHỞ BÒ HÀ NỘI",
                    subtitle: "Hồ sơ mật: Khám phá cách chế biến, dụng cụ ăn, hương vị và các câu chuyện trải nghiệm độc đáo",
                    heading1: "1. Phương thức Chế biến & Hương vị Đặc trưng",
                    text1: "Nước dùng phở bò được ninh từ xương ống bò kèm hành gừng nướng, quế, hồi, thảo quả tạo hương thơm thanh nhã. Vị ngọt tự nhiên sâu lắng hòa quyện với bánh phở mềm dẻo và thịt bò tái lăn chín tới.",
                    img1: "/images/mlem/detail_a_1.jpg",
                    source1: "Nguồn: Trích nội dung Hồ Sơ Mật - Dự án S-HUNT",
                    heading2: "2. Dụng cụ thưởng thức & Trải nghiệm thực tế",
                    text2: "Món ăn được thưởng thức tốt nhất trong bát sành sâu lòng để giữ nhiệt. Người Hà Nội thường ăn kèm quẩy giòn, thêm chút giấm tỏi hoặc chanh cốm tươi nhằm kích thích vị giác tối đa.",
                    heading3: "3. Tư liệu minh họa",
                    img2: "/images/mlem/detail_b_1.jpg",
                    link: "https://vi.wikipedia.org/wiki/Phở"
                }
            },
            {
                imgId: "mlem_2",
                name: "Bún Chả",
                thumb: "/images/mlem/thumb_2.jpg",
                article: {
                    title: "CHI TIẾT THẺ BÚN CHẢ",
                    subtitle: "Hồ sơ mật: Khám phá cách chế biến, dụng cụ ăn, hương vị và các câu chuyện trải nghiệm độc đáo",
                    heading1: "1. Phương thức Chế biến & Hương vị Đặc trưng",
                    text1: "Chả viên và chả miếng được làm từ thịt lợn nạc vai và ba chỉ băm nhỏ, tẩm ướp gia vị rồi nướng trên than củi hồng. Nước chấm pha loãng có vị chua, ngọt, mặn hài hòa kèm đu đủ xanh ngâm.",
                    img1: "/images/mlem/detail_a_2.jpg",
                    source1: "Nguồn: Trích nội dung Hồ Sơ Mật - Dự án S-HUNT",
                    heading2: "2. Dụng cụ thưởng thức & Trải nghiệm thực tế",
                    text2: "Bún chả dọn ra mẹt tre lót lá chuối bọc bún rối, rổ rau sống đủ loại kinh giới, tía tô. Thực khách gắp bún thả ngập vào bát nước chấm ấm nóng chứa sẵn những miếng chả thơm lừng.",
                    heading3: "3. Tư liệu minh họa",
                    img2: "/images/mlem/detail_b_2.jpg",
                    link: "https://vi.wikipedia.org/wiki/Bún_chả"
                }
            }
        ]
    },
    
    check: {
        title: "Danh sách Di sản - Bộ S-CHECK",
        items: [
            {
                imgId: "check_1",
                name: "Quần thể di tích Cố đô Huế",
                thumb: "/images/check/thumb_1.jpg",
                article: {
                    title: "CHI TIẾT CỐ ĐÔ HUẾ",
                    subtitle: "Hành trình khám phá các kỳ quan và kiến trúc di sản Việt Nam",
                    heading1: "1. Lịch sử Hình thành & Kiến trúc độc đáo",
                    text1: "Kinh đô của triều đại nhà Nguyễn từ năm 1802 đến năm 1945, nổi bật với hệ thống cung điện, thành quách và lăng tẩm mang đậm tư duy phong thủy phương Đông kết hợp kiến trúc quân sự phương Tây.",
                    img1: "/images/check/detail_a_1.jpg",
                    source1: "Nguồn: Cục Di sản văn hóa / UNESCO",
                    heading2: "2. Công tác Bảo tồn và Phát huy Giá trị",
                    text2: "Là di sản văn hóa thế giới đầu tiên của Việt Nam được UNESCO vinh danh. Công tác trùng tu bảo tồn các công trình trọng điểm giúp gìn giữ nguyên vẹn không gian văn hóa cung đình.",
                    heading3: "3. Tư liệu minh họa",
                    img2: "/images/check/detail_b_1.jpg",
                    link: "https://vi.wikipedia.org/wiki/Quần_the_di_tích_Cố_đô_Huế"
                }
            },
            {
                imgId: "check_2",
                name: "Vịnh Hạ Long",
                thumb: "/images/check/thumb_2.jpg",
                article: {
                    title: "CHI TIẾT VỊNH HẠ LONG",
                    subtitle: "Hành trình khám phá các kỳ quan và kiến trúc di sản Việt Nam",
                    heading1: "1. Lịch sử Hình thành & Kiến trúc độc đáo",
                    text1: "Di sản thiên nhiên thế giới sở hữu hàng nghìn đảo đá vôi trùng điệp nổi lên từ mặt biển xanh ngọc. Quá trình kiến tạo địa chất vùng Karst trải qua hàng triệu năm hình thành các hang động lộng lẫy.",
                    img1: "/images/check/detail_a_2.jpg",
                    source1: "Nguồn: Cục Di sản văn hóa / UNESCO",
                    heading2: "2. Công tác Bảo tồn và Phát huy Giá trị",
                    text2: "Việc hạn chế rác thải nhựa và quản lý nghiêm ngặt tàu du lịch lưu trú giúp bảo vệ hệ sinh thái biển cũng như cảnh quan tự nhiên phục vụ hoạt động giáo dục địa lý trực quan.",
                    heading3: "3. Tư liệu minh họa",
                    img2: "/images/check/detail_b_2.jpg",
                    link: "https://vi.wikipedia.org/wiki/Vịnh_Hạ_Long"
                }
            }
        ]
    },

    stage: {
        title: "Danh sách Nghệ thuật - Bộ S-STAGE",
        items: [
            {
                imgId: "stage_1",
                name: "Nghệ thuật Đờn ca tài tử",
                thumb: "/images/stage/thumb_1.jpg",
                article: {
                    title: "CHI TIẾT ĐỜN CA TÀI TỬ SOUTH",
                    subtitle: "Hành trình khám phá các loại hình nghệ thuật biểu diễn truyền thống Việt Nam",
                    heading1: "1. Nguồn gốc Xuất xứ & Nhạc cụ Đặc trưng",
                    text1: "Loại hình nghệ thuật dân gian đặc sắc ra đời từ cuối thế kỷ 19 tại vùng sông nước Nam Bộ. Ban nhạc sử dụng nhạc cụ chính gồm đờn kìm, đờn cò, đờn tranh và đờn tỳ bà phối hợp hòa âm tự biên tự diễn.",
                    img1: "/images/stage/detail_a_1.jpg",
                    source1: "Nguồn: Viện Văn hóa Nghệ thuật quốc gia Việt Nam",
                    heading2: "2. Trang phục Biểu diễn & Yếu tố Giao tiếp",
                    text2: "Nghệ nhân nam thường mặc áo dài đen, khăn đóng; nghệ nhân nữ diện áo dài truyền thống hoặc áo bà ba mộc mạc. Lời ca mang đậm tính ngẫu hứng giúp người chơi dễ phân tích biểu cảm, điệu bộ.",
                    heading3: "3. Tư liệu minh họa",
                    img2: "/images/stage/detail_b_1.jpg",
                    link: "https://vi.wikipedia.org/wiki/Đờn_ca_tài_tử_Nam_Bộ"
                }
            },
            {
                imgId: "stage_2",
                name: "Nghệ thuật Sân khấu Chèo",
                thumb: "/images/stage/thumb_2.jpg",
                article: {
                    title: "CHI TIẾT SÂN KHẤU CHÈO",
                    subtitle: "Hành trình khám phá các loại hình nghệ thuật biểu diễn truyền thống Việt Nam",
                    heading1: "1. Nguồn gốc Xuất xứ & Nhạc cụ Đặc trưng",
                    text1: "Loại hình sân khấu kịch hát dân gian phát triển mạnh mẽ ở vùng đồng bằng Bắc Bộ. Tiếng trống chèo giữ vai trò chỉ huy giữ nhịp cho dàn nhạc gồm nhị, sáo, sến bộc lộ tâm trạng nhân vật.",
                    img1: "/images/stage/detail_a_2.jpg",
                    source1: "Nguồn: Viện Văn hóa Nghệ thuật quốc gia Việt Nam",
                    heading2: "2. Trang phục Biểu diễn & Yếu tố Giao tiếp",
                    text2: "Nhân vật nữ mặc áo tứ thân, thắt bao sồi, đầu vấn khăn; nhân vật hề chèo vận đồ nâu mộc mạc gậy tre. Điệu bộ cách điệu kết hợp ngôn ngữ ẩn dụ sắc sảo là chìa khóa để suy luận mật lệnh.",
                    heading3: "3. Tư liệu minh họa",
                    img2: "/images/stage/detail_b_2.jpg",
                    link: "https://vi.wikipedia.org/wiki/Chèo"
                }
            }
        ]
    }
};