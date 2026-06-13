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
        title: "TRẠM TRUY TÌM VỊ GIÁC",
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
        title: "TRẠM ĐỊNH VỊ DI SẢN",
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
        title: "TRẠM GIẢI MÃ NHÂN VẬT",
        items: [
            {
                imgId: "stage_1",
                name: "Anh Hiệu",
                thumb: "/images/stage/thumb_1.jpg",
                article: {
                    title: "Anh/Chị Hiệu",
                    subtitle: "Trên sân diễn Bài chòi đầy sắc màu của miền Trung, Anh/Chị Hiệu hiện lên như những nghệ sĩ dân gian đa tài, làm chủ hoàn toàn không gian hội hè. Bằng lối đối đáp sắc sảo và óc khôi hài thiên bẩm, họ khéo léo kết nối người chơi qua các làn điệu bài chòi mộc mạc nhưng đầy biến hóa. Không chỉ khuấy động không khí đón xuân rộn ràng, hình tượng Anh/Chị Hiệu chính là biểu tượng cho tư duy duyên dáng và sức sáng tạo không giới hạn của người dân lao động xứ biển. ",
                    heading1: "Anh/Chị Hiệu trong hội Bài chòi là ai?",
                    text1: "Anh/chị Hiệu trong hội Bài chòi là người giữ vai trò trung tâm điều khiển cuộc chơi, tương tự như người dẫn chương trình trong các hoạt động văn nghệ dân gian. Họ là người trực tiếp xốc ống bài, rút thẻ và xướng tên con bài cho người chơi trên các chòi. Không chỉ đơn thuần là người “hô bài”, anh/chị Hiệu còn là linh hồn của hội chơi, quyết định sự hấp dẫn và thành công của toàn bộ không khí hội Bài chòi.",
                    img1: "/images/stage/detail_a_1.jpg",
                    source1: "Anh Hiệu, Chị Hiệu trong trò chơi hô vang tên quân bài (Ảnh: Sưu tầm internet)",
                    heading2: "Vai trò trong hội Bài chòi",
                    text2: `Anh/chị Hiệu giữ vai trò điều hành toàn bộ ván chơi, từ việc chia bài, rút thẻ đến công bố kết quả thắng thua. Quan trọng hơn, họ là người tạo ra sự hấp dẫn cho trò chơi thông qua nghệ thuật diễn xướng, đặc biệt là những “câu thai” – câu hát, câu vè có nội dung liên quan đến tên con bài. Chính cách hô bài có vần điệu, giàu hình ảnh và đôi khi hài hước đã biến việc chơi bài chòi thành một loại hình diễn xướng dân gian giàu tính nghệ thuật, không đơn thuần là trò chơi may rủi.
                    Anh/chị Hiệu thường là những người có giọng hát tốt, khả năng ứng tác nhanh, hiểu biết ca dao tục ngữ và có tư duy sáng tạo trong việc đặt câu thai. Trong quá trình diễn xướng, họ phải linh hoạt kết hợp giữa lời ca, tiếng hát và yếu tố hài hước để thu hút người xem. Nhiều câu thai không chỉ gợi tên con bài mà còn ẩn chứa ý nghĩa dân gian, bài học đạo đức hoặc tình huống đời sống, khiến người nghe vừa giải trí vừa suy ngẫm.`,
                    img2: "/images/stage/detail_a_2.jpg",
                    source2: "Nghệ nhân bài chòi – Người giữ hồn văn hóa dân tộc (Ảnh: Sưu tầm internet)",
                    text1: "Anh/chị Hiệu không chỉ giúp duy trì trò chơi mà còn góp phần bảo tồn và lan tỏa nghệ thuật Bài chòi Trung Bộ – một di sản văn hóa phi vật thể đã được UNESCO ghi danh. Thông qua tài năng ứng tác và diễn xướng, họ giữ cho Bài chòi luôn sống động trong đời sống cộng đồng, đặc biệt vào dịp lễ Tết. Hình ảnh anh/chị Hiệu vì vậy trở thành biểu tượng của sự sáng tạo dân gian, gắn liền với ký ức văn hóa làng quê miền Trung.",
                     text3: "Anh/chị Hiệu thường là những người có giọng hát tốt, khả năng ứng tác nhanh, hiểu biết ca dao tục ngữ và có tư duy sáng tạo trong việc đặt câu thai. Trong quá trình diễn xướng, họ phải linh hoạt kết hợp giữa lời ca, tiếng hát và yếu tố hài hước để thu hút người xem. Nhiều câu thai không chỉ gợi tên con bài mà còn ẩn chứa ý nghĩa dân gian, bài học đạo đức hoặc tình huống đời sống, khiến người nghe vừa giải trí vừa suy ngẫm.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_3.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=CSAj8vhHjVk",
                            text: "Hô hát bài chòi, Hội An, tỉnh Quảng Nam - Di sản văn hóa phi vật thể",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@dulichdanang23/video/7620742705018047764?is_from_webapp=1&sender_device=pc&web_id=7605477206903621140",
                            text: "Hát bài chòi - Hội An #baichoi #dulich #foryou #danangcungngan | TikTok",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "Hát bài chòi - Hội An | Tích Tắc Tour",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Với tài năng diễn xướng và tư duy sáng tạo đậm chất nghệ sĩ dân gian, các thế hệ Anh/Chị Hiệu đóng vai trò quyết định trong việc gìn giữ, thổi hồn và lan tỏa nghệ thuật Bài chòi trong đời sống cộng đồng, đặc biệt là vào mỗi dịp lễ Tết. Sự cống hiến thầm lặng của họ qua các câu hát giàu ý nghĩa nhân văn không chỉ nuôi dưỡng ký ức văn hóa làng quê miền Trung, mà còn là nhân tố cốt lõi giúp Nghệ thuật Bài chòi Trung Bộ được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại. ",
                }
            },
            {
                imgId: "stage_2",
                name: "Ca nương",
                thumb: "/images/stage/thumb_2.jpg",
                article: {
                    title: "Ca nương (Ả đào) - Nhân vật nữ ca sĩ trong nghệ thuật Ca trù",
                    subtitle: "Là hiện thân của vẻ đẹp thanh lịch và chiều sâu nghệ thuật thính phòng cổ truyền, ca nương chính là người nâng đỡ và chắp cánh cho những áng thơ văn bác học thành giai điệu sống động. Không chỉ sở hữu chất giọng thiên bẩm, người nghệ nữ mang cốt cách của một bậc thầy làm chủ hơi thở, biến từng nhịp phách giòn giã thành sợi dây kết nối tâm giao với người nghe. Sự xuất hiện của ca nương không chỉ làm bừng sáng không gian diễn xướng mà còn là biểu tượng đỉnh cao cho tài năng thanh nhạc và sự dung hòa tuyệt mỹ giữa văn chương với âm nhạc dân tộc. ",
                    heading1: "Ca nương là ai?",
                    text1: `Ca nương (còn gọi là Ả đào) là nữ nghệ nhân đảm nhận vai trò hát chính trong nghệ thuật Ca trù – một loại hình âm nhạc cổ truyền đặc sắc của Việt Nam. Họ là người thể hiện phần lời ca dựa trên thơ ca bác học hoặc dân gian, kết hợp với kỹ thuật luyến láy tinh tế để truyền tải cảm xúc và ý nghĩa của bài hát. Ca nương không chỉ là người biểu diễn mà còn là người “kể chuyện bằng âm nhạc”, đưa người nghe vào không gian thẩm mỹ giàu chất thơ và cảm xúc sâu lắng.
                    Ca nương xuất hiện từ nhu cầu biểu đạt thơ ca bằng âm nhạc trong không gian nghệ thuật thính phòng. Ca trù vốn gắn với văn chương bác học, vì vậy cần một giọng hát nữ có khả năng truyền tải tinh tế nội dung thơ ca. Từ đó, Ca nương trở thành nhân tố không thể thiếu, góp phần đưa lời thơ trở thành âm nhạc sống động, giàu tính biểu cảm và thẩm mỹ cao.
                    Ca nương thường xuất hiện với trang phục áo tứ thân hoặc áo dài truyền thống, đầu đội khăn mỏ quạ hoặc vấn tóc gọn gàng, tạo vẻ đẹp nền nã, thanh lịch. Khi biểu diễn, họ ngồi ngay ngắn, tay cầm phách để giữ nhịp hoặc phối hợp với người đánh phách, trong khi giọng hát cất lên mềm mại, uyển chuyển. Điểm đặc trưng của Ca nương nằm ở kỹ thuật hát rất tinh tế, đặc biệt là cách nhả chữ, rung giọng và xử lý các âm dài ngắn theo hơi Ca trù.`,
                    img1: "/images/stage/detail_a_4.jpg",
                    source1: "Ảnh: Sưu tầm internet",
                    heading2: "Vai trò trong nghệ thuật Ca trù",
                    text2: "Ca nương giữ vai trò trung tâm trong buổi biểu diễn Ca trù, là người trực tiếp thể hiện phần lời ca và truyền tải nội dung nghệ thuật của bài hát. Họ phối hợp chặt chẽ với Kép đàn (người chơi đàn đáy) và người đánh phách để tạo nên một chỉnh thể âm nhạc hoàn chỉnh. Trong quá trình biểu diễn, Ca nương phải kiểm soát hơi thở, cảm xúc và nhịp điệu để hòa quyện với tiếng đàn và tiếng phách, tạo nên sự cân bằng giữa kỹ thuật và cảm xúc – đặc trưng quan trọng nhất của Ca trù.",
                    img2: "/images/stage/detail_a_5.jpg",
                    source2: "Ảnh: Sưu tầm internet",
                    text3: "Ca nương là lực lượng quan trọng trong việc bảo tồn và phát triển nghệ thuật Ca trù qua nhiều thế hệ. Họ góp phần lưu giữ hàng trăm bài bản cổ và truyền dạy kỹ thuật hát đặc trưng của loại hình này. Nhờ công sức của các thế hệ Ca nương cùng nghệ nhân khác, Ca trù đã được UNESCO ghi danh là Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp vào năm 2009, khẳng định giá trị nghệ thuật độc đáo và chiều sâu văn hóa của loại hình này trong kho tàng âm nhạc Việt Nam.",
                     text4: "Ca nương là lực lượng quan trọng trong việc bảo tồn và phát triển nghệ thuật Ca trù qua nhiều thế hệ. Họ góp phần lưu giữ hàng trăm bài bản cổ và truyền dạy kỹ thuật hát đặc trưng của loại hình này. Nhờ công sức của các thế hệ Ca nương cùng nghệ nhân khác, Ca trù đã được UNESCO ghi danh là Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp vào năm 2009, khẳng định giá trị nghệ thuật độc đáo và chiều sâu văn hóa của loại hình này trong kho tàng âm nhạc Việt Nam.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_6.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=41z5HiWIAOs&list=RD41z5HiWIAOs&start_radio=1",
                            text: "Ca Trù Hồng Hồng Tuyết Tuyết - Kim Luyến [Official]",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@vichofficial/video/7239205101825445125?is_from_webapp=1&sender_device=pc&web_id=7605477206903621140",
                            text: "Khám Phá Nghệ Thuật Ca Trù Việt Nam | TikTok",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "Khám Phá Nghệ Thuật Ca Trù Việt Nam |Di Sản Trong Lòng Phố",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Bằng giọng hát truyền cảm và kỹ thuật điêu luyện được trao truyền chủ yếu qua phương thức truyền khẩu, các thế hệ ca nương chính là những người gìn giữ, nuôi dưỡng mạch nguồn và lưu giữ hàng trăm bài bản cổ của nghệ thuật Ca trù. Sự cống hiến bền bỉ của họ trong việc giữ gìn và truyền dạy cho thế hệ sau là nhân tố quyết định giúp khẳng định chiều sâu văn hóa của loại hình nghệ thuật bác học này, góp phần đưa Ca trù được UNESCO ghi danh là Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp của nhân loại. ",
                }
            },
             {
                imgId: "stage_3",
                name: "Chú Tễu",
                thumb: "/images/stage/thumb_3.jpg",
                article: {
                    title: "Chú Tễu - Linh hồn của múa rối nước",
                    subtitle: "Trong kho tàng nghệ thuật Múa rối nước truyền thống Việt Nam, Chú Tễu được xem là nhân vật biểu tượng và xuất hiện phổ biến nhất trên sân khấu. Với thân hình mũm mĩm, nụ cười tươi vui cùng tính cách hài hước, dí dỏm, Chú Tễu không chỉ mang đến tiếng cười cho khán giả mà còn trở thành hình ảnh đại diện cho tinh thần lạc quan, hồn hậu của người nông dân Việt Nam qua nhiều thế hệ. ",
                    heading1: "Nguồn gốc và tên gọi của nhân vật Tễu",
                    text1: "Tên gọi, theo cách hiểu phổ biến trong dân gian, chữ “Tễu” trong chữ Nôm mang ý nghĩa gắn với tiếng cười, sự vui nhộn và tính hài hước. Ngay từ tên gọi, nhân vật đã thể hiện vai trò mang đến niềm vui, sự hóm hỉnh và kết nối khán giả với thế giới nghệ thuật dân gian. Tuy nhiên, tiếng cười của Chú Tễu không chỉ nhằm mục đích giải trí mà còn phản ánh nhiều khía cạnh của đời sống xã hội, tâm lý con người và những giá trị văn hóa truyền thống của người Việt.",
                    img1: "/images/stage/detail_a_7.jpg",
                    source1: "Hình ảnh: Chú Tễu. Nguồn ảnh: dauhomemade.vn",
                    heading2: "Tạo hình và vai trò của nhân vật Tễu",
                    text2: `Về tạo hình, Chú Tễu thường được chế tác với kích thước lớn hơn nhiều con rối khác để tạo điểm nhấn trên sân khấu. Dựa vào kiểu tóc trái đào quen thuộc của trẻ em xưa, nhân vật thường được hình dung là một cậu bé khoảng 7 đến 8 tuổi. Chú Tễu có thân hình tròn trĩnh, khuôn mặt bầu bĩnh với nụ cười luôn thường trực, tạo cảm giác vui tươi và thân thiện ngay từ lần xuất hiện đầu tiên.
                    Trang phục của nhân vật khá giản dị, thường chỉ đóng khố, để lộ phần ngực và chiếc bụng phệ đặc trưng. Hình ảnh này không chỉ tạo nên nét hài hước mà còn mang ý nghĩa biểu tượng cho tín ngưỡng phồn thực trong văn hóa dân gian Việt Nam, thể hiện mong ước về cuộc sống no đủ, sung túc và sinh sôi phát triển`,
                    img2: "/images/stage/detail_a_8.jpg",
                    source2: "Ảnh: Sưu tầm internet",
                    text3: `Bên cạnh đó, các nghệ nhân còn tạo cho Chú Tễu những động tác đặc trưng như tay vung vẩy, đầu hơi nghiêng, một tay chỉ về phía trước trong khi tay còn lại nắm lại như đang trò chuyện hoặc trêu đùa khán giả. Chính những cử chỉ sinh động ấy đã làm nổi bật tính cách tinh nghịch, hoạt bát và hóm hỉnh của nhân vật, góp phần giúp Chú Tễu trở thành biểu tượng đặc sắc của nghệ thuật Múa rối nước Việt Nam.
                    Trong các vở diễn, tễu có vai trò là người mở màn với câu nói quen thuộc: “Tôi ra đây có phải xưng danh không nhỉ?”; “Nhìn dáng điệu tuổi còn niên thiếu nhưng cơ tâm trí xảo dị kỳ”. Tễu cũng liên kết các tiểu phẩm, giúp khán giả hiểu rõ bối cảnh và duy trì sự chú ý xuyên suốt. Đặc biệt, Chú Tễu còn là "tiếng nói dân gian", thể hiện quan điểm về các vấn đề xã hội qua những câu nói hài hước, châm biếm tham nhũng và giáo dục đạo đức.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_9.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/results?search_query=M%C3%BAa+r%E1%BB%91i+n%C6%B0%E1%BB%9Bc+-+Vietnamsese+water+puppetry+artist",
                            text: "Múa rối nước - Vietnamese water puppetry artist - Kênh Youtube Media Service247",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7541385461802093831?is_from_webapp=1&sender_device=pc&web_id=7648890569712125460",
                            text: "Giải mã nhân vật chú Tễu trong Nghệ thuật Múa rối nước",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "GỠ RỐI EP2: GIẢI MÃ NHÂN VẬT CHÚ TỄU - TẠI SAO TỄU LẠI ĐƯỢC GỌI LÀ TỄU? - Kênh  Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Chú Tễu là nhân vật tiêu biểu và quen thuộc nhất của nghệ thuật Múa rối nước Việt Nam. Không mang dáng vẻ uy nghi hay linh thiêng như nhiều hình tượng văn hóa truyền thống khác, Chú Tễu lại giữ vai trò đặc biệt trong việc kết nối khán giả với thế giới nghệ thuật Múa rối nước. Thông qua những lời dẫn chuyện dí dỏm và các màn diễn sinh động, nhân vật trở còn phản ánh nhiều khía cạnh của đời sống, tâm lý và văn hóa đương đại.",
                }
            },
             {
                imgId: "stage_4",
                name: "Cô gái",
                thumb: "/images/stage/thumb_4.jpg",
                article: {
                    title: "Cô gái trong Ví Phường Vải - Dân ca ví, giặm xứ Nghệ",
                    subtitle: "Hình tượng cô gái trong Ví phường vải là biểu tượng cho vẻ đẹp mộc mạc, duyên dáng và giàu tình cảm của người phụ nữ xứ Nghệ. Gắn liền với những đêm quay tơ, kéo sợi và những cuộc hát giao duyên bên khung cửi, hình ảnh ấy không chỉ phản ánh đời sống lao động mà còn thể hiện tâm hồn, tình yêu và khát vọng hạnh phúc của người dân vùng đất Nghệ Tĩnh.",
                    heading1: "Khái quát về dân ca ví, giặm và ví phường vải",
                    text1: `Dân ca Ví, Giặm Xứ Nghệ  là loại hình nghệ thuật dân gian đặc sắc của vùng Nghệ An - Hà Tĩnh, được hình thành và phát triển trong môi trường lao động và sinh hoạt cộng đồng. Năm 2014, Dân ca Ví, Giặm Nghệ Tĩnh được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại.
                    Trong hệ thống các làn điệu Ví, Ví phường vải được xem là một trong những hình thức tiêu biểu và phổ biến nhất. Đây là lối hát giao duyên gắn liền với nghề kéo sợi, dệt vải của người dân xứ Nghệ. Những cuộc hát thường diễn ra vào ban đêm, giữa các cô gái đang quay tơ trong nhà và các chàng trai đứng ngoài sân hoặc ngoài ngõ.
                    Khác với nhiều hình thức hát giao duyên khác, Ví phường vải có những quy tắc và trình tự khá chặt chẽ. Một cuộc hát thường trải qua nhiều chặng như hát chào hỏi, hát đố đối đáp, hát giao duyên và hát tiễn bạn. Chính sự kết hợp giữa lao động và nghệ thuật đã tạo nên nét độc đáo riêng của loại hình dân ca này.`,
                    img1: "/images/stage/detail_a_10.jpg",
                    source1: "Nguồn ảnh: Báo Hà Tĩnh Điện Tử",
                    heading2: "Cô gái trong Ví phường vải là ai?",
                    text2: "Cô gái trong Ví phường vải là hình tượng đại diện cho những thiếu nữ tham gia các phường dệt vải truyền thống ở Nghệ An và Hà Tĩnh xưa. Nhắc đến Ví phường vải là nhắc đến hình ảnh những cô gái bên khung cửi, cần mẫn lao động nhưng vẫn giữ được sự duyên dáng và tinh tế trong lời ăn tiếng nói. Qua những câu hát đối đáp, họ không chỉ thể hiện tài năng ứng khẩu mà còn bộc lộ tình cảm, suy nghĩ và khát vọng về tình yêu đôi lứa. Nhân vật xuất hiện từ chính môi trường lao động dệt vải, nơi những nam nữ thanh niên vừa quay tơ, kéo sợi vừa đối đáp, giao duyên thông qua những câu hát ví mộc mạc và giàu cảm xúc. ",
                    img2: "/images/stage/detail_a_11.jpg",
                    source2: "Nguồn: Báo Hà Tĩnh",
                    text3: "Thông qua các cuộc hát giao duyên, hình tượng cô gái Ví phường vải hiện lên với vẻ đẹp giản dị nhưng đầy cuốn hút. Họ không chỉ thể hiện tài ứng đối linh hoạt mà còn đại diện cho những phẩm chất tiêu biểu của người phụ nữ xứ Nghệ như chăm chỉ, khéo léo, giàu tình cảm và thủy chung trong cuộc sống. Những câu hát ví vì thế không chỉ là lời giao duyên mà còn là tiếng lòng của những con người gắn bó với quê hương, gia đình và cuộc sống lao động thường nhật.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_12.jpg",
                    links: [
                        {
                            url: "https://youtu.be/vVLQlJW06ds?si=8GWV7Ff4iXd8-rEQ",
                            text: "Phường vải đêm trăng - NSND Hồng Lựu, dân ca ví dặm Nghệ Tĩnh",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@yeuvidam38ht/video/7354569883167821072?is_from_webapp=1&sender_device=pc&web_id=7611761127513228807",
                            text: "Trai phường chài,gái phường vải",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Yêu Ví Dặm✅",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Cô gái trong Ví phường vải là hình tượng tiêu biểu của Dân ca Ví, Giặm xứ Nghệ và là biểu tượng cho vẻ đẹp của người phụ nữ lao động Việt Nam. Thông qua những câu hát giao duyên bên khung cửi, hình ảnh ấy đã lưu giữ những giá trị văn hóa, tình cảm và tâm hồn của người dân Nghệ Tĩnh qua nhiều thế hệ. Trải qua thời gian, dù nghề dệt vải thủ công không còn phổ biến như trước, tiếng hát Ví phường vải và hình tượng những cô gái xứ Nghệ vẫn là một phần đẹp đẽ trong di sản văn hóa dân gian Việt Nam. ",
                }
            },
            {
                imgId: "stage_5",
                name: "Kép đàn",
                thumb: "/images/stage/thumb_5.jpg",
                article: {
                    title: "Kép đàn - Nhân vật người đàn trong Ca trù",
                    subtitle: "Trong không gian thính phòng trầm mặc của Ca trù, kép đàn hiện lên như một tri âm thầm lặng, người định hình chiều sâu và giữ chân cho toàn bộ cấu trúc cuộc diễn xướng. Không ồn ào phô diễn, người nghệ sĩ ôm đàn mang cốt cách của một bậc thầy kiểm soát nhịp điệu, chuyển hóa những rung động của tơ lòng thành điểm tựa vững chắc cho thơ ca cất cánh. Sự tinh tế trong từng ngón đàn bấm nhấn của họ chính là sợi dây liên kết vô hình, đưa sự phối hợp giữa nhạc cụ và giọng hát đạt đến độ nghiêm cẩn nhưng vẫn đầy lay động.  ",
                    heading1: "Kép đàn là ai?",
                    text1: `Kép đàn trong Ca trù là nghệ nhân đảm nhận vai trò chơi nhạc cụ chính, thường là đàn đáy, để đệm cho giọng hát của ca nương và giữ nhịp cho toàn bộ không gian biểu diễn. Họ không chỉ là người chơi đàn mà còn là người dẫn dắt cấu trúc âm nhạc, tạo nên nền tảng cho nghệ thuật Ca trù - một loại hình nghệ thuật trình diễn cổ truyền đặc sắc của Việt Nam. Kép đàn thường là những nghệ nhân có kỹ thuật cao, được truyền nghề qua nhiều thế hệ và phải nắm vững hệ thống bài bản phức tạp của Ca trù.
                    Kép đàn xuất hiện từ nhu cầu hình thành một không gian nghệ thuật thính phòng, nơi âm nhạc được tổ chức chặt chẽ nhưng vẫn giàu tính biểu cảm. Trong Ca trù, âm nhạc không chỉ là hát mà còn là sự kết hợp tinh tế giữa thơ ca, nhạc cụ và tiết tấu. Vì vậy, Kép đàn ra đời như một nhân tố không thể thiếu để đảm bảo sự cân bằng giữa giọng hát và nhịp phách, giúp Ca trù trở thành một loại hình nghệ thuật bác học dân gian độc đáo của Việt Nam.
                    Kép đàn thường ngồi trong không gian biểu diễn nhỏ, mặc trang phục truyền thống giản dị, tay ôm đàn đáy ba dây dài đặc trưng. Khi biểu diễn, họ vừa đàn vừa phối hợp nhịp nhàng với phách do người đánh phách đảm nhiệm. Điểm nổi bật của Kép đàn không nằm ở sự phô diễn mà ở kỹ thuật tinh tế, sự chính xác trong từng nhịp gảy và khả năng “đỡ” giọng hát của ca nương một cách mềm mại, uyển chuyển.
                    Kép đàn giữ vai trò trung tâm trong cấu trúc âm nhạc Ca trù, cùng với ca nương và người đánh phách tạo thành một chỉnh thể biểu diễn hoàn chỉnh. Họ là người giữ nhịp chính, dẫn dắt tiết tấu và tạo không gian âm nhạc để ca nương thể hiện giọng hát. Trong quá trình biểu diễn, Kép đàn phải luôn lắng nghe và ứng biến theo giọng hát, đảm bảo sự hòa quyện giữa đàn - phách - ca, tạo nên tính đặc trưng của Ca trù là vừa chặt chẽ vừa giàu cảm xúc.`,
                    img1: "/images/stage/detail_a_13.jpg",
                    source1: "Nguồn ảnh: Trang Ca trù - Tinh hoa cổ nhạc ",
                    heading2: "Thành tựu nghệ thuật",
                    text2: "Nghệ thuật của Kép đàn được đánh giá cao ở kỹ thuật gảy đàn tinh tế, khả năng kiểm soát nhịp điệu và sự phối hợp linh hoạt với ca nương. Người nghệ sĩ không chỉ cần giỏi kỹ thuật mà còn phải có sự hiểu biết sâu sắc về thơ ca, âm nhạc và cấu trúc bài bản Ca trù. Nhiều nghệ nhân Kép đàn đã góp phần quan trọng trong việc bảo tồn và phục dựng Ca trù, giúp loại hình nghệ thuật này được UNESCO ghi danh là Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp vào năm 2009.",
                    img2: "/images/stage/detail_a_14.jpg",
                    source2: "Kép đàn ca trù Nguyễn Phú Đẹ (Nguồn: Viện Âm nhạc)",
                
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_15.jpg",
                    links: [
                        {
                            url: "https://youtu.be/XrzGeo8GQX8?si=dzJcL7Gohb8ZSIS6",
                            text: "Ca trù singing | UNESCO",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://youtube.com/shorts/of24ePY7WqA?si=oL6o_vX5mesiJFVC",
                            text: "Du khách quốc tế tham gia trải nghiệm ca trù tại Ca trù Bích Câu",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Ca trù Việt Nam ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Không chỉ là người diễn tấu, các thế hệ kép đàn chính là những hạt nhân bền bỉ trong việc ghi nhớ, bảo tồn và lưu truyền hệ thống bài bản phức tạp của nghệ thuật bác học dân gian này qua nhiều thế hệ. Sự am hiểu sâu sắc về thơ ca, âm nhạc cùng tâm huyết phục dựng di sản của các nghệ nhân kép đàn là nhân tố quyết định giúp giữ gìn mạch nguồn văn hóa cổ truyền, đóng góp to lớn vào việc đưa Ca trù trở thành Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp của nhân loại. ",
                }
            },
            {
                imgId: "stage_6",
                name: "Đào Tam Xuân",
                thumb: "/images/stage/thumb_6.jpg",
                article: {
                    title: "NHÂN VẬT ĐÀO VÕ: Nhân vật Đào Tam Xuân trong vở tuồng: “Nữ tướng Đào Tam Xuân”",
                    subtitle: "Đào võ là kiểu nhân vật tiêu biểu cho những người phụ nữ anh hùng trong nghệ thuật Tuồng truyền thống. Họ thường mang dáng vẻ uy nghi, phong thái đường hoàng, cử chỉ mạnh mẽ và tinh thần chiến đấu kiên cường. Khác với các đào khác trong Tuồng, Đào võ đại diện cho bản lĩnh, lòng trung nghĩa và ý chí bảo vệ công lý. Hình tượng Đào Tam Xuân trong vở tuồng kinh điển “Nữ tướng Đào Tam Xuân” là một trong những đại diện tiêu biểu nhất cho loại nhân vật này. ",
                    heading1: "Nữ tướng Đào Tam Xuân là ai?",
                    text1: `Đào Tam Xuân là nữ tướng tài ba, vợ của danh tướng Trịnh Ân dưới triều Tống. Trong nghệ thuật Tuồng, bà được xây dựng như hình mẫu người phụ nữ trung nghĩa, thủy chung nhưng cũng vô cùng mạnh mẽ và quyết đoán trước bất công.
                    Bi kịch của Đào Tam Xuân bắt đầu khi chồng bà là Trịnh Ân bị gian thần hãm hại và chịu án tử oan khuất. Không dừng lại ở đó, người con trai Trịnh Ấn cũng bị cuốn vào vòng xoáy âm mưu và phải bỏ mạng trong nỗ lực cứu cha. Mất đi cả chồng lẫn con, Đào Tam Xuân rơi vào nỗi đau tột cùng.
                    Tuy nhiên, thay vì gục ngã trước số phận, bà đã biến đau thương thành sức mạnh. Từ nơi biên ải xa xôi, Đào Tam Xuân lấy máu đề cờ, dẫn quân về kinh đô quyết đòi lại công bằng cho gia đình. Hình tượng người nữ tướng mặc giáp bào, cầm quân tiến về triều đình đã trở thành một trong những hình ảnh bi tráng và giàu cảm xúc nhất của nghệ thuật Tuồng Việt Nam.
                    Nhân vật “Đào” trong nghệ thuật Tuồng Việt Nam có những nhân vật sau: Đào thương (vẻ đẹp dịu dàng, số phận éo le), Đào võ (sức mạnh và lòng trung nghĩa), Đào lẳng (sắc đẹp và mưu mô), Đào điên (sự giằng xé giữa điên và tỉnh), Đào dẫn lối. 
                    Đào Tam Xuân được xem là nhân vật tiêu biểu cho mô hình Đào võ bởi nhân vật hội tụ đầy đủ những phẩm chất của một nữ anh hùng: trung nghĩa, quả cảm, quyết đoán nhưng vẫn giàu tình cảm và lòng vị tha. 
                    Trên sân khấu Tuồng, Đào Tam Xuân thường xuất hiện trong trang phục võ tướng với giáp phục, mão tướng và cờ lệnh sau lưng. Là nhân vật võ trạng nguyên, Đào Tam Xuân thường mặc áo giáp uy nghiêm, được trang trí hoa văn rồng, phượng hoặc họa tiết quyền lực, tượng trưng cho sự oai phong của một “kép võ”. `,
                    img1: "/images/stage/detail_a_16.jpg",
                    source1: "Nguồn: Sân khấu truyền thống Việt Nam",
                    heading2: "Nội dung vở tuồng Nữ tướng Đào Tam Xuân",
                    text2: `Câu chuyện bắt đầu từ tình nghĩa kết giao giữa ba người anh em là Triệu Khuông Dẫn, Cao Hoài Đức và Trịnh Ân. Sau khi lập nên triều đại nhà Tống, Triệu Khuông Dẫn lên ngôi hoàng đế, còn Trịnh Ân tiếp tục cống hiến sức mình cho đất nước.
                    Sau một lần lập công lớn trong chiến trận, Trịnh Ân trên đường trở về kinh đã trừng trị Hàn Phụng - cha của Hàn Tố Mai, thứ phi được nhà vua sủng ái. Từ đó, Hàn Phụng và Hàn Tố Mai nung nấu ý định trả thù. Lợi dụng lúc vua say rượu, chúng giả mạo chiếu chỉ và đóng ngọc tỷ để kết tội Trịnh Ân.
                    Dù Trịnh Ân đã cố gắng cứu cha nhưng cuối cùng cả hai cha con đều bị sát hại. Khi nhận được tin dữ, Đào Tam Xuân vô cùng đau đớn. Bà quyết định dẫn quân về kinh thành để làm sáng tỏ sự việc và đòi lại công bằng cho gia đình.
                    Tại triều đình, nhờ sự phân tích và can gián của Cao Hoài Đức, Đào Tam Xuân nhận ra nhà vua cũng là nạn nhân của âm mưu gian thần. Vì đại nghĩa và sự ổn định của đất nước, bà tha tội cho Triệu Khuông Dẫn nhưng kiên quyết xử tội Hàn Phụng và Hàn Tố Mai. Quyết định ấy đã thể hiện rõ bản lĩnh của một người đặt lợi ích quốc gia lên trên thù hận cá nhân.`,
                    img2: "/images/stage/detail_a_17.jpg",
                    source2: "Đào Tam Xuân với cờ lệnh sau lưng. Nguồn: VOV - Tiếng nói Việt Nam (Độc đáo vẽ mặt nạ tạo hình nhân vật trong vở tuồng “Nữ tướng Đào Tam Xuân)",
                
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_18.jpg",
                    links: [
                        {
                            url: "https://youtu.be/5q2K759V3E0?si=nOJl-Na5hz3mvldc",
                            text: "SÂN KHẤU TUỒNG - NỮ TƯỚNG ĐÀO TAM XUÂN",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://youtube.com/shorts/OxkXmgrMPDc?si=EITyVCxpH3Fp_57T",
                            text: "TRÍCH ĐOẠN KINH ĐIỂN : ĐÀO TAM XUÂN ĐỀ CỜ ",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Tuồng Tân Tích",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Đào Tam Xuân là hình tượng tiêu biểu của mô hình nhân vật Đào võ trong nghệ thuật Tuồng Việt Nam. Với lòng trung nghĩa, khí phách anh hùng và tinh thần đấu tranh không khoan nhượng trước bất công, nhân vật đã trở thành biểu tượng cho sức mạnh và bản lĩnh của người phụ nữ không chỉ là hậu phương mà còn có thể trở thành người lãnh đạo, người bảo vệ công lý và đại diện cho chính nghĩa.",
                }
            },
             {
                imgId: "stage_7",
                name: "Đồng Kim Lân",
                thumb: "/images/stage/thumb_7.jpg",
                article: {
                    title: "Mô hình Kép đỏ trong Tuồng: Đổng Kim Lân trong vở tuồng “Sơn Hậu”",
                    subtitle: "Nghệ thuật Tuồng truyền thống (Hát Bội), Kép là kiểu vai đại diện cho những nhân vật nam chính diện, trẻ tuổi, tài năng và mang phẩm chất của bậc quân tử. Trong đó, Kép đỏ là một nhánh nhân vật đặc biệt, thường đại diện cho những anh hùng trung nghĩa, khí phách và tuyệt đối trung thành với chính nghĩa. Hình tượng Đổng Kim Lân trong vở tuồng kinh điển “Sơn Hậu” được xem là một trong những đại diện tiêu biểu nhất cho mô hình nhân vật này.",
                    heading1: "Đồng Kim Lân là ai? ",
                    text1: `“Sơn Hậu” là một trong những kịch bản Tuồng cổ nổi tiếng và có giá trị nghệ thuật tiêu biểu của sân khấu truyền thống Việt Nam. Tác phẩm kể về cuộc đấu tranh giữa phe trung thần và thế lực phản nghịch nhằm bảo vệ cơ nghiệp nhà Tề. Sau khi gian thần Tạ Thiên Lăng thực hiện âm mưu tiếm quyền, nhiều trung thần đã đứng lên bảo vệ hoàng tử và tìm cách phục hồi triều chính. Trong hành trình đầy biến động ấy, Đổng Kim Lân cùng Khương Linh Tá trở thành hai nhân vật trung tâm, đại diện cho tinh thần trung quân và lòng trung thành tuyệt đối với đất nước.
                    Đổng Kim Lân là một vị quan võ trung thành của nước Tề trong vở tuồng cổ “Sơn Hậu”. Mang chức Ngự Mã Hầu, ông là một trong những nhân vật giữ vai trò quan trọng nhất trong hành trình bảo vệ hoàng tộc và phục hưng cơ nghiệp nhà Tề trước âm mưu tiếm quyền của gian thần Tạ Thiên Lăng.
                    Xuyên suốt tác phẩm, Đổng Kim Lân luôn xuất hiện với hình tượng của một vị tướng trung quân, tận tụy vì đất nước và sẵn sàng hy sinh vì đại nghĩa. Cùng với Khương Linh Tá, ông trở thành lực lượng nòng cốt bảo vệ hoàng tử nhà Tề, vượt qua nhiều hiểm nguy để khôi phục chính thống triều đình.
                    Không chỉ là một võ tướng tài ba, Đổng Kim Lân còn đại diện cho lý tưởng trung quân ái quốc được đề cao trong nghệ thuật Tuồng truyền thống. Sự kiên định, lòng trung thành và tinh thần trách nhiệm của nhân vật đã góp phần làm nên sức sống lâu bền của hình tượng này trên sân khấu.
                    Thông qua những biến cố chính trị, chiến trận và thử thách sinh tử, vở diễn đã khắc họa sâu sắc cuộc đấu tranh giữa chính nghĩa và gian tà, đồng thời đề cao những giá trị đạo đức truyền thống như trung quân, tiết nghĩa và lòng yêu nước.`,
                    img1: "/images/stage/detail_a_19.jpg",
                    source1: "Nhân vật Đổng Kim Lân do Diễn viên: NSƯT Linh Hiền đóng. Nguồn ảnh: Cultura Fish",
                    heading2: "Mô hình nhân vật “Kép đỏ” trong nghệ thuật Tuồng",
                    text2: `Vai Kép là hệ thống nhân vật nam chính diện, thường sở hữu ngoại hình khôi ngô, phẩm chất cao đẹp và đóng vai trò trung tâm trong câu chuyện. Đây là hình mẫu lý tưởng của người quân tử trong tư tưởng phương Đông với các phẩm chất như trung nghĩa, chính trực và trọng danh dự.

                    Trong đó, Kép đỏ là nhánh nhân vật đặc thù của vai Kép. Điểm nhận diện nổi bật nhất là khuôn mặt được hóa trang với sắc đỏ tươi hoặc đỏ hồng, tượng trưng cho lòng trung nghĩa, sự cương trực và khí phách anh hùng. Những nhân vật thuộc mô hình Kép đỏ thường là các trung thần, danh tướng hoặc những người sẵn sàng hy sinh vì đất nước và chính nghĩa.
                    Đổng Kim Lân được xem là hình tượng tiêu biểu của Kép đỏ bởi nhân vật hội tụ đầy đủ những phẩm chất của một người anh hùng chính diện: trung thành, dũng cảm, tài năng và kiên định trước mọi thử thách.`,
                    img2: "/images/stage/detail_a_20.jpg",
                    source2: "Nhân vật Đổng Kim Lân do Diễn viên: NSƯT Linh Hiền đóng. Nguồn ảnh: Cultura Fish",
                      text3: `Trên sân khấu Tuồng, Đổng Kim Lân được nhận diện thông qua lối hóa trang đặc trưng của mô hình Kép đỏ. Khuôn mặt nhân vật được tô nền đỏ tươi, kết hợp với đôi lông mày xếch thể hiện sự cương trực, mạnh mẽ và tinh thần chính nghĩa. Ở giai đoạn đầu của câu chuyện, Đổng Kim Lân xuất hiện với hình tượng một vị võ tướng trẻ tuổi, đầu đội kim khôi, mặc áo long chấn và sử dụng trường thương làm vũ khí. Đến phần cuối của tác phẩm, khi nhân vật bước vào tuổi trung niên, nghệ sĩ sẽ bổ sung bộ râu năm chòm dài màu đen để thể hiện sự trưởng thành và từng trải theo diễn biến thời gian của câu chuyện.
                    Sự thay đổi trong tạo hình giúp Đổng Kim Lân trở thành một trong số ít nhân vật Tuồng thể hiện được quá trình phát triển của một con người từ tuổi trẻ đến tuổi trung niên trên sân khấu truyền thống.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_21.jpg",
                    links: [
                        {
                            url: "https://vt.tiktok.com/ZSQhTNa1P/",
                            text: "Giải mã mô hình nhân vật Kép Đỏ trong Tuồng - Nhân vật Đổng Kim Lân",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Đổng Kim Lân là hình tượng tiêu biểu của mô hình nhân vật Kép đỏ trong nghệ thuật Tuồng Việt Nam. Với lòng trung nghĩa, khí phách anh hùng và tinh thần tận trung với đất nước, nhân vật đã trở thành biểu tượng cho lý tưởng người quân tử trong sân khấu truyền thống.",
                }
            },
            {
                imgId: "stage_8",
                name: "Hề gậy",
                thumb: "/images/stage/thumb_8.jpg",
                article: {
                    title: "Hề Gậy - Nhân vật hề trong Hề Chèo",
                    subtitle: "Chèo là loại hình nghệ thuật sân khấu dân gian của người Việt, gắn liền với cuộc sống đời thường bình dị của người nông dân. Trải qua nhiều thế kỷ, Chèo đã xây dựng được hệ thống nhân vật phong phú như đào, kép, lão, mụ và đặc biệt là các vai hề - những nhân vật mang lại tiếng cười nhưng đồng thời cũng gửi gắm nhiều thông điệp xã hội sâu sắc. ",
                    heading1: "Hề Gậy là ai? ",
                    text1: `Hề Gậy, còn được gọi là “hề theo thầy”, là một dạng nhân vật hề áo ngắn tiêu biểu trong nghệ thuật Chèo truyền thống Việt Nam. Nhân vật này thường xuất hiện với vai trò người hầu, người theo hầu các thầy đồ, quan lại hoặc những nhân vật có địa vị trong xã hội. Với dáng vẻ nhanh nhẹn, lanh lợi và luôn mang theo một cây gậy bên mình, Hề Gậy đã trở thành một hình tượng quen thuộc trên sân khấu chèo dân gian. 
                    Điểm nhận diện nổi bật nhất của Hề Gậy chính là cây gậy đặc trưng. Bên cạnh đó, Hề Gậy thường xuất hiện như một người hầu cận nhưng lại sở hữu sự thông minh, nhanh trí và khả năng đối đáp sắc sảo. Thông qua những câu nói hóm hỉnh, những màn tung hứng duyên dáng với nhân vật chính, Hề Gậy tạo nên tiếng cười sảng khoái cho khán giả. Tuy nhiên, tiếng cười ấy không đơn thuần mang tính giải trí mà còn chứa đựng giá trị trào lộng, châm biếm và phản biện xã hội sâu sắc. Nhân vật thường khéo léo phơi bày những thói hư tật xấu, sự háo danh, ngu dốt hoặc những bất công trong xã hội đương thời: “Phi hề bất thành Chèo, hề không thiện không ác, hề nói lên tiếng lòng của nhân dân”. Đây là nhân vật quyền lực cũng là nhân vật duy nhất không bị chi phối bởi cốt truyện, không theo khuôn maauc hóa trang cung cách các nhân vật trong chèo cổ và có sự  biến hóa linh hoạt thoải mái đùa giỡn trêu chọc.`,
                    img1: "/images/stage/detail_a_22.jpg",
                    source1: "Nghệ sĩ Ưu tú Xuân Hinh trong vai hề gậy theo thầy. Ảnh: THU HUYỀN",
                    heading2: "Tại sao nhân vật Hề Chèo ra đời?",
                    text2: `Bản chất của loại hình Chèo là để phản ánh xã hội đương thời. Trong hệ thống nhân vật của Chèo, các vai hề giữ một vị trí đặc biệt bởi đây là những nhân vật đại diện cho tiếng nói của người dân lao động, sử dụng tiếng cười để phê phán những thói hư tật xấu, sự bất công và những mặt trái của xã hội phong kiến.
                    Thực chất khởi nguồn của Hề Chèo xuất phát từ những người làm trò trong cung đình. Nếu ở Trung Quốc, chúng ta có những con hát ban hí ở thời nhà Đường, ở Phương Tây thì chúng ta còn có những cái đuôi, ở nước Việt thì chúng ta có những con hát chuyên bôi mặt nhọ để làm hề. `,
                    img2: "/images/stage/detail_a_23.jpg",
                    source2: "Nghệ sĩ Ưu tú Xuân Hinh trong vai hề gậy theo thầy. Ảnh: Viện Âm Nhạc",
                      text3: `Điều làm nên giá trị của Hề Chèo không nằm ở việc tạo tiếng cười đơn thuần. Đây thường là nhân vật có cái nhìn sắc sảo nhất về xã hội, là người chứng kiến và thấu hiểu những góc khuất mà các nhân vật khác không nhận ra hoặc không dám nói đến. Thông qua những câu nói tưởng chừng bông đùa, các vai hề đã khéo léo bóc tách những nghịch lý của cuộc sống, phản ánh tâm tư, nguyện vọng và khát vọng công bằng của người dân.
                    Nhân vật được xây dựng dựa trên sự kết hợp giữa diễn xuất, lời ca, ngôn ngữ dân gian và khả năng ứng tác linh hoạt của nghệ sĩ. Tiếng cười mà Hề Gậy mang lại có lúc vui vẻ, sảng khoái nhưng cũng có lúc sâu cay, châm biếm, khiến người xem vừa cười vừa suy ngẫm. Để thể hiện thành công vai Hề Gậy, nghệ sĩ không chỉ cần có năng khiếu hài hước mà còn phải sở hữu khả năng ca hát, diễn xuất, ứng biến và vốn hiểu biết sâu rộng về văn hóa dân gian. Lịch sử Chèo ghi dấu nhiều nghệ sĩ xuất sắc trong vai Hề Gậy như: Nghệ sĩ nhân dân Tư Liên, Nghệ sĩ nhân dân Mạnh Tuấn, Nghệ sĩ ưu tú Xuân Hinh…..`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_24.jpg",
                    links: [
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7506491740279360776?is_from_webapp=1&sender_device=pc&web_id=7642196113047733780",
                            text: "Giải mã mô hình Hề Gậy",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7517956506579471623?is_from_webapp=1&sender_device=pc&web_id=7642196113047733780",
                            text: "Giải mã kịch bản Chèo Xúy Vân P3: Oneshot đoạn chọc ngoáy thơ Trần Phương của Hề gậy theo tài liệu kịch bản quý của Nhà hát Chèo Việt Nam ",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Chính vì vậy, Hề Chèo không phải chính diện cũng không phải phản diện mà là một nhân vật đại diện cho chúng ta để nhìn khái quát và kể câu chuyện của riêng Chèo. Sự xuất hiện của nhân vật hề không chỉ góp phần tạo nên sức hấp dẫn cho vở diễn mà còn giúp nghệ thuật Chèo truyền tải những thông điệp xã hội sâu sắc thông qua tiếng cười dân gian giàu tính nhân văn.",
                }
            },
            {
                imgId: "stage_9",
                name: "Hề Khoèo",
                thumb: "/images/stage/thumb_9.jpg",
                article: {
                    title: "Hề Khoèo - Nhân vật hề trong Hề Chèo",
                    subtitle: "Hề Chèo là một trong những hệ thống nhân vật đặc sắc của nghệ thuật Chèo truyền thống, góp phần tạo nên tiếng cười và truyền tải những thông điệp xã hội sâu sắc. Nếu Hề Gậy trong nghệ thuật Chèo là hình tượng người theo hầu thông minh, lanh lợi, dùng tiếng cười để phản ánh những nghịch lý trong xã hội, thì Hề Khoèo lại đại diện cho lớp người lao động nghèo khổ, thấp bé nhưng giàu trí tuệ và luôn đứng về phía lẽ phải.  ",
                    heading1: "Hề Khoèo là ai? ",
                    text1: "Hề Khoèo là một dạng nhân vật hề áo ngắn tiêu biểu trong nghệ thuật Chèo truyền thống. Tên gọi của nhân vật bắt nguồn từ đặc điểm ngoại hình nổi bật là đôi chân cong, bước đi khập khiễng hoặc có phần dị dạng. Dáng vẻ được xây dựng từ hình ảnh những người dân nghèo, người khuyết tật hoặc tầng lớp thấp bé trong xã hội phong kiến.",
                    img1: "/images/stage/detail_a_25.jpg",
                    source1: "Nghệ sĩ Tuấn Kha trong vai Hề Khoèo. Ảnh: Hành trình di sản - XCVN",
                    heading2: "Điểm nhấn của nhân vật",
                    text2: `Trong nghệ thuật Chèo, Hề Khoèo là một trong những nhân vật thể hiện rõ nét khả năng cách điệu và biểu hiện hình thể của sân khấu truyền thống. Dù Chèo chỉ dựa trên năm hệ thống động tác cơ bản, nhưng khi chuyển hóa vào vai Hề Khoèo, các thế tay, thế chân và điệu bộ diễn xuất trở nên vô cùng phong phú, phức tạp nhằm khắc họa một con người có ngoại hình dị dạng, lập dị nhưng giàu cá tính. `,
                    img2: "/images/stage/detail_a_26.jpg",
                    source2: "Nghệ sĩ Tuấn Kha trong vai Hề Khoèo. Ảnh: Hành trình di sản - XCVN",
                      text3: `Những động tác đặc trưng như dáng đi khập khiễng, bước chân lệch nhịp hay các cử chỉ cường điệu không chỉ tạo nên tiếng cười mà còn góp phần bộc lộ tâm lí nhân vật. Chẳng hạn, động tác vỗ ngực thường được sử dụng để thể hiện sự tức giận, hờn ghen hoặc những cảm xúc bị dồn nén bên trong. Thông qua ngôn ngữ hình thể giàu tính biểu cảm, Hề Khoèo hiện lên vừa hài hước vừa mang chiều sâu nội tâm.

                    Điểm đặc sắc của nhân vật nằm ở sự đối lập giữa hình thức và bản chất. Mang dáng vẻ khiếm khuyết, đôi khi bị xã hội xem thường, Hề Khoèo lại là người dám lên tiếng đả kích những kẻ quyền thế, gian manh và phê phán các hủ tục lạc hậu trong đời sống. Tiếng cười mà nhân vật tạo ra không đơn thuần để mua vui mà còn là phương tiện phản biện xã hội sắc bén, phản ánh khát vọng công bằng của người dân.

                    Bởi vậy, đằng sau vẻ ngoài tươi cười và những màn diễn hài hước, Hề Khoèo còn chất chứa nhiều nỗi cay đắng, oán hận trước những bất công của cuộc sống.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_27.jpg",
                    links: [
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7515434827240279297?is_from_webapp=1&sender_device=pc&web_id=7648890569712125460",
                            text: "Giải mã mô hình nhân vật Hề Khoèo trong Chèo",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7517637099399417108?is_from_webapp=1&sender_device=pc&web_id=7648890569712125460",
                            text: "Giải mã kịch bản Chèo Xúy Vân P2: Oneshot đoạn “Tế tơ hồng” của Hề gậy và Hề Khoèo theo tài liệu kịch bản quý của Nhà hát Chèo Việt Nam",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Hề Khoèo là một trong những hình tượng hề đặc sắc của nghệ thuật Chèo truyền thống Việt Nam. Dù mang dáng vẻ của một người dân nghèo với đôi chân khoèo đặc trưng, nhân vật lại đại diện cho trí tuệ dân gian, tinh thần lạc quan và khát vọng công lý của người lao động. Trải qua nhiều thế hệ, hình tượng Hề Khoèo vẫn giữ được sức sống trong nghệ thuật Chèo nhờ giá trị nhân văn và tính phản biện xã hội sâu sắc. ",
                }
            },
            {
                imgId: "stage_10",
                name: "Khương Linh Tá",
                thumb: "/images/stage/thumb_10.jpg",
                article: {
                    title: "Nhân vật Kép Xanh trong Tuồng: Nhân vật Khương Linh Tá trong vở tuồng cổ “Sơn Hậu”",
                    subtitle: "Kép xanh là một nhánh đặc biệt của mô hình nhân vật Kép trong nghệ thuật Tuồng truyền thống. Nếu Kép đỏ thường đại diện cho những vị tướng anh hùng mang khí chất uy nghi, chính trực thì Kép xanh lại gắn với những nhân vật xuất thân dân dã, chân chất, giàu nghĩa khí và sẵn sàng hy sinh vì đại nghĩa. Hình tượng Khương Linh Tá trong vở tuồng cổ “Sơn Hậu” là đại diện tiêu biểu nhất cho kiểu nhân vật này",
                    heading1: "Khương Linh Tá là ai? ",
                    text1: `Khương Linh Tá là một võ tướng trung thành của nước Tề trong vở tuồng kinh điển “Sơn Hậu”. Ông là người đồng hành thân thiết với Đổng Kim Lân trong hành trình bảo vệ hoàng tử và phục hưng cơ nghiệp nhà Tề trước âm mưu tiếm quyền của phe phản nghịch. Khác với hình tượng Đổng Kim Lân mang vẻ uy nghi của một vị quan võ triều đình, Khương Linh Tá được xây dựng với dáng vẻ gần gũi, chất phác và đậm chất dân gian. Tuy nhiên, ẩn sau vẻ ngoài mộc mạc ấy là lòng trung quân tuyệt đối và tinh thần quả cảm hiếm có.
                    Dấu ấn nổi bật nhất của nhân vật nằm ở trường đoạn bảo vệ Đổng Kim Lân chạy thoát khỏi vòng vây của quân Tạ. Trong cuộc chiến sinh tử với Tạ Ôn Đình, Khương Linh Tá bị chém đầu nhưng vẫn cố gắng chống đỡ để ngăn bước quân địch. Sau khi hy sinh, linh hồn ông tiếp tục hóa thành ngọn đèn soi đường cho Đổng Kim Lân vượt qua rừng sâu. Chi tiết này đã trở thành một trong những lớp diễn nổi tiếng và xúc động nhất của nghệ thuật Tuồng Việt Nam.`,
                    img1: "/images/stage/detail_a_28.jpg",
                    source1: "Nhân vật Khương Linh Tá do Diễn viên: Nghệ sĩ Bảo Châu đóng vai. Nguồn ảnh: Cultura Fish",
                    heading2: "Đặc điểm mô hình nhân vật Kép - Kép Xanh trong Tuồng",
                    text2: `"Kép" là thuật ngữ dùng để chỉ các nhân vật nam trên sân khấu Tuồng, thường ở độ tuổi thanh niên hoặc trung niên. Đây là kiểu nhân vật có ngoại hình khôi ngô, giữ vai trò quan trọng trong diễn biến câu chuyện và thường đại diện cho những phẩm chất tốt đẹp như trung nghĩa, dũng cảm và chính trực.
                    Trong đó, Kép xanh là một nhánh đặc biệt của mô hình nhân vật Kép, còn được gọi là Kép núi hoặc Kép rừng. Những nhân vật thuộc mô hình này thường mang dáng vẻ dân dã, mộc mạc, xuất thân gần gũi với đời sống bình dân nhưng lại sở hữu lòng trung thành, nghĩa khí và tinh thần hy sinh cao cả. Điểm nhận diện nổi bật nhất của Kép xanh là khuôn mặt được hóa trang với màu xanh hoặc xanh xám cùng đôi mắt, hàng mày được vẽ xếch tạo nên vẻ mạnh mẽ, cương trực.
                    Khương Linh Tá là một trong những đại diện tiêu biểu nhất của mô hình Kép xanh trong nghệ thuật Tuồng. Trong vở tuồng cổ “Sơn Hậu”, ông là võ tướng trung thành của nước Tề, luôn song hành cùng Đổng Kim Lân trong hành trình bảo vệ hoàng tử và phục hưng cơ nghiệp triều đình. Hai nhân vật được xây dựng như một cặp hình tượng đối ứng đặc sắc của sân khấu Tuồng truyền thống.
                    Nếu Đổng Kim Lân thuộc mô hình Kép đỏ với khuôn mặt đỏ tượng trưng cho khí phách anh hùng, sự chính trực và phong thái của một võ tướng triều đình, thì Khương Linh Tá lại mang gương mặt xanh cùng những đường nét hóa trang mang hơi hướng dân dã, sơn cước. Một người đại diện cho vẻ uy nghi, chuẩn mực của võ tướng chính thống, người còn lại thể hiện sự chất phác, gần gũi nhưng không kém phần trung nghĩa. Sự kết hợp giữa một mặt đỏ và một mặt xanh đã tạo nên cặp trung thần nổi tiếng bậc nhất của nghệ thuật Tuồng Việt Nam.`,
                    img2: "/images/stage/detail_a_29.jpg",
                    source2: "Nguồn ảnh: Cultura Fish",
                      text3: `Dù kịch bản “Sơn Hậu” không cung cấp nhiều thông tin về xuất thân của Khương Linh Tá, màu xanh trên khuôn mặt nhân vật vẫn mang nhiều tầng ý nghĩa biểu tượng. Ngoài việc thể hiện vẻ mộc mạc, chân chất, màu sắc này còn thường được liên hệ với số phận bi tráng của nhân vật. Bởi lẽ Khương Linh Tá hy sinh từ phần giữa của câu chuyện khi đang bảo vệ Đổng Kim Lân và hoàng tử nhà Tề, khiến hình tượng ông trở thành biểu tượng cho lòng trung nghĩa và sự hy sinh quên mình vì đại cuộc.

                    Trên sân khấu Tuồng, Khương Linh Tá được hóa trang theo mô hình Kép xanh với toàn bộ khuôn mặt phủ màu xanh hoặc xanh xám. Đôi lông mày được vẽ xếch, hai khoang mắt cách điệu đối xứng và kéo nhọn xuống gần sống mũi tạo nên vẻ mạnh mẽ, cương nghị. Nhân vật thường xuất hiện trong phục trang võ tướng với áo long chấn, đầu đội kim khôi và sử dụng trường thương làm vũ khí. Xét về phục trang và chức vị, Khương Linh Tá có nhiều điểm tương đồng với Đổng Kim Lân. Tuy nhiên, nếu Đổng Kim Lân được nhận diện bằng sắc đỏ tượng trưng cho khí phách anh hùng thì Khương Linh Tá lại nổi bật bởi màu xanh đặc trưng, tạo thành cặp hình tượng đối ứng nổi tiếng trên sân khấu Tuồng.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_30.jpg",
                    links: [
                        {
                            url: "https://youtu.be/BcqzYSN3MoM?si=_3m50zA3MmtIZZdQ",
                            text: "Trích đoạn hát bội: Tạ Ôn Đình chém đầu Khương Linh Tá",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Youtube HÀ TRÍ NHƠN",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Khương Linh Tá là hình tượng tiêu biểu của mô hình nhân vật Kép xanh trong nghệ thuật Tuồng Việt Nam. Với lòng trung quân son sắt, tinh thần hy sinh quên mình và hình ảnh ngọn đèn soi đường sau khi đã ngã xuống, nhân vật đã trở thành một trong những biểu tượng giàu cảm xúc nhất của vở tuồng “Sơn Hậu”.",
                }
            },
            {
                imgId: "stage_11",
                name: "Lão: Phàn Định Công",
                thumb: "/images/stage/thumb_11.jpg",
                article: {
                    title: "Mô hình nhân vật “Lão” trong tuồng: Nhân vật Phàn Định Công trong vở tuồng “Sơn Hậu”",
                    subtitle: "Trong hệ thống nhân vật của nghệ thuật Tuồng truyền thống, vai Lão là hình tượng đại diện cho những người đàn ông cao tuổi, giàu kinh nghiệm và có vị trí quan trọng trong xã hội. Một trong những nhân vật tiêu biểu cho mô hình này là Phàn Định Công - Lão hóa trong vở tuồng cổ “Sơn Hậu” – vị lão tướng trung quân, chính trực và hết lòng vì xã tắc. ",
                    heading1: "Phàn Định Công là ai? ",
                    text1: `Phàn Định Công là nhân vật thuộc tuyến chính diện trong vở tuồng “Sơn Hậu”, một trong những tác phẩm kinh điển của nghệ thuật Tuồng Việt Nam. Ông là thân phụ của Phàn Phụng Cơ và Phàn Diệm, đồng thời là vị đại thần trung thành tuyệt đối với triều đình nước Tề. 
                    Trong tác phẩm, khi gian thần Tạ Thiên Lăng thực hiện âm mưu tiếm quyền và phản loạn, Phàn Định Công đã kiên quyết từ chối sự chiêu dụ của phe phản nghịch. Thể hiện lòng trung quân son sắt, ông chém sứ giả tế cờ, phát động binh mã từ thành Sơn Hậu về kinh đô để phò vua diệt loạn.
                    Tuy nhiên, trên đường hành quân, do tuổi cao sức yếu lại quá lo lắng cho vận mệnh triều đình, Phàn Định Công lâm bệnh và qua đời giữa đường. Cái chết của ông trở thành biểu tượng cho tinh thần trung nghĩa, lòng tận trung tận lực với đất nước và triều đình trong nghệ thuật Tuồng truyền thống.`,
                    img1: "/images/stage/detail_a_31.jpg",
                    source1: "Nhân vật Phàn Định Công do diễn viên: Nghệ sĩ Đông Hồ. Nguồn: Cultura Fish",
                    heading2: "Mô hình nhân vật  “Lão”  trong Tuồng",
                    text2: `Nghệ thuật Tuồng, vai Lão là hệ thống nhân vật đại diện cho những người đàn ông cao tuổi như trung thần, quan lại, tướng lĩnh hoặc những bậc trưởng bối trong gia đình và xã hội.
                    Vai Lão thường được chia thành hai nhóm chính. Một bên là những nhân vật trung trực, chính nghĩa, đại diện cho đạo đức và lòng trung thành; bên còn lại là các nhân vật gian thần, nịnh thần với tính cách xảo quyệt và tham vọng quyền lực. Sự đối lập này giúp người xem dễ dàng nhận diện chính - tà, thiện - ác trong tư tưởng nghệ thuật Tuồng.
                    Phàn Định Công là nhân vật tiêu biểu vừa cho mô hình “lão võ” vừa cho mô hình “lão lõa”. Thuộc tính “võ” ở đây nhằm khắc họa vị lão tướng giữ vai trò trấn thủ vùng đất San Hậu hiểm yếu. Còn “lõa” ở đây là một đặc điểm trong hóa trang nhân vật.  `,
                    img2: "/images/stage/detail_a_32.jpg",
                    source2: "Nhân vật Phàn Định Công do diễn viên: Nghệ sĩ Đông Hồ. Nguồn: Cultura Fish",
                      text3: `Trên sân khấu Tuồng, Phàn Định Công được nhận diện thông qua lối hóa trang đặc trưng của một vị lão tướng trung thần.
                    Nhân vật thường xuất hiện với khuôn mặt đỏ tượng trưng cho lòng trung nghĩa, hai khoang mắt được vẽ nổi bật nhằm tăng tính biểu cảm, kết hợp với bộ râu dài màu bạc thể hiện tuổi tác và uy nghi của bậc trưởng lão. Trang phục mang phong cách võ tướng với mũ mão và giáp phục trang trọng, phù hợp với địa vị của một vị đại thần cầm quân.
                    Bên cạnh tạo hình, nhân vật còn được khắc họa thông qua phong thái cương nghị, lời nói dứt khoát và hành động quyết đoán. Dù tuổi cao, Phàn Định Công vẫn sẵn sàng cầm quân đánh giặc, thể hiện khí phách của một trung thần đặt vận mệnh quốc gia lên trên lợi ích cá nhân.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_33.jpg",
                    links: [
                        {
                            url: "https://www.tiktok.com/@nghethuathatboi/video/7479415368763624711?is_from_webapp=1&sender_device=pc",
                            text: "Nhân vật Phàn Định Công",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh tiktok @nghethuathatboi",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Phàn Định Công là một trong những hình tượng tiêu biểu của mô hình nhân vật “Lão” trong nghệ thuật Tuồng Việt Nam. Với khí phách cương trực, lòng trung quân son sắt và tinh thần sẵn sàng hy sinh vì đại nghĩa, nhân vật đã trở thành biểu tượng cho phẩm chất trung nghĩa của người quân tử trong sân khấu truyền thống. ",
                }
            },
             {
                imgId: "stage_12",
                name: "Liền Chị",
                thumb: "/images/stage/thumb_12.jpg",
                article: {
                    title: "LIỀN CHỊ TRONG DÂN CA QUAN HỌ BẮC NINH",
                    subtitle: " Trong kho tàng Dân ca Quan họ Bắc Ninh, Liền chị là hình tượng gắn liền với vẻ đẹp duyên dáng, thanh lịch và đằm thắm của người phụ nữ Kinh Bắc. Không chỉ là người thực hành và lưu truyền các làn điệu Quan họ, Liền chị còn là đại diện cho nét đẹp văn hóa ứng xử, tinh thần giao duyên và tình người trong đời sống cộng đồng của vùng đất Bắc Ninh.",
                    heading1: "Liền chị là ai? ",
                    text1: `Dân ca Quan họ có nguồn gốc từ hình thức hát giao duyên của cư dân vùng Kinh Bắc. Ban đầu, đây là những cuộc hát đối đáp giữa nam và nữ trong các dịp lễ hội mùa xuân, hội làng hoặc các hoạt động tín ngưỡng cộng đồng. Trải qua thời gian, hình thức hát đơn lẻ phát triển thành các nhóm hát, cặp hát với hệ thống làn điệu và quy tắc riêng.
                    Điểm đặc biệt của Quan họ cổ là không hướng đến biểu diễn trước khán giả như sân khấu hiện đại. Người hát đồng thời cũng là người thưởng thức, cùng chia sẻ và cảm nhận cái hay, cái đẹp trong lời ca tiếng hát. Chính vì vậy, Quan họ không chỉ là nghệ thuật trình diễn mà còn là một hình thức giao lưu văn hóa, kết nối tình cảm giữa con người với con người.
                    Năm 2009, Dân ca Quan họ Bắc Ninh đã được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại

                    Liền chị là cách gọi dành cho các nữ nghệ nhân hoặc người tham gia hát Quan họ trong các canh hát truyền thống. Chữ “Liền” được hiểu là những người có mối quan hệ gắn bó, cùng chung niềm đam mê và tham gia một hoạt động văn hóa cộng đồng. Trong các canh hát Quan họ, Liền chị thường hát đối đáp cùng Liền anh theo những quy tắc chặt chẽ về làn điệu, lời ca và cách ứng xử. Mỗi câu hát không chỉ thể hiện tài năng nghệ thuật mà còn phản ánh sự tinh tế, khéo léo và nét đẹp trong giao tiếp của người Quan họ. `,
                    img1: "/images/stage/detail_a_34.jpg",
                    source1: "Nguồn: Báo Lao động",
                    heading2: "Linh hồn của trang phục",
                    text2: "Nhắc đến Liền chị Quan họ, không thể không nhắc đến bộ trang phục truyền thống mang đậm bản sắc văn hóa Kinh Bắc. Trang phục thường gồm áo mớ ba hoặc mớ bảy, được tạo nên từ nhiều lớp áo lồng vào nhau như yếm lụa, áo cánh và áo tứ thân. Trong đó, áo tứ thân được xem là biểu tượng tiêu biểu của người phụ nữ vùng đồng bằng Bắc Bộ. Nhiều nghiên cứu cho rằng loại trang phục này đã xuất hiện từ thời Lý – Trần và trở thành một phần quan trọng trong đời sống văn hóa của người Việt.",
                    img2: "/images/stage/detail_a_35.jpg",
                    source2: "Trang phục liền chị. Nguồn ảnh: Nhà hát Dân ca Quan họ Bắc Ninh",
                      text3:"Bên cạnh trang phục chính, Liền chị còn sử dụng nhiều phụ kiện truyền thống như khăn mỏ quạ, nón ba tầm và bộ xà tích. Đặc biệt, khăn mỏ quạ với phần chóp nhọn phía trước được xem là điểm nhấn tạo nên vẻ duyên dáng, nền nã của người phụ nữ Quan họ. Thông qua trang phục, người xem không chỉ cảm nhận được nét đẹp của Liền chị mà còn hiểu thêm về phong cách ăn mặc và thẩm mỹ của người Việt xưa.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_36.jpg",
                    links: [
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7522821484453170450?is_from_webapp=1&sender_device=pc",
                            text: "Giải mã Trang phục Liền chị Quan họ cổ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Liền chị là hình tượng tiêu biểu của Dân ca Quan họ Bắc Ninh và là biểu tượng cho vẻ đẹp văn hóa của người phụ nữ Kinh Bắc. Thông qua tiếng hát giao duyên và những giá trị ứng xử truyền thống, Liền chị không chỉ góp phần gìn giữ di sản Quan họ mà còn lan tỏa những giá trị nhân văn tốt đẹp của văn hóa Việt Nam. Trải qua nhiều thế kỷ, hình ảnh Liền chị vẫn giữ nguyên sức sống trong đời sống cộng đồng, trở thành một phần không thể thiếu của bản sắc văn hóa Kinh Bắc. ",
                }
            },
             {
                imgId: "stage_13",
                name: "Liền Anh",
                thumb: "/images/stage/thumb_13.jpg",
                article: {
                    title: "LIỀN ANH TRONG DÂN CA QUAN HỌ BẮC NINH",
                    subtitle: " Liền anh là hình tượng đại diện cho vẻ đẹp thanh lịch, nhã nhặn và phong thái hào hoa của người đàn ông Kinh Bắc trong Dân ca Quan họ. Không chỉ là người thực hành và lưu truyền các làn điệu Quan họ, Liền anh còn góp phần thể hiện những giá trị văn hóa ứng xử, tình bằng hữu và tinh thần giao duyên đặc sắc của vùng đất Bắc Ninh. ",
                    heading1: "Liền anh là ai? ",
                    text1: `Dân ca Quan họ có nguồn gốc từ hình thức hát giao duyên của cư dân vùng Kinh Bắc. Ban đầu, đây là những cuộc hát đối đáp giữa nam và nữ trong các dịp lễ hội mùa xuân, hội làng hoặc các hoạt động tín ngưỡng cộng đồng. Trải qua thời gian, hình thức hát đơn lẻ phát triển thành các nhóm hát, cặp hát với hệ thống làn điệu và quy tắc riêng. Điểm đặc biệt của Quan họ cổ là không hướng đến biểu diễn trước khán giả như sân khấu hiện đại. Người hát đồng thời cũng là người thưởng thức, cùng chia sẻ và cảm nhận cái hay, cái đẹp trong lời ca tiếng hát. Chính vì vậy, Quan họ không chỉ là nghệ thuật trình diễn mà còn là một hình thức giao lưu văn hóa, kết nối tình cảm giữa con người với con người. Năm 2009, Dân ca Quan họ Bắc Ninh đã được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại
                    Liền anh là cách gọi mà các bọn Quan họ nữ dành cho những người nam tham gia hát Quan họ. Tương tự như Liền chị, Liền anh không chỉ là người biểu diễn mà còn là chủ thể gìn giữ và trao truyền các làn điệu dân ca Quan họ qua nhiều thế hệ. Trong các canh hát truyền thống, Liền anh thường hát đối đáp cùng Liền chị theo những quy tắc chặt chẽ về lời ca, làn điệu và cách ứng xử. Thông qua tiếng hát và phong thái giao tiếp, hình tượng Liền anh thể hiện sự lịch thiệp, chân thành và tinh tế.`,
                    img1: "/images/stage/detail_a_37.jpg",
                    source1: "Hình ảnh sưu tầm. Nguồn ảnh: VOV4",
                    heading2: "Linh hồn của trang phục",
                    text2: "Nhắc đến Liền anh Quan họ, không thể không nhắc tới bộ trang phục truyền thống mang đậm dấu ấn văn hóa Bắc Bộ. Điểm nổi bật nhất là chiếc khăn xếp được vấn công phu trên đầu. Theo quan niệm dân gian, khăn xếp thường được vấn theo hình chữ Nhân và xếp nhiều vòng tượng trưng cho những phẩm chất của người quân tử như Nhân, Nghĩa, Lễ, Trí, Tín. Chính chi tiết này đã góp phần tạo nên vẻ trang trọng, lịch lãm và đĩnh đạc của người Quan họ.",
                    img2: "/images/stage/detail_a_38.jpg",
                    source2: "Trang phục liền anh. Nguồn ảnh: Nhà hát Dân ca Quan họ Bắc Ninh",
                      text3:`Trang phục Liền anh thường gồm áo dài the màu đen hoặc xanh sẫm mặc ngoài, bên trong là áo gấm với các gam màu trang nhã như trắng hoặc vàng nhạt. Sự kết hợp hài hòa giữa chất liệu và màu sắc tạo nên vẻ thanh lịch, kín đáo nhưng vẫn sang trọng.
                    Bên cạnh đó, Liền anh còn sử dụng các phụ kiện truyền thống như ô lục soạn và giày da. Chiếc ô lục soạn làm từ vải lụa mỏng không chỉ có công dụng che nắng, che mưa mà còn trở thành điểm nhấn tạo nên phong thái tao nhã của người Quan họ.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_39.jpg",
                    links: [
                        {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7525027686964595976?is_from_webapp=1&sender_device=pc",
                            text: "Giải mã Trang phục Liền anh Quan họ cổ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Liền anh là hình tượng tiêu biểu của Dân ca Quan họ Bắc Ninh và là đại diện cho vẻ đẹp thanh lịch, hào hoa của người đàn ông Kinh Bắc. Thông qua tiếng hát giao duyên, trang phục truyền thống và phong cách ứng xử tinh tế, Liền anh đã góp phần gìn giữ và lan tỏa những giá trị văn hóa đặc sắc của Quan họ. Khi nhìn về trang phục quan họ không chỉ nhìn về thẩm mỹ, cốt cách của người quan họ mà ta có thể nhìn thấy hình ảnh của con người Bắc Bộ từ lời nói cho đến phong thái chỉnh tề. ",
                }
            },
             {
                imgId: "stage_14",
                name: "Nam tài tử đờn",
                thumb: "/images/stage/thumb_14.jpg",
                article: {
                    title: "NAM TÀI TỬ ĐỜN",
                    subtitle: "Trong không gian ấm cúng của buổi sinh hoạt Đờn ca Tài tử, người Nam tài tử đờn luôn hiện thân như một điểm tựa vững chãi, một linh hồn thầm lặng kiến tạo nên thế giới âm thanh. Không chỉ đơn thuần là người sử dụng nhạc cụ, họ là những bậc thầy gìn giữ phong thái cốt cách, dùng đôi tay tài hoa để dệt nên những cung tơ, nhịp phách, chở che và nâng đỡ cho tiếng ca của người tri kỷ hòa nhịp bay xa.",
                    heading1: "Cốt cách nghệ sĩ và thế giới nội tâm trầm mặc ",
                    text1: `Khác với những nhạc công biểu diễn trên sân khấu hào nhoáng, Nam tài tử đờn mang đậm phong thái của một "văn nhân" vùng sông nước: tự tại, thâm trầm và trọng nghĩa khinh tài. Họ tìm đến tiếng đờn không phải để mưu cầu danh lợi hay phô diễn bản thân trước đám đông, mà xem đó là phương tiện để đối thoại với chính mình và giao hòa với tri âm.
                    Hình ảnh người tài tử đờn ngồi xếp bằng trên chiếc chiếu bông, gương mặt bình thản nhưng đôi mắt sáng ngời theo từng chuyển động của ngón tay đã trở thành biểu trưng của nghệ thuật phương Nam. Họ có thể là một lão nông sau giờ ra đồng, một thầy giáo làng hay một công chức, nhưng khi ôm lấy cây đàn, họ lập tức hóa thân thành người giữ lửa di sản. Trong tâm thức của họ, nhạc cụ không vô tri mà là người bạn tri kỷ, chia sẻ mọi nỗi niềm từ thuở mang gươm đi mở cõi cho đến những thăng trầm của cuộc sống đời thường.`,
                    img1: "/images/stage/detail_a_40.jpg",
                    source1: "Nghệ nhân Trần Văn Đức (84 tuổi, ngụ P.Thường Thạnh, Q.Cái Răng, TP.Cần Thơ) gắn bó với đờn ca tài tử hơn 60 năm ",
                    heading2: "Nghệ thuật “chữ đờn” và vai trò thủ lĩnh giữ “vĩ” cho canh ca",
                    text2: `Trong cấu trúc của một ban tài tử, người đờn giữ vai trò then chốt, được ví như người cầm lái cho con thuyền âm nhạc. Sự điệu nghệ của Nam tài tử đờn nằm ở hai yếu tố cốt lõi: giữ "vĩ" (nhịp phách) và sáng tạo "chữ đờn".
                    - Bậc thầy của nhịp phách: Họ phải là người thuộc lòng "lòng bản" (giai điệu cốt lõi) của 20 bài bản tổ. Tuy nhiên, tài tử đờn không đánh máy móc theo khuôn mẫu. Họ giữ nhịp chắc như bàn thạch ở những nốt trụ (nhịp chính), nhưng ở khoảng giữa, họ có quyền tự do bay bổng, "vặn vẹo" giai điệu theo cảm xúc bộc phát mà không làm mất đi hồn cốt của bài bản.
                    - Kỹ thuật nhấn nhá tài hoa: Sử dụng các nhạc cụ truyền thống như đàn Kìm (quân tử cầm), đàn Tranh, đàn Cò, hay cây Guitar phím lõm hiện đại, người tài tử vận dụng nhuần nhuyễn các ngón đờn đặc trưng: nhấn, gảy, rung, mổ, vuốt, á... Tiếng đàn lúc nghe róc rách như nước chảy, lúc lại nức nở, nghẹn ngào như tiếng khóc thầm.
                    - Bệ phóng cho tài tử ca: Một người tài tử đờn giỏi là người biết "nhường sân". Họ tinh tế lắng nghe từng hơi thở, cao độ và sở trường của nữ tài tử ca để "nâng giọng", "đưa hơi". Khi người ca luyến láy hay ca lơi nhịp, tiếng đàn sẽ lướt nhẹ nương theo; khi người ca dừng lại lấy hơi, tiếng đàn lập tức điền vào khoảng trống bằng những câu vuốt ôm tài tình, tạo nên một sự liên kết vô hình nhưng khăng khít.`,
                    img2: "/images/stage/detail_a_41.jpg",
                    source2: "Khung cảnh sinh hoạt nghệ thuật truyền thống Đờn ca tài tử - nguồn:baodientuvov@vov.vn",
                
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_42.jpg",
                    links: [
                        {
                            url: "https://youtu.be/uB6ye79H9C0?si=1JJ6wr3-KG9J3-xz",
                            text: "Nét văn hoá đặc sắc sông nước Phương Nam",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://youtu.be/Ai0r-3gtDT0?si=mQ-gsI4Sjbl6JHS8",
                            text: "Giới thiệu Đờn Ca Tài Tử & Nhà hát Tây Đô",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: `- Nét văn hoá đặc sắc sông nước Phương Nam | Truyền Hình Nhân Dân ;  Giới thiệu Đờn Ca Tài Tử & Nhà hát Tây Đô | FES-Camp 4: Thang Âm Việt |FPT Student Experience Space `,
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Trải qua bao biến thiên của thời gian, tiếng đờn của người Nam tài tử vẫn vẹn nguyên giá trị như một dòng chảy văn hóa âm thầm mà mãnh liệt. Khép lại mỗi canh đờn, khi thanh âm của cung tơ cuối cùng lắng xuống, cái đọng lại trong lòng người nghe không chỉ là sự thán phục trước ngón đờn điêu luyện, mà là sự kính trọng dành cho những lãng tử phương Nam – những người đã dùng cả cuộc đời và tâm huyết để giữ gìn cốt cách thanh cao, làm nên cốt tủy cho hồn nhạc nước nhà. ",
                }
            },
            {
                imgId: "stage_15",
                name: "Trạng nguyên",
                thumb: "/images/stage/thumb_15.jpg",
                article: {
                    title: "Trạng nguyên trong Múa rối nước",
                    subtitle: "Bước ra từ mảng nước bạc của thủy đình, quân rối Trạng nguyên là biểu tượng cho tinh thần hiếu học và khát vọng vươn lên của người dân lao động chốn làng quê. Không chỉ là một nhân vật trong tích trò, Trạng nguyên trên mặt nước là sự kết tinh của nghệ thuật điêu khắc gỗ dân gian, bàn tay điều khiển tài hoa của nghệ nhân và niềm tự hào về truyền thống khoa bảng của dân tộc. ",
                    heading1: "Biểu tượng khoa bảng và tạo hình đậm chất dân gian ",
                    text1: `Trong kho tàng múa rối nước truyền thống, quân rối Trạng nguyên luôn mang một diện mạo đặc biệt trang trọng nhưng vẫn gần gũi với đời sống xóm làng. Con rối được đẽo gọt từ gỗ sung nhẹ, phủ nhiều lớp sơn son thếp vàng lộng lẫy để không bị thấm nước và nổi bật trên phông nền xanh thẫm của ao quê.
                    Khác với vẻ nghịch ngợm của chú Tễu, nhân vật Trạng nguyên được tạo hình với phong thái đĩnh đạc, nho nhã. Thân hình cân đối, khuôn mặt rạng rỡ, đầu đội mũ cánh chuồn, mình mặc áo bào thêu hoa văn tinh xảo. Từ ánh mắt sáng ngời cho đến nụ cười rạng rỡ trên môi quân rối đều toát lên niềm hân hoan của người đỗ đạt vinh hiển. Sự xuất hiện của Trạng nguyên trong tích trò "Vinh quy bái tổ" luôn mang đến không khí trang nghiêm nhưng đầy náo nức, tái hiện lại giấc mơ lớn nhất của mọi gia đình, dòng họ thời xưa ở vùng đồng bằng Bắc Bộ.`,
                    img1: "/images/stage/detail_a_43.jpg",
                    source1: "Hình ảnh sưu tầm - Nguồn ảnh: Redsvn",
                    heading2: "Nghệ thuật điều khiển dây sào và sức sống trên mặt nước",
                    text2: `"Sức hấp dẫn của nhân vật Trạng nguyên không chỉ dừng lại ở vẻ bề ngoài, mà nằm ở những chuyển động nhịp nhàng, sống động dưới sự điều khiển tài tình của các nghệ nhân phía sau màn bạt.
                    - Sự uyển chuyển của chuyển động: Trạng nguyên không có những động tác nhào lộn hay giật cục như các nhân vật thần thoại, võ tướng. Những bước đi của Trạng nguyên trên mặt nước phải từ tốn, đĩnh đạc. Khi cưỡi ngựa vinh quy, con rối phải thể hiện được nhịp nhấp nhô đều đặn, đầu hơi cúi chào chào bà con xóm làng đầy nho nhã.
                    - Sự phối hợp nhịp nhàng sau mành sào: Để quân rối di chuyển mượt mà trên mặt nước, các nghệ nhân phải sử dụng hệ thống sào, dây ngầm cực kỳ phức tạp. Họ phải tính toán lực cản của nước để mỗi cái gật đầu, mỗi cái khoanh tay bái tổ của Trạng nguyên diễn ra tự nhiên, khớp chặt chẽ với tiếng trống hội, tiếng đàn, tiếng nhị và lời ca reo hò của phường chèo bên cánh gà.
                    - Thông điệp nhân văn sâu sắc: Thông qua tích trò điều khiển rối, nhân vật Trạng nguyên truyền tải trọn vẹn đạo lý "Uống nước nhớ nguồn". Khi tiếng trống rước vang lên, Trạng nguyên vinh quy không đi thẳng vào phủ đường mà hướng về bái tạ tổ tiên, cha mẹ và thầy dạy học. Đó là bài giáo dục trực quan bằng nghệ thuật, nhắc nhở thế hệ sau về giá trị của con chữ và lòng biết ơn.`,
                    img2: "/images/stage/detail_a_44.jpg",
                    source2: "Hình ảnh sưu tầm - Nguồn ảnh: Noron",
                      
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_45.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=wKf7y-pSdJI",
                            text: "Trích đoạn hát bội: Tạ Ôn Đình chém đầu Khương Linh Tá",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                         {
                            url: "https://www.tiktok.com/@ngheroi.hn/photo/7484239144965786898?is_from_webapp=1&sender_device=pc",
                            text: "Các nhân vật trong múa rối ngước",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Tiktok Nghệ Rối",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Khi màn nước thủy đình khép lại, hình ảnh người Trạng nguyên áo mão cân đai, rạng rỡ cưỡi ngựa tre về làng vẫn in đậm trong tâm trí người xem như một biểu tượng đẹp đẽ của ước vọng. Qua bao thế kỷ, nhân vật ấy vẫn đứng đó trên mặt nước quê hương, không chỉ để kể lại câu chuyện khoa bảng ngày xưa, mà còn để khẳng định sức sống bền bỉ của một nền nghệ thuật dân gian độc nhất vô nhị, nơi những khúc gỗ vô tri được thổi hồn để tôn vinh trí tuệ và đạo lý của người Việt. ",
                }
            },
             {
                imgId: "stage_16",
                name: "Người kéo nhị",
                thumb: "/images/stage/thumb_16.jpg",
                article: {
                    title: "Người kéo nhị (hát Xẩm)",
                    subtitle: "Người kéo nhị là hình tượng nghệ nhân gắn liền với nghệ thuật Hát Xẩm, đại diện cho những người nghệ sĩ dân gian đã góp phần lưu truyền loại hình nghệ thuật này qua nhiều thế hệ. Hình tượng này xuất hiện từ khi hát xẩm phát triển trong đời sống dân gian Bắc Bộ, nơi các nghệ nhân thường rong ruổi khắp chợ quê, bến nước, sân đình để biểu diễn và mưu sinh bằng tiếng hát. Trong các chiếu xẩm truyền thống, đàn nhị là nhạc cụ quan trọng nhất, vì vậy người kéo nhị luôn giữ vị trí trung tâm trong việc tạo nên giai điệu và cảm xúc cho bài hát. ",
                    heading1: "Vì sao người kéo nhị xuất hiện trong Hát Xẩm?",
                    text1: "Sự xuất hiện của người kéo nhị bắt nguồn từ nhu cầu biểu diễn của các nghệ nhân xẩm trong đời sống dân gian. Hát Xẩm vốn là loại hình nghệ thuật kể chuyện bằng âm nhạc, phản ánh đời sống xã hội, truyền tải đạo lý và tâm tư của người dân lao động. Để lời hát trở nên cuốn hút và dễ đi vào lòng người, các nghệ nhân cần một nhạc cụ có khả năng diễn tả cảm xúc phong phú. Đàn nhị với âm thanh sâu lắng, da diết và linh hoạt đã đáp ứng được yêu cầu đó. Từ đây, người kéo nhị dần trở thành một thành phần không thể thiếu trong các chiếu xẩm, góp phần định hình phong cách âm nhạc và phương thức biểu diễn của loại hình nghệ thuật này qua nhiều thế kỷ.",
                    img1: "/images/stage/detail_a_46.jpg",
                    source1: "NSND Xuân Hoạch. Ảnh: Phan Anh/ Đình làng Việt",
                    heading2: "Người kéo nhị có vai trò gì? ",
                    text2: `Trong mỗi buổi diễn xẩm, người kéo nhị giữ vai trò dẫn dắt toàn bộ không gian âm nhạc. Tiếng đàn thường cất lên trước để giới thiệu làn điệu, tạo sự chú ý và chuẩn bị cảm xúc cho người nghe trước khi lời hát bắt đầu. Trong quá trình biểu diễn, người kéo nhị giúp giữ nhịp, kết nối các đoạn hát và hỗ trợ nghệ nhân thể hiện những cung bậc cảm xúc khác nhau như vui tươi, hài hước, châm biếm hay bi thương. Bên cạnh đó, họ còn có khả năng ứng tác để phù hợp với nội dung bài hát và phản ứng của khán giả. Chính sự kết hợp hài hòa giữa tiếng đàn và lời ca đã tạo nên sức hấp dẫn riêng của Hát Xẩm, giúp mỗi buổi diễn trở nên sinh động, giàu cảm xúc và mang đậm tính tương tác. Nhờ đó, những câu chuyện dân gian, lời răn dạy đạo đức và nét đẹp văn hóa truyền thống được truyền tải đến người nghe một cách gần gũi, tự nhiên, góp phần gìn giữ và lan tỏa giá trị của loại hình nghệ thuật dân gian đặc sắc này qua nhiều thế hệ. 
                    Người kéo nhị không chỉ là người biểu diễn mà còn là biểu tượng cho quá trình gìn giữ và trao truyền nghệ thuật Hát Xẩm qua nhiều thế hệ. Trong bối cảnh loại hình nghệ thuật này từng có giai đoạn mai một, các nghệ nhân chơi đàn nhị đã góp phần quan trọng trong việc bảo tồn những làn điệu cổ, kỹ thuật biểu diễn và phong cách âm nhạc truyền thống. Họ là cầu nối giữa quá khứ và hiện tại, giúp những giá trị văn hóa dân gian tiếp tục được duy trì trong đời sống đương đại. Hình ảnh người nghệ nhân với cây đàn nhị vì thế không chỉ đại diện cho một người chơi nhạc cụ mà còn tượng trưng cho tinh thần bền bỉ, niềm đam mê nghệ thuật và trách nhiệm bảo tồn di sản văn hóa dân tộc.`,
                    img2: "/images/stage/detail_a_47.jpg",
                    source2: "Nghệ nhân hát xẩm - Hà Thị Cầu (Nguồn ảnh: Internet)",
                      
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_48.jpg",
                    links: [
                        {
                            url: "https://youtu.be/cj3K_lv4Xf8?si=Qz9zAfaoE_PIpaBo",
                            text: " Hà Thị Cầu Hát Xẩm | Những Bài Hát Xẩm Hay Nhất 2017",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                         {
                            url: "https://www.tiktok.com/@nghenhanhathicau/video/7300445322466135304?is_from_webapp=1&sender_device=pc&web_id=7611761127513228807",
                            text: "Xẩm Thập Ân Kinh Điển - Hát Xẩm Hà Nội",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Nghệ nhân Hà Thị Cầu",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Không chỉ là người diễn tấu, người kéo nhị chính là biểu tượng cho tinh thần bền bỉ và trách nhiệm bảo tồn các làn điệu xẩm cổ cùng kỹ thuật diễn xướng truyền thống qua nhiều biến động lịch sử. Sự gắn bó của họ với cây đàn nhị dọc theo các bến nước, chợ quê đã trở thành cầu nối văn hóa quan trọng, giúp nuôi dưỡng mạch sống nội sinh và duy trì những giá trị nhân văn sâu sắc của nghệ thuật Hát Xẩm trong dòng chảy đời sống đương đại.  ",
                }
            },
             {
                imgId: "stage_17",
                name: "Người nông dân",
                thumb: "/images/stage/thumb_17.jpg",
                article: {
                    title: "NGƯỜI NÔNG DÂN - TRONG NGHỆ THUẬT MÚA RỐI NƯỚC",
                    subtitle: "Người nông dân là một trong những hình tượng xuất hiện phổ biến và tiêu biểu nhất trong nghệ thuật Múa rối nước Việt Nam. Thông qua các tích trò tái hiện đời sống lao động thường nhật như cày ruộng, tát nước, đánh cá, chăn trâu hay dệt vải, nhân vật đã trở thành biểu tượng cho nền văn minh lúa nước và phản ánh chân thực đời sống của người dân vùng đồng bằng Bắc Bộ. Không chỉ là nhân vật biểu diễn, người nông dân còn đại diện cho tinh thần cần cù, bền bỉ và lạc quan của con người Việt Nam qua nhiều thế hệ. ",
                    heading1: "Người nông dân trong múa rối nước là ai?",
                    text1: ` Trong nghệ thuật Múa rối nước, người nông dân là hình tượng trung tâm tái hiện cuộc sống lao động và sinh hoạt của cư dân nông nghiệp. Nhân vật thường xuất hiện dưới nhiều hình thức khác nhau như người nông dân cày ruộng, tát nước, đánh cá, chăn trâu thổi sáo, đấu vật hay những cô gái cấy lúa, dệt vải và các bà lão trong làng quê Việt Nam.
                    Thông qua những hoạt động quen thuộc trên đồng ruộng và mặt nước, nhân vật góp phần tái hiện bức tranh sinh hoạt đặc trưng của làng quê Việt Nam. Mỗi tích trò không chỉ kể về công việc lao động mà còn thể hiện niềm vui sống, tinh thần gắn bó với thiên nhiên và sự hòa hợp giữa con người với môi trường xung quanh.
                    Các con rối mang hình tượng người nông dân thường được chế tác từ gỗ sung và sơn màu tươi sáng. Trang phục quen thuộc là áo nâu, quần đen, khăn vấn đầu những hình ảnh gắn liền với cuộc sống nông thôn Việt Nam. Tạo hình tuy mộc mạc nhưng giàu tính biểu cảm, với khuôn mặt hiền hậu, nụ cười chất phác và những cử chỉ gần gũi. Chính sự giản dị ấy đã giúp người xem dễ dàng nhận ra và đồng cảm với nhân vật ngay từ những khoảnh khắc đầu tiên xuất hiện trên sân khấu.`,
                    img1: "/images/stage/detail_a_49.jpg",
                    source1: "Biểu tượng của lao động cuộc sống: Câu cá (Nguồn ảnh: Báo Lao Động)",
                    heading2: "Ý nghĩa và hình tượng người nông dân trong múa rối nước ",
                    text2: `Người nông dân được xem là hình tượng phản ánh rõ nét nhất tâm hồn và bản sắc văn hóa Việt Nam. Là chủ thể của nền văn minh lúa nước, họ tượng trưng cho sự cần cù, chịu thương chịu khó và tinh thần vượt khó của người dân lao động.
                    Dù cuộc sống còn nhiều vất vả, hình ảnh người nông dân trong Múa rối nước luôn hiện lên với sự lạc quan và yêu đời. Từ những động tác cày cấy, quăng chài, tát nước đến cảnh chăn trâu thổi sáo hay vui hội làng, tất cả đều thể hiện niềm tin vào cuộc sống và khát vọng về một mùa màng no đủ, sung túc.`,
                    img2: "/images/stage/detail_a_50.jpg",
                    source2: "Những con rối tượng trưng cho người nông dân đang cấy lúa (Nguồn ảnh: VTV4)",
                      text3: " Bên cạnh đó, nhân vật còn phản ánh những giá trị nhân văn sâu sắc của cộng đồng làng xã Việt Nam như tinh thần đoàn kết, tình làng nghĩa xóm và sự sẻ chia trong cuộc sống. Thông qua các tích trò dân gian, hình tượng người nông dân góp phần truyền tải những bài học đạo đức và triết lý sống đã được lưu truyền qua nhiều thế hệ.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_51.jpg",
                    links: [
                        {
                            url: "https://youtu.be/O8qL05ozJk8?si=ZaDTD0Id3dSjEfQu",
                            text: " Cày Cấy (Múa Rối Nước)",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                         
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Cày Cấy (Múa Rối Nước) - HOÀNG TÍN x TRUNG ĐỨC (ft. Đậu Homemade) I Quán Nghệ 2 Challenge - Kênh Youtube Quán Nghệ - Art Vender",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Người nông dân không chỉ là một nhân vật quen thuộc trong nghệ thuật Múa rối nước mà còn là biểu tượng tiêu biểu của nền văn minh lúa nước Việt Nam. Thông qua hình tượng này, nghệ thuật Múa rối nước đã tái hiện sinh động đời sống lao động, những giá trị văn hóa truyền thống và vẻ đẹp tâm hồn của người Việt. Trải qua nhiều thế kỷ, hình ảnh người nông dân vẫn giữ nguyên sức sống trong các tích trò dân gian, góp phần làm nên bản sắc độc đáo của nghệ thuật Múa rối nước Việt Nam. ",
                }
            },
            {
                imgId: "stage_18",
                name: "Nhạc công cung đình",
                thumb: "/images/stage/thumb_18.jpg",
                article: {
                    title: "NHÂN VẬT NHẠC CÔNG CUNG ĐÌNH (NHÃ NHẠC CUNG ĐÌNH HUẾ)",
                    subtitle: "Trong không gian tôn nghiêm của hoàng cung xưa, các thế hệ nghệ nhân nhạc công chính là những người nắm giữ “chiếc chìa khóa” kích hoạt thế giới âm thanh đỉnh cao của Nhã nhạc Cung đình Huế. Vượt lên trên vai trò của những người chơi nhạc cụ đơn thuần, họ đại diện cho tầng lớp nghệ sĩ bác học được trui rèn khắt khe nhất của triều đại, đóng vai trò như nhịp cầu kết nối giữa nghệ thuật âm nhạc đỉnh cao với hệ thống nghi lễ hoàng gia trang trọng. Bằng tài năng xuất chúng và sự am tường quy tắc vương triều, họ không chỉ thổi hồn vào các đại lễ quốc gia mà còn trở thành một biểu tượng sống động cho uy quyền hoàng gia và nét đẹp văn hóa cung đình đỉnh cao.  ",
                    heading1: "Nhạc công cung đình là ai?",
                    text1: `Nhạc công cung đình là những người trực tiếp trình diễn các loại nhạc cụ trong dàn Nhã nhạc phục vụ triều đình phong kiến, đặc biệt dưới triều Nguyễn ở Huế. Họ không chỉ là người biểu diễn âm nhạc mà còn là những nghệ nhân chuyên nghiệp được tuyển chọn kỹ lưỡng và đào tạo bài bản trong môi trường cung đình.
                    Để trở thành nhạc công cung đình, người nghệ nhân phải dành nhiều năm học tập, ghi nhớ hàng chục bài bản cổ, nắm vững kỹ thuật biểu diễn và hiểu rõ quy tắc nghi lễ của triều đình. Mỗi động tác, tiết tấu và âm thanh đều phải tuân theo những quy định nghiêm ngặt nhằm thể hiện sự tôn nghiêm của vương triều
                    Nhạc công cung đình giữa vai trò vô cùng quan trọng. Họ là những người tạo nên linh hồn của Nhã nhạc. Họ góp mặt trong hầu hết các nghi lễ quan trọng của đất nước như:
                        - Lễ đăng quang của nhà vua.
                        - Lễ tế Nam Giao cầu quốc thái dân an.
                        - Lễ tế tổ tiên tại Thế Miếu.
                        - Các buổi Đại triều, Thường triều.
                        - Các dịp tiếp đón sứ thần nước ngoài.
                        - Những yến tiệc và sự kiện lớn trong hoàng cung.
                    Âm thanh do các nhạc công tạo ra không đơn thuần là âm nhạc mà còn là biểu tượng của quyền lực hoàng gia, sự ổn định của đất nước và nét đẹp văn hóa cung đình Việt Nam.
                    Nếu không có các thế hệ nhạc công cung đình, nhiều bài bản Nhã nhạc cổ có thể đã bị thất truyền. Chính họ là những người ghi nhớ, truyền dạy và bảo tồn kỹ thuật biểu diễn qua nhiều thế hệ.
                    Sau khi chế độ phong kiến chấm dứt, nhiều nghệ nhân cung đình vẫn tiếp tục truyền nghề cho học trò, tham gia phục dựng các nghi lễ và biểu diễn phục vụ nghiên cứu văn hóa. Nhờ những nỗ lực đó, Nhã nhạc Cung đình Huế vẫn được bảo tồn cho đến ngày nay. Năm 2003, UNESCO ghi danh Nhã nhạc Cung đình Huế là di sản văn hóa phi vật thể đại diện của nhân loại. Thành tựu này có sự đóng góp rất lớn của các nghệ nhân và nhạc công đã dành cả cuộc đời để gìn giữ âm nhạc cung đình Việt Nam.`,
                    img1: "/images/stage/detail_a_52.jpg",
                    source1: "Nguồn ảnh: Dulich24.com.vn ",
                    heading2: "Các loại nhạc cụ được sử dụng",
                    text2: "Các nhạc cụ thường được các nhạc công sử dụng bao gồm đàn tỳ bà, đàn nguyệt, đàn nhị, đàn tam, sáo trúc, kèn bầu, trống và các nhạc cụ gõ khác để tạo nên âm thanh đặc trưng của Nhã nhạc. Sự phối hợp nhịp nhàng giữa các nhạc công đã tạo nên những bản nhạc cung đình vừa trang nghiêm vừa giàu giá trị nghệ thuật.",
                    img2: "/images/stage/detail_a_53.jpg",
                    source2: "Hình ảnh nhạc cụ tiêu biểu. Nguồn ảnh: buulong.com.vn",
                     
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_54.jpg",
                    links: [
                        {
                            url: "https://youtu.be/-xI0V7QLYbM?si=8iwU4Dw0BRTjSDP7",
                            text: " Nhã Nhạc Cung Đình Huế - Lưu thủy Kim tiền Xuân phong Long hổ - Nhạc hòa tấu",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                         
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Ba Duy",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: "Đóng vai trò như những “pho từ điển sống”, các thế hệ nhạc công cung đình đã bền bỉ lưu truyền, bảo tồn kỹ thuật và phục dựng bài bản qua nhiều biến động lịch sử. Sự cống hiến thầm lặng suốt cuộc đời của họ chính là nhân tố quyết định giúp giữ gìn mạch nguồn âm nhạc cổ xưa và đưa Nhã nhạc Cung đình Huế trở thành di sản văn hóa phi vật thể của nhân loại. ",
                }
            },
            {
                imgId: "stage_19",
                name: "Nữ tài tử ca",
                thumb: "/images/stage/thumb_19.jpg",
                article: {
                    title: "NỮ TÀI TỬ CA",
                    subtitle: "Nếu tiếng đờn là bộ khung, là cảnh nền của bức tranh di sản thì Nữ tài tử ca chính là người tô điểm sắc màu, thổi vào đó hơi thở của sự sống. Bằng làn hơi thiên phú ngọt ngào và sự thấu cảm sâu sắc về nhân tình thế thái, những người con gái Nam Bộ đã biến các bài bản tổ khô khan thành những lời tự sự lay động tâm can, đưa người nghe vào thế giới của những hoài niệm, yêu thương và khát vọng.",
                    heading1: "Vẻ đẹp mộc mạc, đoan trang và lối diễn xướng “vô chiêu”",
                    text1: `Khác biệt hoàn toàn với nghệ thuật cải lương sân khấu vốn cần đến sự hỗ trợ của phục trang lộng lẫy, hóa trang đậm và vũ đạo cường điệu, Nữ tài tử ca chinh phục người nghe bằng sự giản dị đến thuần khiết. Họ xuất hiện trong chiếc áo bà ba nền nã, mái tóc xõa ngang vai hoặc búi cao gọn gàng, ngồi duyên dáng trên chiếc chiếu trải giữa gian nhà hay dưới bóng mát của vườn cây ăn trái.
                    Phong cách biểu diễn của nữ tài tử ca được gọi là "vô chiêu thắng hữu chiêu". Họ không dùng điệu bộ cơ thể để minh họa cho lời ca, mà dồn toàn bộ tâm trí, cảm xúc vào giọng hát và ánh mắt. Sự biểu cảm trên gương mặt họ thay đổi một cách tự nhiên theo nội dung câu hát: một thoáng u buồn khi ca điệu Oán, sự trang nghiêm khi vào điệu Bắc, hay nét rạng rỡ khi thể hiện các bài bản vui tươi. Sự mộc mạc này tạo nên một không gian gần gũi, nơi khoảng cách giữa người biểu diễn và người thưởng thức hoàn toàn bị xóa nhòa.`,
                    img1: "/images/stage/detail_a_55.jpg",
                    source1: "Biểu diễn đờn ca tài tử cho khách du lịch - Tạp chí Du lịch TP.Hồ Chí Minh ",
                    heading2: "Đỉnh cao của kỹ thuật nhả chữ, làn hơi và sự đồng điệu cùng cung tơ",
                    text2: ` Ca tài tử là một thử thách lớn đối với bất kỳ giọng ca nào, đòi hỏi người Nữ tài tử ca phải trải qua quá trình rèn luyện công phu để đạt đến độ chín muồi về cả kỹ thuật lẫn cảm xúc.
                            - Kỹ thuật "khớp nhạc, thấu tình": Người ca phải am tường điệu thức của từng bài bản để không bị "lạc điệu". Cái tài của nữ tài tử ca là khả năng nhả chữ vô cùng điêu luyện: phát âm phải tròn vành rõ chữ, đúng chính tả Nam Bộ, không được làm mất dấu hay méo tiếng ngay cả ở những nốt cao hay những câu ca dài.
                            - Biến hóa làn hơi: Họ biết cách sử dụng hơi bụng để tiếng ca ngân dài, rung nhẹ tự nhiên mà không bị phô phô hay đứt quãng. Trong tài tử ca, có những kỹ thuật như "ca lơi" (chủ động đi sau nhịp đờn để kéo dài cảm xúc) hay "ca nghiêm" (vào ngay đầu nhịp để tạo sự mạnh mẽ). Sự biến hóa này đòi hỏi họ phải có một cảm giác về nhịp phách cực kỳ nhạy bén.
                            - Cuộc đối thoại của hai tâm hồn: Nữ tài tử ca không hát độc lập mà luôn có sự tương tác, giao thoa mật thiết với người đờn. Họ nương tựa vào tiếng đàn để lấy đà, và ngược lại, dùng giọng ca của mình để khơi gợi cảm xúc cho người bấm phím. Giữa họ và nam tài tử đờn có một sợi dây liên kết tâm linh đặc biệt; chỉ cần một tiếng nhấn của cây đàn kìm, người nữ đã biết mình cần phải thả làn hơi nhẹ hay sâu để tạo nên sự hòa quyện hoàn hảo nhất.`,
                    img2: "/images/stage/detail_a_56.jpg",
                    source2: "Nguồn ảnh: Vietourist ",
                     
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_57.jpg",
                    links: [
                        {
                            url: "https://youtu.be/POcpYUpEN_0?si=eDCtZd6tJRnMG1Zf",
                            text: " Dạ cổ hoài lang - Bích Phượng ca | Đờn ca tài tử",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                         
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Dạ cổ hoài lang - Bích Phượng ca | Đờn ca tài tử |Vietnamese traditional music | Vĩnh Huỳnh",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: " Bên hiên nhà lộng gió phương Nam, tiếng ca của người nữ tài tử cất lên như lời thủ thỉ của đất đai, của dòng sông và của lòng người thủy chung, nhân hậu. Họ chính là những người lưu giữ phần hồn sống động nhất của Đờn ca Tài tử, mang những giá trị văn hóa ngàn năm kết tinh vào trong từng câu ca, nhịp luyến. Để rồi, dù cuộc sống có hối hả ngược xuôi, chỉ cần nghe lại một câu ca tài tử ngọt ngào, người ta lại thấy lòng mình bình yên, tìm về đúng với cội nguồn văn hóa phương Nam đậm đà bản sắc.",
                }
            },
            {
                imgId: "stage_20",
                name: "Ông Trùm",
                thumb: "/images/stage/thumb_20.jpg",
                article: {
                    title: "NHÂN VẬT “ÔNG TRÙM” TRONG HÁT XOAN PHÚ THỌ",
                    subtitle: "Trong nghệ thuật Hát Xoan Phú Thọ, Ông Trùm là người đứng đầu phường Xoan, giữ vai trò tổ chức, điều hành và truyền dạy các làn điệu Xoan cho thế hệ kế cận. Đây thường là những nghệ nhân có nhiều kinh nghiệm, am hiểu sâu sắc về lịch sử, nghi lễ, bài bản và quy tắc sinh hoạt của phường hát. Với uy tín và tri thức của mình, ông Trùm không chỉ dẫn dắt các thành viên trong quá trình thực hành di sản mà còn là người gìn giữ và trao truyền những giá trị cốt lõi của Hát Xoan qua nhiều thế hệ.",
                    heading1: "Vai trò dẫn dắt và điều hành phường Xoan",
                    text1: "Trong mỗi phường Xoan, ông Trùm giữ vai trò trung tâm, chịu trách nhiệm tổ chức các buổi hát, phân công nhiệm vụ cho đào và kép, đồng thời hướng dẫn việc thực hiện các nghi thức truyền thống. Trong quá trình diễn xướng, ông là người đảm bảo các làn điệu được thực hiện đúng trình tự, đúng lề lối và phù hợp với không gian nghi lễ. Nhờ đó, các cuộc hát Xoan luôn giữ được tính trang trọng, tính cộng đồng và sự liên kết chặt chẽ giữa các thành viên trong phường. ",
                    img1: "/images/stage/detail_a_58.jpg",
                    source1: " Nguồn ảnh: Internet",
                    heading2: "Người gìn giữ tri thức và trao truyền di sản",
                    text2: "Một trong những nhiệm vụ quan trọng nhất của ông Trùm là truyền dạy Hát Xoan cho thế hệ trẻ. Ông trực tiếp hướng dẫn các làn điệu, lời ca, động tác trình diễn cũng như những quy tắc ứng xử trong sinh hoạt phường hát. Thông qua quá trình truyền nghề, những giá trị văn hóa, lịch sử và tín ngưỡng gắn với Hát Xoan được bảo tồn và tiếp nối qua nhiều thế hệ. Chính vì vậy, ông Trùm được xem là cầu nối giữa quá khứ và hiện tại, góp phần duy trì sức sống của di sản trong đời sống cộng đồng.",
                    img2: "/images/stage/detail_a_59.jpg",
                    source2: "Ông trùm phường xoan. Ảnh: Trần Thanh Giang ",
                      text3: "Hát Xoan vốn gắn với tín ngưỡng thờ cúng Hùng Vương và các nghi lễ cộng đồng tại đình, đền, miếu ở Phú Thọ. Trong không gian ấy, ông Trùm là người am hiểu các nghi thức truyền thống và hướng dẫn phường hát thực hiện đúng quy chuẩn. Vai trò của ông không chỉ giới hạn trong hoạt động nghệ thuật mà còn mang ý nghĩa văn hóa – tâm linh sâu sắc, góp phần gìn giữ bản sắc của cộng đồng địa phương và duy trì mối liên kết giữa di sản với đời sống tín ngưỡng dân gian.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_60.jpg",
                    links: [
                        {
                            url: "https://youtu.be/YnyU2etqAnA?si=siJNvtxPJPeBw8dL",
                            text: "Hát Xoan Phú Thọ - Mó Cá | Hát Hội | Nhạc Trữ Tình Chọn Lọc",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@dattomedia/video/7491306158603521288?is_from_webapp=1&sender_device=pc&web_id=7605477206903621140",
                            text: "Tự hào Di sản văn hoá phi vật thể, Hát Xoan",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                         
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Tiktok Đất Tổ Media ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: " Với vai trò người đứng đầu phường hát, trực tiếp tổ chức, điều hành và truyền dạy các làn điệu Xoan, ông Trùm được xem là nhân vật giữ vị trí trung tâm trong đời sống của phường Xoan. Không chỉ lưu giữ tri thức, nghi lễ và kỹ năng diễn xướng, các ông Trùm còn là cầu nối trao truyền giá trị văn hóa từ thế hệ này sang thế hệ khác. Sự cống hiến thầm lặng của họ đã góp phần quan trọng vào việc bảo tồn và phát huy nghệ thuật Hát Xoan Phú Thọ – di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO ghi danh, đồng thời duy trì sức sống bền vững của loại hình nghệ thuật dân gian đặc sắc vùng Đất Tổ. ",
                }
            },
            {
                imgId: "stage_21",
                name: "Kép đen - Tạ Ôn Đình",
                thumb: "/images/stage/thumb_21.jpg",
                article: {
                    title: "MÔ HÌNH KÉP ĐEN TRONG TUỒNG: NHÂN VẬT THỂ HIỆN TẠ ÔN ĐÌNH TRONG VỞ TUỒNG “SƠN HẬU”",
                    subtitle: "Khác với Kép đỏ tượng trưng cho chính nghĩa và lòng trung quân, Kép đen được xây dựng nhằm khắc họa mặt đối lập của quyền lực, tham vọng và cái ác. Một trong những hình tượng tiêu biểu nhất của mô hình nhân vật này là Tạ Ôn Đình trong vở tuồng kinh điển “Sơn Hậu”.",
                    heading1: "Tạ Ôn Đình là ai?",
                    text1:`Tạ Ôn Đình là em trai thứ trong ba anh em võ tướng họ Tạ gồm Tạ Ôn Đình, Tạ Lôi Nhược và Tạ Lôi Phuông. Trong vở tuồng “Sơn Hậu”, nhân vật thuộc tuyến phản diện, là cánh tay đắc lực của phe gian thần chống lại các trung thần nhà Tề.
                    Tạ Ôn Đình nổi tiếng với tính cách hung hăng, hiếu chiến và tuyệt đối trung thành với phe phản nghịch. Cùng các anh em họ Tạ, nhân vật trở thành lực lượng quân sự quan trọng của thế lực tiếm quyền, đối đầu trực tiếp với những trung thần như Đổng Kim Lân hay Khương Linh Tá.
                    Không chỉ đại diện cho sức mạnh bạo lực, Tạ Ôn Đình còn là hình tượng tiêu biểu cho kiểu nhân vật phản diện trong nghệ thuật Tuồng cổ, góp phần làm nổi bật cuộc đối đầu giữa chính nghĩa và gian tà xuyên suốt tác phẩm.`,
                    img1: "/images/stage/detail_a_61.jpg",
                    source1: " Nguồn ảnh: Hiếu Văn Ngư - Cultura Fish",
                    heading2: "Đặc điểm mô hình nhân vật “Kép” - “Kép Đen”",
                    text2: `Kép đen là kiểu nhân vật phản diện thường xuất hiện trong các vở Tuồng lịch sử và quân quốc. Nhân vật thuộc mô hình này thường mang tính cách quyết liệt, nóng nảy, hiếu chiến hoặc tàn bạo, đóng vai trò đối trọng với các nhân vật trung nghĩa thuộc tuyến chính diện.
                    Điểm nhận diện nổi bật nhất của Kép đen nằm ở nghệ thuật hóa trang. Khuôn mặt nhân vật thường sử dụng các mảng màu đen kết hợp trắng nhằm thể hiện sự dữ dằn, hiểm độc và cá tính mạnh. Thông qua màu sắc, đường nét và biểu cảm khuôn mặt, khán giả có thể nhanh chóng nhận diện bản chất nhân vật ngay từ khi xuất hiện trên sân khấu.`,
                    img2: "/images/stage/detail_a_62.jpg",
                    source2: "Nguồn ảnh: Facebook Bá Tăng Minh Hiếu",
                      text3: `Trên sân khấu Tuồng, Tạ Ôn Đình được hóa trang theo phong cách võ tướng phản diện. Nghệ sĩ thường đeo râu liên tu dài, đầu đội ngạch đợi và sử dụng lối vẽ mặt rằn với các mảng trắng, đen xen kẽ tạo cảm giác dữ dội, uy hiếp.
                    Một đặc điểm đặc sắc khác là các hình “óc mít” (dạng giọt nước) được vẽ quanh mắt và hai bên thái dương. Những chi tiết này có thể thay đổi theo từng lớp diễn nhằm tăng hiệu quả biểu cảm. Khi nhân vật nói, hát hoặc thể hiện cảm xúc, các chuyển động của cơ mặt kết hợp với bộ râu dài giúp tạo nên thần thái sống động và đầy uy lực cho nhân vật.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_63.jpg",
                    links: [
                        {
                            url: "https://youtu.be/BcqzYSN3MoM?si=_3m50zA3MmtIZZdQ",
                            text: "Hát Xoan Phú Thọ - Mó Cá | Hát Hội | Nhạc Trữ Tình Chọn Lọc",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                         
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Trích đoạn hát bội: Tạ Ôn Đình chém đầu Khương Linh Tá - Kênh Youtube HÀ TRÍ NHƠN ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: " Tạ Ôn Đình là hình tượng tiêu biểu của mô hình nhân vật Kép đen trong nghệ thuật Tuồng Việt Nam. Với tính cách hung bạo, tạo hình độc đáo và vai trò phản diện nổi bật trong vở “Sơn Hậu”, nhân vật đã trở thành một trong những hình mẫu kinh điển của sân khấu Tuồng cổ. Thông qua nhân vật Tạ Ôn Đình, người xem không chỉ cảm nhận được vẻ đẹp của nghệ thuật hóa trang và biểu diễn Tuồng mà còn hiểu rõ hơn những thông điệp về chính - tà, thiện - ác được gửi gắm trong loại hình nghệ thuật truyền thống này.",
                }
            },
            {
                imgId: "stage_22",
                name: "Thị Mầu",
                thumb: "/images/stage/thumb_22.jpg",
                article: {
                    title: "THỊ MẦU",
                    subtitle: "Thị Mầu là một nhân vật tiêu biểu, nổi bật trong vở chèo “Quan Âm Thị Kính” đại diện cho tính cách phóng túng và táo bạo. Hình ảnh Thị Mầu đã trở thành một biểu tượng văn hóa trong nghệ thuật sân khấu chèo truyền thống Việt Nam, gắn liền với những tình huống bi hài và những bài học về đạo đức, lối sống trong xã hội. ",
                    heading1: "Thị Mầu là ai?",
                    text1: `Thị Mầu là một trong những nhân vật tiêu biểu của truyện thơ Nôm Quan Âm Thị Kính, tác phẩm được cho là do Nguyễn Cấp (hoặc theo một số ý kiến là Đỗ Trọng Dư) sáng tác vào khoảng giữa thế kỷ XIX. Trong tác phẩm, Thị Mầu là con gái của một phú ông giàu có. Trong một lần đến chùa, cô gặp sư Kính Tâm và nhanh chóng nảy sinh tình cảm. Tuy nhiên, tình cảm ấy không được đáp lại, khiến Thị Mầu càng trở nên si mê và theo đuổi quyết liệt hơn.
                    Vốn là người có tính cách phóng khoáng, Thị Mầu đã có quan hệ tình cảm với người đầy tớ trong nhà và mang thai. Để che giấu sự việc, cô đổ tội cho sư Kính Tâm là cha của đứa bé. Sau khi sinh con, Thị Mầu còn bỏ đứa trẻ trước cổng chùa nhằm đẩy mọi nghi ngờ sang vị sư vô tội.
                    Nhắc đến Thị Mầu là nhắc đến Quan Âm Thị Kính (hay còn gọi là Quan Âm tân truyện), tác phẩm chủ yếu đề cao phẩm chất nhẫn nhịn, lòng vị tha và đức hy sinh của Thị Kính – người về sau đắc đạo và trở thành Phật Quan Âm. Trong khi đó, Thị Mầu được xây dựng như một hình tượng hoàn toàn đối lập: táo bạo, lẳng lơ và sống theo bản năng, qua đó làm nổi bật hơn vẻ đẹp đức hạnh, hiếu thảo và nhân từ của Thị Kính.`,
                    img1: "/images/stage/detail_a_64.jpg",
                    source1: " Nguồn ảnh: Báo Dân Việt",
                    heading2: "Thể loại và xuất xứ của vở chèo “Quan Âm Thị Kính”",
                    text2: ` Chèo là loại hình nghệ thuật sân khấu truyền thống mang đậm bản sắc văn hóa dân gian Việt Nam, thường được biểu diễn trong các dịp lễ hội và sinh hoạt cộng đồng. Đặc trưng của chèo là sự kết hợp giữa ca, múa, diễn xuất và lời thoại giàu tính biểu cảm, sử dụng ngôn ngữ giàu hình ảnh, nhiều lớp nghĩa cùng lối nói ẩn dụ, góp phần tạo nên tính tự sự và chất trữ tình đặc sắc.
                    Nghệ thuật chèo được hình thành từ khoảng thế kỷ X, dưới triều đại Đinh Tiên Hoàng, với trung tâm phát triển ban đầu tại kinh đô Hoa Lư (Ninh Bình). Theo truyền thống, bà Phạm Thị Trân – một nghệ sĩ trong cung đình – được xem là người có công đặt nền móng cho nghệ thuật chèo và truyền dạy loại hình này cho các thế hệ sau. Trải qua quá trình phát triển lâu dài, nhiều vở chèo cổ nổi tiếng như Lưu Bình – Dương Lễ và Quan Âm Thị Kính vẫn được gìn giữ, biểu diễn và yêu mến cho đến ngày nay.`,
                    img2: "/images/stage/detail_a_65.jpg",
                    source2: "Nghệ sĩ ưu tú Thu Huyền vào vai Thị Màu, trong trích đoạn “Thị Mầu lên chùa” nổi tiếng của vở chèo Quan Âm Thị Kính. Ảnh: TTXVN phát . Trích nguồn: Tạp chí Văn hóa Nghệ thuật",
                      text3: ` Thông tin vở chèo “Quan Âm Thị Kính”: “Quan Âm Thị Kính” là một trong những vở chèo cổ tiêu biểu và có giá trị đặc sắc của sân khấu chèo Việt Nam. Vở diễn được hình thành vào khoảng thế kỷ XVII và tiếp tục được chỉnh lý, hoàn thiện trong thế kỷ XX. Nội dung tác phẩm xoay quanh cuộc đời đầy bi kịch của Thị Kính – người phụ nữ hiền hậu nhưng liên tiếp phải chịu những oan khuất. Sau khi bị vu oan có ý định sát hại chồng, Thị Kính buộc phải cải trang thành nam giới để vào chùa tu hành với pháp danh Kính Tâm. Tuy nhiên, tại đây, cô lại tiếp tục bị Thị Mầu vu khống là cha của đứa trẻ do Thị Mầu sinh ra, khiến cuộc đời càng thêm nhiều đau khổ và bất hạnh. Chỉ đến khi qua đời, Thị Kính mới được minh oan và được hóa thân thành Phật Quan Âm, trở thành biểu tượng của lòng từ bi, đức hy sinh và sự nhẫn nhịn.
                    Vở chèo Quan Âm Thị Kính nói chung và đoạn trích Thị Mầu lên chùa nói riêng là những tác phẩm tiêu biểu, thể hiện rõ những giá trị nghệ thuật đặc sắc của sân khấu chèo truyền thống Việt Nam. Ngôn ngữ trong vở diễn được sử dụng giản dị, mộc mạc nhưng giàu tính biểu cảm và chất thơ, đồng thời phản ánh gần gũi đời sống, tâm tư và cách nói của người dân lao động. Bên cạnh đó, việc xây dựng tình huống kịch hấp dẫn, kết hợp hài hòa với lối diễn xuất, lời ca và ngôn ngữ mang đậm phong cách chèo đã góp phần tạo nên sức hấp dẫn riêng, khẳng định giá trị nghệ thuật bền vững của tác phẩm.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_66.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=iGYp4nRr-Xg",
                            text: " Chèo Cổ Việt Nam | Thị Mầu Lên Chùa - Nhà Hát Chèo Việt Nam | Hát Chèo Còn Mãi Với Thời Gian - Kênh Youtube Soạn Giả Mai Văn Lạng",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://vt.tiktok.com/ZSQ2k4ETQ/",
                            text: "Thị Mầu là ai ? Có nên tự hào khi nhận là Thị Mầu",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                         
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Tiktok Vẽ Kể Chuyện ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: " Thị Mầu không chỉ là nhân vật tiêu biểu phản ánh những khía cạnh trong tính cách và đời sống con người của xã hội xưa, mà còn góp phần làm nổi bật giá trị nghệ thuật đặc sắc của sân khấu chèo truyền thống Việt Nam. Việc tìm hiểu về nhân vật Thị Mầu giúp người đọc có cái nhìn sâu sắc hơn về bối cảnh văn hóa, lịch sử cũng như những ý nghĩa nhân văn được gửi gắm trong nghệ thuật dân gian Việt Nam. ",
                }
            },
            {
                imgId: "stage_23",
                name: "Tiên nữ",
                thumb: "/images/stage/thumb_23.jpg",
                article: {
                    title: "CÔ TIÊN - TIÊN NỮ TRONG MÚA RỐI NƯỚC",
                    subtitle: "Trong kho tàng nghệ thuật Múa rối nước Việt Nam, Cô Tiên là hình tượng mang vẻ đẹp thanh tao, nhân hậu và giàu tính biểu tượng. Không xuất hiện thường xuyên như Chú Tễu hay nhân vật nông dân nhưng mỗi lần xuất hiện, Cô Tiên đều mang đến màu sắc huyền ảo và những thông điệp nhân văn về cái thiện, niềm tin và khát vọng hạnh phúc của con người.  ",
                    heading1: "Cô tiên trong múa rối nước là ai?",
                    text1: `Trong các tích trò dân gian, Cô Tiên thường xuất hiện vào những thời điểm quan trọng, khi nhân vật chính gặp khó khăn hoặc cần sự giúp đỡ. Hình tượng này đại diện cho phép màu, lòng nhân ái và niềm tin rằng điều thiện cuối cùng sẽ chiến thắng cái ác.
                    Không chỉ là nhân vật mang màu sắc thần thoại, Cô Tiên còn phản ánh ước vọng của người Việt về một cuộc sống bình yên, công bằng và hạnh phúc. Bên cạnh đó, tích trò Múa Bát Tiên trong vở "Hoa Đất Việt" là một điểm nhấn đặc sắc, kết tinh tinh thần dân gian và khát vọng về phúc, lộc, thọ, an lành. Tám vị tiên với những thần thái riêng cùng xuất hiện trên mặt nước lung linh, tạo nên bức tranh huyền ảo nhưng vẫn gần gũi với đời sống và tâm thức người Việt. Sự xuất hiện của nàng góp phần tạo nên sự cân bằng giữa những cảnh sinh hoạt đời thường và thế giới tưởng tượng đầy chất thơ của nghệ thuật Múa rối nước.`,
                    img1: "/images/stage/detail_a_67.jpg",
                    source1: " Tám vị tiên cùng xuất hiện trên mặt nước lung linh (Nguồn ảnh: Internet)",
                    heading2: "Ý nghĩa và đặc điểm hình tượng Cô tiên",
                    text2: " Cô Tiên là biểu tượng của vẻ đẹp, lòng nhân hậu và sự bao dung trong văn hóa dân gian Việt Nam. Thông qua nhân vật này, các nghệ nhân gửi gắm những giá trị đạo đức truyền thống như lòng tốt, sự sẻ chia và niềm tin vào những điều tốt đẹp trong cuộc sống. Bên cạnh đó, hình tượng Cô Tiên còn thể hiện triết lý quen thuộc của người Việt: ở hiền gặp lành, thiện thắng ác. Dù xuất hiện trong không gian thần thoại, nhân vật vẫn mang những giá trị gần gũi với đời sống, giúp người xem cảm nhận được tinh thần nhân văn sâu sắc của nghệ thuật dân gian.",
                     img2: "/images/stage/detail_a_68.jpg",
                    source2: "Nhân vật Cô tiên - Nguồn: Gốm Chinh",
                      text3: ` Cô Tiên thường được tạo hình với khuôn mặt hiền hậu, ánh mắt trong sáng và nụ cười dịu dàng. Trang phục có màu sắc tươi sáng, mềm mại, tạo cảm giác thanh thoát và khác biệt với các nhân vật lao động thường xuất hiện trên sân khấu.
                    Nhiều con rối còn được thiết kế thêm đôi cánh hoặc các chi tiết trang trí tượng trưng cho thế giới thần tiên. Khi biểu diễn trên mặt nước, những chuyển động uyển chuyển của nhân vật góp phần tạo nên không gian huyền ảo, làm tăng sức hấp dẫn cho các tích trò dân gian.`,
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_69.jpg",
                    links: [
                        {
                            url: "https://youtu.be/5C9oK8fPWow?si=TE4_5VwvA2KVaOWO",
                            text: "  Múa rối nước: Nhi Đồng Hý thủy - Water puppetry",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                  
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Mai Tộc ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: " Không chỉ là một nhân vật biểu diễn, Cô Tiên còn là biểu tượng cho niềm tin và khát vọng hướng thiện của con người. Hình tượng này góp phần làm phong phú thế giới nhân vật trong nghệ thuật Múa rối nước, đồng thời phản ánh những giá trị văn hóa, đạo đức và nhân sinh quan đã được lưu truyền qua nhiều thế hệ người Việt. ",
                }
            },
             {
                imgId: "stage_24",
                name: "Xúy Vân",
                thumb: "/images/stage/thumb_24.jpg",
                article: {
                    title: "XÚY VÂN TRONG VỞ CHÈO “KIM NHAM” ",
                    subtitle: "Nhân vật Xúy Vân là hình mẫu kinh điển của Đào Pha. Được xuất hiện hàng ngàn năm nhưng bất chấp thời đại, Xúy Vân vẫn là một nhân vật đả phá mạnh mẽ chế độ phong kiến, lên án tư tưởng đa thê, đòi quyền bình đẳng, sự thủy chung trong tình yêu  nhưng bị ràng buộc bởi những lễ giáo phong kiến khắt khe. ",
                    heading1: "Xúy Vân là ai?",
                    text1: `Trong các tích chèo cổ truyền thống, Xúy Vân thường được nhìn nhận như hình tượng người phụ nữ “lăng loàn”, “trắc nết”, đi ngược lại những chuẩn mực đạo đức của xã hội phong kiến như tam tòng, tứ đức. Ở một số dị bản như vở “Vân dại”, nhân vật còn được xây dựng với những hành vi bị xem là lệch chuẩn như ham mê cờ bạc, buông thả bản thân và phản bội gia đình. Vì vậy, trong quan niệm truyền thống, Xúy Vân thường là đối tượng bị phê phán hơn là cảm thông.

                    Tuy nhiên, trong các bản cải biên hiện đại, đặc biệt là phiên bản của tác giả Hàn Thế Du dưới sự đạo diễn của Nghệ sĩ Nhân dân Trần Bảng, nhân vật Xúy Vân đã được khai thác dưới góc nhìn nhân văn và giàu tính nhân tình hơn. Thay vì chỉ nhìn nàng như một người phụ nữ sai lầm, tác phẩm đặt Xúy Vân vào hoàn cảnh của một con người có khát vọng yêu thương chính đáng nhưng bị giam hãm trong những khuôn phép hà khắc của xã hội phong kiến. Chính cách tiếp cận này đã làm thay đổi đáng kể hình tượng Xúy Vân trên sân khấu chèo đương đại. Từ một nhân vật từng bị lên án, nàng trở thành biểu tượng cho sự phản kháng, cho khát vọng được sống thật với cảm xúc và quyền tự quyết hạnh phúc của người phụ nữ. `,
                    img1: "/images/stage/detail_a_70.jpg",
                    source1: " NSƯT Thúy Ngân trong vai Xúy Vân giả dại (Nguồn ảnh: Soha)",
                    heading2: "Điểm nhấn của nhân vật",
                    text2: ` Điểm đột phá và cũng là giá trị đặc sắc nhất của hình tượng Xúy Vân nằm ở cách nghệ thuật Chèo nhìn nhận nhân vật. Nếu trong quan niệm truyền thống, Xúy Vân thường bị đánh giá là người phụ nữ đi ngược lại các chuẩn mực đạo đức phong kiến, thì ở góc nhìn nhân văn hơn, nàng được xem là một con người mang trong mình khát vọng hạnh phúc rất đỗi bình thường và chính đáng.
                    Khát vọng ấy không phải là điều gì lớn lao hay xa vời. Ước mơ của Xúy Vân chỉ giản dị như câu hát: “Chờ cho bông lúa chín vàng/ Để anh đi gặt để nàng mang cơm”. Đó là mong muốn được yêu thương, được sẻ chia và được sống trong một mái ấm gia đình hạnh phúc. Chính vì không tìm thấy điều đó trong cuộc hôn nhân với Kim Nham, nàng đã tìm kiếm hạnh phúc ở Trần Phương, dù lựa chọn ấy cuối cùng dẫn đến bi kịch.`,
                     img2: "/images/stage/detail_a_71.jpg",
                    source2: "NSƯT Thúy Ngân trong vai Xúy Vân giả dại (Nguồn: Báo Dân Việt)",
                      text3: " Ở góc độ nghệ thuật, Xúy Vân không chỉ là một nhân vật bi kịch mà còn là hình tượng phản kháng hiếm thấy trong sân khấu Chèo truyền thống. Hành động “giả dại” của nàng không đơn thuần là sự trốn chạy mà còn là một cách thức đấu tranh trước những ràng buộc của lễ giáo phong kiến. Đó là tiếng nói phản kháng của một người phụ nữ không chấp nhận cam chịu số phận và muốn tự quyết định cuộc đời mình.",
                    heading3: "Tư liệu minh họa",

                    img3: "/images/stage/detail_a_72.jpg",
                    links: [
                        {
                            url: "https://youtu.be/WNtb7ZklNuE?si=2dxFLXYtcrq9uowq",
                            text: "  Xúy Vân giả dại - Nghệ sĩ Thúy Ngần - Kênh Youtube Di sản số",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                            {
                            url: "https://www.tiktok.com/@hanhtrinhdisan.xcvn/video/7519852412144848135",
                            text: " Tóm tắt vở chèo Xúy Vân - Vở chèo kinh điển 7 năm mới được diễn lại",
                            type: "text_link" // Render dạng link xanh gạch chân như trong ảnh
                        },
                  
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Tiktok Hành trình di sản - XCVN (@hanhtrinhdisan.xcvn) ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "Kết luận",
                    text4: " Xúy Vân là một trong những nhân vật có chiều sâu tâm lý đặc sắc nhất của nghệ thuật Chèo Việt Nam. Từ một người phụ nữ bị ràng buộc trong cuộc hôn nhân không hạnh phúc, nàng trở thành biểu tượng cho bi kịch tình yêu, khát vọng tự do và mong muốn được sống đúng với cảm xúc của mình. Hình tượng Xúy Vân không chỉ phản ánh thân phận người phụ nữ trong xã hội phong kiến mà còn thể hiện tinh thần phản kháng trước những định kiến và lễ giáo hà khắc. Trải qua nhiều vở diễn, Xúy Vân vẫn là một trong những nhân vật tiêu biểu nhất của sân khấu Chèo truyền thống, để lại nhiều suy ngẫm về tình yêu, hạnh phúc và quyền được lựa chọn cuộc sống của mỗi con người. ",
                }
            },
        ]
    }
};