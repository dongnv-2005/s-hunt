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
                name: "Bánh chưng",
                thumb: "/images/mlem/thumb_1.jpg",
                article: {
                    title: "BÁNH CHƯNG",
                    subtitle: "Bánh chưng là món ăn mang tính biểu tượng cao nhất, là linh hồn không thể thiếu trong ngày Tết Nguyên Đán của người Việt Nam. Đi cùng với bánh giầy, bánh chưng là loại bánh duy nhất có lịch sử lâu đời được ghi lại trong truyền thuyết từ thời Vua Hùng dựng nước. Không chỉ là một món ăn ngon, bánh chưng còn gói trọn cả một bầu trời văn hóa, triết lý nhân sinh sâu sắc và lòng biết ơn cội nguồn của cư dân lúa nước.",
                    heading1: "NGUỒN GỐC LỊCH SỬ LANG LIÊU VÀ SỰ TUYỂN CHỌN NGUYÊN LIỆU TINH TÚY ",
                    text1: `Theo truyền thuyết dân gian, bánh chưng có lịch sử từ thời Vua Hùng Vương thứ 6, do hoàng tử Lang Liêu sáng tạo ra nhằm thể hiện lòng hiếu thảo và sự tôn kính với cha ông. Chiếc bánh hình vuông tượng trưng cho Đất (theo quan niệm Trời tròn Đất vuông ngày trước), ôm trọn nguồn sản vật nông nghiệp quý giá của nền văn minh lúa nước. Trải qua hàng ngàn năm lịch sử, bánh chưng không chỉ đơn thuần là một món ăn mà đã trở thành biểu tượng văn hóa bất diệt, linh hồn không thể thiếu trên bàn thờ gia tiên của người Việt mỗi khi Tết đến, Xuân về.
                    Để làm nên một chiếc bánh chưng xanh vuông vắn, dẻo thơm đúng chuẩn, người gói phải cực kỳ khắt khe trong khâu lựa chọn những sản vật mộc mạc từ làng quê. Gạo gói bánh bắt buộc phải là nếp cái hoa vàng hạt tròn đều, mẩy căng, đem vo sạch và ngâm đủ nước để khi luộc bánh đạt độ dẻo quánh. Nhân bánh là sự kết hợp của đậu xanh loại ngon, tơi xốp, bỏ vỏ, hấp chín và đánh nhuyễn, cùng với những miếng thịt ba chỉ heo có cả nạc lẫn mỡ để tạo độ béo ngậy. Thịt heo được ướp đậm đà với thật nhiều tiêu đen xay mịn và nước mắm cốt ngon. Cuối cùng, chiếc áo bọc ngoài của bánh phải là những chiếc lá dong rừng tươi sắc xanh mướt, không quá non cũng không quá già, kết hợp với những sợi lạt tre mỏng manh nhưng dẻo dai để định hình khối bánh.`,
                    img1: "/images/mlem/detail_c_1.jpg",
                    source1: "Nguồn ảnh: VnExpress ",
                    heading2: "KỸ NGHỆ GÓI BÁNH, QUY TRÌNH LUỘC KỲ CÔNG VÀ HƯƠNG VỊ ĐOÀN VIÊN",
                    text2: ` Khi các nguyên liệu đã sẵn sàng, người thợ bắt đầu bước vào công đoạn gói và luộc bánh đòi hỏi sự khéo léo, tỉ mỉ cùng kinh nghiệm lâu năm. Người gói có thể dùng khuôn gỗ hoặc gói tay vo, xếp lá dong sao cho mặt xanh đậm quay vào trong để khi chín, hạt nếp được nhuộm một màu xanh lá mạ tự nhiên bắt mắt. Các lớp nguyên liệu được sắp xếp hoàn hảo: một lớp nếp, một lớp đậu xanh, thịt ba chỉ nằm chính giữa, rồi lại một lớp đậu xanh và một lớp nếp phủ kín bên trên. Bánh được ép chặt và buộc lạt tre vừa tay, không quá chặt làm bánh bị nghẹn, cũng không quá lỏng khiến bánh bị nát khi luộc.`,
                    img2: "/images/mlem/detail_c_2.jpg",
                    source2: "Nguyên liệu làm bánh Chưng (Nguồn ảnh internet)",
                      text3: `Sau công đoạn gói, quy trình luộc bánh trên bếp củi gộc chính là khoảnh khắc thiêng liêng nhất của ngày Tết truyền thống. Bánh chưng được xếp gọn gàng vào chiếc nồi đồng hoặc nồi tôn lớn, lót cuống lá dong dưới đáy để tránh bị cháy xém, chan ngập nước và luộc liên tục trong suốt 10 đến 12 tiếng đồng hồ. Người nấu phải canh lửa củi liên tục để nước luôn sôi sùng sục và kịp thời châm thêm nước nóng hằng giờ. Khi bánh chín, người ta vớt ra, rửa sạch qua nước lạnh rồi dùng vật nặng đè lên để ép bớt nước dư, giúp bánh chắc chắn và bảo quản được lâu ngày mà không bị mốc.
                    Khi bóc từng lớp lá dong ra, một hương vị tinh tế, ấm áp của sự đoàn viên lập tức đánh thức mọi giác quan. Miếng bánh chưng dẻo quánh, mang sắc xanh dịu nhẹ của lá dong, thơm nồng nàn mùi nếp nương hòa quyện với vị bùi béo tự nhiên của đậu xanh sên và thịt mỡ tan chảy, thoang thoảng chút cay nồng của tiêu đen. Bánh chưng thường được thưởng thức cùng dưa hành muối chua ngọt, thịt đông hay giò lụa vắt chút tiêu. Sự kết hợp hoàn hảo này tạo nên một thú vui ẩm thực thanh tao, đánh dấu khoảnh khắc sum vầy đầy ý nghĩa của mọi gia đình Việt Nam sau một năm dài bận rộn.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_3.jpg",
                    links: [
                        {
                            url: "https://youtu.be/ZGs59VEu3hQ?si=8GOf0obiJycNHt1O",
                            text: " Cách Làm Bánh Chưng Ngày Tết Đúng Chuẩn Hương Vị Truyền Thống",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Hướng Nghiệp Á Âu",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh chưng là biểu tượng văn hóa thiêng liêng và bất diệt nhất của ngày Tết cổ truyền Việt Nam, gói trọn triết lý nhân sinh về cội nguồn và trời đất. Đằng sau lớp lá dong xanh mướt và nhân nếp đậu bùi béo là sợi dây gắn kết tình cảm gia đình, là lời nhắc nhở thế hệ sau về lòng biết ơn đối với tổ tiên và nền văn minh lúa nước. ",
                }
            },
            {
                imgId: "mlem_2",
                name: "Bánh đa cua",
                thumb: "/images/mlem/thumb_2.jpg",
                article: {
                    title: "BÁNH ĐA CUA",
                    subtitle: "Bánh đa cua là món ăn mang tính biểu tượng, là niềm tự hào ẩm thực số một của đất cảng Hải Phòng. Món ăn này chinh phục thực khách bởi sự kết hợp hoàn hảo giữa sắc màu rực rỡ và hương vị mộc mạc, đậm đà vị biển. Không sang chảnh hay cầu kỳ, một bát bánh đa cua hội tụ đầy đủ cái mặn mòi của gió biển, cái ngọt ngào của đồng quê, khiến bất cứ ai một lần nếm thử đều khó có thể quên được.",
                    heading1: "SỢI BÁNH ĐA ĐỎ ĐỘC BẢN VÀ HƯƠNG VỊ NƯỚC DÙNG CUA ĐỒNG ĐẬM ĐÀ ",
                    text1: "Điểm làm nên sự khác biệt độc nhất vô nhị của món ăn chính là sợi bánh đa đỏ, được làm công phu từ gạo tuyển chọn xay mịn pha với nước mật mía theo tỷ lệ gia truyền để tạo màu nâu đỏ tự nhiên và vị ngọt hậu. Bánh tráng mỏng, phơi sương, phơi nắng rồi cắt sợi to bản, mang lại kết cấu dai giòn sần sật không bị bở khi chan nước dùng. Linh hồn giữ chân thực khách là phần nước dùng ngọt đậm đà, sâu lắng từ cua đồng giã nhỏ ninh kỹ kết hợp với xương heo, khác biệt với vị chua gắt của bún riêu thông thường. Người nấu khéo léo canh lửa để riêu cua đóng thành bánh lớn, nổi váng béo ngậy, kết hợp với màu đỏ cam của cà chua và váng mỡ cua chưng hành khô hấp dẫn.",
                    img1: "/images/mlem/detail_c_4.jpg",
                    source1: "Nguồn ảnh: VnExpress ",
                    heading2: "SỰ PHONG PHÚ CỦA NGUYÊN LIỆU ĂN KÈM VÀ GIA VỊ ĐẶC TRƯNG XỨ CẢNG",
                    text2: "Một bát bánh đa cua Hải Phòng là một “ bữa tiệc” sắc màu nhờ phần nhân ăn kèm vô cùng đồ sộ gồm riêu cua nâu hồng, chả lá lốt thơm lừng, chả cá chiên vàng, tôm hấp lột vỏ và thịt băm bọc mộc nhĩ dẻo dai. Ở phiên bản cao cấp hơn, món ăn còn có thêm thịt cua bể xé nhỏ và bề bề (tôm tít), mang lại hương vị hải sản ngập tràn. Yếu tố hoàn thiện món ăn là nắm hành phi vàng ruộm, giòn tan rắc lên trên cùng các loại rau ăn kèm chần sơ như rau muống chẻ, giá đỗ, rau nhút hoặc rau cần ta. Khi thưởng thức, thực khách vắt thêm quất để lấy vị chua dịu và thêm chút chí chương – loại tương ớt cay nồng đặc trưng của Hải Phòng – để làm bùng nổ mọi vị giác.",
                    img2: "/images/mlem/detail_c_5.jpg",
                    source2: "Nguyên liệu cần chuẩn bị để nấu món bánh đa cua chuẩn vị (Nguồn: Internet) ",
                   
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_6.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=mqXM3ISBVzQ",
                            text: " BÁNH ĐA CUA - Đặc sản Hải Phòng ngay trên phố Triệu Việt Vương, Hà Nội",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Feedy Món Ăn Ngon",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh đa cua là hiện thân cho tính cách mạnh mẽ, ăn sóng nói gió và vô cùng hào sảng của người dân đất cảng Hải Phòng. Sự kết hợp giữa sợi bánh đa đỏ bản to dai dẻo, nước dùng riêu cua đồng ngọt lịm đậm đà và các loại chả lá lốt, hành phi vàng óng tạo nên một chỉnh thể ẩm thực rực rỡ sắc màu, đầy ắp năng lượng. ",
                }
            },
            {
                imgId: "mlem_3",
                name: "Bánh đậu xanh",
                thumb: "/images/mlem/thumb_3.jpg",
                article: {
                    title: "BÁNH ĐẬU XANH",
                    subtitle: "Bánh đậu xanh là một món quà quê mộc mạc nhưng lại mang sức sống bền bỉ, là niềm tự hào ẩm thực lớn nhất của tỉnh Hải Dương. Khác với những món bánh có vẻ ngoài sặc sỡ hay cách chế biến cầu kỳ, bánh đậu xanh chinh phục lòng người bằng màu vàng thuần khiết, hương thơm dịu nhẹ và một kết cấu mịn màng đến kỳ diệu, đại diện cho nét tính cách hiền hòa, hiếu khách của người dân vùng đồng bằng Bắc Bộ.",
                    heading1: "NGUỒN GỐC LỊCH SỬ GIAI THOẠI TIẾN VUA VÀ NGHỆ THUẬT TUYỂN CHỌN NGUYÊN LIỆU ",
                    text1: `Theo các tài liệu cổ tại địa phương, nghề làm bánh đậu xanh tại Hải Dương đã có từ thế kỷ XIX. Giai thoại nổi tiếng nhất gắn liền với món bánh này là vào năm 1932, khi vua Bảo Đại có dịp đi kinh lý qua thị xã Hải Dương. Người dân nơi đây đã dâng lên vua một loại bánh làm từ đậu xanh, đường và mỡ lợn. Vua thưởng thức xong thấy vị bánh ngọt thanh, thơm ngon đặc biệt và rất hợp khi dùng kèm với trà. Sau khi hồi cung, vua Bảo Đại đã ban sắc lệnh khen ngợi bánh đậu xanh Hải Dương và cho phép in hình "Rồng Vàng" lên nhãn hộp bánh để biểu thị cho phẩm cấp hoàng gia. Từ đó, thương hiệu "Bánh đậu xanh Rồng Vàng" chính thức ra đời và lưu truyền cho đến ngày nay.
                    Để làm nên món bánh mang phẩm cấp hoàng gia lưu truyền qua nhiều thế hệ, sản phẩm hoàn toàn không sử dụng chất bảo quản hay phẩm màu công nghiệp mà được tạo nên từ những nguyên liệu vô cùng gần gũi của làng quê Việt Nam. Thành phần chính bao gồm đậu xanh, đường cát trắng, mỡ lợn và tinh dầu hoa bưởi. Tuy nhiên, để bánh có vị ngon thượng hạng, khâu tuyển chọn phải cực kỳ nghiêm ngặt: hạt đậu xanh phải là loại đậu hạt tiêu, hạt nhỏ nhưng ruột vàng đều và thơm. Mỡ lợn phải chọn mỡ khổ tươi ngon, đem rán vừa lửa để lấy phần mỡ nước trong veo, không có mùi khét. Đường phải được tinh luyện kỹ, còn hoa bưởi phải hái lúc sớm mai khi còn đọng sương để chưng cất lấy tinh dầu thơm khiết nhất.`,
                    img1: "/images/mlem/detail_c_7.jpg",
                    source1: "Nguồn: Nhà sách TLD ",
                    heading2: "QUY TRÌNH CHẾ BIẾN TỈ MỈ, HƯƠNG VỊ TINH TẾ VÀ GIÁ TRỊ VĂN HÓA TRUYỀN THỐNG",
                    text2: `Từ những nguyên liệu mộc mạc được chọn lọc khắt khe đó, người thợ phải thực hiện các công đoạn chế biến rất tỉ mỉ và khéo léo để cho ra đời những khối bánh vuông vức, mịn màng. Đậu xanh sau khi thu hoạch được đem rửa sạch, ngâm nước để bong vỏ, sau đó rang chín vàng rồi mới xay thành bột mịn. Phần bột đậu này sẽ được trộn đều với mỡ gáy lợn và đường theo một tỷ lệ vàng nghiêm ngặt, gia giảm thêm vài giọt tinh dầu hoa bưởi để tạo hương thơm thoang thoảng. Hỗn hợp sau khi nhào trộn kỹ sẽ được cho vào khuôn gỗ, dùng lực tay ép chặt thành những khối bánh lớn rồi cắt thành từng viên xúc xắc nhỏ, bọc trong lớp giấy bạc để giữ độ ẩm và hương vị.`,
                    img2: "/images/mlem/detail_c_8.jpg",
                    source2: "Các nguyên liệu làm bánh đậu xanh. Nguồn: Điện máy xanh",
                      text3: `Khi bóc lớp vỏ giấy bạc ra, một hương vị tinh tế lập tức đánh thức vị giác của thực khách nhờ mùi thơm nồng nàn của đậu xanh hòa quyện với hương hoa bưởi thanh khiết. Viên bánh có màu vàng sẫm mộc mạc, khi đưa vào miệng, bánh lập tức tan chảy ra mà không cần nhai, để lại một cảm giác mịn màng, béo ngậy của mỡ lợn và vị ngọt đậm đà của đường. Cái hay của bánh đậu xanh Hải Dương là dù có mỡ nhưng ăn không hề bị ngấy, ngược lại vị béo của mỡ lợn chính là chất xúc tác giúp bột đậu xanh không bị khô và dậy mùi thơm hơn.
                    Nét đặc sắc của món bánh này không chỉ dừng lại ở hương vị, mà còn nằm ở nghệ thuật thưởng thức gắn liền với văn hóa trà tao nhã. Thưởng thức bánh đậu xanh không thể vội vàng mà phải có sự kết hợp với một tri kỷ, đó chính là trà xanh (chè Thái Nguyên). Người sành ăn thường nhấp một ngụm trà nóng, sau đó đặt một viên bánh đậu xanh lên đầu lưỡi và để bánh tự tan. Vị chát nhẹ, đắng đắng của trà xanh sẽ trung hòa hoàn toàn vị ngọt sắc của bánh, đồng thời hơi ấm của nước trà sẽ làm bùng nổ mùi thơm của đậu xanh và hoa bưởi trong khoang miệng. Sự kết hợp này tạo nên một thú vui thanh tao, bình yên trong đời sống văn hóa ẩm thực của người miền Bắc.
                    Trải qua bao thăng trầm và sự cạnh tranh của nhiều loại bánh kẹo hiện đại, bánh đậu xanh Hải Dương vẫn giữ vững giá trị truyền thống và là thức quà gắn kết tình cảm hàng đầu Việt Nam, liên tục lọt top kỷ lục về quà tặng đặc sản châu Á. Đối với người Việt, những hộp bánh đậu xanh vàng rực không chỉ là món quà tặng ý nghĩa cho người thân, bạn bè sau mỗi chuyến đi, mà còn là lễ vật trang trọng được đặt lên bàn thờ tổ tiên vào các dịp lễ Tết, thể hiện sự biết ơn và gìn giữ những giá trị văn hóa mộc mạc của quê hương.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_9.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=7FVk7Bj5gYg",
                            text: " Bánh đậu xanh: Linh hồn quê hương Hải Dương",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Tạp chí Làng nghề Việt Nam",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh đậu xanh Hải Dương là biểu tượng của sự mộc mạc, thuần khiết và thanh tao trong văn hóa quà quê xứ Bắc. Trải qua bao thăng trầm lịch sử từ thuở tiến vua, khối bánh mịn màng tan chảy ấy khi kết hợp cùng nghệ thuật thưởng trà vẫn luôn giữ vững vị thế là một di sản ẩm thực bền bỉ, gắn kết tình thân. ",
                }
            },
            {
                imgId: "mlem_4",
                name: "Bánh Pía",
                thumb: "/images/mlem/thumb_4.jpg",
                article: {
                    title: "BÁNH PÍA",
                    subtitle: "Bánh pía (hay còn gọi là bánh lột da) là một món ăn đặc sản vô cùng nổi tiếng và là niềm tự hào ẩm thực của tỉnh Sóc Trăng nói riêng cũng như vùng đất Nam Bộ nói chung. Gắn liền với làng nghề Vũng Thơm trăm năm tuổi, bánh pía là sự giao thoa văn hóa ẩm thực tuyệt vời giữa người Hoa, người Kinh và người Khmer. Món bánh này chinh phục thực khách bằng lớp vỏ xốp mềm xếp tầng độc đáo và phần nhân sầu riêng trứng muối béo ngậy, ngọt ngào đầy quyến rũ.",
                    heading1: "NGUỒN GỐC LỊCH SỬ TRĂM NĂM VÀ KỸ NGHỆ LÀM VỎ BÁNH LỘT DA ĐỘC ĐÁO",
                    text1: `Từ "pía" có gốc từ tiếng Triều Châu là "bánh", do những người Hoa di cư mang theo vào vùng đất Sóc Trăng từ thế kỷ XVII. Ban đầu, chiếc bánh có hình thức khá đơn giản, vỏ ngoài làm từ bột mì, nhân bên trong là thịt heo và đậu xanh, chủ yếu dùng để ăn trong gia đình hoặc làm quà biếu vào các dịp lễ Tết. Theo thời gian, người dân Sóc Trăng đã bản địa hóa món bánh này bằng cách thêm vào những sản vật trù phú của miền Tây sông nước như sầu riêng, khoai môn và trứng muối, tạo nên hương vị độc bản như ngày nay.
                    Bên cạnh chiều dài lịch sử đầy ấn tượng, điểm nhấn kỹ thuật làm nên thương hiệu của món ăn chính là kỹ nghệ làm vỏ bánh lột da độc đáo. Một chiếc bánh pía đạt chuẩn phải có phần vỏ gồm nhiều lớp mỏng dính xếp chồng lên nhau, xếp tầng tinh tế nên mới có tên gọi dân dã là "bánh lột da". Để làm được điều này, người thợ phải nhào hai loại bột: bột nước (bột mì trộn nước, đường, dầu ăn) và bột dầu (bột mì trộn dầu ăn). Sau đó, hai lớp bột này được cán chung với nhau, gấp lại nhiều lần rồi mới đem bao bọc phần nhân. Khi nướng chín, các lớp bột sẽ tự động tách nhẹ, tạo nên kết cấu xốp mềm, hơi dai và có thể dễ dàng bóc ra từng lớp mỏng khi ăn. Trên mặt bánh luôn được ấn một chiếc dấu mộc màu đỏ bằng phẩm màu thực nhiên để ghi tên thương hiệu.`,
                    img1: "/images/mlem/detail_c_10.jpg",
                    source1: "Nguồn ảnh: Huongvietmart ",
                    heading2: "TINH TÚY PHẦN NHÂN BÉO NGẬY, HƯƠNG VỊ MIỆT VƯỜN VÀ SỨC SỐNG THƯƠNG HIỆU",
                    text2: "Song hành cùng lớp vỏ bánh xốp mềm, linh hồn làm nên sức quyến rũ chết người của bánh pía chính là phần nhân sầu riêng trứng muối béo ngậy. Nhân bánh pía truyền thống là sự kết hợp giữa đậu xanh giã nhuyễn sên đường hoặc khoai môn dẻo mịn, trộn đều với cơm sầu riêng tươi nguyên chất. Nằm chính giữa khối nhân là lòng đỏ trứng muối vàng óng, dẻo bùi. Khi chiếc bánh được nướng chín trong lò, phần mỡ heo lợn tẩm ướp (thịt mỡ xắt nhỏ) ẩn trong nhân sẽ tan chảy ra, quyện chặt vào sầu riêng và đậu xanh, tạo nên một kết cấu mọng ướt, mềm mịn như lụa.",
                    img2: "/images/mlem/detail_c_11.jpg",
                    source2: "Nguồn ảnh: Huongvietmart",
                      text3: `Sự hòa quyện tuyệt vời từ các nguyên liệu ấy đã tạo nên một hương vị nồng nàn đậm chất miệt vườn mỗi khi bánh ra lò. Khi bẻ đôi chiếc bánh pía, mùi thơm đậm đà, nồng nàn đặc trưng của sầu riêng lập tức lan tỏa mạnh mẽ, kích thích mọi giác quan. Cắn một miếng bánh, bạn sẽ cảm nhận được vị ngọt thanh mộc mạc của đậu xanh sên, vị béo ngậy ngào ngạt của sầu riêng, quyện cùng chút mặn mòi, bùi béo đặc trưng của lòng đỏ trứng muối. Tất cả các hương vị đối lập này hòa quyện một cách hoàn hảo, không hề lấn át nhau mà tôn nhau lên một cách tinh tế.
                    Chính nhờ hương vị say đắm đó mà một nghệ thuật thưởng thức thanh tao đã được hình thành, thúc đẩy sức sống thương hiệu vươn tầm thế giới. Do bánh pía có vị ngọt đậm và béo ngậy, người sành ăn thường thưởng thức bánh kèm với một tách trà nóng (chè xanh hoặc trà ô long). Vị đắng chát, thanh nhẹ của trà sẽ trung hòa cái ngọt sắc của bánh, làm sạch vòm họng và giữ lại hậu vị thơm thoang thoảng của sầu riêng. Ngày trước chỉ có vị truyền thống, nhưng ngày nay, bánh pía Sóc Trăng đã biến tấu đa dạng với nhân kim sa tan chảy, nhân hạt sen, nhân dứa, hay cả phiên bản bánh pía chay. Không chỉ là thức quà vặt ngọt ngào của người dân miền Tây, bánh pía đã trở thành món đặc sản du lịch hàng đầu, theo chân các chuyến bay xuất khẩu đi khắp thế giới, mang hương vị trái cây nhiệt dới Việt Nam vươn xa.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_12.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=ldzJ4u6A9Xk",
                            text: " Cách làm BÁNH PÍA ĐẬU XANH SẦU RIÊNG TRỨNG MUỐI đặc sản Sóc Trăng... bạn nên thử",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Nước Mặn Quê Nhà",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh pía Sóc Trăng là một di sản ẩm thực tuyệt vời, kết tinh từ sự giao thoa văn hóa độc đáo giữa ba dân tộc Kinh – Hoa – Khmer tại vùng đất Nam Bộ. Với kỹ nghệ làm vỏ “lột da” xếp tầng tinh tế ôm trọn lấy phần nhân sầu riêng ngào ngạt và trứng muối béo ngậy, món bánh này không chỉ là thức quà ngọt ngào của miền Tây sông nước mà còn là biểu tượng đưa hương vị trái cây nhiệt đới Việt Nam tự hào vươn tầm quốc tế.  ",
                }
            },
            {
                imgId: "mlem_5",
                name: "Bún chả",
                thumb: "/images/mlem/thumb_5.jpg",
                article: {
                    title: "BÚN CHẢ",
                    subtitle: "Bún chả là một trong những món ăn lâu đời, giản dị nhưng lại sở hữu sức quyến rũ kỳ lạ, đại diện cho nét tinh tế trong ẩm thực hằng ngày của người dân Hà Nội. Món ăn này là sự kết hợp hài hòa giữa những miếng thịt nướng than hoa thơm phức, bát nước chấm chua ngọt ấm nóng và sự thanh mát của bún, rau sống. Sự nổi tiếng của bún chả không chỉ gói gọn trong những ngõ phố cổ rêu phong mà đã vươn tầm thế giới, từng vinh dự đón tiếp các nguyên thủ quốc gia và liên tục lọt top những món ăn đường phố ngon nhất hành tinh.",
                    heading1: "NGHỆ THUẬT CHẾ BIẾN VÀ KỸ NGHỆ NƯỚNG THỊT CỔ TRUYỀN ",
                    text1: "Linh hồn của bún chả nằm ở phần chả thịt được chế biến khéo léo từ thịt heo tươi ngon, luôn có sự xuất hiện song hành của hai loại: chả miếng (làm từ thịt ba chỉ thái lát mỏng vừa phải để không bị khô) và chả băm (làm từ thịt nạc vai xay nhuyễn, nặn thành viên tròn dẹt). Cả hai loại đều được tẩm ướp đậm đà với hành khô, nước mắm ngon, đường mật và chút nước hàng cốt dừa để tạo màu nâu cánh gián đẹp mắt. Điều làm nên mùi thơm “nức mũi” đặc trưng chính là kỹ nghệ nướng thịt trên bếp than củi rực hồng. Những miếng chả được xếp vào vỉ gang hoặc kẹp vào thanh tre già, được người thợ lật giở liên tục và quạt đều tay. Miếng chả đạt yêu cầu phải chín đều từ trong ra ngoài, bên ngoài hơi xém cạnh nhưng vẫn giữ được độ ẩm mọng, mềm mại.",
                    img1: "/images/mlem/detail_c_13.jpg",
                    source1: "Nguồn ảnh: Pasgo ",
                    heading2: "SỰ TINH TẾ CỦA BÁT NƯỚC CHẤM VÀ ĐỒ ĂN KÈM TRỌN VỊ",
                    text2: "Nước chấm bún chả Hà Nội là loại nước mắm pha loãng, được phục vụ khi còn ấm nóng với sự cân bằng hoàn hảo giữa các vị chua, cay, mặn, ngọt từ nước mắm, giấm thanh, đường và nước lọc. Thả mình trong bát nước chấm ấy là dưa góp làm từ đu đủ xanh và cà rốt cắt lát mỏng, giữ độ giòn sần sật. Những viên chả nóng hổi từ bếp nướng được thả trực tiếp vào bát nước chấm để hút trọn vị thanh nhẹ. Một suất bún chả đầy đủ không thể thiếu đĩa bún sợi nhỏ trắng muốt cùng rổ rau sống tươi ngon cầu kỳ gồm xà lách, rau muống chẻ, giá đỗ và các loại rau thơm như kinh giới, tía tô, húng lủi. Thực khách có thể tự tay thêm tỏi băm, ớt tươi hoặc tiêu đen xay sẵn trên bàn để kích thích vị giác theo khẩu vị riêng của mình.",
                    img2: "/images/mlem/detail_c_14.jpg",
                    source2: "Nguồn: Cao Giang Chef ",
                   
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_15.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=-nztfRZRxzw",
                            text: " BÚN CHẢ HÀ NỘI- Cách người Hà Nội ướp thịt và pha nước mắm chuẩn vị, thơm ngon.",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Rosemary Lado",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bún chả là nét chấm phá tinh tế, thanh lịch và lâu đời trong văn hóa ẩm thực của người dân thủ đô Hà Nội. Sự hòa quyện giữa những miếng chả băm, chả miếng nướng xém cạnh thơm nức mùi than củi đắm mình trong bát nước chấm chua ngọt ấm nóng, ăn kèm sợi bún rối thanh nhẹ chính là đỉnh cao của nghệ thuật cân bằng hương vị.  ",
                }
            },
            {
                imgId: "mlem_6",
                name: "Cháo lươn",
                thumb: "/images/mlem/thumb_6.jpg",
                article: {
                    title: "CHÁO LƯƠN NGHỆ AN",
                    subtitle: "Cháo lươn Nghệ An là một trong những món ăn đặc sản vang danh khắp ba miền, là niềm tự hào và là cái hồn ẩm thực độc đáo của vùng đất xứ Nghệ đầy nắng gió. Không thanh nhã nhẹ nhàng như các món cháo của miền Bắc, cháo lươn xứ Nghệ chinh phục thực khách bằng vị cay nồng xé lưỡi, vị ngọt đậm đà của thịt lươn đồng và hương thơm đặc trưng nồng nàn. Món ăn này phản ánh chính xác tính cách mạnh mẽ, bộc trực nhưng vô cùng ấm áp, đậm tình đậm nghĩa của con người nơi đây.",
                    heading1: "NGUỒN GỐC ĐẶC SẢN ĐẤT THÀNH VINH VÀ NGHỆ THUẬT TUYỂN CHỌN LƯƠN ĐỒNG XỨ NGHỆ ",
                    text1: `Theo truyền thuyết dân gian, bánh chưng có lịch sử từ thời Vua Hùng Vương thứ 6, do hoàng tử Lang Liêu sáng tạo ra nhằm thể hiện lòng hiếu thảo và sự tôn kính với cha ông. Chiếc bánh hình vuông tượng trưng cho Đất (theo quan niệm Trời tròn Đất vuông ngày trước), ôm trọn nguồn sản vật nông nghiệp quý giá của nền văn minh lúa nước. Trải qua hàng ngàn năm lịch sử, bánh chưng không chỉ đơn thuần là một món ăn mà đã trở thành biểu tượng văn hóa bất diệt, linh hồn không thể thiếu trên bàn thờ gia tiên của người Việt mỗi khi Tết đến, Xuân về.
                    Để làm nên một chiếc bánh chưng xanh vuông vắn, dẻo thơm đúng chuẩn, người gói phải cực kỳ khắt khe trong khâu lựa chọn những sản vật mộc mạc từ làng quê. Gạo gói bánh bắt buộc phải là nếp cái hoa vàng hạt tròn đều, mẩy căng, đem vo sạch và ngâm đủ nước để khi luộc bánh đạt độ dẻo quánh. Nhân bánh là sự kết hợp của đậu xanh loại ngon, tơi xốp, bỏ vỏ, hấp chín và đánh nhuyễn, cùng với những miếng thịt ba chỉ heo có cả nạc lẫn mỡ để tạo độ béo ngậy. Thịt heo được ướp đậm đà với thật nhiều tiêu đen xay mịn và nước mắm cốt ngon. Cuối cùng, chiếc áo bọc ngoài của bánh phải là những chiếc lá dong rừng tươi sắc xanh mướt, không quá non cũng không quá già, kết hợp với những sợi lạt tre mỏng manh nhưng dẻo dai để định hình khối bánh.`,
                    img1: "/images/mlem/detail_c_16.jpg",
                    source1: "Nguồn ảnh: Vinwonders ",
                    heading2: "QUY TRÌNH CHẾ BIẾN TỈ MỈ, HƯƠNG VỊ CAY NỒNG VÀ NGHỆ THUẬT THƯỞNG THỨC ĐỘC ĐÁO",
                    text2: " Sau khi thịt lươn được lọc ra vuông vức, người đầu bếp bước vào công đoạn xào lươn và nấu cháo kỳ công để định hình nên hương vị đặc sắc. Thịt lươn được đem xào đậm đà cùng với hành tăm (củ nén) – một loại gia vị độc bản của miền Trung có mùi thơm nồng nàn, kết hợp cùng nước cốt nghệ tươi để tạo màu vàng óng bẩy, chút bột ớt cay và mỡ lợn bí truyền. Người thợ phải đảo thật nhẹ tay trên lửa lớn để miếng lươn chín tới, thấm đẫm gia vị mà không bị nát, giữ nguyên độ dai mềm dẻo dai. Trong khi đó, phần xương lươn được giã nhuyễn, lọc lấy nước cốt ngọt lịm để dùng làm nước nấu cháo. Gạo nấu cháo phải trộn cả gạo tẻ và một chút gạo nếp, đem ninh thật kỹ cho đến khi hạt gạo nở bung, sánh mịn nhưng không quá đặc, tạo nên một lớp nền hoàn hảo.",
                    img2: "/images/mlem/detail_c_17.jpg",
                    source2: "Lựa chọn và chế biến lươn (Nguồn: Elmic)",
                      text3: `Khi múc ra bát, một hương vị nồng nàn, bùng nổ lập tức đánh thức mọi giác quan của thực khách. Trên nền cháo trắng mịn màng, người bán sẽ rưới lên những miếng lươn vàng óng cùng làn nước sốt màu đỏ cam cay nồng, điểm xuyết thêm thật nhiều hành lá cắt nhỏ và rau răm xanh mướt. Khi thưởng thức, bạn sẽ cảm nhận được vị ngọt đậm đà, săn chắc của thịt lươn, vị béo ngậy của cháo ninh xương, hòa quyện với cái cay tê râm ran đặc trưng của ớt, tiêu và mùi hương nồng nàn không thể trộn lẫn của rau răm cùng hành tăm cháy xém.
                    Nét đặc sắc của cháo lươn Nghệ An còn gắn liền với nghệ thuật thưởng thức vô cùng phóng khoáng và độc đáo. Người sành ăn xứ Nghệ khi ăn cháo lươn không thể thiếu một chiếc bánh mỳ chuột nướng giòn rụm hoặc một chiếc bánh mướt (một loại bánh cuốn làm từ bột gạo tráng mỏng, không nhân) để nhúng ngập vào bát cháo cay. Cái giòn rụm của bánh mỳ hay cái mềm mướt, thanh mát của bánh gạo thấm đượm làn nước sốt lươn cay nồng, tạo nên một sự kết hợp cấu trúc và hương vị vô cùng trọn vẹn, để lại hậu vị ấm áp, khó quên trong lòng thực khách.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_18.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=0ilqpXyEeeeH-8Wp&v=tKf9qLDhaHk&feature=youtu.be",
                            text: " CHÁO LƯƠN XỨ NGHỆ, CÁCH NẤU ĐÚNG BỊ LÃNG QUÊN ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube HẢI - ĐÔNG DƯƠNG MART",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Cháo lươn Nghệ An là thức quà nồng nàn, đậm đà và sâu lắng, mang đậm dấu ấn miền quê xứ Nghệ. Vị cay xé lưỡi, sắc vàng của nghệ, mùi thơm của hành tăm hòa cùng hạt gạo nở bung bốc khói không chỉ đánh thức mọi giác quan, mà còn sưởi ấm tâm hồn thực khách bằng tình cảm bộc trực, nồng hậu của con người nơi đây. ",
                }
            },
            {
                imgId: "mlem_7",
                name: "Cơm tấm",
                thumb: "/images/mlem/thumb_7.jpg",
                article: {
                    title: "CƠM TẤM SÀI GÒN",
                    subtitle: "Cơm tấm là món ăn bình dân, thân thuộc và là biểu tượng ẩm thực không thể thay thế của mảnh đất Sài Gòn nói riêng cũng như người dân Nam Bộ nói chung. Khởi nguồn từ một món ăn “nhà nghèo” tận dụng những hạt gạo vỡ trong quá trình xay xát, cơm tấm đã có một cuộc lột xác ngoạn mục để trở thành món đặc sản phổ biến bậc nhất, xuất hiện từ những góc hẻm lao động cho đến các nhà hàng sang trọng, chinh phục mọi tầng lớp thực khách trong và ngoài nước.",
                    heading1: "NGUỒN GỐC TỪ THỨC QUÀ NHÀ NGHÈO ĐẾN BIỂU TƯỢNG ĐÔ THỊ VÀ HẠT GẠO TẤM ĐỘC BẢN",
                    text1: `Nguồn gốc của cơm tấm gắn liền với tầng lớp lao động nghèo ở vùng đồng bằng sông Cửu Long và sầm uất nhất là đất Sài Gòn từ giữa thế kỷ XX. Ban đầu, "tấm" là những mảnh vụn của hạt gạo bị vỡ nát trong quá trình xay sàng, thường bị coi là phế phẩm và chỉ dùng cho gia súc hoặc tích trữ trong những mùa giáp hạt đói kém. Thế nhưng, bằng sự chắt chiu và bộ óc sáng tạo của những người lao động bình dân, hạt gạo vỡ ấy đã được đem đồ chín, kết hợp với các nguyên liệu dễ tìm để tạo nên một món ăn chắc bụng. Theo dòng lịch sử và sự giao thoa văn hóa ẩm thực Hoa - Pháp - Việt tại đô thị Sài Gòn, cơm tấm đã trải qua một cuộc lột xác ngoạn mục, bước từ góc hẻm lao động vào các nhà hàng rực rỡ ánh đèn, trở thành biểu tượng ẩm thực không thể thay thế của thành phố này.
                    Điểm làm nên bản sắc độc nhất vô nhị không thể trộn lẫn của món ăn chính là hạt gạo tấm. Gạo tấm sau khi tuyển chọn kỹ sẽ được ngâm nước rồi đem hấp cách thủy (đồ) trong những chiếc xửng lớn thay vì nấu bằng nồi thông thường. Kỹ nghệ canh lửa và nước của người nấu phải cực kỳ chuẩn xác để hạt tấm chín tới, nở đều nhưng không bị nát hay nhão, tạo nên kết cấu hạt cơm tơi xốp, hơi khô sần nhẹ đầy thú vị khi nhai nhưng vẫn giữ được độ ẩm mềm dẻo mịn bùi đặc trưng. Hương thơm mộc mạc từ nồi cơm tấm bốc khói nghi ngút chính là lớp nền hoàn hảo để tôn vinh bộ tứ nguyên liệu ăn kèm đồ sộ phía trên.`,
                    img1: "/images/mlem/detail_c_19.jpg",
                    source1: "Nguồn: Báo thanh niên ",
                    heading2: "BỘ TỨ SƯỜN BÌ CHẢ TRỨNG HOÀN HẢO VÀ NGHỆ THUẬT GIA GIẢM GIA VỊ ĐẶC TRƯNG",
                    text2: "Một đĩa cơm tấm Sài Gòn đúng nghĩa là một “bữa tiệc” màu sắc và hương vị nhờ sự xuất hiện song hành của bộ tứ nguyên liệu trứ danh: Sườn, Bì, Chả, Trứng. Linh hồn thúc đẩy khứu giác thực khách từ xa chính là miếng sườn heo (thịt cốt lết hoặc sườn cọng) được tẩm ướp đậm đà với mật ong, hành tỏi băm, nước mắm và chút dầu hào bí truyền, rồi đem nướng trên bếp than củi đỏ rực cho đến khi cháy xém cạnh, vàng ruộm và mọng ướt mỡ hành. Sóng đôi với sườn là phần bì heo dai giòn sần sật, được làm từ da heo luộc chín xắt sợi mảnh như tơ, trộn đều với thịt nạc ram cắt nhỏ và thính gạo rang vàng thơm phức. Mảnh ghép tiếp theo là chả trứng (chả chưng) vuông vức dẻo bùi làm từ thịt băm, trứng gà, bún tàu và mộc nhĩ, bề mặt phủ một lớp lòng đỏ trứng vàng óng bắt mắt. Cuối cùng, một quả trứng ốp la lòng đào dẻo chảy rưới mỡ hành lên trên cùng sẽ hoàn thiện tổng thể đĩa cơm đầy phóng khoáng.",
                    img2: "/images/mlem/detail_c_20.jpg",
                    source2: "Nguồn ảnh: VnExpress ",
                      text3: "Hương vị cơm tấm sẽ không thể đạt đến độ bùng nổ vị giác tối đa nếu thiếu đi hai “vũ khí bí mật” đi kèm là mỡ hành và chén nước mắm ngọt sánh kẹo. Người bán thường rưới một muỗng mỡ hành xanh mướt mát, thơm lừng hòa quyện cùng những tóp mỡ chiên giòn rụm béo ngậy lên đĩa cơm để kích thích vị giác. Ăn kèm không thể thiếu đĩa đồ chua làm từ củ cải trắng, cà rốt bào sợi và dưa leo xắt mỏng để trung hòa vị béo. “Đòn bẩy” quyết định sự thành bại của đĩa cơm chính là chén nước mắm chua ngọt pha theo công thức đặc kẹo của người Nam Bộ. Nước mắm có độ sánh như mật ong, vị ngọt đậm đà, mặn mà vừa phải và nổi váng tỏi ớt băm đỏ au trên bề mặt. Khi thưởng thức, thực khách rưới đều nước mắm lên đĩa cơm, trộn lẫn các nguyên liệu để cảm nhận trọn vẹn sự hòa quyện tinh tế giữa vị ngọt béo, mặn mòi và chua thanh mát lành.",
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_21.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=xr9dWR7PaZiSCqGo&v=cJu6tFJe_Gc&feature=youtu.be",
                            text: " [ENG SUB] Bí Quyết ướp Sườn Nướng Cơm Tấm mềm thơm ngon hảo hạng | Grilled Pork Chop Recipe",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cô Ba Bình Dương",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Cơm tấm là biểu tượng ẩm thực vươn lên từ gian khó, đại diện cho nhịp sống năng động, hào sảng và phóng khoáng của Sài Gòn. Bộ ba “sườn - bì - chả” quyện cùng nước mắm kẹo thần thánh đã đưa đĩa cơm từ chốn lao động nghèo khó bước vào bản đồ đặc sản thượng hạng, chinh phục mọi tầng lớp thực khách.  ",
                }
            },
            {
                imgId: "mlem_8",
                name: "Cốm Mễ Trì",
                thumb: "/images/mlem/thumb_8.jpg",
                article: {
                    title: "CỐM MỄ TRÌ",
                    subtitle: "Cốm Mễ Trì là một thức quà thanh nhã, mang đậm nét tinh túy của văn hóa ẩm thực Hà Thành bên cạnh làng cốm Vòng nổi tiếng. Nằm ở phía Tây Nam thủ đô, làng nghề Mễ Trì (nay thuộc quận Nam Từ Liêm, Hà Nội) đã có lịch sử làm cốm hàng trăm năm. Khác với sự kiêu kỳ của cốm Vòng, cốm Mễ Trì mang một vẻ đẹp mộc mạc, bình dị và gắn liền với hương vị ngọt ngào, thơm dịu của những hạt “ngọc trời” mỗi độ thu về.",
                    heading1: "LỊCH SỬ, Ý NGHĨA TÊN GỌI VÀ QUY TRÌNH CHẾ BIẾN KỲ CÔNG CỦA LÀNG NGHỀ ",
                    text1: `Theo các bậc cao niên trong làng kể lại, nghề làm cốm Mễ Trì đã có từ thời nhà Lý. Tên gọi "Mễ Trì" có nghĩa là "ao gạo", xuất phát từ việc vùng đất này ngày xưa nổi tiếng có nhiều ao hồ và thổ nhưỡng tuyệt vời để trồng các loại lúa nếp tiến vua, đặc biệt là nếp cái hoa vàng. Trải qua bao thăng trầm của lịch sử và quá trình đô thị hóa mạnh mẽ, người dân Mễ Trì vẫn giữ lửa nghề truyền thống, biến nơi đây thành một trong những cái nôi sản xuất cốm lớn nhất thủ đô, cung cấp thức quà xanh non này đi khắp mọi miền tổ quốc.
                    Để tạo nên danh tiếng lâu đời ấy, người thợ Mễ Trì phải thực hiện một quy trình hoàn toàn thủ công và cực kỳ tỉ mỉ để làm ra những hạt cốm xanh non, dẻo thơm. Lúa non sau khi gặt về phải đem tuốt lấy hạt, chọn lọc bỏ những hạt lép rồi cho vào chảo gang để rang. Quá trình rang cốm là khâu quan trọng nhất, người thợ phải canh lửa củi thật đều, đảo tay liên tục để hạt thóc chín đều mà không bị nứt hay cháy. Thóc rang xong để nguội rồi đem vào cối giã; cứ giã một lượt lại đem sàng sảy để lọc bỏ vỏ trấu, quy trình này phải lặp đi lặp lại từ 5 đến 7 lần mới cho ra được mẻ cốm đạt độ dẻo và mỏng ưng ý.`,
                    img1: "/images/mlem/detail_c_22.jpg",
                    source1: "Nguồn ảnh: HTV - Đài Hà Nội ",
                    heading2: "HƯƠNG VỊ TỰ NHIÊN, CÁC THỨC QUÀ BIẾN TẤU VÀ GIÁ TRỊ VĂN HÓA BỀN BỈ",
                    text2: ` Sau khi trải qua các công đoạn chế biến khắt khe, sản phẩm hoàn chỉnh mang những nét đặc trưng rất riêng biệt để thực khách sành ăn dễ dàng nhận biết. Hạt cốm Mễ Trì thường mỏng, dẻo và có màu xanh mát mắt như màu lá mạ tự nhiên, chứ không đậm màu như cốm đã qua xử lý phẩm nhuộm. Khi thưởng thức, bạn sẽ cảm nhận được vị ngọt thanh đậm đà của tinh bột lúa nếp non, quyện cùng mùi thơm thoang thoảng của hương cốm mới. Đặc biệt, cốm ở đây thường được bọc trong hai lớp lá: lớp bên trong là lá khoai môn để giữ độ ẩm giúp cốm không bị khô, lớp bên ngoài là lá sen thấm đượm hương thơm thanh khiết của đầm sen mùa hạ.
                    Từ hương vị cốm tươi mộc mạc ban đầu, người dân nơi đây còn sáng tạo ra rất nhiều món ăn hấp dẫn khác nhằm làm phong phú thêm ẩm thực Hà thành. Chúng ta có thể kể đến món chả cốm béo ngậy ăn kèm bún đậu mắm tôm, xôi cốm hạt sen dẻo bùi thơm phức thường xuất hiện trong các dịp lễ Tết, hay bánh cốm đậu xanh ngọt ngào - thức quà cưới hỏi không thể thiếu của người miền Bắc. Ngoài ra, chè cốm lá dứa hay kem cốm cũng là những món ăn chơi giải nhiệt được giới trẻ vô cùng yêu thích mỗi khi mùa thu chạm ngõ Hà Nội.
                    Chính nhờ sự phong phú và nét đẹp tinh túy đó, vào năm 2019, nghề làm cốm Mễ Trì đã vinh dự được Bộ Văn hóa, Thể thao và Du lịch đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia. Danh hiệu này không chỉ là sự ghi nhận đối với một món ăn ngon, mà còn là sự tôn vinh đối với bàn tay khéo léo và tấm lòng giữ gìn bản sắc cội nguồn của các nghệ nhân làng nghề. Giữa nhịp sống hiện đại hối hả, tiếng chày giã cốm thịch thình vang lên mỗi sớm mai tại Mễ Trì như một nét chấm phá bình yên, lưu giữ trọn vẹn nét thanh lịch và hồn cốt của mảnh đất kinh kỳ.`,
                    img2: "/images/mlem/detail_c_23.jpg",
                    source2: "Cốm Mễ Trì - đặc sản của Thủ đô (Ảnh: ĐCSVN) ",
                   
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_24.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=A-BIQnCMvLupKCYZ&v=iO626uNnlCw&feature=youtu.be",
                            text: " Khám phá cốm Mễ Trì nổi tiếng, tìm ra hương cốm Hà Nội",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube HTV - Đài Hà Nội",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Cốm Mễ Trì là thức quà thanh nhã, gói trọn hương sắc tinh khôi của mùa thu Hà Nội và linh hồn của đồng quê Bắc Bộ. Từng hạt cốm xanh mướt, dẻo thơm thoang thoảng mùi lúa nếp non dại không chỉ là một món ăn chơi, mà là biểu tượng của sự trân quý hạt ngọc trời và nét văn hóa thưởng thức chậm rãi, đầy chất thơ của người tràng an.  ",
                }
            },
            {
                imgId: "mlem_9",
                name: "Gỏi cuốn",
                thumb: "/images/mlem/thumb_9.jpg",
                article: {
                    title: "GỎI CUỐN",
                    subtitle: "Gỏi cuốn là một trong những món ăn chơi, món khai vị thanh nhã và phổ biến bậc nhất trong đời sống ẩm thực của người dân miền Nam nói riêng và Việt Nam nói chung. Đi ngược lại với những món ăn chiên rán nhiều dầu mỡ, gỏi cuốn chinh phục thực khách bởi sự tươi mát, nhẹ nhàng của các loại rau sống kết hợp cùng vị ngọt tự nhiên của tôm thịt. Sự tinh tế và cân bằng dinh dưỡng tuyệt vời đã giúp món ăn này được chuyên trang ẩm thực CNN vinh danh trong top những món ăn ngon nhất thế giới.",
                    heading1: "NGUỒN GỐC DÂN DÃ, NGHỆ THUẬT LỰA CHỌN VÀ SẮP XẾP NGUYÊN LIỆU TINH TÚY ",
                    text1: `Gỏi cuốn (hay còn được gọi là nem cuốn ở miền Bắc) là một món ăn thanh nhã có nguồn gốc từ đời sống dân dã của người dân Nam Bộ. Xuất phát từ sở thích ăn uống chuộng sự tươi mát, kết hợp hài hòa giữa các sản vật tự nhiên của vùng sông nước trù phú, người miền Nam đã sáng tạo ra một món cuốn không qua chiên rán dầu mỡ. Trải qua thời gian, gỏi cuốn đã vượt qua ranh giới của một món ăn chơi gia đình để xuất hiện khắp mọi nơi, từ các gánh hàng rong vỉa hè cho đến những nhà hàng sang trọng, trở thành một nét chấm phá đặc sắc đại diện cho sự cân bằng và tinh tế của ẩm thực Việt Nam.
                    Để làm nên một chiếc gỏi cuốn đúng chuẩn, khâu lựa chọn và sơ chế các nguyên liệu đòi hỏi một sự khắt khe nhằm đảm bảo cả hương vị lẫn thẩm mỹ visual. Thành phần chính bao gồm thịt heo và tôm tươi. Thịt heo phải chọn loại thịt ba chỉ hoặc thịt đùi có lớp mỡ và nạc vừa phải, đem luộc chín tới cùng chút hành củ để giữ độ ngọt mọng rồi thái lát mỏng. Tôm phải là tôm đất hoặc tôm thẻ tươi sống, luộc đỏ au, lột vỏ và xẻ đôi dọc theo sống lưng. Lớp nền bên trong là bún sợi nhỏ trắng muốt cùng rổ rau sống đa dạng đậm chất miệt vườn gồm xà lách, rau thơm (húng quế, húng lủi), giá đỗ tươi và những cọng hẹ xanh mướt cắt dài. Chiếc áo bọc ngoài ôm trọn tinh hoa ấy là lớp bánh tráng dẻo dai, mỏng dính nhưng không dễ rách khi thấm nước.`,
                    img1: "/images/mlem/detail_c_25.jpg",
                    source1: "Nguồn: Cô Ba Bình Dương ",
                    heading2: "KỸ NGHỆ CUỐN KHÉO LÉO, TINH TÚY NƯỚC CHẤM VÀ DANH TIẾNG QUỐC TẾ",
                    text2: ` Khi các nguyên liệu đã sẵn sàng, người thợ tiến hành công đoạn cuốn bánh đòi hỏi sự khéo léo và một mắt thẩm mỹ tinh tế. Người ta trải phẳng chiếc bánh tráng đã thấm sơ qua nước cho mềm, lần lượt xếp lớp xà lách, bún, rau thơm, giá đỗ và thịt heo lên trên. Sau khi cuộn được một vòng cố định, ba con tôm luộc đỏ au sẽ được xếp thành một hàng ngang ngăn nắp, tiếp tục cuộn lại và điểm xuyết thêm vài cọng hẹ ló ra ngoài phần đuôi cuốn. Một chiếc gỏi cuốn đạt chuẩn phải chắc tay, các nguyên liệu lộ ra dưới lớp vỏ bánh tráng trong suốt tạo nên một "bữa tiệc" màu sắc vô cùng ngon mắt với sắc đỏ của tôm, sắc xanh của hẹ rau và sắc trắng muốt của bún.
                    Sự hoàn hảo của gỏi cuốn sẽ không thể trọn vẹn nếu thiếu đi "linh hồn" kết nối là các loại nước chấm độc bản, kích thích vị giác tối đa. Nước chấm gỏi cuốn truyền thống của người miền Nam là tương tương hột (tương đậu nành) được xay nhuyễn, đem xào thơm cùng tỏi băm, nước cốt dừa và gan heo chín tạo nên một hỗn hợp sánh đặc, béo ngậy. Nước tương dọn ra luôn ấm nóng, có vị ngọt mặn dịu dàng, được rưới thêm một muỗng đậu phộng rang giã nhỏ, đồ chua và chút tương ớt cay nồng. Bên cạnh tương đậu phộng, gỏi cuốn cũng thường được thưởng thức cùng một chén nước mắm chua ngọt pha chế tinh tế với tỏi ớt, phù hợp với gu ẩm thực phong phú của từng thực khách.`,
                    img2: "/images/mlem/detail_c_26.jpg",
                    source2: "Nguồn ảnh internet",
                      text3: "Chính nhờ sự thanh mát, tốt cho sức khỏe và cấu trúc hương vị quyến rũ vượt thời gian đó đã đưa gỏi cuốn đạt danh tiếng lẫy lừng trên đấu trường quốc tế. Món ăn này đã vinh dự lọt top những món ăn ngon nhất hành tinh do hãng thông tấn uy tín CNN và các chuyên trang ẩm thực hàng đầu thế giới bình chọn. Trong bối cảnh ẩm thực hiện đại hướng tới sự cân bằng dinh dưỡng, ít dầu mỡ và giữ nguyên vị tươi ngọt tự nhiên của thực phẩm, gỏi cuốn Việt Nam tự hào đứng vững như một biểu tượng văn hóa thanh nhã, là niềm kiêu hãnh của đất nước khi giới thiệu đến bạn bè năm châu.",
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_27.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=w34Qnc-9KBU",
                            text: " [ENG SUB] Gỏi Cuốn Tôm Thịt Tươi Ngon, Bí Quyết Pha Nước Chấm Chuẩn Vị Miền Nam | Spring Roll Recipe",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cô Ba Bình Dương",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Gỏi cuốn là đại sứ hoàn hảo cho xu hướng ẩm thực lành mạnh, thanh nhã và cân bằng dinh dưỡng của Việt Nam trên trường quốc tế. Sự tươi mát của rau rừng, vị ngọt tự nhiên của tôm thịt luộc kết hợp cùng nước sốt tương đậu phộng đậm đà đã tạo nên một món ăn chơi tinh tế, ăn hoài không ngán. ",
                }
            },
            {
                imgId: "mlem_10",
                name: "Hủ tiếu",
                thumb: "/images/mlem/thumb_10.jpg",
                article: {
                    title: "HỦ TIẾU",
                    subtitle: "Hủ tiếu là một món ăn bình dân, thân thuộc nhưng lại mang sức sống vô cùng mãnh liệt, được xem là biểu tượng đặc trưng nhất của nền văn hóa ẩm thực Nam Bộ. Nếu miền Bắc có phở, miền Trung có bún bò thì người miền Nam có hủ tiếu cho mỗi bữa sáng hối hả hay những buổi đêm dọc mỏm quán vỉa hè. Món ăn này là sự phản ánh chân thực cho tính cách phóng khoáng, cởi mở và dung hòa của con người phương Nam, từ một món ăn ngoại nhập trở thành một phần di sản không thể tách rời.",
                    heading1: "NGUỒN GỐC BẢN ĐỊA HÓA KỲ DIỆU VÀ NÉT ĐẶC TRƯNG CỦA SỢI BÁNH, NƯỚC DÙNG",
                    text1: `Hủ tiếu vốn có nguồn gốc từ người Triều Châu (Trung Quốc), được du nhập vào miền Nam Việt Nam từ những năm đầu thế kỷ XX qua ngả các thương cảng sầm uất. Từ ngữ "hủ tiếu" có gốc từ tiếng Tiều. Tuy nhiên, khi định cư tại vùng đất Tây Nam Bộ trù phú, món ăn này đã trải qua một quá trình bản địa hóa mạnh mẽ. Người Việt đã thay đổi công thức làm sợi bánh từ bột mì sang bột gạo, thay nước dùng gốc bằng nước ninh xương ống heo và mực nướng theo gu ăn uống thích vị ngọt thanh của mình, biến một món ăn gốc Hoa thành một đặc sản mang đậm dấu ấn và tâm hồn của người miền Nam.
                    Yếu tố đầu tiên định hình nên bản sắc độc đáo của hủ tiếu Nam Bộ chính là sợi bánh, đặc biệt là hủ tiếu Mỹ Tho hay hủ tiếu Sa Đéc. Sợi bánh có kích thước nhỏ, mảnh, được chế biến từ gạo tẻ ngon của vùng đồng bằng sông Cửu Long. Qua đôi bàn tay khéo léo của các nghệ nhân làng nghề, bánh hủ tiếu khi phơi khô và trụng sơ qua nước sôi sẽ cho ra một kết cấu vô cùng đặc biệt: vừa dai dẻo, hơi sần sật nhẹ chứ không mềm bở như bánh phở, cũng không quá cứng, giúp thấm hút nước dùng một cách hoàn hảo.
                    Song hành với sợi bánh độc đáo ấy, nước dùng chính là linh hồn giữ chân thực khách của một tô hủ tiếu ngon. Không giống như phở dùng nhiều thảo mộc nướng, nước dùng hủ tiếu Nam Bộ được ninh hoàn toàn từ xương ống heo loại ngon trong nhiều giờ liền để lấy vị ngọt tự nhiên sâu lắng. Người nấu thường cho thêm củ cải trắng, hành tây, tôm khô và đặc biệt là mực khô nướng chín để tạo cho nồi nước dùng một mùi thơm nức mũi và vị ngọt thanh đặc trưng của miền biển. Nước lèo đạt chuẩn phải trong vắt, không bị đục và váng mỡ được tiết chế vừa phải để không gây ngấy.`,
                    img1: "/images/mlem/detail_c_28.jpg",
                    source1: "Nguồn ảnh: Unilever Food Solutions  ",
                    heading2: "SỰ PHONG PHÚ CỦA PHẦN NHÂN, ĐỒ ĂN KÈM VÀ CÁC BIẾN TẤU TRỨ DANH",
                    text2: ` Sự hòa quyện giữa sợi bánh dẻo dai và làn nước dùng trong vắt làm nền tảng cho phần nhân đồ sộ, đa dạng được sắp xếp vô cùng phóng khoáng và ngon mắt. Trên lớp sợi bánh trắng muốt là những lát thịt heo luộc thái mỏng, thịt băm (thịt nạc xay nhỏ nhuyễn), tôm tươi bóc vỏ, gan heo, tim heo và trứng cút lòng đào dẻo bùi. Một số nơi còn cho thêm vài lát xá xíu đỏ hồng hoặc miếng sườn heo chặt khúc ninh mềm. Màu sắc sặc sỡ của các loại nguyên liệu hòa cùng váng dầu hành phi vàng ruộm tạo nên một tổng thể vô cùng kích thích vị giác.
                    Để hương vị hủ tiếu đạt đến sự trọn vẹn, người thợ luôn điểm xuyết hai "vũ khí bí mật" là hành phi và tóp mỡ cùng rổ rau sống đi kèm. Người bán thường rắc một muỗng hành tím phi vàng giòn và những viên tóp mỡ chiên giòn rụm béo ngậy lên trên cùng để làm dậy mùi thơm. Đi kèm với hủ tiếu là một rổ rau sống đậm chất Nam Bộ bao gồm giá đỗ tươi, rau cần tây xắt khúc, hẹ lá xanh mướt và rau tần ô (cải cúc) hoặc xà lách. Sự tươi mát, giòn sần sật của các loại rau giúp cân bằng lại vị béo của thịt mỡ và nước dùng.`,
                    img2: "/images/mlem/detail_c_29.jpg",
                    source2: "Nguồn ảnh: Foody",
                      text3: `Từ nền tảng nguyên liệu phong phú đó, hủ tiếu Nam Bộ phục vụ thực khách dưới hai hình thức thưởng thức vô cùng độc đáo là hủ tiếu nước và hủ tiếu khô. Với phiên bản hủ tiếu nước truyền thống, tất cả nguyên liệu được chan ngập trong làn nước dùng nóng hổi, bốc khói nghi ngút. Trong khi đó, hủ tiếu khô lại là một trải nghiệm tinh tế khác: sợi hủ tiếu sau khi trụng được trộn đều với một loại nước sốt hắc xì dầu (tương đen) pha chế theo công thức riêng của mỗi quán, tạo vị ngọt mặn đậm đà, khi ăn thực khách sẽ nhâm nhi kèm một chén nước dùng riêng bên cạnh.
                    Theo dòng phát triển, món ăn này đã hình thành nên những thương hiệu trứ danh trải dài khắp vùng đất, gắn liền với địa danh vùng miền. Nhắc đến hủ tiếu, người ta không thể không nhớ đến hủ tiếu Mỹ Tho (Tiền Giang) nổi tiếng với sợi bánh dai giòn trứ danh; hủ tiếu Sa Đéc (Đồng Tháp) với sợi bánh to, trắng mịn và nước sốt khô đậm đà; hay hủ tiếu Nam Vang mang đậm dấu ấn giao thoa văn hóa giữa Việt Nam - Campuchia với sự xuất hiện bắt buộc của thịt băm và lòng heo. Dù ở phiên bản nào, hủ tiếu vẫn luôn là một nét chấm phá tuyệt vời trong đời sống văn hóa ẩm thực Việt.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_30.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=NFVlp-0psyYlrcXM&v=fziqSn-xkws&feature=youtu.be",
                            text: " [ENG SUB] Bí quyết HỦ TIẾU NAM VANG thơm ngon đậm đà đơn giản dễ hiểu | Best noodle soup ever",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cô Ba Bình Dương",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Hủ tiếu là minh chứng sống động cho tinh thần cởi mở, dung hòa và khả năng bản địa hóa tuyệt vời của văn hóa Nam Bộ. Từ một món ăn ngoại nhập, hủ tiếu đã lột xác hoàn toàn bằng hương vị ngọt thanh từ biển cả, đồng quê và sợi bánh dai dẻo trứ danh, trở thành linh hồn của những buổi sớm hè hay đêm muộn phương Nam.  ",
                }
            },
            {
                imgId: "mlem_11",
                name: "Kẹo dừa",
                thumb: "/images/mlem/thumb_11.jpg",
                article: {
                    title: "KẸO DỪA",
                    subtitle: "Kẹo dừa là một thức quà quê ngọt ngào, bình dị và là biểu tượng ẩm thực gắn liền với hình ảnh xứ sở của những rặng dừa bạt ngàn – tỉnh Bến Tre. Khởi nguồn từ một món ăn chơi trong gia đình vào các dịp lễ Tết, kẹo dừa đã nương theo dòng chảy thời gian để trở thành một ngành nghề thủ công truyền thống, một món đặc sản miền Tây danh tiếng, mang hương vị ngọt ngào của nước cốt dừa Việt Nam vươn tầm thế giới.",
                    heading1: "LỊCH SỬ HÌNH THÀNH VÀ NGHỆ THUẬT TUYỂN CHỌN NGUYÊN LIỆU ĐẶC SẢN ",
                    text1: `Món kẹo dừa đầu tiên được cho là xuất hiện vào khoảng năm 1930 tại huyện Mỏ Cày, tỉnh Bến Tre, do bà Nguyễn Thị Ngọc tạo ra dựa trên cách nấu mạch nha truyền thống. Ban đầu, kẹo được gọi là "kẹo Mỏ Cày". Về sau, nhờ sự khéo léo của người dân trong việc cải tiến công thức và khai thác nguồn tài nguyên dừa phong phú tại địa phương, nghề làm kẹo dừa đã lan rộng ra khắp tỉnh Bến Tre và khu vực lân cận, tạo nên một thương hiệu đặc sản vững chắc trong lòng người tiêu dùng.
                    Để tạo nên hương vị thơm ngon đặc biệt xứng danh đặc sản vùng miền, kẹo dừa Bến Tre đòi hỏi sự kết hợp khéo léo giữa các nông sản được tuyển chọn khắt khe từ vùng đồng bằng sông Cửu Long. Đầu tiên là quả dừa, người thợ phải chọn những trái dừa "rám vàng" (dừa vừa khô tới), không quá non cũng không quá già để cho lượng nước cốt nhiều nhất, mang độ béo ngậy đậm đặc và vị ngọt tự nhiên tinh túy. Tiếp đến là mạch nha, được chế biến từ hạt nếp đại mạch (nếp tốt) cho lên mầm rồi đem nấu lấy chất đường phèn tự nhiên, đảm bảo độ dẻo quánh, có màu vàng sậm tự nhiên cùng vị ngọt thanh nhẹ. Cuối cùng, loại đường cát trắng tinh luyện loại ngon được sử dụng để kết dính hoàn hảo các nguyên liệu này lại với nhau.`,
                    img1: "/images/mlem/detail_c_31.jpg",
                    source1: "Nguồn ảnh: Traveloka ",
                    heading2: "QUY TRÌNH CHẾ BIẾN GIAN NAN, HƯƠNG VỊ TINH TẾ VÀ CÁC BIẾN TẤU HIỆN ĐẠI",
                    text2: "Từ những nguyên liệu đặc sản tuyển chọn đó, người thợ bước vào quy trình nấu kẹo gian nan đòi hỏi sự kiên nhẫn và kinh nghiệm lâu năm. Cơm dừa sau khi xay nhuyễn sẽ được ép lấy nước cốt đặc, rồi đem hòa trộn cùng mạch nha và đường theo một tỷ lệ vàng nghiêm ngặt trước khi cho vào những chiếc chảo lớn để sên (ngào) kẹo. Ngày trước, người thợ phải dùng tay khuấy đều liên tục trên bếp củi suốt nhiều tiếng đồng hồ cho đến khi hỗn hợp kẹo dẻo quánh lại và chuyển sang màu vàng mật ong. Khi kẹo đạt độ chín, người ta đổ kẹo ra khuôn đã bôi trơn bằng dầu dừa, cán phẳng, đợi nguội rồi cắt thành từng viên nhỏ vuông vức. Điểm độc đáo nhất của kẹo dừa Bến Tre là sự tinh tế của lớp bánh tráng rế (giấy tan) mỏng dính làm từ bột mì dùng để bọc từng viên kẹo trước khi gói vỏ giấy bên ngoài. Lớp bánh tráng này giúp hút ẩm, giữ kẹo không bị chảy nước dính vào vỏ và có thể ăn trực tiếp, tạo cảm giác tan từ từ trong miệng rất thú vị.",
                    img2: "/images/mlem/detail_c_32.jpg",
                    source2: "Các vị biến tấu của kẹo dừa (Nguồn: Kẹo dừa Bến Tre Hai Tỏ) ",
                      text3: `Sự tỉ mỉ trong chế biến đã mang lại một hương vị ngọt ngào tan chảy nơi đầu lưỡi ngay khi bóc lớp vỏ giấy bên ngoài ra. Viên kẹo dừa có màu vàng sữa hoặc nâu nhạt mộc mạc, khi đưa vào miệng sẽ cho cảm giác mềm dẻo, dai dai đầy thách thức của mạch nha. Khi nhai nhẹ, viên kẹo bắt đầu tan chảy, giải phóng vị béo ngậy ngào ngạt của nước cốt dừa hòa quyện cùng vị ngọt đậm đà của đường mật. Cái hay của kẹo dừa chuẩn vị là dù dẻo nhưng không bị dính quá chặt vào răng, vị ngọt béo đậm nhưng lại không gây cảm giác gắt cổ. Để đáp ứng gu ẩm thực phong phú của người tiêu dùng hiện đại, các làng nghề tại Bến Tre đã không ngừng sáng tạo ra nhiều phiên bản hương vị đa dạng bên cạnh vị truyền thống, bao gồm: kẹo dừa sầu riêng nồng nàn; kẹo dừa đậu phộng giòn rụm, bùi béo; kẹo dừa lá dứa màu xanh ngọc với mùi thơm thanh khiết; hay kẹo dừa cacao và khoai môn mang lại những nốt hương mới mẻ.
                    Vượt qua ranh giới của một món quà vặt thông thường, kẹo dừa đã trở thành thức quà quê thấm đượm tình người miền Tây và gánh vác cả nét văn hóa hiếu khách của người dân Nam Bộ. Trong không gian lộng gió của miền Tây sông nước, ngồi bên hiên nhà, nhâm nhi một viên kẹo dừa ngọt lịm cùng một ngụm trà xanh cay chát nhẹ là một thú vui tao nhã giúp cân bằng vị giác hoàn hảo. Những hộp kẹo dừa vuông vức, nhỏ nhắn đã theo chân du khách đi khắp mọi miền đất nước và xuất khẩu sang nhiều quốc gia, trở thành biểu tượng ngọt ngào, bền bỉ của đất và người xứ dừa Bến Tre.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_33.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=saCX_7ksuaa8hqDG&v=Ajq37QqHp5Q&feature=youtu.be",
                            text: " Kẹo dừa Bến Tre",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube VTV24",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Kẹo dừa không chỉ là một món ăn đặc sản nổi tiếng của vùng đất Bến Tre mà còn là kết tinh của sự khéo léo, sáng tạo trong lao động của người dân xứ dừa. Trải qua nhiều thế hệ, nghề làm kẹo dừa đã góp phần gìn giữ những giá trị văn hóa truyền thống, đồng thời quảng bá hình ảnh quê hương Bến Tre đến với du khách trong và ngoài nước. Ngày nay, dù có nhiều biến đổi để phù hợp với thị hiếu hiện đại, kẹo dừa vẫn giữ được hương vị đặc trưng, trở thành niềm tự hào của văn hóa ẩm thực Nam Bộ. ",
                }
            },
            {
                imgId: "mlem_12",
                name: "Nem chua",
                thumb: "/images/mlem/thumb_12.jpg",
                article: {
                    title: "NEM CHUA THANH HÓA",
                    subtitle: "Nem chua Thanh Hóa là món ăn đặc sản trứ danh, là niềm tự hào của người dân xứ Thanh và đã trở thành thương hiệu nổi tiếng trên khắp mọi miền đất nước. Không chỉ là một món ăn chơi, món nhậu quen thuộc, nem chua còn là món quà quê gói gọn cả sự tinh tế, khéo léo và tấm lòng hiếu khách của người dân nơi đây.",
                    heading1: "NGUỒN GỐC PHÁT TRIỂN VÀ NGHỆ THUẬT TUYỂN CHỌN, CHẾ BIẾN KỲ CÔNG",
                    text1: `Nghề làm nem chua tại Thanh Hóa được cho là bắt đầu phát triển mạnh từ những năm 70 của thế kỷ trước tại thành phố Thanh Hóa. Ban đầu, nem chủ yếu được làm trong các dịp lễ Tết, cưới hỏi hay đình đám như một món ăn sang trọng để đãi khách quý. Theo thời gian, nhờ hương vị thơm ngon đặc trưng và sự đón nhận nồng nhiệt của thực khách thập phương, nghề làm nem đã lan rộng ra khắp các huyện thành như nhà xe, ga tàu, trở thành một ngành nghề mưu sinh và làm giàu cho nhiều gia đình. Hiện nay, nem chua Thanh Hóa đã có mặt ở khắp nơi và trở thành biểu tượng ẩm thực không thể tách rời của vùng đất này.
                    Để làm nên những chiếc nem chua đạt chuẩn thương hiệu ấy, người thợ xứ Thanh phải cực kỳ kỹ lưỡng trong khâu lựa chọn và xử lý nguyên liệu. Thành phần chính của nem bao gồm thịt lợn nạc và bì lợn. Thịt lợn phải là loại thịt mông nạc vừa mới mổ xong, còn nóng hổi, tuyệt đối không được rửa nước để thịt giữ nguyên độ dính tự nhiên. Bì lợn phải chọn phần da mông hoặc da lưng dai giòn, được cạo sạch lông, luộc chín tới rồi cán mỏng, xắt thành những sợi nhỏ như sợi miến. Ngoài ra, các gia vị đi kèm không thể thiếu là thính gạo rang vàng xay mịn, tỏi băm, ớt tươi, hạt tiêu đen nguyên hạt và một chút đường, nước mắm cốt ngon.
                    Từ những nguyên liệu tuyển chọn khắt khe đó, người thợ bắt đầu bước vào quy trình chế biến và gói nem vô cùng kỳ công. Thịt nạc sau khi lọc bỏ hết mỡ và gân sẽ được cho vào máy xay hoặc giã nhuyễn, sau đó trộn đều với sợi bì lợn, thính gạo và các loại gia vị theo tỷ lệ bí truyền của mỗi gia đình. Khi hỗn hợp đã thấm đều, người thợ sẽ tiến hành công đoạn vắt nem thành từng chiếc nhỏ bằng ngón tay cái hoặc thành những quả nem hình trụ dài tùy loại. Điểm đặc trưng của nem chua Thanh Hóa là luôn có một lát tỏi mỏng, một vài lát ớt đỏ và một lá đinh lăng (hoặc lá ổi) đặt trang trọng dọc theo thân nem. Sau đó, nem được bọc một lớp màng bọc nylon bên trong và quấn chặt bằng rất nhiều lớp lá chuối tươi bên ngoài để tạo môi trường kín cho nem lên men tự nhiên.`,
                    img1: "/images/mlem/detail_c_34.jpg",
                    source1: "Nguyên liệu làm nem (Nguồn: Bách hóa xanh)",
                    heading2: "HƯƠNG VỊ ĐẶC TRƯNG, CÁC PHIÊN BẢN BIẾN TẤU VÀ GIÁ TRỊ VĂN HÓA DU LỊCH",
                    text2: "Sau khi gói xong, nem chua sẽ được để ở nhiệt độ phòng từ 1 đến 3 ngày (tùy thuộc vào thời tiết mùa hè hay mùa đông) để quá trình lên men hoàn tất và tạo nên một hương vị đặc trưng bùng nổ vị giác. Một chiếc nem chua đạt chuẩn khi bóc ra phải có màu hồng cánh sen bắt mắt, bề mặt khô ráo, săn chắc và có độ đàn hồi tốt. Khi thưởng thức, thực khách sẽ cảm nhận được sự hòa quyện hoàn hảo giữa vị chua thanh nhẹ của thịt lên men, vị ngọt bùi của thính, cái sần sật giòn giòn của sợi bì hòa cùng vị cay nồng của ớt, vị hăng của tỏi và mùi thơm đặc trưng của lá đinh lăng.",
                    img2: "/images/mlem/detail_c_35.jpg",
                    source2: "Nem chua Thanh Hóa. (Nguồn: Internet)",
                      text3: `Bên cạnh loại nem quả nhỏ truyền thống (hay còn gọi là nem lửng), người dân Thanh Hóa còn sáng tạo ra nhiều phiên bản nem chua khác để phục vụ nhu cầu phong phú của thực khách. Chúng ta có thể kể đến nem thính (nem nướng) với kích thước lớn hơn, khi ăn phải đem nướng trên than củi cho lá chuối cháy xém, tỏa mùi thơm nức; nem cối hình trụ lớn thường dùng trong các buổi tiệc tùng; hay nem vuông dẹt gọn gàng. Mỗi loại nem lại mang một kết cấu và trải nghiệm thưởng thức riêng biệt nhưng đều giữ trọn cái hồn cốt đậm đà của ẩm thực xứ Thanh.
                    Chính sự đa dạng và hương vị quyến rũ này đã hình thành nên một nét văn hóa thưởng thức độc đáo và nâng cao giá trị du lịch của địa phương. Nem chua Thanh Hóa ngon nhất là khi được chấm cùng một chút tương ớt cay ngọt, nhâm nhi cùng một ly bia mát lạnh hoặc cốc trà đá vỉa hè. Món ăn này đã vượt qua ranh giới của một đặc sản địa phương để trở thành món quà biếu tặng ý nghĩa trong các dịp lễ Tết, hay là thức quà không thể thiếu trên tay mỗi du khách sau chuyến hành trình ghé thăm vùng đất miền Trung đầy nắng gió. Sức sống bền bỉ của chiếc nem chua chính là minh chứng cho sự gìn giữ và phát huy tinh hoa ẩm thực truyền thống của các thế hệ người dân Thanh Hóa.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_36.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=ckXW8z2naEo",
                            text: " Nem Chua Thanh Hoá Có Gì Ngon ??",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Việt Phương Thoa",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Không chỉ là một thức quà vặt hay món nhậu đưa mồi, nem chua Thanh Hóa là sự kết tinh của tư duy ẩm thực tinh tế và kỹ nghệ lên men tự nhiên khéo léo. Món ăn này đã vượt qua ranh giới địa phương để trở thành một thương hiệu đặc sản quốc gia, mang theo niềm tự hào và tính cách nồng hậu, hiếu khách của người dân xứ Thanh. ",
                }
            },
            {
                imgId: "mlem_13",
                name: "Nem nướng Nha Trang",
                thumb: "/images/mlem/thumb_13.jpg",
                article: {
                    title: "NEM NƯỚNG NHA TRANG",
                    subtitle: "Nem nướng Nha Trang là một trong những món ăn đặc sản cuốn nổi tiếng nhất của vùng duyên hải Nam Trung Bộ, mang sức hút mạnh mẽ nhờ sự kết hợp hài hòa giữa vị béo ngọt của thịt nướng trứ danh, cái giòn rụm của bánh tráng chiên và sự tươi mát của các loại rau sống đi kèm. Món ăn này phản ánh đúng nét tinh tế, khéo léo trong cách cân bằng hương vị và tư duy ẩm thực phóng khoáng của con người vùng biển Nha Trang.",
                    heading1: "THỊT NEM NƯỚNG SĂN CHẮC VÀ KẾT CẤU GIÒN RỤM TỪ BÁNH TRÁNG CHIÊN ",
                    text1: `Linh hồn của món ăn nằm ở những thanh nem nướng vàng ruộm. Nem được làm từ thịt lợn nạc đùi tươi ngon, xắt nhỏ rồi đem giã nhuyễn (hoặc xay mịn) cùng với mỡ phần xắt hạt lựu, tỏi, tiêu, đường và các gia vị bí truyền. Sau khi hỗn hợp thịt đạt độ dẻo quánh, người thợ sẽ khéo léo quết thịt quanh những thanh tre nhỏ rồi đem nướng trên bếp than hồng. Trong quá trình nướng, mỡ lợn chảy ra giúp nem không bị khô, hòa cùng mùi tỏi cháy xém tạo nên một hương thơm nức mũi, đánh thức mọi khứu giác từ xa.
                    Bên cạnh những thanh nem nướng thơm nức, một thành phần không thể thiếu khác tạo nên kết cấu nhai vô cùng vui tai cho nem nướng Nha Trang chính là những cuộn bánh tráng chiên (hay còn gọi là ram). Người ta dùng loại bánh tráng nhỏ, cuốn lại thành hình trụ rồi thả vào chảo dầu sôi chiên cho đến khi vàng đều và giòn rụm. Khi cuốn chung với nem, cái sần sật của thịt nướng quyện với cái giòn tan của bánh tráng chiên tạo nên một sự tương phản kết cấu cực kỳ thú vị và độc đáo cho người thưởng thức.`,
                    img1: "/images/mlem/detail_c_37.jpg",
                    source1: "Nguồn ảnh: Adventure-journey ",
                    heading2: "TINH TÚY NƯỚC SỐT CHẤM SÁNH ĐẶC VÀ MẸT RAU SỐNG ĐA DẠNG ĐI KÈM",
                    text2: ` Sự kết hợp hoàn hảo giữa nem nướng và bánh tráng chiên sẽ được nâng tầm nhờ một "đòn bẩy vị giác" đặc biệt, đó chính là loại nước sốt chấm độc bản quyết định sự thành bại của món ăn. Không giống như gỏi cuốn miền Nam dùng tương đậu phộng, nước sốt nem nướng Nha Trang được pha chế rất kỳ công từ sự kết hợp của nếp mỳ (hoặc nếp cốt), gan heo xay nhuyễn, tôm tươi băm nhỏ, thịt nạc băm và tương đậu nành. Hỗn hợp này được đun nhỏ lửa, khuấy đều tay cho đến khi sánh đặc lại thành một thứ màu vàng cam bắt mắt. Nước sốt dọn ra luôn ấm nóng, có vị ngọt thanh béo ngậy tự nhiên, được điểm xuyết thêm một chút hành phi và ớt băm cay nồng.
                    Để trung hòa vị béo ngậy của thịt nướng, bánh tráng chiên cùng nước sốt sánh đặc, một mẹt rau sống đồ sộ và đồ chua đi kèm là thành phần bắt buộc cuối cùng để hoàn thiện món ăn. Ngoài các loại rau cơ bản như xà lách, hành lá, ngò rí, húng quế, húng lủi, nem nướng Nha Trang còn có sự xuất hiện của các loại rau có vị chát và chua nhẹ như lá hẹ, dưa leo xắt mỏng, khế chua, chuối chát xắt lát và đặc biệt là quả xoài xanh bào sợi. Sự kết hợp nguyên liệu phóng khoáng này mang lại cảm giác vô cùng thanh mát, giúp kích thích tiêu hóa hoàn hảo và tạo nên ấn tượng khó quên cho thực khách.`,
                    img2: "/images/mlem/detail_c_38.jpg",
                    source2: "Nguồn: Lữ hành Việt Nam",
                   
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_39.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=NVzRMbREV_c",
                            text: " Cách làm NEM NƯỚNG NHA TRANG ngon đúng điệu, ăn là ghiền ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cooky TV",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Nem nướng Nha Trang là một kiệt tác của nghệ thuật cuốn chấm miền Trung, thể hiện sự tinh tế trong việc kết hợp đa dạng các tầng kết cấu và hương vị. Sự hòa quyện giữa thanh nem nướng béo ngọt, bánh tráng chiên giòn rụm, vị chua chát của rau xoài xanh và linh hồn nước sốt ấm nóng sánh đặc chính là lý do giúp món ăn này gây thương nhớ sâu sắc cho mọi du khách mỗi khi đặt chân đến thành phố biển.",
                }
            },
            {
                imgId: "mlem_14",
                name: "Phở",
                thumb: "/images/mlem/thumb_14.jpg",
                article: {
                    title: "PHỞ",
                    subtitle: "Phở là món ăn quốc hồn quốc túy, là biểu tượng đỉnh cao của nền văn hóa ẩm thực Việt Nam và là một trong những đại sứ ẩm thực nổi tiếng nhất trên thế giới. Dù xuất hiện ở bất cứ đâu, từ những gánh hàng rong mộc mạc nơi góc phố cổ cho đến các nhà hàng sang trọng tại New York, Paris hay Tokyo, phở vẫn luôn giữ trọn cái tinh túy, nét thanh tao và khả năng kết nối tâm hồn của những người con đất Việt lẫn thực khách quốc tế.",
                    heading1: "NGUỒN GỐC LỊCH SỬ VÀ TINH HOA CHẾ BIẾN NƯỚC DÙNG, BÁNH PHỞ TRUYỀN THỐNG ",
                    text1: `Nguồn gốc chính xác của phở cho đến nay vẫn còn nhiều giả thuyết, nhưng hầu hết các nhà nghiên cứu đều đồng ý rằng phở được hình thành vào khoảng cuối thế kỷ XIX, đầu thế kỷ XX tại vùng đồng bằng sông Hồng, với hai trung tâm phát triển mạnh mẽ nhất là Hà Nội và Nam Định. Có ý kiến cho rằng phở biến tấu từ món "thịt bò xào" của người Hoa, hoặc bắt nguồn từ món súp bò "pot-au-feu" của người Pháp kết hợp với sợi bánh tráng của Việt Nam. Tuy nhiên, qua bàn tay chế biến tài hoa của người Việt, phở đã thoát thai hoàn toàn để trở thành một món ăn độc lập, thuần Việt và mang đậm cốt cách của cư dân lúa nước.
                    Để làm nên một tác phẩm thuần Việt định hình qua chiều dài lịch sử ấy, mọi sự thành bại của một tô phở đều nằm ở nồi nước dùng (nước lèo) – nơi được coi là tinh hoa và linh hồn của món ăn. Nước dùng phở bò truyền thống phải được ninh từ xương ống, xương bay của bò trong suốt 10 đến 12 tiếng đồng hồ để lấy được vị ngọt thanh, sâu lắng từ tủy xương chứ không phải vị ngọt gắt của bột ngọt. Trong quá trình ninh, người đầu bếp phải liên tục hớt bọt để nước giữ được độ trong vắt, không bị đục. Mùi thơm nồng nàn, đánh thức mọi khứu giác của phở được tạo nên từ một "bánh xe gia vị" nướng chín tới bao gồm gừng, hành củ, thanh quế, thảo quả, hoa hồi, đinh hương và hạt mùi, hòa quyện cùng chút nước mắm cốt loại ngon để tạo vị đậm đà.
                    Hòa quyện vào dòng nước dùng tinh túy đó là những sợi bánh phở trắng ngần cùng các loại thịt ăn kèm vô cùng phong phú. Bánh phở ngon phải được làm từ gạo tẻ loại ngon, tráng mỏng dính, mềm dai dẻo dẻo mà không bở, khi chan nước dùng nóng vào không bị nát. Phần thịt bò ăn kèm cũng mang lại những trải nghiệm kết cấu khác nhau cho thực khách. Bạn có thể chọn phở tái với những lát thịt bò tươi ngon được chần tái sơ qua nước sôi, giữ nguyên độ mềm mọng và ngọt thịt; phở chín với những miếng nạm, gầu, bắp bò được luộc chín tới, thái lát mỏng có cả phần mỡ giòn sần sật béo ngậy; hoặc phở gân, phở đuôi bò tùy theo sở thích cá nhân.`,
                    img1: "/images/mlem/detail_c_40.jpg",
                    source1: "Nguồn ảnh: VnExpress ",
                    heading2: "NGHỆ THUẬT THƯỞNG THỨC, SỰ KHÁC BIỆT VÙNG MIỀN VÀ BIỂU TƯỢNG VĂN HÓA",
                    text2: "Khi các nguyên liệu chính đã sẵn sàng trong bát, nghệ thuật gia giảm gia vị và rau thơm đi kèm sẽ hoàn thiện công đoạn cuối cùng trước khi thưởng thức. Một tô phở bốc khói nghi ngút khi dọn ra bàn sẽ được điểm xuyết bằng một màu xanh mướt mát của hành lá cắt nhỏ, vài cọng hành củ chẻ sợi và rau ngò rí (rau mùi). Đối với phở Bắc truyền thống, gia vị đi kèm khá tối giản để giữ nguyên vị thanh của nước dùng, thường chỉ có vài lát ớt tươi, chanh hoặc giấm tỏi và một chút tiêu Bắc xay mịn. Khi thưởng thức, người ăn có thể gọi thêm một đĩa quẩy giòn rụm để nhúng ngập vào nước phở, hút trọn cái béo ngọt của nước dùng vào miếng quẩy, tạo nên một thú vui ẩm thực vô cùng trọn vẹn.",
                    img2: "/images/mlem/detail_c_41.jpg",
                    source2: "Nguồn ảnh: Vietnamtourism",
                      text3: `Mặc dù có chung một nền tảng văn hóa, nhưng khi xuôi dòng vào phương Nam, phở đã có những bước chuyển mình mạnh mẽ để tạo nên sự khác biệt rõ nét giữa hai miền Nam - Bắc nhằm phù hợp với văn hóa khẩu vị phóng khoáng nơi đây. Phở Bắc (phở Hà Nội) thiên về sự thanh nhã, nước dùng trong, vị ngọt thanh và thanh nhẹ. Ngược lại, phở Nam (phở Sài Gòn) có nước dùng đậm đà hơn, thiên về vị ngọt của đường và xương, nước lèo hơi đục hơn một chút do có thêm váng mỡ. Đặc biệt, người miền Nam khi ăn phở bắt buộc phải có một đĩa rau sống đồ sộ gồm giá đỗ, ngò gai (mùi tàu), húng quế, ngổ và không thể thiếu hai hũ tương đen (tương hột), tương ớt đỏ để nêm trực tiếp vào tô phở.
                    Chính sự biến tấu linh hoạt cùng sức sống mạnh mẽ trải dài theo đất nước đã đưa phở vượt qua ranh giới ẩm thực thông thường để trở thành biểu tượng văn hóa và đạt danh tiếng quốc tế. Không chỉ dừng lại là một món ăn sáng hằng ngày, phở đã trở thành một danh từ riêng viết hoa không cần dịch ("Pho") nằm trong từ điển Oxford, khẳng định vị thế độc lập trên bản đồ thế giới. Phở liên tục đứng đầu các bảng xếp hạng những món ăn có nước dùng ngon nhất hành tinh do các tạp chí du lịch và chuyên trang ẩm thực uy tín như CNN, TasteAtlas bình chọn. Sự tinh tế trong cách cân bằng dinh dưỡng, sự hòa quyện giữa các loại thảo mộc tốt cho sức khỏe và hương vị quyến rũ vượt thời gian đã biến phở thành một biểu tượng văn hóa bất diệt, là niềm tự hào kiêu hãnh của mỗi người dân Việt Nam khi giới thiệu với bạn bè quốc tế.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_42.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=87orRggzCcg",
                            text: " Ra phố ăn phở | Nhịp sống Hà Nội",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube HTV - Đài Hà Nội",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Phở chính là tấm danh thiếp vinh quang nhất của ẩm thực Việt Nam trên bản đồ thế giới, là món ăn “quốc hồn quốc túy” mang tính thời đại. Sự cân bằng tuyệt đối giữa các loại thảo mộc, nước dùng thanh sâu và sợi bánh dẻo dai đã đưa phở vượt khỏi ranh giới của một món ăn, trở thành biểu tượng văn hóa bất diệt của dân tộc. ",
                }
            },
            {
                imgId: "mlem_15",
                name: "Chả cá Lã Vọng",
                thumb: "/images/mlem/thumb_15.jpg",
                article: {
                    title: "CHẢ CÁ LÃ VỌNG",
                    subtitle: "Chả cá Lã Vọng là một trong những món ăn tinh tế, cầu kỳ và mang tính biểu trưng cao nhất cho nét văn hóa ẩm thực hào hoa của người Hà Thành. Không chỉ đơn thuần là một món ăn ngon, chả cá Lã Vọng còn mang trong mình cả một câu chuyện lịch sử gắn liền với khu phố cổ, được các chuyên trang ẩm thực uy tín trên thế giới ca ngợi là món ăn nhất định phải thử một lần trong đời khi đến với thủ đô.",
                    heading1: "NGUỒN GỐC LỊCH SỬ VÀ Ý NGHĨA TÊN GỌI CHẢ CÁ LÃ VỌNG ",
                    text1: "Món ăn này ra đời từ thời kỳ Pháp thuộc, do gia đình họ Đoàn tại số nhà 14 phố Chả Cá (trước đây là phố Hàng Sơn) sáng tạo ra. Trong những năm tháng chiến tranh, ngôi nhà này từng là nơi tụ họp và cưu mang các nghĩa quân Đề Thám. Chủ nhà thường làm món chả cá thơm ngon để đãi khách, lâu dần nơi đây trở thành một quán ăn nhỏ. Do trước cửa quán có bày bức tượng ông lão đánh cá Lã Vọng (Khương Tử Nha) ngồi câu cá đợi thời, thực khách đã quen gọi là quán chả cá Lã Vọng. Theo thời gian, tên gọi này không chỉ là tên quán mà đã trở thành thương hiệu chung cho cả một món ăn đặc sản nổi tiếng của Hà Nội.",
                    img1: "/images/mlem/detail_c_43.jpg",
                    source1: "Nguồn: Tạp chí điện tử Thương hiệu & Công luận ",
                    heading2: "NGHỆ THUẬT TUYỂN CHỌN NGUYÊN LIỆU VÀ TINH TÚY CHẾ BIẾN",
                    text2: "Để làm nên miếng chả cá đúng chuẩn, khâu chọn nguyên liệu và chế biến cực kỳ khắt khe. Loại cá thượng hạng nhất là cá anh vũ quý hiếm ở ngã ba sông Bạch Hạc, nhưng thông dụng và phổ biến hơn cả là cá lăng tươi sống – loại cá có thịt ngọt, thơm, săn chắc và rất ít xương dăm. Thịt cá sau khi lọc xương được cắt miếng vuông vức, đem ướp cùng nước cốt nghệ, nước cốt riềng, mẻ, mắm tôm và mỡ gà bí truyền, rồi kẹp vào thanh tre già nướng trên bếp than củi cho đến khi vàng đều, xém cạnh thơm phức.",
                    img2: "/images/mlem/detail_c_44.jpg",
                    source2: "Nguyên liệu để làm Chả cá Lã Vọng (Nguồn: Bluestone)",
                      text3: "Đặc biệt, linh hồn của món ăn chính là chén mắm tôm xứ Thanh màu tím băm, được pha chế tinh tế với đường, rượu trắng, nước cốt chanh hoặc quất và ớt, rồi đánh đều tay cho đến khi sủi bọt trắng phao. Dù thực khách không ăn được mắm tôm có thể thay bằng nước mắm tỏi ớt chua ngọt, nhưng chỉ khi chấm cùng mắm tôm thì món ăn mới giữ trọn vẹn phần hương vị tinh túy nhất.",
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_45.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=rp-e4D525B0",
                            text: " Cách làm CHẢ CÁ LÃ VỌNG “CHUẨN VỊ” HÀ NỘI",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Ms. Nang Cooking & Life in Hanoi",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Chả cá Lã Vọng không chỉ là một món ăn thượng hạng, mà là một di sản nghệ thuật ẩm thực độc đáo của đất Kinh Kỳ xưa. Thưởng thức những miếng cá lăng nướng vàng rực, sôi xèo xèo trên chảo mỡ cùng hành hoa, thì là, rồi chấm quyện vào mắm tôm sủi bọt là một trải nghiệm văn hóa quý phái, đòi hỏi sự cầu kỳ và sành sỏi bậc nhất.  ",
                }
            },
            {
                imgId: "mlem_16",
                name: "Bún bò Huế",
                thumb: "/images/mlem/thumb_16.jpg",
                article: {
                    title: "BÚN BÒ HUẾ",
                    subtitle: "Nhắc đến Huế, người ta không chỉ nhớ đến đại nội cổ kính hay dòng sông Hương thơ mộng, mà còn nhớ đến bún bò Huế - món ăn được xem là “linh hồn” của ẩm thực cố đô. Đây không chỉ là một món ăn sáng thông thường mà đã trở thành biểu tượng văn hóa ẩm thực Việt Nam, được bạn bè quốc tế đánh giá rất cao. ",
                    heading1: "NGUỒN GỐC CUNG ĐÌNH NẰM TRONG LÒNG DÂN DÃ VÀ SỢI BÚN TO TO BẢN ĐẶC TRƯNG ",
                    text1: `Bún bò Huế có nguồn gốc từ chốn cung đình triều Nguyễn cổ kính, nơi vốn nổi tiếng với những quy chuẩn ẩm thực khắt khe, cầu kỳ trong từng món ngự thiện dâng vua. Tuy nhiên, món ăn này đã có một sức sống mãnh liệt khi bước ra khỏi hoàng cung, hòa mình vào đời sống dân dã của người dân lao động xứ Thần kinh để rồi trở thành một món ăn bình dân nhưng vô cùng tinh tế. Người dân xứ Huế đã gửi gắm vào món ăn tất cả sự khéo léo, chắt chiu và cả tính cách đặc trưng qua vị cay nồng để chống chọi lại cái lạnh của những mùa mưa dầm cố đô. Trải qua chiều dài lịch sử, bún bò Huế không chỉ là một thức quà sáng quen thuộc mà đã trở thành biểu tượng văn hóa đặc sắc, niềm tự hào kiêu hãnh của ẩm thực miền Trung trên bản đồ thế giới.
                    Điểm làm nên bản sắc độc nhất vô nhị để thực khách dễ dàng phân biệt món ăn này với các loại bún khác chính là sợi bún bò Huế. Không giống như sợi bún nhỏ, mảnh dẻ của miền Bắc hay miền Nam, bún bò Huế đạt chuẩn phải là loại bún sợi to, thân tròn đều, mẩy căng và có màu trắng đục tự nhiên mộc mạc. Sợi bún được làm từ bột gạo tẻ ngon pha thêm chút bột lọc theo tỷ lệ vàng nghiêm ngặt, nhờ vậy khi chần qua nước sôi và chan nước dùng nóng hổi vào, bún vẫn giữ nguyên được kết cấu dẻo mềm, dai nhẹ đầy thách thức khi nhai mà tuyệt đối không bị bở nát hay quánh dính.`,
                    img1: "/images/mlem/detail_c_46.jpg",
                    source1: "Nguồn: Cô Ba Bình Dương ",
                    heading2: "TINH TÚY NƯỚC DÙNG RẶM MÙI RÚC, PHẦN NHÂN ĐỒ SỘ VÀ DANH TIẾNG QUỐC TẾ",
                    text2: ` Mọi sự thành bại của một tô bún bò Huế đều nằm ở nồi nước dùng (nước lèo) – nơi kết tinh tất cả sự kỳ công của người đầu bếp. Nước dùng truyền thống phải được ninh từ xương ống, xương bay của bò cùng với giò heo trong suốt nhiều giờ liền để lấy vị ngọt thanh, sâu lắng từ tủy xương. "Vũ khí bí mật" định hình nên mùi hương độc bản không thể trộn lẫn của bún bò Huế chính là mắm ruốc Huế. Mắm ruốc loại ngon phải được hòa loãng với nước lạnh, lọc bỏ cặn rác rồi mới đem cho vào nồi nước dùng một cách tinh tế để lấy vị đậm đà mặn mòi và mùi thơm thoang thoảng mà không bị nồng hăng. Bên cạnh đó, nồi nước dùng luôn sực nức mùi thơm của những bó sả tươi đập dập và rực rỡ sắc màu đỏ cam bắt mắt từ váng dầu ớt và hạt điều.
                    Lớp nước dùng nồng nàn ấy chính là lớp nền hoàn hảo để ôm trọn phần nhân vô cùng phong phú và đồ sộ phía trên bát bún. Một tô bún đầy đủ mang lại những trải nghiệm kết cấu khác nhau cho thực khách với những lát thịt bò nạm, bò bắp thái mỏng dính mềm mọng ngọt thịt; một khoanh giò heo chặt khúc ninh dẻo bùi béo ngậy; viên chả cua hoặc chả bò màu cam hồng dai giòn sần sật và một vài miếng huyết heo vuông vức mềm mịn như thạch. Để trung hòa vị béo ngậy của thịt mỡ, một rổ rau sống đi kèm là bắt buộc bao gồm bắp chuối (hoa chuối) bào sợi mỏng, giá đỗ tươi, rau húng quế nồng nàn và cọng hành trần chẻ sợi thanh mát.
                    Khi bát bún bò Huế bốc khói nghi ngút được dọn ra bàn, thực khách thêm một chút ớt sa tế cay xé lưỡi, vắt chút chanh tươi rồi từ từ thưởng thức. Vị ngọt của xương tủy, vị mặn mòi của mắm ruốc, cái cay tê bùng nổ của sa tế hòa quyện hoàn hảo cùng cái dẻo dẻo của sợi bún và cái thanh mát của rau sống, tạo nên sự cộng hưởng hương vị vô cùng tuyệt vời. Chính cấu trúc hương vị quyến rũ vượt thời gian này đã đưa bún bò Huế liên tục lọt top những món ăn có nước dùng ngon nhất hành tinh do các tạp chí du lịch và chuyên trang ẩm thực uy tín uy tín như CNN, TasteAtlas bình chọn, xứng danh là một biểu tượng ẩm thực bất diệt của đất nước và con người Việt Nam.`,
                    img2: "/images/mlem/detail_c_47.jpg",
                    source2: "Rau sống ăn kèm (Nguồn ảnh internet)",
                   
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_48.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=qQlSVAeZzAs",
                            text: " BÚN BÒ HUẾ - BÚN BÒ GIÒ HEO ngon cách nấu thơm dậy mùi không ai chia sẻ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube TÚ LÊ MIỀN TÂY",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bún bò Huế là biểu tượng của sự dung hòa, sâu sắc và tinh tế trong nghệ thuật ẩm thực cố đô. Với làn nước dùng đậm đà hương mắm ruốc, cay nồng vị sả ớt và những miếng giò heo, chả cua đầy đặn, món ăn không chỉ kích thích mạnh mẽ vị giác mà còn phản ánh chiều sâu văn hóa cùng tính cách tỉ mỉ, nặng nghĩa tình của người dân xứ Huế. ",
                }
            },
            {
                imgId: "mlem_17",
                name: "Bánh canh",
                thumb: "/images/mlem/thumb_17.jpg",
                article: {
                    title: "BÁNH CANH",
                    subtitle: "Bánh canh là một trong những món ăn bình dân nhưng có sức sống vô cùng mạnh mẽ trong bản đồ ẩm thực Việt Nam, đặc biệt phổ biến tại khu vực miền Trung và miền Nam. Không bó buộc trong một công thức cố định, món ăn này chinh phục thực khách bởi sự biến tấu đa dạng từ sợi bánh cho đến nước dùng và các nguyên liệu ăn kèm, tạo nên những hương vị đặc trưng riêng biệt theo từng vùng miền.",
                    heading1: "NGUỒN GỐC DÂN DÃ, SỰ BIẾN TẤU CỦA SỢI BÁNH VÀ KỸ NGHỆ NẤU NƯỚC DÙNG SÁNH ĐẶC",
                    text1: `Bánh canh là một món ăn ăn sáng và ăn chơi vô cùng phổ biến, có nguồn gốc lâu đời từ đời sống dân dã của người dân lao động khu vực miền Trung và Nam Bộ. Khác với phở hay hủ tiếu vốn có những quy chuẩn khắt khe về hình dáng sợi, bánh canh tựa như một bức tranh tự do đầy sáng tạo. Tùy thuộc vào sản vật và văn hóa khẩu vị địa phương, sợi bánh canh được người thợ nhào nặn từ nhiều loại bột khác nhau, phổ biến nhất là bột gạo (cho sợi bánh màu trắng đục, dẻo mềm mộc mạc), bột lọc làm từ củ sắn (cho sợi bánh trong suốt, dai dẻo đầy thách thức) hoặc bột xắt thủ công đặc trưng của người miền Tây. Trải qua chiều dài lịch sử, bánh canh đã trở thành một phần không thể thiếu trong đời sống ẩm thực, phản ánh cốt cách mộc mạc, phóng khoáng của con người phương Nam.
                    Điểm làm nên bản sắc độc nhất vô nhị để thực khách dễ dàng phân biệt bánh canh với các món nước khác chính là kết cấu của nước dùng (nước lèo). Không giống như nước dùng trong vắt, thanh nhẹ của phở Bắc, nước dùng bánh canh đạt chuẩn phải có độ sánh đặc, sền sệt nhẹ vô cùng độc đáo. Sự sánh đặc này có được là nhờ chất bột tự nhiên tiết ra từ sợi bánh khi được thả trực tiếp vào nồi nước lèo, hoặc người nấu sẽ chủ động gia giảm thêm một chút bột năng. Nước dùng được ninh hoàn toàn từ xương ống heo, cá biển tươi, tôm sấy hoặc ghẹ sống trong nhiều giờ liền để lấy vị ngọt tự nhiên sâu lắng, mặn mòi, sau đó nhuộm thêm sắc màu đỏ cam rực rỡ từ dầu điều để kích thích thị giác.`,
                    img1: "/images/mlem/detail_c_49.jpg",
                    source1: "Nguồn: Bluestone ",
                    heading2: "TINH TÚY CÁC PHIÊN BẢN BIẾN TẤU VÀ HƯƠNG VỊ VÙNG MIỀN ĐA DẠNG",
                    text2: ` Sự hòa quyện giữa sợi bánh dẻo dai và làn nước dùng sánh kẹo làm nền tảng cho phần nhân đi kèm phong phú, tạo nên những thương hiệu bánh canh trứ danh trải dài dọc theo dải đất hình chữ S. Nhắc đến bánh canh, chúng ta không thể không kể đến:
                        - Bánh canh Nam Phổ (Huế): Sợi bánh làm từ bột gạo pha bột lọc, nước dùng sền sệt màu đỏ gạch của gạch tôm, ăn kèm với phần nhân chả tôm thịt giã nhuyễn dẻo quánh.
                        - Bánh canh chả cá (miền Trung): Phổ biến ở Quy Nhơn, Nha Trang, Phan Thiết với nước dùng trong vắt ngọt lịm ninh từ xương cá biển, ăn kèm những lát chả cá chiên vàng ruộm, chả cá hấp dai giòn sần sật và một chút hành phi thơm nức.
                        - Bánh canh cua/ghẹ (Nam Bộ): Phiên bản đồ sộ, phóng khoáng với thịt cua, thịt ghẹ xé sẵn, trứng cút lòng đào, huyết heo, chả tôm và miếng giò heo chặt khúc ninh mềm dẻo bùi.
                        - Bánh canh trảng bàng (Tây Ninh): Giữ nét mộc mạc với sợi bánh trắng muốt, dẻo dai ăn kèm thịt đùi heo luộc thái mỏng và đĩa rau rừng đồ sộ mát lành.
`,
                    img2: "/images/mlem/detail_c_50.jpg",
                    source2: "Nguồn: Lorca",
                      text3: `Khi một tô bánh canh bốc khói nghi ngút được dọn ra bàn, một hương vị nồng nàn lập tức đánh thức mọi giác quan của thực khách. Người bán luôn điểm xuyết lên trên cùng một màu xanh mướt mát của hành lá cắt nhỏ, rau ngò rí và một nhúm hành phi vàng giòn ruộm. Khi thưởng thức, người ăn vắt thêm một góc chanh tươi để lấy vị chua dịu, thả vào vài lát ớt sừng cay nồng và rắc thật nhiều tiêu Bắc xay mịn.
                    Húp một muỗng nước dùng sánh đặc, bạn sẽ cảm nhận được vị ngọt đậm đà, béo ngậy tự nhiên hòa quyện hoàn hảo với cái dẻo mềm, sần sật của sợi bánh và cái cay tê bùng nổ của tiêu ớt. Cái hay của bánh canh là dù ăn ở phiên bản nào, món ăn cũng mang lại cảm giác ấm bụng, đậm đà và trọn vẹn, để lại hậu vị vương vấn khôn nguôi trong lòng mỗi thực khách.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_51.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=r6yDDhB1isc",
                            text: " [ENG SUB] Bí Quyết nấu BÁNH CANH GIÒ HEO với cách BÓ GIÒ mềm ngọt hấp dẫn | Vietnamese Udon",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cô Ba Bình Dương",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh canh là minh chứng cho sự sáng tạo phong phú và tính cách mộc mạc của cư dân miền Trung và Nam Bộ. Dù ở phiên bản bánh canh cá lóc thanh ngọt miền Trung hay bánh canh cua dẻo quánh, đậm đà phương Nam, sợi bánh dai mềm ngập trong nước dùng sánh đặc ấy luôn mang lại cảm giác ấm áp, no lòng và vô cùng gần gũi. ",
                }
            },
            {
                imgId: "mlem_18",
                name: "Bánh xèo",
                thumb: "/images/mlem/thumb_18.jpg",
                article: {
                    title: "BÁNH XÈO",
                    subtitle: "Bánh xèo là một trong những món ăn dân dã, độc đáo và được yêu thích bậc nhất trong nền văn hóa ẩm thực đường phố Việt Nam. Tên gọi của bánh bắt nguồn từ chính âm thanh “xèo xèo” vui tai phát ra khi người thợ đổ lớp bột gạo lỏng vào chiếc chảo gang đang nóng rực dầu. Món ăn này là sự bùng nổ của cả thính giác, thị giác lẫn vị giác, đại diện cho nét ẩm thực phóng khoáng và tinh tế của người Việt.",
                    heading1: "NGUỒN GỐC TÊN GỌI VÙNG MIỀN VÀ KỸ NGHỆ ĐÚC VỎ VÀNG RUỘM, GIÒN TAN",
                    text1: `Nguồn gốc chính xác của bánh xèo cho đến nay vẫn là một chủ đề gợi nhiều giả thuyết, nhưng hầu hết các nhà nghiên cứu đều đồng ý rằng món ăn này đã xuất hiện và định hình từ lâu đời tại mảnh đất miền Trung và Nam Bộ trù phú. Tên gọi "xèo" vô cùng độc đáo và dân dã của bánh xuất phát từ chính âm thanh "xèo xèo" vui tai phát ra khi người thợ đổ lớp bột gạo lỏng vào chiếc chảo gang đang đỏ lửa, sực nức mùi mỡ hành. Theo dòng thời gian, bánh xèo đã phát triển thành hai trường phái rõ rệt: bánh xèo miền Trung nhỏ nhắn, đúc bằng khuôn đất hoặc chảo nhỏ, vỏ dày dặn; và bánh xèo miền Tây Nam Bộ với kích thước đồ sộ, vành bánh mỏng dính như cánh gián, thể hiện cốt cách phóng khoáng, tự do của con người sông nước.
                    Để tạo nên một chiếc bánh xèo ngon, khâu pha bột và kỹ nghệ đúc bánh đóng vai trò quyết định cấu trúc giòn rụm của món ăn. Lớp vỏ bánh được làm từ bột gạo tẻ ngon xay mịn, hòa cùng nước cốt dừa béo ngậy, một chút bột nghệ tươi để nhuộm sắc vàng óng ả tự nhiên và hành lá cắt nhỏ. Khi đúc bánh, người thợ phải canh lửa thật chuẩn, quết một lớp mỡ gáy lợn mỏng lên chảo gang, đợi chảo thật nóng rồi mới nghiêng chảo, đổ bột một cách dứt khoát. Tiếng "xèo" vang lên cũng là lúc vành bánh bắt đầu chín, tạo nên một lớp vỏ mỏng dính, vàng ruộm, giòn rụm ở rìa bánh nhưng vẫn giữ được độ mềm dẻo, ẩm mọng thoang thoảng vị béo của cốt dừa ở phần tâm bánh.`,
                    img1: "/images/mlem/detail_c_52.jpg",
                    source1: "Nguồn: Cô Ba Bình Dương ",
                    heading2: "TINH TÚY PHẦN NHÂN PHONG PHÚ, MẸT RAU RỪNG ĐA DẠNG VÀ DANH TIẾNG QUỐC TẾ",
                    text2: ` Lớp vỏ bánh vàng óng, giòn tan ấy chính là lớp nền hoàn hảo để ôm trọn phần nhân vô cùng phong phú và ngọt thịt từ sông ngòi, đồng ruộng. Khi lớp bột vừa tráng đều trên chảo, người thợ nhanh tay rải lên các loại nguyên liệu như tôm đất còn nguyên vỏ đỏ au, thịt ba chỉ heo thái mỏng béo ngậy, mực tươi xắt khoanh (ở vùng ven biển miền Trung) hoặc thịt vịt băm nhuyễn, đậu xanh hấp chín dẻo bùi và một nắm giá đỗ tươi. Chảo bánh được đậy vung kín trong vài phút để phần nhân chín hơi và giá đỗ vừa giữ được độ giòn sần sật. Khi bánh chín tới, người ta gập đôi chiếc bánh thành hình bán nguyệt trang trọng, để lộ phần nhân đồ sộ, tỏa hương thơm nức mũi kích thích mọi khứu giác.
                    Sự hoàn hảo của bánh xèo sẽ không thể đạt đến độ bùng nổ vị giác tối đa nếu thiếu đi mẹt rau sống đồ sộ và chén nước mắm chua ngọt đi kèm. Món ăn này bắt buộc phải cuốn cùng một rổ rau sống đậm chất miệt vườn hoặc rau rừng Tây Ninh với hàng chục loại rau như cải xanh có vị cay nồng, xà lách, lá cách, lá lụa, húng quế, húng lủi và khế chua, chuối chát xắt lát mỏng. Khi thưởng thức, thực khách dùng một miếng bánh tráng dẻo hoặc lá cải xanh làm nền, ngắt một miếng bánh xèo có đủ cả vỏ lẫn nhân tôm thịt, cuộn tròn lại thành một cuốn chắc tay. "Đòn bẩy" cuối cùng là chấm ngập cuốn bánh vào chén nước mắm chua ngọt pha tỏi ớt đỏ au, điểm xuyết thêm đu đủ hoặc cà rốt bào sợi muối chua ngọt. Cái giòn tan của vỏ bánh, vị ngọt béo của nhân thịt, vị chát cay của rau rừng hòa quyện cùng vị ngọt mặn đậm đà của nước mắm tạo nên một sự cộng hưởng hương vị vô cùng tuyệt vời.
                    Chính nhờ cấu trúc hương vị độc đáo và trải nghiệm ăn uống bằng tay vô cùng thú vị đó mà bánh xèo đã vinh dự chinh phục bản đồ ẩm thực đường phố toàn cầu. Món bánh liên tục lọt top những món ăn ngon nhất hành tinh do các tạp chí du lịch và chuyên trang ẩm thực uy tín như CNN, TasteAtlas bình chọn. Sự tinh tế trong cách cân bằng dinh dưỡng giữa chất đạm của tôm thịt và lượng vitamin dồi dào từ mẹt rau sống mát lành đã biến bánh xèo thành một biểu tượng văn hóa ẩm thực bất diệt, là niềm tự hào kiêu hãnh của đất nước và con người Việt Nam khi giới thiệu với bạn bè quốc tế.`,
                    img2: "/images/mlem/detail_c_53.jpg",
                    source2: "NNguồn ảnh: VnExpress",
                   
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_54.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=8w0psAnY6nE",
                            text: " Bánh Xèo Giòn, Cách pha Bột để đổ Bánh Xèo Miền Nam rất giòn và không ngấm Dầu, Crepe by Vanh Khuyen",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Vành Khuyên Lê",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh xèo là khúc ca rộn ràng, vui tươi của nghệ thuật ẩm thực dân gian Việt Nam. Tiếng “xèo” vui tai khi đổ bánh, sắc vàng ruộm của bột nghệ, vị béo của cốt dừa cùng rổ rau rừng miệt vườn đồ sộ đã biến món ăn này thành một trải nghiệm thưởng thức mang tính cộng đồng cao, nơi con người vừa ăn vừa kết nối bằng tất cả các giác quan. ",
                }
            },
            {
                imgId: "mlem_19",
                name: "Mì Quảng",
                thumb: "/images/mlem/thumb_19.jpg",
                article: {
                    title: "MÌ QUẢNG",
                    subtitle: "Mì Quảng là món ăn quốc hồn quốc túy, là biểu tượng ẩm thực sâu sắc và là niềm tự hào lớn nhất của người dân xứ Quảng (Quảng Nam và Đà Nẵng). Không thanh nhã như phở Bắc, không ngọt ngào như hủ tiếu Nam Bộ, mì Quảng chinh phục thực khách bằng sự mộc mạc, đậm đà và phóng khoáng, phản ánh chân thực tính cách chất phác, kiên cường của con người miền Trung đầy nắng gió.",
                    heading1: "NGUỒN GỐC ĐẶC SẢN ĐẤT QUẢNG NAM VÀ NÉT ĐẶC TRƯNG CỦA SỢI MÌ THỦ CÔNG ",
                    text1: `Mì Quảng có nguồn gốc từ vùng đất Quảng Nam và lan rải mạnh mẽ khắp dải đất miền Trung đầy nắng gió. Tên gọi của món ăn gắn liền với địa danh nơi nó sinh ra, được hình thành từ quá trình giao thoa văn hóa lâu đời giữa cư dân bản địa và các thương nhân nước ngoài tại thương cảng Hội An sầm uất từ thế kỷ XVII. Đối với người dân xứ Quảng, mì Quảng không đơn thuần là một món ăn ăn sáng hay ăn chơi hằng ngày, mà đã trở thành một nét biểu tượng văn hóa bất diệt, linh hồn không thể thiếu trong các dịp giỗ chạp, lễ Tết hay những buổi sum họp gia đình. Món ăn mộc mạc, đậm đà này chính là hiện thân cho tính cách thẳng thắn, bộc trực nhưng vô cùng nồng hậu, mến khách của con người miền Trung.
                    Điểm làm nên bản sắc độc nhất vô nhị để thực khách sành ăn dễ dàng nhận biết món ăn này chính là sợi mì Quảng. Sợi mì được chế biến hoàn toàn thủ công từ loại gạo tẻ ngon của vùng đồng bằng sông Thu Bồn, đem ngâm nước rồi xay thành bột nước mịn màng. Sau đó, bột được tráng thành những lá bánh mỏng dính trên nồi hấp cách thủy, quết một lớp dầu phộng (dầu lạc) khử nén thơm lừng rồi mới dùng dao cắt thành những sợi to bản, dày dặn. Tùy theo sở thích của người nấu, sợi mì có thể giữ nguyên màu trắng muốt tự nhiên mộc mạc, hoặc được pha thêm chút nước cốt nghệ tươi để nhuộm một sắc vàng óng ả bắt mắt, tạo nên kết cấu dẻo mềm, dai nhẹ đầy thú vị khi nhai mà tuyệt đối không bị bở nát.`,
                    img1: "/images/mlem/detail_c_55.jpg",
                    source1: "Phiên bản mì Quảng có nguyên liệu đặc biệt là sứa dai, giòn lạ miệng (Ảnh: Michelin Guide)  ",
                    heading2: "TINH TÚY NƯỚC NHÂN ĐẬM ĐÀ, PHẦN NHÂN ĐỒ SỘ VÀ NGHỆ THUẬT THƯỞNG THỨC ĐÚNG ĐIỆU",
                    text2: "Sự hoàn hảo của sợi mì Quảng dẻo mềm làm nền tảng cho phần nước nhân (nước lèo) và các loại nguyên liệu đi kèm vô cùng phong phú, đồ sộ. Không giống như phở hay hủ tiếu chan ngập nước dùng trong làn nước nóng hổi, nước nhân của mì Quảng rất cô đặc, đậm đà và chỉ được chan sâm sấp vừa chạm đến mặt mì. Nước nhân truyền thống được ninh từ xương heo, thịt gà, tôm sông hoặc cá lóc, đem xào thơm cùng củ nén (hành tăm) – loại gia vị độc bản của miền Trung – tạo nên vị ngọt đậm mặn mòi, sâu lắng. Phần nhân ăn kèm cực kỳ đa dạng, mang lại nhiều trải nghiệm kết cấu khác nhau cho thực khách với những miếng thịt ba chỉ heo dẻo dai, tôm đất đỏ au, thịt gà đi bộ săn chắc xắt khúc, trứng cút dẻo bùi và đôi khi có cả ram chiên giòn rụm.",
                    img2: "/images/mlem/detail_c_56.jpg",
                    source2: "Nguồn: Coop Online)",
                      text3: `Hương vị mì Quảng sẽ không thể đạt đến độ bùng nổ vị giác tối đa nếu thiếu đi các "vũ khí bí mật" from mẹt rau sống và gia vị gia giảm đi kèm. Điểm đặc trưng bắt buộc của mì Quảng là phải ăn kèm với một rổ rau sống đồ sộ làm từ bắp chuối (hoa chuối) bào sợi mỏng, giá đỗ tươi, rau cải con (cải mầm) và rau húng lủi xanh mướt. Sự tươi mát, giòn sần sật của các loại rau giúp cân bằng lại vị đậm đà của nước nhân. Trên cùng bát mì, người bán luôn rắc một nắm đậu phộng rang vàng giã nhỏ, hành lá cắt mịn và không thể thiếu một miếng bánh tráng nướng (bánh đa) mè đen giòn rụm.
                    Khi thưởng thức, thực khách vắt thêm một góc chanh tươi để lấy vị chua dịu, thả vào một vài trái ớt xiêm xanh cay nồng rồi dùng tay bẻ nhỏ miếng bánh tráng nướng thả vào bát mì. Tiếng bẻ bánh tráng rôm rốp vui tai hòa cùng hành động trộn đều các nguyên liệu tạo nên một trải nghiệm thưởng thức vô cùng thú vị. Cắn một miếng mì, bạn sẽ cảm nhận được cái dẻo mềm của sợi bánh, vị béo bùi của đậu phộng, cái giòn tan của bánh tráng nướng quyện chặt trong vị ngọt đậm, mặn mòi của nước nhân và cái cay tê bùng nổ của ớt xiêm, để lại hậu vị ấm áp, khó quên trong lòng mỗi du khách khi ghé thăm miền trung khúc ruột.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_57.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=8o7n8lgiVx4tQZ_U&v=TTWTwhV9Zx0&feature=youtu.be",
                            text: " MÌ QUẢNG - Cách nấu Mì Quảng chính gốc của người Quảng và Cách tự làm Sợi Mì Quảng tươi",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Vành Khuyên Lê",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Mỳ Quảng là tiếng nói dõng dạc, chân thành và phóng khoáng của đất và người miền Trung đầy nắng gió. Với sợi mỳ thô bản, nước nhưn đậm đặc tiết chế và rổ rau sống Trà Quế đủ vị, món ăn là minh chứng cho khả năng thích ứng, sự sáng tạo và tính cách kiên cường, chất phác của con người xứ Quảng.  ",
                }
            },
            {
                imgId: "mlem_20",
                name: "Bánh bột lọc",
                thumb: "/images/mlem/thumb_20.jpg",
                article: {
                    title: "BÁNH BỘT LỌC",
                    subtitle: "Bánh bột lọc là một món ăn dân dã, tinh tế và là một trong những đại diện xuất sắc nhất của nghệ thuật làm bánh cung đình cũng như ẩm thực đường phố xứ Huế. Món ăn này chinh phục thực khách bằng một diện mạo vô cùng độc đáo với lớp vỏ ngoài trong suốt như pha lê, ẩn hiện bên trong là màu đỏ hồng rực rỡ của tôm thịt. Sự kết hợp giữa kết cấu dai giòn và hương vị đậm đà đã biến chiếc bánh nhỏ nhắn này thành thức quà vặt gây thương nhớ cho biết bao thế hệ.",
                    heading1: "NGUỒN GỐC CUNG ĐÌNH, NÉT ĐẸP DÂN DÃ VÀ NGHỆ THUẬT LỰA CHỌN NGUYÊN LIỆU TINH TÚY ",
                    text1: `Bánh bột lọc có nguồn gốc từ vùng đất cố đô Huế, nơi vốn nổi tiếng với nền ẩm thực cung đình cầu kỳ và tinh tế đến từng chi tiết. Ban đầu, món bánh này được sáng tạo ra để phục vụ cho giới quý tộc và vua chúa triều Nguyễn nhờ hình thức trong suốt, nhỏ nhắn rất thanh nhã. Theo thời gian, bánh bột lọc đã bước ra khỏi chốn cung đình, hòa nhập vào đời sống dân dã của người dân miền Trung rồi lan rải khắp mọi miền đất nước. Trải qua bao thăng trầm, món bánh này không đơn thuần là một món ăn chơi hằng ngày mà đã trở thành một biểu tượng văn hóa đặc sắc, thể hiện sự khéo léo, tỉ mỉ và gu thẩm mỹ tinh tế của người phụ nữ xứ Kinh kỳ.
                    Linh hồn làm nên kết cấu độc đáo và hương vị quyến rũ của bánh bột lọc nằm ở khâu lựa chọn và sơ chế các nguyên liệu vô cùng khắt khe. Lớp vỏ bánh bắt buộc phải được làm từ loại bột năng (bột củ sắn/khoai mì) loại ngon, mịn màng và không lẫn tạp chất để khi hấp chín bánh đạt độ trong suốt hoàn hảo. Phần nhân bánh là sự kết hợp hài hòa giữa sản vật đồng quê và sông nước, bao gồm tôm và thịt ba chỉ. Tôm phải là loại tôm sông hoặc tôm đất nhỏ, thịt săn chắc, được làm sạch và để nguyên vỏ để khi chín giữ được màu đỏ au bắt mắt cùng độ giòn sần sật. Thịt ba chỉ heo được xắt hạt lựu nhỏ, có cả nạc lẫn mỡ để tạo độ béo ngậy tự nhiên, đem tẩm ướp đậm đà với tiêu đen, hành tím và nước mắm cốt ngon.`,
                    img1: "/images/mlem/detail_c_58.jpg",
                    source1: "Nguồn: Bếp nhà Sin ",
                    heading2: "KỸ NGHỆ NHÀO NẶN KHÉO LÉO, QUY TRÌNH LUỘC GÓI KỲ CÔNG VÀ TINH TÚY NƯỚC MẮM HUẾ",
                    text2: "Khi các nguyên liệu đã sẵn sàng, người thợ bước vào công đoạn tạo hình và chế biến đòi hỏi sự khéo léo cùng một đôi bàn tay cực kỳ tỉ mỉ. Bột năng được giáo (nhào) với nước sôi theo một tỷ lệ vàng nghiêm ngặt cho đến khi bột dẻo quánh, mịn màng và không dính tay. Người ta ngắt từng viên bột nhỏ, cán mỏng rồi đặt một con tôm cùng một miếng thịt ba chỉ xào đậm đà vào chính giữa, khéo léo xếp đôi miếng bột lại thành hình bán nguyệt và ép chặt các mép bánh để nhân không bị rớt ra ngoài. Hiện nay, bánh bột lọc phục vụ thực khách dưới hai phiên bản: bánh trần (luộc trực tiếp trong nước sôi rồi vớt ra ngâm nước lạnh) và bánh gói (được gói trang trọng trong những lớp lá chuối hoặc lá dong tươi đã quết một lớp dầu hành, sau đó đem hấp cách thủy cho đến khi chín mềm).",
                    img2: "/images/mlem/detail_c_59.jpg",
                    source2: "Nguồn: Kim Nguyễn",
                      text3: `Sau quy trình chế biến kỳ công, một hương vị tinh tế lập tức đánh thức mọi giác quan của thực khách khi món ăn được dọn ra. Đối với phiên bản bánh gói, khi bóc lớp lá chuối bốc khói nghi ngút ra, hoặc với đĩa bánh trần bóng bẩy, viên bánh hiện ra với lớp vỏ trong suốt như pha lê, lộ rõ mồn một phần nhân tôm đỏ au và thịt ba chỉ bên trong. Cắn một miếng bánh, bạn sẽ cảm nhận được kết cấu tương phản cực kỳ thú vị: lớp vỏ ngoài dai dẻo, sần sật đầy thách thức quyện cùng vị ngọt đậm đà, mọng ướt của thịt ba chỉ tan chảy và cái bùi béo, giòn tan của tôm sông. Lớp mỡ hành xanh mướt mát rưới lên trên cùng càng làm tăng thêm độ béo ngậy và hương thơm nồng nàn cho món ăn.
                    Sự hoàn hảo của bánh bột lọc sẽ không thể đạt đến độ bùng nổ vị giác tối đa nếu thiếu đi "linh hồn" kết nối là chén nước mắm chấm đúng điệu kiểu Huế. Không giống như nước mắm chua ngọt của miền Nam pha nhiều đường và đồ chua, nước mắm ăn bánh bột lọc Huế mang vị mặn mòi, đậm đà sâu lắng rất riêng. Người ta dùng nước mắm cốt ngon pha cùng chút nước luộc tôm để lấy vị ngọt thanh tự nhiên, gia giảm thêm chút đường, nước cốt chanh và bắt buộc phải thả vào thật nhiều ớt sừng cắt lát cùng tỏi băm đỏ au nổi trên bề mặt. Khi thưởng thức, thực khách chấm ngập viên bánh dai dẻo vào chén nước mắm cay xé lưỡi, vị cay nồng của ớt hòa quyện với vị ngọt béo của nhân bánh tạo nên một sự cộng hưởng hương vị vô cùng tuyệt vời, để lại ấn tượng sâu đậm khó phai.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_60.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=cIW9IrNk-5w",
                            text: " [ENG SUB] Bí Quyết làm Bánh Bột Lọc không bị cứng mềm dai rất dễ | Clear shrimp dumpling recipe",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cô Ba Bình Dương",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh bột lọc là đỉnh cao của sự kết hợp giữa mỹ thuật cung đình và hơi thở dân dã trong ẩm thực cố đô. Lớp vỏ trong suốt như pha lê ôm trọn phần nhân đỏ hồng đậm đà không chỉ kích thích thị giác, mà còn khẳng định sự tỉ mỉ, khéo léo và gu thưởng thức vô cùng tinh tế của người dân xứ Huế.  ",
                }
            },
            {
                imgId: "mlem_21",
                name: "Cao lầu",
                thumb: "/images/mlem/thumb_21.jpg",
                article: {
                    title: "CAO LẦU",
                    subtitle: "Cao lầu là món ăn mang tính biểu tượng, là niềm tự hào ẩm thực độc tôn của mảnh đất phố cổ Hội An. Đây là một món ăn vô cùng đặc biệt từ tên gọi, cách chế biến cho đến hương vị, khiến bất cứ ai khi ghé thăm miền Trung cũng đều muốn một lần nếm thử. Người ta vẫn thường bảo nhau rằng, món ăn này mang một cái hồn rất riêng mà chỉ khi ngồi giữa lòng phố hội, cảm nhận không gian rêu phong cổ kính thì mới có thể thưởng thức được trọn vẹn vị ngon đúng điệu của nó. ",
                    heading1: "NGUỒN GỐC LỊCH SỬ THỜI GIAN VÀ SỰ ĐỘC BẢN CỦA SỢI MÌ CAO LẦU KHÔNG THỂ SAO CHÉP ",
                    text1: `Nguồn gốc của cao lầu gắn liền với sự hình thành và phát triển của thương cảng quốc tế Hội An sầm uất từ thế kỷ XVII. Tên gọi "cao lầu" mang một ý nghĩa vô cùng độc đáo trong dân gian, ám chỉ món ăn sang trọng thường được bày biện trên các tầng lầu cao của quán ăn. Ngày trước, các thương nhân, người sành ăn khi đến Hội An thường ngồi trên lầu cao để vừa thưởng thức món ăn, vừa có thể ngắm nhìn cảnh giao thương nhộn nhịp dưới phố. Qua chiều dài lịch sử mang đậm dấu ấn giao thoa văn hóa giữa Việt Nam, Nhật Bản và Trung Hoa, cao lầu đã chắt lọc tinh hoa để thoát thai hoàn toàn, trở thành một đặc sản mang tính độc bản, là linh hồn không thể thay thế của mảnh đất di sản Hội An.
                    Điểm làm nên sự khác biệt hoàn toàn không thể sao chép của cao lầu chính là quy trình chế biến sợi mì vô cùng kỳ công và nghiêm ngặt. Sợi cao lầu đạt chuẩn bắt buộc phải dùng loại gạo tẻ ngon của vùng Quảng Nam, đem ngâm trong nước tro được đốt từ loại củi cây lấy từ cù lao Chàm. Sau đó, gạo được vo sạch bằng nguồn nước ngọt lịm lấy từ giếng cổ Bá Lễ – một cái giếng Chăm cổ có tuổi đời hàng trăm năm tại Hội An. Sự kết hợp nguyên liệu độc bản này giúp sợi mì có màu vàng nhẹ tự nhiên, kết cấu dẻo mềm, dẻo quánh và có độ dai giòn sần sật vô cùng thú vị khi nhai mà không bất kỳ loại mì nào có được. Mì sau khi xắt sợi sẽ được đem hấp cách thủy nhiều lần để giữ được độ ẩm và bảo quản được lâu.`,
                    img1: "/images/mlem/detail_c_61.jpg",
                    source1: "Nguồn ảnh: VnExpress ",
                    heading2: "TINH TÚY NHÂN THỊT XÁ XÍU, HƯƠNG VỊ ĐẬM ĐÀ VÀ NGHỆ THUẬT THƯỞNG THỨC THANH NHÃ",
                    text2: `Sự hoàn hảo của sợi mì dẻo dai làm nền tảng cho phần nhân thịt xá xíu đậm đà và làn nước xốt cô đặc tạo nên hương vị đặc trưng. Không dùng nhiều nước lèo chan ngập như phở, cao lầu chỉ cần một vài muỗng nước xốt xá xíu sền sệt, mặn mòi rưới đều lên trên. Thịt ăn kèm phải là thịt heo đùi loại ngon, lọc bỏ mỡ, đem tẩm ướp kỹ lưỡng với ngũ vị hương, hành tỏi băm, nước mắm và đường mật, rồi đem rim (xá xíu) trên lửa nhỏ cho đến khi thịt săn lại, chuyển màu nâu đỏ bắt mắt và mọng ướt gia vị. Những lát thịt xá xíu thái mỏng dính, mềm mọng dẻo bùi chính là mảnh ghép hoàn hảo để tôn vinh bát mì cổ kính.
                    Hương vị của cao lầu sẽ không thể đạt đến độ bùng nổ vị giác tối đa nếu thiếu đi hai "vũ khí bí mật" là những miếng ram khô giòn rụm và rổ rau sống Trà Quế đi kèm. Người bán luôn rắc lên trên cùng một nắm tóp mỡ hoặc những miếng bột mì chiên giòn (ram) xắt thành hình vuông nhỏ để tạo tiếng nhai rôm rốp vui tai. Đi kèm với cao lầu là rổ rau sống thanh mát lấy từ làng rau Trà Quế trứ danh, bao gồm cải con có vị cay nhẹ, giá đỗ tươi chần sơ và rau húng lủi thơm nồng. Sự tươi mát của rau sống giúp cân bằng hoàn hảo vị béo ngậy của thịt mỡ và nước xốt đậm đà.
                    Khi một bát cao lầu bốc khói nhẹ được dọn ra bàn, một nghệ thuật thưởng thức thanh nhã bắt đầu. Thực khách thêm một chút ớt chưng Hội An cay xé lưỡi, vắt chút chanh tươi rồi trộn đều từ dưới lên trên để từng sợi mì thấm đượm làn nước xốt xá xíu. Cắn một miếng cao lầu, bạn sẽ cảm nhận được cái dai giòn đặc trưng của sợi mì, vị béo ngậy ngào ngạt của thịt xá xíu, cái giòn tan của ram khô quyện chặt trong vị cay nồng của ớt và mùi thơm thanh khiết của rau sống. Sức sống bền bỉ của món ăn chính là minh chứng cho sự gìn giữ tinh hoa ẩm thực của các thế hệ người dân phố Hội, để lại ấn tượng sâu đậm khó phai trong lòng mỗi du khách thập phương.`,
                    img2: "/images/mlem/detail_c_62.jpg",
                    source2: "Nguồn ảnh: Eholiday",

                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_63.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=ZGhbThKvp-k",
                            text: " Cao lầu đặc sắc đất Hội An",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube VietNam Parliament TV",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "  Cao lầu là một di sản độc bản, chứa đựng cả dòng chảy lịch sử giao thoa văn hóa và linh hồn của phố cổ Hội An. Sự đặc biệt từ nguồn nước giếng Bá Lễ cổ, tro củi cù lao cho đến những thớ thịt xá xíu đậm vị và miếng ram giòn rụm đã tạo nên một món ăn mà thực khách buộc phải đến tận nơi, ngồi trong lòng phố cổ mới có thể cảm nhận hết cái hồn cốt trọn vẹn.  ",
                }
            },
            {
                imgId: "mlem_22",
                name: "Bánh mì",
                thumb: "/images/mlem/thumb_22.jpg",
                article: {
                    title: "BÁNH MÌ",
                    subtitle: "Bánh mì là một trong những món ăn đường phố nổi tiếng nhất toàn cầu, là niềm tự hào kiêu hãnh của nền ẩm thực Việt Nam. Khởi nguồn từ chiếc bánh baguette do người Pháp du nhập vào thế kỷ XIX, qua bàn tay biến tấu tài hoa và tư duy ẩm thực phóng khoáng của người Việt, bánh mì đã có một cuộc “lột xác” hoàn hảo. Món ăn này đã rũ bỏ lớp áo quý tộc Âu châu để khoác lên mình nét bình dị, dân dã, trở thành món ăn quốc dân xuất hiện ở mọi góc phố, nẻo đường và chinh phục hàng triệu thực khách trên khắp thế giới.",
                    heading1: "NGUỒN GỐC BẢN ĐỊA HÓA KỲ DIỆU VÀ KỸ NGHỆ NƯỚNG VỎ VÀNG RUỘM, GIÒN TAN",
                    text1: `Bánh mì Việt Nam có tiền thân từ loại bánh mì baguette do người Pháp mang vào nước ta từ thế kỷ XIX. Ban đầu, món bánh này là một thức quà xa xỉ, đặc đặc tính đặc ruột và dai của ẩm thực phương Tây. Tuy nhiên, khi định cư tại mảnh đất Sài Gòn và lan rộng ra khắp các vùng miền, món ăn này đã trải qua một cuộc "bản địa hóa" vô cùng kỳ diệu. Người thợ Việt đã thay đổi công thức, trộn thêm bột gạo vào bột mì, thay đổi kích thước ngắn lại và tạo độ rỗng ruột hơn để bánh có cấu trúc nhẹ, xốp, phù hợp với gu ăn uống của người bản địa. Qua bàn tay chế biến tài hoa, bánh mì đã thoát thai hoàn toàn khỏi lớp áo baguette ban đầu, trở thành một món ăn độc lập, bình dân và mang đậm tâm hồn của ẩm thực đường phố Việt Nam.
                    Để tạo nên một ổ bánh mì ngon, khâu làm bột và kỹ nghệ nướng bánh đóng vai trò quyết định cấu trúc độc đáo của món ăn. Khối bột sau khi được nhào trộn kỹ, ủ nở đủ thời gian sẽ được người thợ khéo léo tạo hình thuôn dài với hai đầu nhọn, rồi dùng một lưỡi dao sắc rạch những đường dứt khoát trên thân bánh nhằm giúp bánh nở đều. Khi đưa vào lò nướng dưới nhiệt độ cao, ổ bánh mì đạt chuẩn phải có sự tương phản cấu trúc cực kỳ thú vị: lớp vỏ bên ngoài mỏng dính, vàng ruộm và giòn tan, khi cắn nghe tiếng rôm rốp vui tai; trong khi phần ruột bên trong lại trắng muốt, xốp mềm, có độ ẩm mọng, dai nhẹ mộc mạc và tuyệt đối không bị khô khốc hay đặc đặc ruột như phiên bản gốc.`,
                    img1: "/images/mlem/detail_c_64.jpg",
                    source1: "Nguồn: Báo Công Thương ",
                    heading2: "TINH TÚY PHẦN NHÂN PHONG PHÚ, HƯƠNG VỊ BÙNG NỔ VÀ DANH TIẾNG QUỐC TẾ",
                    text2: ` Ổ bánh mì giòn xốp ấy chính là lớp nền hoàn hảo để ôm trọn một "bữa tiệc" sắc màu của phần nhân vô cùng phong phú và đồ sộ. Khi có khách mua, người bán sẽ dùng dao xẻ dọc thân bánh, phết một lớp bơ trứng gà béo ngậy cùng lớp pate gan heo dẻo mịn, thơm nức mũi. Tiếp sau đó là các loại thịt ăn kèm đa dạng như chả lụa thái mỏng, thịt xá xíu đỏ hồng, thịt nguội, thịt băm hoặc chà bông. Để trung hòa vị béo ngậy của thịt mỡ, người ta bắt buộc phải xếp thêm một lớp dưa góp làm từ đu đủ, cà rốt bào sợi muối chua ngọt, vài lát dưa leo xắt mỏng, một vài cọng ngò rí xanh mướt và vài lát ớt tươi cay nồng. Cuối cùng, một muỗng nước sốt thịt kho đậm đà rưới dọc theo thân bánh sẽ kết nối toàn bộ nguyên liệu lại với nhau.
                    Sự hòa quyện nguyên liệu phóng khoáng này tạo nên một hương vị bùng nổ vị giác mạnh mẽ ngay từ miếng cắn đầu tiên. Thực khách sẽ cảm nhận được cái giòn rụm của vỏ bánh, vị béo ngậy của bơ pate, vị đậm đà thơm ngọt của các loại thịt chả, quyện cùng sự thanh mát, giòn sần sật của rau dưa và chút cay tê râm ran của ớt tươi. Từ những ổ bánh mì truyền thống, theo dòng phát triển và văn hóa khẩu vị mỗi vùng miền, món ăn này còn biến tấu ra rất nhiều phiên bản độc đáo khác như bánh mì que Hải Phòng nhỏ nhắn, bánh mì chảo, bánh mì bột lọc miền Trung hay bánh mì xíu mại trứng muối, mang lại những trải nghiệm thưởng thức vô cùng phong phú.`,
                    img2: "/images/mlem/detail_c_65.jpg",
                    source2: "Nguồn: VnExpress",
                      text3: "Chính sức sống mãnh liệt và hương vị quyến rũ vượt thời gian đó đã đưa bánh mì vượt qua ranh giới quốc gia để trở thành một biểu tượng văn hóa và đạt danh tiếng lẫy lừng trên thế giới. Tương tự như Phở, từ “Banh mi” đã chính thức được đưa vào từ điển Oxford như một danh từ riêng viết hoa không cần dịch, khẳng định vị thế độc lập trên bản đồ ẩm thực toàn cầu. Bánh mì liên tục đứng đầu các bảng xếp hạng những món ăn đường phố ngon nhất hành tinh do các chuyên trang ẩm thực uy tín như CNN, TasteAtlas bình chọn. Sự tiện lợi, giá thành bình dân cùng hương vị tinh tế, cân bằng dinh dưỡng tuyệt vời đã khiến bánh mì trở thành niềm tự hào kiêu hãnh của đất nước và con người Việt Nam trong mắt bạn bè quốc tế.",
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_66.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=9qN9izm1xbA",
                            text: " Bánh mì truyền thống: Lựa chọn số 1 cho bữa sáng tiện lợi | Nhịp sống Hà Nội",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube HTV - Đài Hà Nội",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Bánh mì Việt Nam là một cuộc cách mạng ẩm thực đường phố, nơi tư duy sáng tạo của người Việt đã biến một sản phẩm phương Tây thành một huyền thoại độc lập toàn cầu. Sự hòa quyện giữa vỏ giòn ruột xốp, vị béo của patê, đậm đà của thịt nguội và thanh mát của đồ chua chính là đỉnh cao của nghệ thuật kẹp bánh thế giới. ",
                }
            },
            {
                imgId: "mlem_23",
                name: "Thịt trâu gác bếp",
                thumb: "/images/mlem/thumb_23.jpg",
                article: {
                    title: "THỊT TRÂU GÁC BẾP",
                    subtitle: "Thịt trâu gác bếp (hay còn gọi là thịt trâu hun khói, thịt trâu khô) là món ăn đặc sản vô cùng độc đáo, mang đậm bản sắc văn hóa ẩm thực của đồng bào các dân tộc thiểu số vùng Tây Bắc, đặc biệt là người Thái đen. Ban đầu, đây chỉ là một phương pháp bảo quản thực phẩm thô sơ của người dân miền sơn cước để tích trữ thức ăn qua những ngày mưa lũ hay đi rừng dài ngày. Theo thời gian, món ăn này đã vượt qua những cánh rừng già, trở thành thứ đặc sản thượng hạng được thực khách dưới xuôi săn đón vô cùng nồng nhiệt.",
                    heading1: "NGUỒN GỐC ĐỜI SỐNG NƯƠNG RẪY VÀ NGHỆ THUẬT TUYỂN CHỌN NGUYÊN LIỆU, GIA VỊ ĐỘC BẢN ",
                    text1: `Đối với người Thái ở Tây Bắc, trâu là tài sản lớn và thường chỉ được mổ vào các dịp trọng đại như lễ Tết, cưới hỏi, hay cúng bản. Do lượng thịt quá nhiều không thể ăn hết trong một vài ngày, những người phụ nữ Thái khéo léo đã nghĩ ra cách tẩm ướp thịt với các loại gia vị rừng rồi đem treo lên thanh xà trên bếp củi gộc của gia đình. Hằng ngày, khói từ bếp lửa nấu cơm, sưởi ấm sẽ bay lên, bao bọc và làm khô thịt một cách tự nhiên. Phương pháp hun khói độc đáo này giúp thịt trâu có thể bảo quản được vài tháng, thậm chí cả năm trời mà không hề bị hư hỏng.
                    Linh hồn tạo nên độ ngon bền bỉ của món ăn qua thời gian nằm ở chất lượng thịt trâu Tây Bắc săn chắc. Khác với trâu nuôi lấy thịt ở đồng bằng, trâu rừng Tây Bắc được chăn thả tự nhiên trên các sườn đồi, núi dốc, hằng ngày phải leo trèo và ăn cỏ hoang nên cơ bắp rất phát triển. Người làm phải chọn phần thịt ngon nhất của con trâu, đó là thịt mông, thăn hoặc bắp. Thịt được lọc bỏ sạch gân, mỡ, sau đó thái dọc thớ thành những miếng hình chữ nhật dài, dày dặn để khi hun khói thịt không bị quá khô khốc.
                    Điều làm nên hương vị "gây nghiện" và khác biệt hoàn toàn với món thịt bò khô dưới xuôi chính là các loại gia vị tẩm ướp đậm chất đại ngàn. Thịt trâu sau khi thái miếng sẽ được đem giã nhuyễn và trộn đều với hành, tỏi, ớt nướng chín, tiêu đen và đặc biệt là hai loại gia vị độc bản của Tây Bắc: mắc khén (hạt tiêu rừng có vị thơm nồng, thanh mát) và hạt dổi (loại hạt có mùi thơm ngào ngạt, quý hiếm). Thịt được ướp trong khoảng 2-3 tiếng để các tinh chất gia vị thấm sâu vào từng thớ thịt trước khi được xâu vào thanh tre và treo lên gác bếp.`,
                    img1: "/images/mlem/detail_c_67.jpg",
                    source1: "Nguồn ảnh: Mường Thanh Hospitality  ",
                    heading2: "KỸ NGHỆ GÓI BÁNH, QUY TRÌNH LUỘC KỲ CÔNG VÀ HƯƠNG VỊ ĐOÀN VIÊN",
                    text2: ` Sau khi thịt ngấm trọn gia vị núi rừng, người thợ bước vào nghệ thuật hun khói bếp củi già đòi hỏi sự kiên nhẫn và kinh nghiệm lâu năm. Người ta phải đốt củi liên tục dưới gác bếp, tốt nhất là dùng củi từ các loại cây rừng già như cây nhãn, cây bưởi để khói thơm và không có độc. Khói bếp bốc lên sẽ sấy khô miếng thịt một cách từ từ, mỡ trâu chảy bớt giúp thịt săn lại. Sau nhiều tuần "ăn khói", lớp vỏ ngoài của miếng thịt trâu sẽ chuyển sang màu nâu sẫm, gần như đen bóng do nhựa khói, nhưng khi xé ra, phần thịt bên trong vẫn giữ nguyên màu đỏ hồng cánh sen vô cùng quyến rũ.
                    Khi thưởng thức thành phẩm thịt trâu gác bếp, bạn sẽ trải qua một cuộc phiêu lưu vị giác đầy thú vị với hương vị hòa quyện đậm đà sâu lắng. Đầu tiên là mùi thơm hăng hắc, ngai ngái đặc trưng của khói bếp củi bám trên vỏ thịt. Khi xé nhỏ từng thớ thịt ra và nhai chậm rãi, vị giác sẽ bị đánh thức bởi vị ngọt đậm đà, săn chắc của thịt trâu, hòa quyện cùng vị tê rần rần trên đầu lưỡi của hạt mắc khén, vị cay nồng của ớt tỏi băm. Càng nhai, vị ngọt hậu của thịt càng tiết ra rõ rệt, đọng lại nơi cổ họng một cảm giác ấm áp, kéo dài.`,
                    img2: "/images/mlem/detail_c_68.jpg",
                    source2: "Gia vị ướp thịt trâu (Nguồn ảnh: Banlaothaimart)",
                      text3: `Để trọn vẹn nét tinh túy này, thực khách cần phải thưởng thức đúng điệu cùng chẩm chéo – thứ nước chấm gắn liền với văn hóa bản địa. Thịt trâu gác bếp trước khi ăn thường được đem hấp cách thủy khoảng 10-15 phút cho thịt mềm ra, hoặc bọc vào giấy báo rồi nướng sơ trên than hồng, sau đó dùng chày đập dập dọc thớ để các sợi thịt tơi ra, dễ xé. Món này bắt buộc phải chấm cùng chẩm chéo (thứ nước chấm tinh túy của người Thái làm từ muối, ớt nướng, tỏi, mắc khén, rau thơm giã nhỏ) hoặc đơn giản là một chút tương ớt vắt thêm chanh. Giữa cái lạnh se se của vùng cao, ngồi bên hiên nhà sàn, xé từng sợi thịt trâu gác bếp dai ngọt, chấm ngập vào chén chẩm chéo cay nồng, nhấp thêm một ngụm rượu cần hay hớp bia mát lạnh thì không còn gì tuyệt vời bằng. Món ăn này chính là hiện thân cho sự mộc mạc, hoang sơ nhưng vô cùng tinh tế của đất và người phương Bắc.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_69.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=0hu7uEyc17Q",
                            text: " Thịt Trâu Gác Bếp: Đặc sản Tây Bắc",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube KÊNH VTC16",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Thịt trâu gác bếp là món ăn mang đậm bản sắc văn hóa của đồng bào các dân tộc vùng Tây Bắc. Không chỉ thể hiện kinh nghiệm bảo quản thực phẩm độc đáo trong điều kiện miền núi, món ăn còn phản ánh tập quán sinh hoạt, đời sống lao động và tinh thần gắn kết cộng đồng của người dân nơi đây. Với hương vị đặc trưng từ thịt trâu, khói bếp và các loại gia vị núi rừng, thịt trâu gác bếp đã vượt ra khỏi phạm vi địa phương để trở thành một trong những đặc sản tiêu biểu của vùng cao Tây Bắc, góp phần giới thiệu nét đẹp văn hóa ẩm thực Việt Nam đến bạn bè trong và ngoài nước.",
                }
            },
            {
                imgId: "mlem_24",
                name: "Xôi xéo",
                thumb: "/images/mlem/thumb_24.jpg",
                article: {
                    title: "XÔI XÉO",
                    subtitle: "Xôi xéo là một trong những món ăn sáng mộc mạc, thân thương và mang tính biểu trưng cao nhất của văn hóa ẩm thực đường phố Hà Nội. Không sang trọng, cầu kỳ, gói xôi xéo ẩn mình trong lớp lá sen, lá chuối xanh ngắt luôn có một sức hút kỳ lạ đối với mọi thế hệ người dân thủ đô. Giữa muôn vàn loại xôi khác nhau, xôi xéo luôn nổi bật và dễ dàng được nhận ra từ xa nhờ sắc vàng rực rỡ như ánh nắng ban mai và mùi thơm nồng nàn lan tỏa khắp các ngõ phố mỗi sớm hè.",
                    heading1: "NGUỒN GỐC TÊN GỌI ĐỘC ĐÁO VÀ HẠT NẾP VÀNG ÓNG DẺO THƠM",
                    text1: `Cho đến nay, nguồn gốc của cái tên "xôi xéo" vẫn là một chủ đề gợi nhiều sự tò mò và có nhiều cách lý giải khác nhau trong dân gian. Cách giải thích phổ biến và được nhiều người đồng tình nhất xuất phát từ chính hành động cắt xéo khối đậu xanh của người bán khi gói xôi. Đậu xanh sau khi giã nhuyễn được nắm thành những quả cầu lớn tròn trịa, khi có khách mua, người bán sẽ dùng một con dao nhỏ sắc bén để cắt từng lát mỏng chéo (xéo) xuống mâm xôi. Ngoài ra, một số bậc cao niên lại cho rằng từ "xéo" bắt nguồn từ công đoạn giã nhuyễn đậu xanh khi còn nóng, hay hành động nén chặt các nguyên liệu lại với nhau trong quá trình chế biến thủ công ngày trước.
                    Bên cạnh cái tên gọi độc đáo mang đậm dấu ấn dân gian, yếu tố nền tảng tạo nên một gói xôi xéo ngon chính là phần xôi nếp. Người nấu phải lựa chọn loại nếp cái hoa vàng hạt tròn đều, mẩy căng, đem vo sạch rồi ngâm trong nước cốt nghệ tươi hòa loãng suốt một đêm. Công đoạn này đòi hỏi sự khéo léo để hạt nếp khi đồ chín có màu vàng óng ả hoàn toàn tự nhiên, không bị xỉn màu và cũng không có mùi hăng của nghệ. Khi đồ xôi, người thợ phải canh lửa thật chuẩn để hạt xôi nở đều, bóng bẩy, dẻo mềm quánh dính vào nhau nhưng tuyệt đối không bị nát hay bị khô sống.`,
                    img1: "/images/mlem/detail_c_70.jpg",
                    source1: "Xôi xéo miền Bắc (Nguồn: Coop online) ",
                    heading2: "SỰ HÒA QUYỆN CỦA ĐẬU XANH, HÀNH PHI VÀ LỚP MỠ GÀ BÉO NGẬY",
                    text2: "Khi phần xôi nếp nền tảng đã đạt độ hoàn hảo, hai nguyên liệu “vàng” tiếp theo sẽ xuất hiện để tạo nên linh hồn và kết cấu độc đáo cho xôi xéo, đó chính là đậu xanh và hành phi. Đậu xanh phải được lựa chọn loại bỏ vỏ, hấp chín tới rồi đem giã thật nhuyễn ngay khi còn nóng hổi, sau đó dùng tay nắm thành những quả cầu tròn xoe, chắc nịch. Hành phi ăn kèm bắt buộc phải là hành ta (hành tím) được xắt mỏng, phơi hờ cho ráo nước rồi đem băm nhỏ đem phi trong chảo mỡ lớn cho đến khi chuyển sang màu vàng ruộm, giòn tan. Mùi thơm nồng, bùi béo của những lát đậu xanh mỏng mịn quyện cùng cái giòn rụm, thơm nức của hành phi tạo nên một sự cộng hưởng hương vị vô cùng tuyệt vời.",
                    img2: "/images/mlem/detail_c_71.jpg",
                    source2: "Nguồn: Internet",
                      text3: "Để hoàn thiện đĩa xôi và kết nối tất cả các nguyên liệu lại với nhau, một thành phần tuy âm thầm nhưng đóng vai trò quyết định chính là mỡ gà. Sau khi chiên hành phi, phần mỡ gà vàng óng, thấm đượm mùi hành thơm phức sẽ được người bán giữ lại trong một chiếc âu nhỏ. Khi gói xôi cho khách, sau lớp xôi vàng, lớp đậu xanh cắt mỏng và một nhúm hành phi, người bán sẽ dùng muỗng múc một chút mỡ gà rưới đều lên trên cùng. Lớp mỡ này kích thích vị giác tối đa khi giúp từng hạt xôi thêm phần bóng bẩy, tăng độ béo ngậy tự nhiên và làm dịu đi cái khô sần của đậu xanh, khiến gói xôi trở nên đậm đà, mọng ướt vô cùng đưa miệng.",
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/mlem/detail_c_72.jpg",
                    links: [
                        {
                            url: "youtube.com/watch?si=R3XaSKtcfwv2MAGp&v=udUgaFFiA6M&feature=youtu.be",
                            text: " Cách Làm Xôi Xéo Hà Nội Ngon Đúng Chuẩn Làng Xôi Phú Thượng",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cook béo",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Xôi xéo không chỉ đơn thuần là một món ăn sáng bình dân, mà là một mảnh ghép ký ức thiêng liêng, đong đầy hoài niệm của người dân đất Hà Thành. Gói gọn trong lớp lá sen mộc mạc, sắc vàng rực rỡ và hương thơm nồng nàn của hành mỡ ấy chính là hiện thân cho nét văn hóa ẩm thực đường phố đầy quyến rũ của thủ đô.  ",
                }
            },
        ]
    },
    
    check: {
        title: "TRẠM ĐỊNH VỊ DI SẢN",
        items: [
              {
                imgId: "check_1",
                name: "Dân ca Quan họ Bắc Ninh",
                thumb: "/images/check/thumb_1.jpg",
                article: {
                    title: "DÂN CA QUAN HỌ BẮC NINH - NHỮNG LÀN ĐIỆU GIAO DUYÊN CỦA XỨ KINH BẮC",
                    subtitle: "Mỗi độ xuân về, khi những lễ hội truyền thống rộn ràng diễn ra trên vùng đất Kinh Bắc, tiếng hát Quan họ lại ngân vang bên mái đình, bến nước và sân chùa. Trong những câu hát đối đáp mượt mà giữa liền anh và liền chị, Dân ca Quan họ Bắc Ninh không chỉ mang vẻ đẹp của nghệ thuật dân gian mà còn lưu giữ tâm hồn, tình cảm và lối ứng xử tinh tế của người dân vùng châu thổ Bắc Bộ.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: `Dân ca Quan họ là loại hình nghệ thuật dân gian gắn liền với cộng đồng cư dân vùng Kinh Bắc xưa, nay thuộc tỉnh Bắc Ninh và một phần tỉnh Bắc Giang. Mặc dù thời điểm ra đời của Quan họ vẫn còn nhiều ý kiến khác nhau, các nhà nghiên cứu đều thống nhất rằng đây là một trong những loại hình dân ca tiêu biểu và hoàn thiện nhất của Việt Nam.
                    Quan họ phát triển trong môi trường văn hóa làng xã truyền thống, gắn với các lễ hội đình, chùa và các sinh hoạt cộng đồng. Trải qua nhiều thế hệ, những câu hát giao duyên được trao truyền từ người này sang người khác bằng hình thức truyền khẩu, tạo nên một kho tàng làn điệu phong phú và độc đáo.
                    Trong đời sống văn hóa của người Kinh Bắc, Quan họ không đơn thuần là hình thức ca hát mà còn là phương thức giao tiếp cộng đồng, thể hiện tình bạn, tình yêu quê hương và những chuẩn mực ứng xử giàu tính nhân văn.
                    Ngày 30/9/2009, tại kỳ họp lần thứ 4 của Ủy ban Liên Chính phủ Công ước 2003, UNESCO đã chính thức ghi danh Dân ca Quan họ Bắc Ninh vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại.`,
                    img1: "/images/check/detail_b_1.jpg",
                    source1: "Hình ảnh dân ca quan họ Bắc Ninh đã trở thành biểu tượng tinh thần của người dân xứ Kinh Bắc (Ảnh: Sưu tầm Internet) ",
                    heading2: "DÂN CA QUAN HỌ BẮC NINH CÓ GÌ ĐẶC SẮC?",
                    text2: ` Điểm nổi bật của Dân ca Quan họ là hình thức hát giao duyên giữa các nhóm liền anh và liền chị. Các bài hát thường được trình bày theo lối đối đáp, bên nam hát một câu thì bên nữ sẽ hát đáp lại bằng làn điệu tương ứng. Quá trình đối đáp đòi hỏi người hát phải có trí nhớ tốt, kỹ thuật thanh nhạc điêu luyện và khả năng ứng xử linh hoạt.
                    Quan họ truyền thống thường được hát mộc, không sử dụng nhạc đệm. Chính vì vậy, người hát phải làm chủ kỹ thuật đặc trưng được đúc kết trong bốn yếu tố “vang, rền, nền, nảy” những tiêu chuẩn tạo nên vẻ đẹp riêng của giọng hát Quan họ.
                    Bên cạnh giá trị âm nhạc, Quan họ còn gây ấn tượng bởi trang phục truyền thống đặc sắc. Hình ảnh liền chị trong áo mớ ba mớ bảy, nón quai thao và liền anh với khăn xếp, áo the đã trở thành biểu tượng quen thuộc của văn hóa Kinh Bắc.
                    Kho tàng Quan họ hiện nay gồm hàng trăm làn điệu với nội dung phong phú, phản ánh tình yêu quê hương, tình cảm đôi lứa, tình bạn và những giá trị đạo đức trong đời sống cộng đồng.`,
                    img2: "/images/check/detail_b_2.jpg",
                    source2: "Hát giao duyên giữa liền anh và liền chị (Ảnh: Sưu tầm Internet)",
                      text3: `Dân ca Quan họ là kết tinh của đời sống văn hóa, phong tục và tín ngưỡng của cư dân vùng Kinh Bắc. Không chỉ mang giá trị nghệ thuật, di sản còn phản ánh cách ứng xử lịch thiệp, trọng tình nghĩa và tinh thần gắn kết cộng đồng của người dân nơi đây.
                    Thông qua các lễ hội truyền thống và những cuộc hát canh, Quan họ góp phần duy trì mối quan hệ giữa các làng kết chạ, tăng cường sự gắn bó giữa các thế hệ và lưu giữ bản sắc văn hóa địa phương.
                    Ngày nay, những câu lạc bộ Quan họ, đội văn nghệ quần chúng và các hoạt động giao lưu thường xuyên được tổ chức, giúp di sản tiếp tục hiện diện trong đời sống đương đại`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_3.jpg",
                    links: [
                        {
                            url: "https://youtu.be/9kYIRw5Ry64?si=ECmDK8UvRjAIIhIJ",
                            text: " Ngồi Tựa Mạn Thuyền | Anh Ba Dân - Thu Thủy | Dân ca Quan họ Bắc Ninh",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Anh Ba Dân",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Giữa nhịp sống đổi thay của xã hội hiện đại, những câu hát Quan họ vẫn vang lên trong các lễ hội và làng quê Kinh Bắc như một sợi dây kết nối quá khứ với hiện tại. Từ những cuộc hát giao duyên bên bến nước năm nào đến các sân khấu văn hóa hôm nay, Dân ca Quan họ Bắc Ninh vẫn giữ nguyên vẻ đẹp đằm thắm, góp phần làm nên bản sắc riêng của vùng đất được mệnh danh là cái nôi của văn hiến Bắc Bộ.",
                }
            },
            {
                imgId: "check_2",
                name: "Nghề dệt thổ cẩm",
                thumb: "/images/check/thumb_2.jpg",
                article: {
                    title: "NGHỀ DỆT THỔ CẨM KHMER NAM BỘ",
                    subtitle: "Giữa không gian văn hóa đặc sắc của vùng Bảy Núi An Giang, nghề dệt thổ cẩm của đồng bào Khmer Nam Bộ đã tồn tại và phát triển qua nhiều thế hệ, trở thành một phần không thể thiếu trong đời sống văn hóa cộng đồng. Không chỉ là nghề thủ công truyền thống tạo ra những sản phẩm phục vụ sinh hoạt hằng ngày, nghề dệt thổ cẩm còn phản ánh thế giới quan, tín ngưỡng, thẩm mỹ và bản sắc văn hóa của người Khmer Nam Bộ. Ngày nay, cùng với quá trình bảo tồn và phát huy giá trị di sản, nghề dệt thổ cẩm Khmer đang trở thành nguồn lực quan trọng cho phát triển kinh tế và du lịch cộng đồng tại khu vực Tây Nam Bộ.",
                    heading1: "GIỚI THIỆU CHUNG ",
                    text1: `Nghề dệt thổ cẩm của người Khmer hiện còn được bảo tồn và thực hành chủ yếu tại làng dệt Văn Giáo (nay thuộc xã An Cư, tỉnh An Giang), nằm dưới chân dãy Thất Sơn. Từ xa xưa, hầu như mỗi gia đình Khmer đều có khung cửi để dệt vải, may trang phục và các vật dụng phục vụ đời sống. Những sản phẩm như xà-rông, khăn choàng, túi xách hay trang phục lễ hội không chỉ đáp ứng nhu cầu sinh hoạt mà còn mang ý nghĩa văn hóa, tâm linh sâu sắc, gắn liền với các nghi lễ, phong tục và vòng đời của cộng đồng.
                    Trải qua nhiều biến động lịch sử và sự cạnh tranh của hàng công nghiệp, nghề dệt từng đứng trước nguy cơ mai một. Tuy nhiên, từ cuối thế kỷ XX, với sự hỗ trợ của chính quyền và các tổ chức phát triển, nghề dệt thổ cẩm Khmer đã dần được khôi phục và phát triển mạnh mẽ. Hiện nay, các sản phẩm mang thương hiệu Silk Khmer Văn Giáo không chỉ được tiêu thụ trong nước mà còn xuất khẩu sang nhiều quốc gia trong khu vực và trên thế giới.
                    Nhằm bảo tồn và phát huy những giá trị văn hóa đặc sắc của cộng đồng Khmer Nam Bộ, năm 2019, Bộ Văn hóa, Thể thao và Du lịch đã đưa Nghề dệt thổ cẩm của người Khmer Nam Bộ vào Danh mục Di sản văn hóa phi vật thể quốc gia thuộc loại hình Nghề thủ công truyền thống. `,
                    img1: "/images/check/detail_b_4.jpg",
                    source1: "Thổ cẩm Văn Giáo được chứng nhận nhãn hiệu tập thể Silk Khmer  (Ảnh: Cổng thông tin điện tử)",
                    heading2: "QUY TRÌNH VÀ KỸ THUẬT DỆT TRUYỀN THỐNG",
                    text2: ` Nghề dệt thổ cẩm Khmer đòi hỏi sự tỉ mỉ, kiên nhẫn và kỹ năng cao của người thợ. Toàn bộ quá trình sản xuất được thực hiện thủ công với nhiều công đoạn liên tiếp, từ chuẩn bị nguyên liệu, nhuộm sợi, mắc khung đến dệt hoa văn và hoàn thiện sản phẩm.
                    Điểm đặc sắc của nghề dệt nằm ở kỹ thuật tạo hoa văn. Các nghệ nhân không chỉ sử dụng phương pháp “bắt bông” truyền thống mà còn bảo lưu kỹ thuật dệt hoa văn trực tiếp trên khung cửi - một kỹ thuật đòi hỏi nhiều kinh nghiệm và tay nghề cao. Mỗi sản phẩm có thể mất từ vài ngày đến hơn một tuần để hoàn thành, tùy thuộc vào kích thước và độ phức tạp của họa tiết.`,
                    img2: "/images/check/detail_b_5.jpg",
                    source2: "Để dệt nên một tấm thổ cẩm, phải mất nhiều thời gian và công sức, đòi hỏi sự khéo léo của người thợ (Ảnh: Cổng thông tin điện tử)",
                      text3: " Hoa văn trên thổ cẩm Khmer mang đậm dấu ấn văn hóa dân tộc. Các họa tiết thường lấy cảm hứng từ đời sống thường nhật, thiên nhiên, kiến trúc chùa tháp, hình tượng Đức Phật, hoa lá và những biểu tượng gắn với tín ngưỡng Phật giáo Nam tông Khmer. Mỗi hoa văn không chỉ mang giá trị thẩm mỹ mà còn chứa đựng những thông điệp văn hóa, phản ánh quan niệm về vũ trụ, cuộc sống và khát vọng của cộng đồng. Qua từng đường dệt, người thợ gửi gắm những câu chuyện về lịch sử, phong tục và bản sắc dân tộc được lưu truyền qua nhiều thế hệ.",
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_6.jpg",
                    links: [
                        {
                            url: "https://youtu.be/3_nPFfWW1VQ?si=s1mGWl1exPEFHzMf",
                            text: " Hồi sinh” nghề dệt thổ cẩm của người Khmer Nam bộ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube VTV10 - Kết nối miền Tây",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Nghề dệt thổ cẩm Khmer Nam Bộ là kết tinh của trí tuệ, sự sáng tạo và bản sắc văn hóa của cộng đồng Khmer qua nhiều thế hệ. Những tấm thổ cẩm không chỉ là sản phẩm thủ công tinh xảo mà còn là “ngôn ngữ văn hóa” kể câu chuyện về lịch sử, tín ngưỡng và đời sống của một tộc người. Trong bối cảnh hội nhập và phát triển, việc bảo tồn và phát huy nghề dệt thổ cẩm không chỉ góp phần gìn giữ di sản văn hóa dân tộc mà còn mở ra những cơ hội mới cho phát triển kinh tế, du lịch và nâng cao đời sống của cộng đồng Khmer Nam Bộ.",
                }
            },
            {
                imgId: "check_3",
                name: "Nghề làm gốm của người Chăm",
                thumb: "/images/check/thumb_3.jpg",
                article: {
                    title: "NGHỀ LÀM GỐM CỦA NGƯỜI CHĂM Ở TỈNH BÌNH THUẬN",
                    subtitle: "Nghề làm gốm của người Chăm là một trong những nghề thủ công truyền thống độc đáo, phản ánh sự sáng tạo và khả năng thích ứng của cộng đồng cư dân Chăm trong quá trình sinh sống trên vùng đất Nam Trung Bộ. Trải qua nhiều thế hệ, nghề gốm không chỉ tạo ra những sản phẩm phục vụ đời sống thường nhật mà còn lưu giữ những giá trị văn hóa đặc sắc của tộc người Chăm.",
                    heading1: "GIỚI THIỆU DI SẢN VÀ GHI DANH ",
                    text1: ` Hiện nay, tại tỉnh Bình Thuận, nghề làm gốm truyền thống còn được duy trì chủ yếu ở thôn Bình Đức, xã Phan Hiệp, huyện Bắc Bình. Đây là nơi vẫn bảo tồn gần như nguyên vẹn các kỹ thuật chế tác thủ công cổ truyền, từ khâu xử lý nguyên liệu, tạo hình đến nung sản phẩm.
                    Năm 2012, Nghề làm gốm của người Chăm tỉnh Bình Thuận được đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia. Đến năm 2022, UNESCO ghi danh “Nghệ thuật làm gốm của người Chăm” vào Danh sách Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp, khẳng định giá trị đặc biệt của di sản trong kho tàng văn hóa nhân loại.
                    Cho đến nay, nguồn gốc chính xác của nghề gốm Chăm vẫn chưa được xác định rõ ràng. Các tư liệu lịch sử, văn bản cổ hay truyền thuyết dân gian hầu như không đề cập cụ thể đến sự ra đời của nghề. Tuy nhiên, theo ký ức của các nghệ nhân cao tuổi, nghề gốm đã tồn tại từ rất lâu đời và được truyền dạy liên tục trong cộng đồng qua nhiều thế hệ.
                    Điều đặc biệt là trong số hàng chục làng Chăm tại Bình Thuận, chỉ có người Chăm ở thôn Bình Đức còn duy trì nghề làm gốm theo phương thức truyền thống. Chính sự bền bỉ gìn giữ ấy đã giúp nghề gốm trở thành một phần quan trọng trong đời sống văn hóa và bản sắc của cộng đồng địa phương.`,
                    img1: "/images/check/detail_b_7.jpg",
                    source1: "Nguồn ảnh: Mega.Vietnamplus ",
                    heading2: "KỸ THUẬT CHẾ TÁC ĐỘC ĐÁO",
                    text2: ` Một trong những nét đặc sắc nhất của gốm Chăm là toàn bộ quá trình sản xuất đều được thực hiện thủ công. Người thợ lựa chọn loại đất sét có độ dẻo và độ mịn phù hợp, sau đó tiến hành đập, ủ và nhào trộn để tạo nguyên liệu.
                    Khác với nhiều làng gốm nổi tiếng khác ở Việt Nam, người Chăm không sử dụng bàn xoay khi tạo hình sản phẩm. Thợ gốm, chủ yếu là phụ nữ, dùng đôi tay khéo léo kết hợp với những công cụ đơn giản như bàn kê, vòng tre hay miếng vải thô để nặn và vuốt sản phẩm. Trong quá trình thao tác, người thợ liên tục di chuyển quanh bàn kê, từng bước tạo nên hình dáng cân đối cho sản phẩm.
                    Sau khi tạo hình, sản phẩm được phơi khô tự nhiên, tiếp tục chỉnh sửa, làm bóng và phủ lớp nước thổ hoàng nhằm tạo màu sắc đặc trưng sau khi nung. Mỗi công đoạn đều đòi hỏi kinh nghiệm lâu năm và sự tỉ mỉ của người thợ để đảm bảo chất lượng thành phẩm.`,
                    img2: "/images/check/detail_b_8.jpg",
                    source2: "Sản phẩm Gốm Bàu Trúc (thị trấn Phước Dân, huyện Ninh Phước, tỉnh Ninh Thuận) được nung lộ thiên ở nhiệt độ cao từ 5-6 giờ. (Ảnh: Nguyễn Thủy/TTXVN) ",
                      text3: ` Không giống các lò nung khép kín hiện đại, gốm Chăm được nung hoàn toàn theo phương pháp lộ thiên. Đây được xem là một trong những kỹ thuật cổ truyền hiếm hoi còn tồn tại ở Đông Nam Á.
                    Các sản phẩm được sắp xếp ngoài trời theo thứ tự nhất định rồi phủ củi và rơm lên trên để đốt. Người thợ phải tính toán hướng gió, lượng nhiên liệu và thời gian nung sao cho nhiệt độ phân bố đều. Sau khi nung chín, sản phẩm được rảy nước chiết xuất từ trái thị rừng hoặc một số loại vỏ cây để tạo nên những vệt màu nâu đen độc đáo trên nền gốm đỏ hồng. Chính kỹ thuật này đã tạo nên vẻ đẹp riêng biệt của gốm Chăm Bình Thuận mà khó nơi nào có được.
                    Sản phẩm gốm Chăm rất đa dạng, bao gồm các vật dụng phục vụ sinh hoạt như nồi, ấm, chum, lu, chậu, hỏa lò hay khuôn làm bánh. Với giá thành hợp lý và độ bền cao, các sản phẩm này được sử dụng rộng rãi trong cộng đồng người Chăm cũng như nhiều nhóm cư dân khác ở khu vực Nam Trung Bộ.
                    Không chỉ mang giá trị kinh tế, nghề làm gốm còn gắn bó mật thiết với đời sống văn hóa và tín ngưỡng của người Chăm. Những kỹ thuật chế tác, tri thức dân gian và kinh nghiệm nghề nghiệp được truyền từ thế hệ này sang thế hệ khác, góp phần duy trì bản sắc văn hóa cộng đồng trong bối cảnh xã hội hiện đại.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_9.jpg",
                    links: [
                        {
                            url: "https://youtu.be/0Sy4CtcglC0?si=tO7u-rqJx1LJj2KH",
                            text: "  Gốm Bàu Trúc - Từ bàn tay Chăm",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Youtube British Council Vietnam",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Với kỹ thuật chế tác thủ công đặc sắc, phương thức nung lộ thiên độc đáo và những giá trị văn hóa được lưu giữ qua nhiều thế hệ, nghề làm gốm của người Chăm ở Bình Thuận là minh chứng sinh động cho sự sáng tạo và bản sắc của cộng đồng Chăm Việt Nam. Trong dòng chảy của đời sống hiện đại, việc gìn giữ và phát huy di sản này không chỉ góp phần bảo tồn một nghề thủ công cổ truyền mà còn giúp lan tỏa những giá trị văn hóa đặc sắc của dân tộc đến với cộng đồng trong nước và quốc tế.",
                }
            },
            {
                imgId: "check_4",
                name: "Dinh Độc Lập",
                thumb: "/images/check/thumb_4.jpg",
                article: {
                    title: "DINH ĐỘC LẬP - CHỨNG NHÂN LỊCH SỬ CỦA NGÀY ĐẤT NƯỚC THỐNG NHẤT",
                    subtitle: "Nằm giữa trung tâm Thành phố Hồ Chí Minh, Dinh Độc Lập là một trong những công trình lịch sử tiêu biểu của Việt Nam hiện đại. Không chỉ sở hữu giá trị kiến trúc độc đáo, nơi đây còn gắn liền với nhiều sự kiện trọng đại của dân tộc, đặc biệt là thời khắc kết thúc cuộc kháng chiến chống Mỹ, cứu nước vào ngày 30/4/1975.",
                    heading1: "NGUỒN GỐC VÀ QUÁ TRÌNH HÌNH THÀNH ",
                    text1: `Dinh Độc Lập tọa lạc tại số 135 đường Nam Kỳ Khởi Nghĩa, Quận 1, Thành phố Hồ Chí Minh. Công trình được xây dựng trên khu đất rộng khoảng 12 ha, từng mang nhiều tên gọi khác nhau như Dinh Norodom, Dinh Toàn quyền hay Dinh Tổng thống.
                    Tiền thân của Dinh Độc Lập là Dinh Norodom do chính quyền thực dân Pháp xây dựng từ năm 1868 và hoàn thành vào năm 1873. Sau năm 1954, công trình được bàn giao cho chính quyền Việt Nam Cộng hòa và được đổi tên thành Dinh Độc Lập vào năm 1955.
                    Sau khi tòa dinh cũ bị đánh bom năm 1962, một công trình mới được xây dựng trên nền cũ theo thiết kế của kiến trúc sư Ngô Viết Thụ – người Việt Nam đầu tiên đạt giải Khôi nguyên La Mã về kiến trúc.
                    Dinh Độc Lập là nơi ghi dấu nhiều sự kiện quan trọng trong lịch sử Việt Nam thế kỷ XX. Đặc biệt, vào ngày 30/4/1975, xe tăng của Quân Giải phóng tiến vào dinh, đánh dấu thắng lợi hoàn toàn của cuộc kháng chiến chống Mỹ, cứu nước và sự thống nhất đất nước.
                    Năm 1976, công trình được xếp hạng Di tích lịch sử cấp quốc gia. Đến năm 2009, Dinh Độc Lập được Thủ tướng Chính phủ công nhận là Di tích quốc gia đặc biệt.`,
                    img1: "/images/check/detail_b_10.jpg",
                    source1: "Dinh Độc Lập (Ảnh: Sưu tầm Internet) ",
                    heading2: "DINH ĐỘC LẬP CÓ GÌ ĐẶC SẮC?",
                    text2: ` Công trình là sự kết hợp hài hòa giữa kiến trúc hiện đại và triết lý kiến trúc phương Đông. Kiến trúc sư Ngô Viết Thụ đã khéo léo lồng ghép các biểu tượng văn hóa truyền thống Việt Nam vào tổng thể thiết kế, tạo nên một công trình mang đậm bản sắc dân tộc.
                    Dinh được xây dựng trên diện tích hơn 4.500 m² với hơn 100 phòng chức năng, bao gồm các phòng khánh tiết, phòng họp, phòng làm việc và hệ thống hầm ngầm kiên cố. Nổi bật trong kiến trúc công trình là hệ thống rèm hoa đá lấy cảm hứng từ hình ảnh đốt trúc, cùng khuôn viên cây xanh và hồ nước bán nguyệt mang nét đẹp truyền thống Việt Nam.`,
                    img2: "/images/check/detail_b_11.jpg",
                    source2: "Ảnh: Sưu tầm Internet",
                  
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_12.jpg",
                    links: [
                        {
                            url: "https://youtu.be/V21-By7aQHc?si=0iHseo4ufIlaSGPZ",
                            text: " DINH ĐỘC LẬP - CINEMATIC FILM BY KỲ ANH NGUYỄN & JAMES NGHĨA TUẤN",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube 1st.themoments",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Dinh Độc Lập là chứng tích đặc biệt quan trọng của lịch sử dân tộc, phản ánh những biến động lớn của đất nước trong thế kỷ XX. Với những giá trị lịch sử, văn hóa và kiến trúc đặc sắc, Dinh Độc Lập là một biểu tượng của hành trình đấu tranh giành độc lập, tự do và thống nhất đất nước. Đây không chỉ là địa điểm gắn liền với sự kiện thống nhất đất nước mà còn là công trình kiến trúc tiêu biểu, thể hiện sự giao thoa giữa giá trị truyền thống và hiện đại. Ngày nay, Dinh Độc Lập là điểm đến văn hóa – lịch sử nổi bật của Thành phố Hồ Chí Minh, thu hút đông đảo du khách trong và ngoài nước.",
                }
            },
            {
                imgId: "check_5",
                name: "Quần thể danh thắng Tràng An",
                thumb: "/images/check/thumb_5.jpg",
                article: {
                    title: "QUẦN THỂ DANH THẮNG TRÀNG AN",
                    subtitle: "Có những nơi khiến con người choáng ngợp bởi vẻ đẹp của thiên nhiên, cũng có những nơi cuốn hút bởi chiều sâu lịch sử và văn hóa. Tràng An là một trong số ít địa danh hội tụ cả hai giá trị ấy. Giữa những dãy núi đá vôi trùng điệp, dòng nước xanh trong len lỏi qua các hang động huyền bí và những di tích cổ kính, Tràng An hiện lên như một bức tranh sống động về sự giao hòa giữa con người và thiên nhiên qua hàng chục nghìn năm lịch sử.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: `Quần thể danh thắng Tràng An nằm ở phía Nam đồng bằng sông Hồng, thuộc tỉnh Ninh Bình, cách Hà Nội khoảng 90 km. Di sản có diện tích hơn 6.172 ha, bao gồm ba khu vực chính là Cố đô Hoa Lư, Khu danh thắng Tràng An - Tam Cốc - Bích Động và Rừng đặc dụng Hoa Lư.
                    Toàn bộ khu vực được hình thành trên khối núi đá vôi có tuổi địa chất hơn 250 triệu năm. Trải qua quá trình vận động địa chất kéo dài cùng tác động của nước và khí hậu nhiệt đới, nơi đây đã hình thành nên hệ thống núi đá vôi, hang động xuyên thủy, thung lũng ngập nước và các hố sụt karst độc đáo bậc nhất thế giới.
                    Không chỉ sở hữu giá trị tự nhiên nổi bật, Tràng An còn là nơi lưu giữ những dấu tích khảo cổ học quan trọng, phản ánh quá trình cư trú và thích nghi của con người với môi trường tự nhiên từ hơn 30.000 năm trước.
                    Ngày 23/6/2014, tại Kỳ họp lần thứ 38 của Ủy ban Di sản Thế giới tổ chức tại Doha (Qatar), UNESCO đã chính thức ghi danh Quần thể danh thắng Tràng An vào Danh mục Di sản Văn hóa và Thiên nhiên Thế giới.
                    Đây là Di sản hỗn hợp đầu tiên của Việt Nam và Đông Nam Á được UNESCO công nhận, đáp ứng đồng thời các tiêu chí về văn hóa, vẻ đẹp thẩm mỹ và địa chất - địa mạo.`,
                    img1: "/images/check/detail_b_13.jpg",
                    source1: "Nguồn: vietnamtourism ",
                    heading2: "TRÀNG AN CÓ GÌ ĐẶC SẮC?",
                    text2: ` Tràng An thường được ví như “Hạ Long trên cạn” bởi cảnh quan kỳ vĩ của những dãy núi đá vôi soi bóng xuống các dòng sông và hồ nước xanh ngọc. Hệ thống hang động xuyên thủy nối liền các thung lũng tạo nên một không gian thiên nhiên vừa hùng vĩ vừa thơ mộng.
                    Điểm đặc biệt của Tràng An nằm ở sự kết hợp hài hòa giữa núi, sông, hang động, rừng nguyên sinh và các công trình văn hóa tâm linh. Du khách có thể ngồi thuyền len lỏi qua những hang động như Hang Địa Linh, Hang Tối, Hang Sáng, Hang Nấu Rượu hay Hang Ba Giọt để cảm nhận vẻ đẹp nguyên sơ của vùng di sản.
                    Bên cạnh khu sinh thái Tràng An, Tam Cốc - Bích Động cũng là điểm đến nổi bật trong quần thể di sản. Những cánh đồng lúa trải dài bên dòng Ngô Đồng, cùng hệ thống hang động tự nhiên và chùa Bích Động cổ kính đã tạo nên một trong những cảnh quan đặc trưng nhất của Ninh Bình.
                    Ngoài ra, khu vực còn bao gồm Rừng đặc dụng Hoa Lư với hệ sinh thái phong phú, là nơi sinh sống của nhiều loài động thực vật quý hiếm, trong đó có loài vượn yếm trắng nằm trong Sách đỏ thế giới.`,
                    img2: "/images/check/detail_b_14.jpg",
                    source2: "Nguồn ảnh: Báo Hà Nội mới",
                      text3: `Tràng An là một trong những địa điểm hiếm hoi trên thế giới thể hiện rõ mối quan hệ giữa con người và môi trường tự nhiên qua hàng chục nghìn năm phát triển. Các di chỉ khảo cổ học tại hang Búi, hang Trống và nhiều địa điểm khác đã cung cấp những bằng chứng quý giá về quá trình thích nghi của con người trước những biến đổi khí hậu và địa lý trong quá khứ.
                    Di sản còn gắn liền với lịch sử hình thành và phát triển của nhà nước phong kiến đầu tiên ở Việt Nam thông qua quần thể di tích Cố đô Hoa Lư. Đây từng là kinh đô của các triều đại Đinh, Tiền Lê và những năm đầu thời Lý, lưu giữ nhiều giá trị lịch sử quan trọng của dân tộc.
                    Về mặt địa chất, Tràng An được đánh giá là một trong những mô hình karst nhiệt đới ẩm tiêu biểu nhất thế giới. Những bằng chứng địa chất tại đây giúp các nhà khoa học nghiên cứu quá trình tiến hóa địa hình cũng như sự biến đổi của mực nước biển qua nhiều thời kỳ.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_15.jpg",
                    links: [
                        {
                            url: "https://youtu.be/aoUIUiNWY88?si=N8Ec0v595aYO833L",
                            text: "  Trang An, Ninh Binh - The World natural and cultural heritage 🇻🇳 ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Amazing Things in Vietnam",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Khi những chuyến đò chầm chậm lướt qua những hang động đá vôi và mặt nước phẳng lặng như gương, Tràng An không chỉ mang đến cảm giác thư thái trước vẻ đẹp của thiên nhiên mà còn gợi mở hành trình khám phá lịch sử hàng vạn năm của con người trên vùng đất này. Chính sự giao thoa hiếm có giữa thiên nhiên, văn hóa và lịch sử đã tạo nên sức hấp dẫn riêng, khiến Tràng An trở thành một trong những di sản đặc biệt nhất của Việt Nam và thế giới.",
                }
            },
            {
                imgId: "check_6",
                name: "Tín ngưỡng Thờ mẫu Tam phủ",
                thumb: "/images/check/thumb_6.jpg",
                article: {
                    title: "THỰC HÀNH TÍN NGƯỠNG THỜ MẪU TAM PHỦ CỦA NGƯỜI VIỆT",
                    subtitle: "Trong đời sống tâm linh của người Việt, hình tượng người Mẹ luôn giữ một vị trí đặc biệt. Không chỉ là biểu tượng của sự sinh thành và che chở, Mẹ còn được tôn kính như đấng tối linh bảo hộ cho con người trước những biến động của cuộc sống. Từ niềm tin ấy, Tín ngưỡng Thờ Mẫu Tam phủ đã hình thành và phát triển qua nhiều thế kỷ, trở thành một trong những thực hành văn hóa tâm linh độc đáo nhất của dân tộc Việt Nam.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: ` Tín ngưỡng Thờ Mẫu Tam phủ có nguồn gốc từ truyền thống thờ Nữ thần lâu đời của người Việt. Trải qua quá trình phát triển, tín ngưỡng này dần định hình thành hệ thống thờ các Thánh Mẫu cai quản ba miền của vũ trụ gồm Thiên phủ (miền trời), Thoải phủ (miền sông nước) và Nhạc phủ hay Thượng Ngàn (miền rừng núi).
                    Trung tâm của hệ thống tín ngưỡng là Thánh Mẫu Liễu Hạnh - một trong Tứ bất tử của tín ngưỡng dân gian Việt Nam. Theo truyền thuyết, bà là tiên nữ giáng trần, được nhân dân tôn kính như hiện thân của lòng từ bi, sự che chở và công lý.
                    Từ khoảng thế kỷ XVI, Tín ngưỡng Thờ Mẫu Tam phủ phát triển mạnh mẽ và lan rộng ở nhiều địa phương, đặc biệt tại vùng đồng bằng Bắc Bộ. Trong đó, quần thể Phủ Dầy (Nam Định) được xem là một trong những trung tâm thờ Mẫu tiêu biểu nhất của cả nước.
                    Ngày 1/12/2016, UNESCO chính thức ghi danh Thực hành Tín ngưỡng Thờ Mẫu Tam phủ của người Việt vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại, ghi nhận những giá trị văn hóa, lịch sử và nhân văn đặc sắc của di sản này.
                    Khác với nhiều tín ngưỡng hướng con người đến thế giới siêu hình xa vời, Thờ Mẫu gắn chặt với những mong ước rất đời thường như sức khỏe, bình an, hạnh phúc, mùa màng thuận lợi và cuộc sống sung túc.
                    Hệ thống thần điện Tam phủ quy tụ khoảng 70 vị thánh, trong đó có nhiều nhân vật lịch sử được nhân dân tôn thờ như Đức Thánh Trần Hưng Đạo, Phạm Ngũ Lão hay Nguyễn Xí. Điều này phản ánh truyền thống "uống nước nhớ nguồn", tôn vinh những người có công với đất nước và cộng đồng.
                    Tín ngưỡng Thờ Mẫu đồng thời đề cao vai trò của người phụ nữ trong xã hội Việt Nam. Hình tượng các Thánh Mẫu thể hiện sức mạnh, lòng nhân ái và khả năng bảo trợ cho cộng đồng, qua đó phản ánh vị thế đặc biệt của người mẹ trong văn hóa dân tộc.`,
                    img1: "/images/check/detail_b_16.jpg",
                    source1: "Tín ngưỡng thờ Mẫu Tam Phủ (Ảnh: Sưu tầm Internet) ",
                    heading2: "NGHI LỄ LÊN ĐỒNG - TRUNG TÂM CỦA THỰC HÀNH DI SẢN",
                    text2: ` Nghi lễ quan trọng nhất của Tín ngưỡng Thờ Mẫu Tam phủ là hầu đồng hay lên đồng. Đây là hình thức diễn xướng dân gian kết hợp giữa tín ngưỡng, âm nhạc, múa và nghệ thuật trình diễn.
                    Trong nghi lễ, thanh đồng thực hiện các giá đồng để tái hiện sự giáng hiện của các vị thánh trong hệ thống Tam phủ. Mỗi giá đồng có trang phục, âm nhạc, động tác múa và nghi thức riêng, tạo nên một không gian văn hóa giàu tính biểu tượng.
                    Đồng hành cùng nghi lễ là nghệ thuật hát chầu văn, loại hình âm nhạc dân gian mang tính nghi lễ đặc sắc. Những làn điệu chầu văn vừa có chức năng dẫn dắt nghi thức tâm linh, vừa góp phần tạo nên giá trị nghệ thuật độc đáo cho thực hành Thờ Mẫu.`,
                    img2: "/images/check/detail_b_17.jpg",
                    source2: "Thực hành Tín ngưỡng thờ Mẫu Tam phủ - Nét văn hóa dân gian của người Việt. Ảnh: Minh Đức - TTXVN ",
                      text3: `Tín ngưỡng Thờ Mẫu không chỉ tồn tại trong các điện thờ mà còn hiện diện sinh động qua nhiều lễ hội truyền thống. Tiêu biểu nhất là Lễ hội Phủ Dầy tại huyện Vụ Bản, tỉnh Nam Định, diễn ra từ ngày mồng 3 đến ngày 10 tháng Ba âm lịch hằng năm.
                    Các nghi lễ rước kiệu, tế lễ, hầu đồng, hát văn và diễn xướng dân gian trong lễ hội góp phần gắn kết cộng đồng, tạo không gian giao lưu văn hóa và gìn giữ các giá trị truyền thống.
                    Một trong những đặc điểm nổi bật của tín ngưỡng này là tính cởi mở và dung hợp văn hóa. Bất kỳ ai cũng có thể tham gia thực hành tín ngưỡng, không phân biệt giới tính, nghề nghiệp, dân tộc hay tôn giáo. Hệ thống thần điện còn tiếp nhận nhiều yếu tố văn hóa của các dân tộc thiểu số như Tày, Nùng, Dao, Mường..., thể hiện tinh thần hòa hợp và tôn trọng đa dạng văn hóa.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_18.jpg",
                    links: [
                        {
                            url: "https://youtu.be/vbd2VvE5PHk?si=wH5Uf-YgRhhYZ4eW",
                            text: " Tiêu Điểm: Nét Đẹp Tín Ngưỡng Thờ Mẫu Tam Phủ  - Tin Tức VTV24 ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube VTV24",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Nếu nhiều di sản kể câu chuyện về lịch sử hay nghệ thuật, thì Tín ngưỡng Thờ Mẫu Tam phủ lại kể câu chuyện về đời sống tinh thần của người Việt. Qua những làn điệu chầu văn, những giá đồng rực rỡ sắc màu và hình tượng các Thánh Mẫu đầy bao dung, di sản đã phản chiếu một thế giới quan nhân văn, nơi con người luôn hướng về cội nguồn, trân trọng tình mẫu tử và nuôi dưỡng niềm tin vào những điều tốt đẹp. Đó cũng chính là lý do khiến Tín ngưỡng Thờ Mẫu Tam phủ không chỉ là di sản của Việt Nam mà còn là một giá trị văn hóa được cộng đồng quốc tế ghi nhận và tôn vinh.",
                }
            },
            {
                imgId: "check_7",
                name: "Hoàng thành Thăng Long",
                thumb: "/images/check/thumb_7.jpg",
                article: {
                    title: "KHU TRUNG TÂM HOÀNG THÀNH THĂNG LONG - HÀ NỘI",
                    subtitle: "Giữa lòng Thủ đô Hà Nội, Khu Trung tâm Hoàng thành Thăng Long là một trong những di tích lịch sử - văn hóa quan trọng bậc nhất của Việt Nam. Trải qua hơn một thiên niên kỷ tồn tại và phát triển, nơi đây không chỉ là trung tâm quyền lực của nhiều triều đại phong kiến mà còn lưu giữ những dấu ấn đặc sắc về lịch sử, kiến trúc và văn hóa dân tộc.",
                    heading1: "GIỚI THIỆU DI SẢN VÀ GHI DANH ",
                    text1: `Khu Trung tâm Hoàng thành Thăng Long  có diện tích vùng lõi 18,395 ha, bao gồm Khu di tích thành cổ Hà Nội và Khu di tích khảo cổ học 18 Hoàng Diệu. Đây là khu vực trung tâm của Cấm thành Thăng Long trái tim của kinh đô Đại Việt từ thế kỷ XI đến thế kỷ XVIII.
                    Ngày 31/7/2010, tại kỳ họp lần thứ 34 của Ủy ban Di sản Thế giới tổ chức tại Brazil, UNESCO đã ghi danh Khu Trung tâm Hoàng thành Thăng Long vào Danh mục Di sản Văn hóa Thế giới theo các tiêu chí (ii), (iii) và (vi), ghi nhận những giá trị nổi bật toàn cầu về lịch sử, văn hóa và sự giao thoa văn minh.
                    UNESCO đánh giá Hoàng thành Thăng Long là minh chứng đặc biệt cho sự giao lưu văn hóa lâu dài giữa Đông Á và Đông Nam Á. Trong suốt lịch sử tồn tại, nơi đây đã tiếp nhận nhiều ảnh hưởng từ văn hóa Trung Hoa, Chămpa và các nền văn minh khu vực, đồng thời sáng tạo nên bản sắc riêng của văn hóa Việt Nam.
                    Lịch sử Hoàng thành Thăng Long gắn liền với quá trình hình thành và phát triển của quốc gia Việt Nam. Từ thế kỷ VII dưới thời kỳ Bắc thuộc, khu vực này đã là trung tâm hành chính quan trọng. Đến năm 1010, vua Lý Thái Tổ dời đô từ Hoa Lư ra Thăng Long, mở đầu cho thời kỳ phát triển rực rỡ của kinh đô Đại Việt.
                    Trong suốt các triều đại Lý, Trần, Lê, Mạc và Nguyễn, Hoàng thành luôn giữ vai trò là trung tâm chính trị, quân sự và văn hóa của đất nước. Đây là nơi diễn ra các hoạt động triều chính, những nghi lễ quốc gia quan trọng cũng như nhiều sự kiện có ý nghĩa đặc biệt trong lịch sử dân tộc. Sự tồn tại liên tục của trung tâm quyền lực này qua hơn 13 thế kỷ là một trong những giá trị nổi bật được UNESCO đánh giá cao.`,
                    img1: "/images/check/detail_b_19.jpg",
                    source1: "Nguồn: Báo Lao động",
                    heading2: "QUẦN THỂ KIẾN TRÚC ĐẶC SẮC",
                    text2: `Mặc dù trải qua nhiều biến động lịch sử, chiến tranh và quá trình đô thị hóa, Hoàng thành Thăng Long vẫn còn bảo tồn được nhiều công trình kiến trúc có giá trị. Nổi bật nhất là trục trung tâm gồm các di tích: Kỳ Đài, Đoan Môn, nền điện Kính Thiên, Hậu Lâu và Bắc Môn.
                    Kỳ Đài Hà Nội được xây dựng vào năm 1805 dưới triều Nguyễn, là một trong số ít công trình còn giữ được gần như nguyên vẹn. Công trình không chỉ mang giá trị kiến trúc mà còn trở thành biểu tượng quen thuộc của Thủ đô.`,
                    img2: "/images/check/detail_b_20.jpg",
                    source2: "Cột cờ Hà Nội. Ảnh: Lê Việt Khánh",
                      text3: `Đoan Môn là cổng chính phía Nam dẫn vào khu vực Cấm thành. Đây từng là lối đi dành riêng cho nhà vua và các nghi lễ quan trọng của triều đình. Kiến trúc hiện nay chủ yếu được xây dựng dưới thời Lê sơ và được tu bổ qua nhiều thời kỳ.
                    Điện Kính Thiên được xem là trung tâm quyền lực của Hoàng thành. Dù công trình nguyên gốc không còn tồn tại, phần nền điện cùng hệ thống bậc thềm đá chạm rồng thế kỷ XV vẫn là những kiệt tác nghệ thuật đặc sắc, phản ánh trình độ kỹ thuật và mỹ thuật đỉnh cao của thời Lê.
                    Bắc Môn là một trong năm cổng thành còn lại của Thành Hà Nội thời Nguyễn. Công trình vẫn lưu giữ dấu tích của các cuộc chiến tranh, trở thành minh chứng lịch sử quý giá cho quá trình bảo vệ đất nước.
                    Bên cạnh đó, Hậu Lâu cùng hệ thống tường thành, cổng hành cung thời Nguyễn, các công trình kiến trúc Pháp và di tích cách mạng như nhà và hầm D67 đã tạo nên một không gian di sản đa tầng, phản ánh nhiều giai đoạn phát triển của lịch sử dân tộc.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_21.jpg",
                    links: [
                        {
                            url: "https://youtu.be/ANGhpAZ9A8s?si=9mf_aiXQ5I0HOot3",
                            text: "  Flycam Hoàng Thành Thăng Long",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Hoàng Thành Thăng Long",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Với bề dày lịch sử hơn 1.000 năm, hệ thống di tích kiến trúc đặc sắc cùng những phát hiện khảo cổ học có giá trị nổi bật toàn cầu, Khu Trung tâm Hoàng thành Thăng Long là minh chứng sinh động cho quá trình hình thành và phát triển của quốc gia Việt Nam. Việc bảo tồn và phát huy giá trị di sản không chỉ góp phần gìn giữ ký ức lịch sử dân tộc mà còn khẳng định vị thế của Việt Nam trong bản đồ di sản văn hóa thế giới.",
                }
            },
            {
                imgId: "check_8",
                name: "Nhã nhạc cung đình Huế",
                thumb: "/images/check/thumb_8.jpg",
                article: {
                    title: "NHÃ NHẠC CUNG ĐÌNH HUẾ - ÂM THANH TAO NHÃ CỦA CHỐN HOÀNG CUNG",
                    subtitle: "Nhã nhạc cung đình Huế là loại hình âm nhạc cung đình tiêu biểu của Việt Nam, gắn liền với các nghi lễ quan trọng của triều đình phong kiến. Với hệ thống nhạc cụ tinh xảo, quy tắc trình diễn chặt chẽ cùng giá trị nghệ thuật đặc sắc, Nhã nhạc không chỉ phản ánh đời sống văn hóa cung đình mà còn thể hiện tư tưởng, triết lý và thế giới quan của người Việt trong lịch sử.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: `Nhã nhạc, có nghĩa là “âm nhạc tao nhã”, xuất hiện tại Việt Nam từ khoảng thế kỷ XV và được kế thừa, phát triển qua nhiều triều đại phong kiến. Tuy nhiên, loại hình nghệ thuật này chỉ thực sự đạt đến đỉnh cao dưới triều Nguyễn (1802 - 1945), khi trở thành âm nhạc chính thức của hoàng cung Huế.
                    Là một thành tố quan trọng trong hệ thống lễ nghi của triều đình, Nhã nhạc được sử dụng trong các dịp trọng đại như lễ đăng quang, tế Nam Giao, lễ tế miếu, các nghi lễ tôn giáo, lễ đón tiếp sứ thần và những sự kiện quan trọng của quốc gia. Trải qua nhiều thế kỷ phát triển, Nhã nhạc đã trở thành biểu tượng cho uy quyền, sự trường tồn và hưng thịnh của vương triều.
                    Với những giá trị lịch sử, nghệ thuật và văn hóa đặc sắc, ngày 7/11/2003, UNESCO đã ghi danh Nhã nhạc cung đình Huế là Di sản văn hóa phi vật thể và truyền khẩu của nhân loại.
                    Đây là di sản văn hóa phi vật thể đầu tiên của Việt Nam được UNESCO vinh danh, đánh dấu bước ngoặt quan trọng trong công tác bảo tồn và quảng bá các giá trị văn hóa truyền thống của dân tộc ra thế giới.`,
                    img1: "/images/check/detail_b_22.jpg",
                    source1: "Nhã nhạc cung đình Huế (Ảnh: Khám phá Huế)",
                    heading2: "NHÃ NHẠC CUNG ĐÌNH HUẾ CÓ GÌ ĐẶC SẮC?",
                    text2: `Nhã nhạc là loại hình âm nhạc mang tính hàn lâm cao, được xây dựng trên hệ thống quy tắc chặt chẽ về dàn nhạc, bài bản, không gian biểu diễn và nghi thức trình diễn. Mỗi tiết mục đều được tổ chức công phu, phản ánh tính chuẩn mực và sự trang nghiêm của chốn cung đình.
                    Một trong những nét đặc sắc của Nhã nhạc là hệ thống nhạc cụ được chế tác tinh xảo, bao gồm nhiều nhóm âm sắc khác nhau như nhạc cụ dây, hơi, gõ và bộ gõ kim loại. Các nhạc cụ không chỉ có chức năng tạo nên sự phong phú về âm thanh mà còn góp phần thể hiện tính trang trọng của các nghi lễ hoàng gia.
                    Trong hệ thống Nhã nhạc, Đại nhạc và Tiểu nhạc là hai hình thức tiêu biểu. Đại nhạc thường được sử dụng trong các nghi lễ lớn của triều đình với âm lượng mạnh mẽ từ các loại trống, kèn và nhạc cụ gõ. Trong khi đó, Tiểu nhạc mang âm hưởng nhẹ nhàng, thanh nhã hơn, thường được trình diễn trong các buổi yến tiệc, lễ khánh tiết hoặc dịp Tết trong hoàng cung.
                    Các buổi biểu diễn Nhã nhạc thường kết hợp âm nhạc, ca hát và múa cung đình, cùng với trang phục và đạo cụ được chuẩn bị công phu, tạo nên một không gian nghệ thuật trang trọng và giàu tính thẩm mỹ.`,
                    img2: "/images/check/detail_b_23.jpg",
                    source2: "Biểu diễn Nhã nhạc cung đình Huế tại quảng trường Ngọ Môn (Huế) - Ảnh VNP",
                    
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_24.jpg",
                    links: [
                        {
                            url: "https://youtu.be/Ljff7t5vjfo?si=8Q9eGl5QiYfidPbB",
                            text: "  Nhã Nhạc Cung đình Huế - Di sản Văn hoá Thế giới ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Kỷ Lục TV",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Không chỉ là âm nhạc phục vụ nghi lễ, Nhã nhạc còn là phương tiện thể hiện tư tưởng chính trị, tín ngưỡng và quan niệm về vũ trụ của xã hội phong kiến Việt Nam. Loại hình nghệ thuật này phản ánh trình độ thẩm mỹ cao, sự sáng tạo của nghệ nhân cung đình cũng như những giá trị văn hóa đặc trưng của dân tộc. Việc bảo tồn và phát huy Nhã nhạc không chỉ góp phần gìn giữ một loại hình nghệ thuật truyền thống đặc sắc mà còn giúp lan tỏa những giá trị văn hóa Việt Nam đến với cộng đồng quốc tế.",
                }
            },
            {
                imgId: "check_9",
                name: "Bảo tàng Chứng tích Chiến tranh",
                thumb: "/images/check/thumb_9.jpg",
                article: {
                    title: "BẢO TÀNG CHỨNG TÍCH CHIẾN TRANH - THÀNH PHỐ HỒ CHÍ MINH",
                    subtitle: "Giữa nhịp sống sôi động của Thành phố Hồ Chí Minh, có một địa điểm khiến nhiều người lặng lại khi bước chân vào. Những bức ảnh, hiện vật và câu chuyện được lưu giữ tại Bảo tàng Chứng tích Chiến tranh không chỉ tái hiện những mất mát do chiến tranh gây ra mà còn nhắc nhở về giá trị của hòa bình, sự cảm thông và tình hữu nghị giữa các dân tộc.",
                    heading1: "NGUỒN GỐC VÀ QUÁ TRÌNH HÌNH THÀNH VÀ VAI TRÒ ",
                    text1: `Bảo tàng Chứng tích Chiến tranh tọa lạc tại số 28 Võ Văn Tần, Quận 3, Thành phố Hồ Chí Minh. 
                    Được thành lập ngày 4/9/1975, ngay sau khi đất nước thống nhất, bảo tàng ban đầu mang tên Nhà Trưng bày Tội ác Mỹ - Ngụy với mục đích lưu giữ những tư liệu, hình ảnh và hiện vật phản ánh hậu quả của chiến tranh tại Việt Nam.
                    Năm 1990, đơn vị được đổi tên thành Nhà Trưng bày Tội ác Chiến tranh Xâm lược. Đến ngày 4/7/1995, bảo tàng chính thức mang tên Bảo tàng Chứng tích Chiến tranh như hiện nay.
                    Trải qua gần nửa thế kỷ hoạt động, bảo tàng không ngừng mở rộng quy mô sưu tầm, nghiên cứu và trưng bày. Năm 2002, công trình được đầu tư nâng cấp toàn diện và hoàn thành giai đoạn cải tạo vào năm 2010 nhằm đáp ứng tốt hơn nhu cầu tham quan, học tập và nghiên cứu của công chúng.
                    Bảo tàng Chứng tích Chiến tranh là thành viên của hệ thống Bảo tàng Việt Nam, đồng thời tham gia Mạng lưới Bảo tàng vì Hòa bình Thế giới (INMP) và Hội đồng Bảo tàng Quốc tế (ICOM). Đây là đơn vị chuyên ngành hàng đầu trong công tác nghiên cứu, sưu tầm, bảo quản và trưng bày các tư liệu, hiện vật liên quan đến hậu quả chiến tranh tại Việt Nam. Thông qua các hoạt động chuyên môn, bảo tàng góp phần nâng cao nhận thức cộng đồng về giá trị của hòa bình và tinh thần đoàn kết quốc tế.`,
                    img1: "/images/check/detail_b_25.jpg",
                    source1: "Bảo tàng Chứng tích Chiến tranh (Ảnh: Sưu tầm Internet) ",
                    heading2: "BẢO TÀNG CHỨNG TÍCH CHIẾN TRANH CÓ GÌ ĐẶC SẮC?",
                    text2: ` Hiện nay, bảo tàng đang lưu giữ hơn 20.000 tài liệu, hiện vật và phim ảnh có giá trị lịch sử. Trong số đó, hàng nghìn hiện vật được lựa chọn để giới thiệu trong các không gian trưng bày thường xuyên và chuyên đề.
                    Công trình gồm ba tầng với nhiều khu trưng bày khác nhau, phản ánh các giai đoạn chiến tranh và những tác động sâu sắc đối với con người và xã hội Việt Nam. Các chuyên đề nổi bật bao gồm “Thế giới với chiến tranh ở Việt Nam”, “Hậu quả chất độc da cam”, “Chế độ lao tù trong chiến tranh”, cùng nhiều bộ sưu tập ảnh tư liệu quý giá được thực hiện bởi các phóng viên chiến trường trong và ngoài nước.
                    Bên ngoài khuôn viên bảo tàng là khu trưng bày các phương tiện quân sự như máy bay, xe tăng, pháo binh và nhiều khí tài từng được sử dụng trong chiến tranh. Những hiện vật này giúp người xem hình dung rõ hơn về quy mô và mức độ khốc liệt của các cuộc xung đột đã diễn ra trên lãnh thổ Việt Nam.`,
                    img2: "/images/check/detail_b_26.jpg",
                    source2: "Ảnh: Sưu tầm Internet",
                      text3: ` Không gian trưng bày của bảo tàng không chỉ cung cấp thông tin lịch sử mà còn mang giá trị giáo dục sâu sắc. Thông qua các tư liệu và hiện vật, công chúng có cơ hội tìm hiểu về những mất mát mà chiến tranh để lại đối với con người, môi trường và xã hội.
                    Đồng thời, bảo tàng cũng góp phần tôn vinh tinh thần đấu tranh vì độc lập dân tộc, khơi dậy ý thức trách nhiệm trong việc gìn giữ hòa bình và thúc đẩy sự thấu hiểu giữa các quốc gia. Đây là lý do khiến bảo tàng trở thành một trong những địa điểm nghiên cứu, học tập và tham quan có ý nghĩa đặc biệt đối với du khách trong nước và quốc tế.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_27.jpg",
                    links: [
                        {
                            url: "https://youtu.be/_MN6nsn-XDM?si=LQi_LyZeIypYqJOB",
                            text: " Tham quan online tại Bảo tàng Chứng tích Chiến tranh",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Youtube Bảo tàng Chứng tích Chiến tranh",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Rời khỏi Bảo tàng Chứng tích Chiến tranh, điều còn đọng lại không chỉ là những con số hay hiện vật lịch sử, mà là những câu chuyện về con người trong thời chiến và khát vọng được sống trong hòa bình. Chính những ký ức được lưu giữ nơi đây đã biến bảo tàng thành một không gian đối thoại giữa quá khứ và hiện tại, để mỗi người thêm trân trọng giá trị của cuộc sống hôm nay.",
                }
            },
            {
                imgId: "check_10",
                name: "VQG Phong Nha - Kẻ Bàng",
                thumb: "/images/check/thumb_10.jpg",
                article: {
                    title: "VƯỜN QUỐC GIA PHONG NHA – KẺ BÀNG",
                    subtitle: "Ẩn mình giữa dãy Trường Sơn hùng vĩ của tỉnh Quảng Bình, Phong Nha - Kẻ Bàng được ví như một “bảo tàng địa chất ngoài trời” khổng lồ, nơi lưu giữ những dấu tích hàng trăm triệu năm của lịch sử Trái Đất. Với hệ thống núi đá vôi cổ, những dòng sông ngầm kỳ bí và hàng trăm hang động tráng lệ, nơi đây được mệnh danh là “Vương quốc hang động” của Việt Nam và thế giới.",
                    heading1: "GIỚI THIỆU VỀ DI SẢN VÀ GHI DANH ",
                    text1: ` Phong Nha - Kẻ Bàng nằm trên diện tích hơn 85.000 ha, thuộc địa bàn các huyện Bố Trạch, Quảng Ninh và Tuyên Hóa của tỉnh Quảng Bình. Khu vực này sở hữu khối núi đá vôi có tuổi đời trên 400 triệu năm, được xem là một trong những hệ karst cổ nhất châu Á.
                    Trải qua nhiều giai đoạn kiến tạo địa chất, thiên nhiên đã tạo nên một hệ thống hang động, sông ngầm và thung lũng karst độc đáo. Đến nay, các nhà khoa học đã khảo sát hàng trăm hang động với tổng chiều dài hàng trăm kilomet, trong đó có nhiều hang động nổi tiếng như Phong Nha, Tiên Sơn, Thiên Đường, Hang Én và đặc biệt là Sơn Đoòng - hang động tự nhiên lớn nhất thế giới. Hệ thống động Phong Nha từng được các chuyên gia hang động quốc tế đánh giá nổi bật với nhiều giá trị đặc biệt như sông ngầm dài, cửa hang rộng và cao, bãi cát ngầm đẹp cùng hệ thống thạch nhũ kỳ ảo bậc nhất thế giới.
                    Ngày 3/7/2003, tại Kỳ họp lần thứ 27 của Ủy ban Di sản Thế giới tổ chức ở Paris (Pháp), UNESCO đã công nhận Vườn quốc gia Phong Nha - Kẻ Bàng là Di sản Thiên nhiên Thế giới theo tiêu chí địa chất - địa mạo. Đến năm 2015, di sản tiếp tục được mở rộng và ghi nhận thêm về giá trị đa dạng sinh học và sinh thái.`,
                    img1: "/images/check/detail_b_28.jpg",
                    source1: "Hang Sơn Đoòng không chỉ được biết đến là Hang Động lớn nhất thế giới mà còn là hang có đặc điểm địa chất địa mạo tiêu biểu. (Ảnh: Oxails) ",
                    heading2: "KHO BÁU ĐA DẠNG SINH HỌC",
                    text2: ` Không chỉ nổi tiếng bởi địa chất độc đáo, Phong Nha - Kẻ Bàng còn là một trong những trung tâm đa dạng sinh học quan trọng của Việt Nam và khu vực Đông Nam Á.
                    Nơi đây sở hữu nhiều kiểu rừng khác nhau, từ rừng nhiệt đới thường xanh đến rừng lá kim trên núi đá vôi. Các cuộc điều tra đã ghi nhận khoảng 2.500 loài thực vật bậc cao, trong đó có hàng trăm loài lan và nhiều loài quý hiếm được ghi trong Sách đỏ Việt Nam và thế giới.
                    Hệ động vật cũng vô cùng phong phú với hơn 1.000 loài động vật có xương sống, bao gồm nhiều loài linh trưởng, chim, bò sát và thú quý hiếm đang được bảo tồn nghiêm ngặt. Chính sự kết hợp giữa địa hình karst cổ đại và hệ sinh thái nguyên sinh đã tạo nên một môi trường sống đặc biệt hiếm có trên thế giới.`,
                    img2: "/images/check/detail_b_29.jpg",
                    source2: "Khối núi đá trong VQG Phong Nha - Kẻ Bàng(Ảnh: Sưu tầm Internet)",
                      text3: `Bên cạnh giá trị thiên nhiên, Phong Nha - Kẻ Bàng còn lưu giữ nhiều dấu tích lịch sử quan trọng gắn với cuộc kháng chiến chống Mỹ. Những địa danh như Đường 20 Quyết Thắng, Hang Tám Cô, phà Xuân Sơn hay cua chữ A đã trở thành biểu tượng của tinh thần kiên cường và sự hy sinh của dân tộc Việt Nam.
                    Không gian văn hóa của các cộng đồng dân tộc sinh sống trong vùng đệm cũng góp phần làm phong phú giá trị của di sản. Những lễ hội truyền thống, làn điệu dân ca và tập quán sinh hoạt lâu đời tạo nên bức tranh văn hóa đặc sắc giữa đại ngàn Trường Sơn.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_30.jpg",
                    links: [
                        {
                            url: "https://youtu.be/yOtqF9DRI-s?si=u5B69NYLVnpA53tb",
                            text: " NPhong Nha - Kẻ Bàng | Vietnam Travel | 2022",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Vietnam Travel",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Phong Nha - Kẻ Bàng không chỉ là một kỳ quan thiên nhiên mà còn là cuốn biên niên sử sống động về quá trình vận động của Trái Đất qua hàng trăm triệu năm. Giữa những dãy núi đá vôi cổ kính, những dòng sông ngầm bí ẩn và hệ sinh thái đa dạng, di sản này cho thấy sức sáng tạo kỳ diệu của thiên nhiên. Việc gìn giữ và phát huy giá trị Phong Nha - Kẻ Bàng không chỉ là trách nhiệm của Quảng Bình hay Việt Nam, mà còn là sự chung tay bảo vệ một phần di sản quý giá của nhân loại cho các thế hệ tương lai.",
                }
            },
            {
                imgId: "check_11",
                name: "Đờn ca tài tử",
                thumb: "/images/check/thumb_11.jpg",
                article: {
                    title: "NGHỆ THUẬT ĐỜN CA TÀI TỬ NAM BỘ",
                    subtitle: "Là một trong những loại hình nghệ thuật dân gian tiêu biểu của vùng đất Nam Bộ, Đờn ca tài tử phản ánh đời sống tinh thần phong phú, tâm hồn phóng khoáng và tình cảm chân chất của người dân phương Nam. Trải qua hơn một thế kỷ hình thành và phát triển, loại hình nghệ thuật này đã trở thành biểu tượng văn hóa đặc sắc của Nam Bộ và là niềm tự hào của văn hóa Việt Nam.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: `Đờn ca tài tử Nam Bộ được hình thành vào cuối thế kỷ XIX trên cơ sở kế thừa nhạc lễ dân gian, Nhã nhạc cung đình Huế và các làn điệu dân ca miền Trung, miền Nam. Đây là loại hình nghệ thuật kết hợp giữa đờn và ca, do những người dân bình thường sáng tạo và thực hành trong đời sống thường nhật. 
                    Đờn ca tài tử ra đời trong bối cảnh giao lưu văn hóa mạnh mẽ giữa các vùng miền khi người Việt mở rộng khai phá phương Nam. Sau sự kiện Kinh đô Huế thất thủ năm 1885, nhiều nhạc quan và nghệ nhân từ miền Trung di cư vào Nam, mang theo vốn âm nhạc cung đình và dân gian. Trong môi trường văn hóa mới, những yếu tố âm nhạc này hòa quyện với đời sống sinh hoạt của cư dân Nam Bộ để hình thành nên nghệ thuật Đờn ca tài tử.
                    Khác với Nhã nhạc cung đình vốn phục vụ triều đình, Đờn ca tài tử gắn liền với đời sống cộng đồng. Người dân sau những giờ lao động thường tụ họp để cùng đàn, hát và chia sẻ tâm tư tình cảm. Chính từ môi trường sinh hoạt dân gian ấy, Đờn ca tài tử dần phát triển thành một loại hình nghệ thuật độc đáo mang đậm bản sắc Nam Bộ.
                    Hiện nay, Đờn ca tài tử được thực hành rộng rãi tại 21 tỉnh, thành phố phía Nam với hàng nghìn câu lạc bộ, nhóm sinh hoạt và gia đình tham gia gìn giữ, truyền dạy.
                    Ngày 5/12/2013, tại kỳ họp lần thứ 8 của Ủy ban Liên Chính phủ Công ước 2003 về bảo vệ di sản văn hóa phi vật thể tổ chức tại Baku (Azerbaijan), UNESCO đã chính thức ghi danh Nghệ thuật Đờn ca tài tử Nam Bộ vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại.`,
                    img1: "/images/check/detail_b_31.jpg",
                    source1: "Ảnh: Sưu tầm Internet ",
                    heading2: "ĐẶC TRƯNG NGHỆ THUẬT VÀ KHÔNG GIAN THỰC HÀNH VĂN HÓA",
                    text2: ` Điểm nổi bật của Đờn ca tài tử nằm ở sự kết hợp hài hòa giữa âm nhạc và giọng ca. Các nghệ nhân biểu diễn dựa trên hệ thống bài bản truyền thống nhưng vẫn có không gian sáng tạo để thể hiện kỹ thuật và cảm xúc cá nhân.
                    Kho tàng Đờn ca tài tử được xây dựng trên cơ sở 20 bài bản tổ và phát triển thành hàng chục bài bản lớn nhỏ thuộc bốn hệ thống hơi điệu chính gồm Bắc, Nam, Oán và Lễ. Các bài bản không ngừng được cải biên, sáng tạo để phù hợp với đời sống và tâm lý người thưởng thức.
                    Nhạc cụ sử dụng trong Đờn ca tài tử khá phong phú, bao gồm đàn kìm, đàn tranh, đàn cò, đàn tỳ bà, đàn tam, đàn bầu, sáo, tiêu và song loan. Từ đầu thế kỷ XX, nghệ nhân Nam Bộ đã sáng tạo thêm đàn guitar phím lõm,  một nhạc cụ mang dấu ấn đặc trưng của Đờn ca tài tử. Sự xuất hiện của loại đàn này đã góp phần tạo nên âm sắc riêng biệt, làm phong phú thêm khả năng diễn tấu và biểu cảm của loại hình nghệ thuật này.
                    Một buổi Đờn ca tài tử thường được trình diễn theo hình thức hòa tấu, song tấu hoặc tam tấu. Người biểu diễn và người thưởng thức không có khoảng cách rõ rệt, tạo nên không gian giao lưu gần gũi, thân mật và giàu tính cộng đồng.`,
                    img2: "/images/check/detail_b_32.jpg",
                    source2: "Các nhạc cụ truyền thống. Ảnh: Bao Chau Elec",
                      text3: `Đờn ca tài tử không bị giới hạn trong sân khấu hay không gian biểu diễn chuyên nghiệp. Người dân có thể đàn và hát trong nhà, trên ghe thuyền, dưới bóng cây, tại đình làng hay trong các dịp lễ hội, cưới hỏi, sinh nhật và họp mặt gia đình.
                    Những người tham gia thực hành gồm thầy đờn, thầy ca, nghệ nhân diễn tấu, nghệ nhân ca hát và những người yêu thích loại hình nghệ thuật này. Họ đến với Đờn ca tài tử chủ yếu vì niềm đam mê và mong muốn giao lưu, chia sẻ cảm xúc hơn là mục đích nghề nghiệp.
                    Chính tính chất cộng đồng, cởi mở và gần gũi đã giúp Đờn ca tài tử trở thành một phần không thể thiếu trong đời sống văn hóa tinh thần của cư dân Nam Bộ suốt nhiều thế hệ.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_33.jpg",
                    links: [
                        {
                            url: "https://youtu.be/STAZzaEEv4M?si=O1WW1lfm-quHwPqW",
                            text: "  Nghệ thuật Đờn ca tài tử Nam Bộ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Cùng Bạn Đọc Sách",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Với lịch sử hình thành hơn một thế kỷ, Đờn ca tài tử Nam Bộ không chỉ là loại hình nghệ thuật dân gian đặc sắc mà còn là biểu tượng của bản sắc văn hóa phương Nam. Những giai điệu mộc mạc, sâu lắng cùng tinh thần cộng đồng đậm nét đã làm nên sức sống lâu bền của di sản. ",
                }
            },
            {
                imgId: "check_12",
                name: "Văn miếu - Quốc Tử Giám",
                thumb: "/images/check/thumb_12.jpg",
                article: {
                    title: "VĂN MIẾU - QUỐC TỬ GIÁM",
                    subtitle: "Tọa lạc tại trung tâm Thủ đô Hà Nội, Văn Miếu - Quốc Tử Giám là quần thể di tích lịch sử, văn hóa và giáo dục tiêu biểu của Việt Nam. Không chỉ là trường đại học đầu tiên của đất nước, nơi đây còn là biểu tượng cho truyền thống hiếu học, tôn sư trọng đạo và trọng dụng nhân tài của dân tộc qua nhiều thế kỷ.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: ` Văn Miếu được xây dựng vào năm 1070 dưới triều vua Lý Thánh Tông nhằm thờ Khổng Tử cùng các bậc hiền triết Nho giáo. Sáu năm sau, vào năm 1076, vua Lý Nhân Tông cho thành lập Quốc Tử Giám phía sau Văn Miếu, trở thành cơ sở giáo dục cao cấp đầu tiên của Việt Nam.
                    Ban đầu, Quốc Tử Giám là nơi học tập của các hoàng tử và con em quý tộc. Đến thời nhà Trần, trường được mở rộng để tiếp nhận cả những học trò xuất sắc trong dân gian. Trải qua các triều đại Lý, Trần, Lê và Nguyễn, Văn Miếu - Quốc Tử Giám luôn giữ vai trò là trung tâm đào tạo nhân tài và phát triển nền giáo dục Nho học của quốc gia.
                    Đặc biệt, danh nhân văn hóa Chu Văn An từng giữ chức Tư nghiệp Quốc Tử Giám, trực tiếp giảng dạy và góp phần xây dựng nền giáo dục Việt Nam thời trung đại.
                    Với những giá trị đặc biệt về lịch sử, văn hóa và giáo dục, năm 1962, Văn Miếu – Quốc Tử Giám được xếp hạng Di tích lịch sử văn hóa cấp quốc gia. Ngày 9/3/2010, 82 bia Tiến sĩ tại Văn Miếu - Quốc Tử Giám được UNESCO công nhận là Di sản tư liệu thế giới thuộc Chương trình Ký ức Thế giới. Đến ngày 10/5/2012, Thủ tướng Chính phủ quyết định xếp hạng Văn Miếu – Quốc Tử Giám là Di tích quốc gia đặc biệt, khẳng định vị thế của một trong những di sản tiêu biểu nhất của Thủ đô Hà Nội và cả nước.`,
                    img1: "/images/check/detail_b_34.jpg",
                    source1: "Văn Miếu - Quốc Tử Giám (Ảnh: Hội Di sản Văn hóa Việt Nam)",
                    heading2: "VĂN MIẾU - QUỐC TỬ GIÁM CÓ GÌ ĐẶC SẮC?",
                    text2: ` Quần thể di tích được quy hoạch theo trục Bắc - Nam với bố cục đăng đối đặc trưng của kiến trúc Nho giáo. Toàn bộ khu di tích rộng hơn 54.000 m², được chia thành năm khu vực chính liên hoàn, tạo nên một không gian kiến trúc hài hòa và trang nghiêm.
                    Điểm nhấn nổi bật của di tích là Khuê Văn Các, công trình được xây dựng năm 1805 dưới thời vua Gia Long. Với kiến trúc lầu vuông tám mái cùng những ô cửa tròn tượng trưng cho ánh sáng của sao Khuê biểu tượng của tri thức và học vấn, Khuê Văn Các ngày nay đã trở thành biểu tượng văn hóa của Hà Nội.
                    Bên cạnh đó là Giếng Thiên Quang, hồ nước hình vuông nằm ở trung tâm khu di tích, tượng trưng cho sự hội tụ của tinh hoa đất trời. Hai bên giếng là khu nhà bia Tiến sĩ với 82 tấm bia đá đặt trên lưng rùa, ghi danh 1.305 vị đỗ đại khoa trong các kỳ thi từ năm 1442 đến năm 1779.
                    Ngoài ra, khu vực Đại Thành Môn, Đại Bái, Điện Đại Thành và Nhà Thái Học cũng là những công trình tiêu biểu, phản ánh rõ nét kiến trúc truyền thống Việt Nam và lịch sử phát triển của nền giáo dục Nho học.
                    Đặc biệt, hệ thống bia Tiến sĩ được xem là nguồn tư liệu quý giá về lịch sử khoa cử, giáo dục và nhân tài của đất nước, đồng thời là một di sản tư liệu có giá trị nổi bật toàn cầu.`,
                    img2: "/images/check/detail_b_35.jpg",
                    source2: "Bia Tiến sĩ - (Ảnh: Hội Di sản Văn hóa Việt Nam)",
            
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_36.jpg",
                    links: [
                        {
                            url: "https://youtu.be/qDDmW9haSas?si=O7v64_oyUEiVyvpc",
                            text: " Độc đáo kiến trúc Văn Miếu - Quốc Tử giám| Hà Nội đẹp và chưa đẹp",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Youtube HTV - Đài Hà Nội",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Trải qua gần 1.000 năm lịch sử, Văn Miếu - Quốc Tử Giám vẫn là biểu tượng tiêu biểu của truyền thống hiếu học và tinh thần trọng dụng nhân tài của dân tộc Việt Nam. Với những giá trị nổi bật về lịch sử, văn hóa, giáo dục và kiến trúc, di tích không chỉ là niềm tự hào của Thủ đô Hà Nội mà còn là một phần quan trọng trong kho tàng di sản văn hóa của đất nước.",
                }
            },
            {
                imgId: "check_13",
                name: "Thành Nhà Hồ",
                thumb: "/images/check/thumb_13.jpg",
                article: {
                    title: "THÀNH NHÀ HỒ ",
                    subtitle: "Giữa vùng đồng bằng rộng lớn, những bức tường thành bằng đá khổng lồ vẫn sừng sững tồn tại sau hơn sáu thế kỷ. Không chỉ là dấu tích của một vương triều từng thực hiện những cuộc cải cách táo bạo trong lịch sử dân tộc, Thành Nhà Hồ còn khiến giới nghiên cứu thế giới kinh ngạc bởi kỹ thuật xây dựng đá quy mô lớn và trình độ quy hoạch đô thị vượt trước thời đại.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: ` Thành Nhà Hồ nằm tại huyện Vĩnh Lộc, tỉnh Thanh Hóa, được xây dựng vào năm 1397 dưới sự chỉ đạo của Hồ Quý Ly khi ông còn giữ chức Phụ chính Thái sư triều Trần. Công trình được dựng lên nhằm chuẩn bị cho việc dời đô từ Thăng Long về Thanh Hóa, mở đầu cho những cải cách lớn về chính trị, quân sự và hành chính vào cuối thế kỷ XIV.
                    Sau khi hoàn thành, thành trở thành kinh đô của nước Đại Việt dưới thời cuối Trần và tiếp tục giữ vai trò trung tâm quyền lực của triều Hồ khi Hồ Quý Ly lên ngôi năm 1400, đổi quốc hiệu thành Đại Ngu. Để phân biệt với Đông Đô (Thăng Long), kinh đô mới được gọi là Tây Đô.
                    Theo sử liệu, toàn bộ công trình được xây dựng trong khoảng ba tháng với sự tham gia của hàng vạn nhân công. Đây là một trong những công trình kiến trúc quân sự có quy mô lớn nhất Việt Nam thời trung đại.
                    Ngay từ năm 1962, Thành Nhà Hồ đã được xếp hạng Di tích cấp Quốc gia. Ngày 27/6/2011, tại Kỳ họp lần thứ 35 của Ủy ban Di sản Thế giới tổ chức tại Paris (Pháp), UNESCO chính thức ghi danh Thành Nhà Hồ vào Danh mục Di sản Văn hóa Thế giới. Di sản được công nhận theo hai tiêu chí nổi bật toàn cầu, bao gồm giá trị về sự giao lưu văn hóa trong khu vực Đông Á - Đông Nam Á và giá trị đặc biệt về kiến trúc, kỹ thuật xây dựng cũng như quy hoạch đô thị thời phong kiến.`,
                    img1: "/images/check/detail_b_37.jpg",
                    source1: "Thành Nhà Hồ - Thanh Hóa (Ảnh: Du lịch Thanh Hóa)",
                    heading2: "THÀNH NHÀ HỒ CÓ GÌ ĐẶC BIỆT?",
                    text2: `Điểm nổi bật nhất của Thành Nhà Hồ là hệ thống tường thành được xây dựng hoàn toàn bằng những khối đá xanh khổng lồ. Nhiều phiến đá có chiều dài từ 4 đến 6 mét, nặng từ 10 đến 26 tấn, được ghép khít với nhau mà không cần chất kết dính.
                    Toàn bộ khu thành có cấu trúc gần vuông, mỗi cạnh dài khoảng 870 mét. Bốn cổng thành nằm ở bốn hướng Đông, Tây, Nam, Bắc, trong đó cổng Nam là công trình tiêu biểu nhất với kiến trúc vòm cuốn bằng đá vẫn còn giữ được gần như nguyên vẹn.
                    Khu di sản ngày nay không chỉ bao gồm Hoàng thành mà còn có Hào thành, La thành, Đàn Nam Giao, các di tích khảo cổ dưới lòng đất cùng hệ thống làng cổ và cảnh quan tự nhiên xung quanh. Tất cả tạo nên một quần thể văn hóa - lịch sử rộng lớn phản ánh vai trò của kinh đô Tây Đô trong lịch sử Việt Nam.`,
                    img2: "/images/check/detail_b_38.jpg",
                    source2: "Ảnh: Sưu tầm Internet",
                      text3: `Thành Nhà Hồ được xem là minh chứng đặc biệt cho giai đoạn chuyển tiếp giữa hai thời kỳ lịch sử cuối Trần và đầu Hồ. Đây là nơi ghi dấu những nỗ lực cải cách đất nước của Hồ Quý Ly trong bối cảnh xã hội Đại Việt đứng trước nhiều biến động.
                    Về mặt kiến trúc, công trình thể hiện trình độ kỹ thuật xây dựng đá bậc cao của người Việt cuối thế kỷ XIV. Việc khai thác, vận chuyển và lắp ghép những khối đá nặng hàng chục tấn bằng phương pháp thủ công đến nay vẫn là vấn đề thu hút sự quan tâm của giới nghiên cứu.
                    Các cuộc khai quật khảo cổ học tại khu vực Thành Nhà Hồ cũng đã phát hiện nhiều dấu tích kiến trúc, nền móng cung điện, giếng cổ, sân gạch và hàng nghìn hiện vật quý giá. Những phát hiện này góp phần làm sáng tỏ quá trình hình thành, phát triển và vai trò lịch sử của kinh đô Tây Đô.
                    Giữa không gian đồng bằng rộng lớn của xứ Thanh, những bức tường thành đá đồ sộ nổi bật trên nền cảnh quan núi non, tạo nên một tổng thể kiến trúc vừa uy nghi vừa gần gũi với thiên nhiên.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_39.jpg",
                    links: [
                        {
                            url: "https://youtu.be/CqIT9ebon5c?si=_rbssV_SdmneBzIW",
                            text: " Thành Nhà Hồ - di sản văn hóa thế giới",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Youtube Thông tin Chính Phủ",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Giữa những biến thiên của lịch sử, nhiều kinh thành cổ đã chỉ còn lại trong sử sách, nhưng Thành Nhà Hồ vẫn hiện diện như một minh chứng sống động cho tài năng và bản lĩnh của người Việt cách đây hơn 600 năm. Những khối đá khổng lồ xếp chồng lên nhau không chỉ tạo nên một công trình kiến trúc kỳ vĩ mà còn kể lại câu chuyện về một giai đoạn đặc biệt trong lịch sử dân tộc, khi Tây Đô từng là trung tâm chính trị và là nơi khởi nguồn cho những cải cách quan trọng của vương triều Hồ. ",
                }
            },
            {
                imgId: "check_14",
                name: "Đô thị cổ Hội An",
                thumb: "/images/check/thumb_14.jpg",
                article: {
                    title: "ĐÔ THỊ CỔ HỘI AN",
                    subtitle: "Khi ánh hoàng hôn buông xuống bên dòng sông Hoài, những chiếc đèn lồng nhiều màu sắc bắt đầu thắp sáng từng con phố nhỏ, nhuộm lên Hội An vẻ đẹp vừa cổ kính vừa thơ mộng. Trải qua hàng trăm năm biến đổi của lịch sử, đô thị cổ này vẫn lưu giữ gần như nguyên vẹn dáng hình của một thương cảng quốc tế sầm uất, nơi từng chứng kiến sự gặp gỡ và giao lưu của nhiều nền văn hóa Đông - Tây.",
                    heading1: "GIỚI THIỆU HỘI AN VÀ GHI DANH ",
                    text1: ` Nằm bên hạ lưu sông Thu Bồn thuộc tỉnh Quảng Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam, Hội An được hình thành và phát triển mạnh từ thế kỷ XVI - XVII. Nhờ vị trí địa lý thuận lợi, nơi đây nhanh chóng trở thành một trong những thương cảng quan trọng bậc nhất của khu vực Đông Nam Á, thu hút các thương nhân từ Nhật Bản, Trung Quốc, Ấn Độ và nhiều nước châu Âu đến buôn bán, giao thương.
                    Trước khi trở thành thương cảng nổi tiếng, vùng đất Hội An đã là nơi cư trú của cư dân văn hóa Sa Huỳnh và từng giữ vai trò quan trọng trong mạng lưới giao thương của vương quốc Chămpa. Từ cuối thế kỷ XV, cư dân Đại Việt đến khai phá, lập làng và phát triển nhiều ngành nghề truyền thống. Đến thế kỷ XVII - XVIII, Hội An bước vào thời kỳ cực thịnh. Những khu phố của người Nhật, người Hoa cùng các thương điếm phương Tây hình thành dọc bến cảng, tạo nên một trung tâm giao thương quốc tế sôi động. Sự giao lưu kinh tế kéo theo sự giao thoa văn hóa, để lại những dấu ấn rõ nét trong kiến trúc, tín ngưỡng và đời sống cư dân phố Hội.
                    Ngày 4/12/1999, UNESCO đã ghi danh Đô thị cổ Hội An vào Danh mục Di sản Văn hóa Thế giới nhờ giá trị nổi bật về lịch sử, kiến trúc và sự giao lưu văn hóa quốc tế. Đây được xem là một trong những đô thị cổ được bảo tồn tốt nhất ở Đông Nam Á.`,
                    img1: "/images/check/detail_b_40.jpg",
                    source1: "Đô thị cổ Hội An (Ảnh: Sưu tầm Internet) ",
                    heading2: "DI SẢN KIẾN TRÚC ĐỘC ĐÁO VÀ KHÔNG GIAN VĂN HÓA",
                    text2: ` Một trong những giá trị nổi bật nhất của Hội An là hệ thống kiến trúc cổ được bảo tồn gần như nguyên vẹn. Những ngôi nhà cổ mái ngói âm dương, tường vàng rêu phong và kết cấu nhà ống đặc trưng vẫn hiện diện trên các tuyến phố nhỏ hẹp chạy dọc theo sông Hoài.
                    Đến nay, khu phố cổ còn lưu giữ hơn 1.300 di tích thuộc nhiều loại hình khác nhau như nhà cổ, đình, chùa, hội quán, nhà thờ tộc, giếng cổ và mộ cổ. Mỗi công trình đều phản ánh sự hòa quyện giữa kiến trúc truyền thống Việt Nam với ảnh hưởng của văn hóa Trung Hoa, Nhật Bản và phương Tây.
                    Tiêu biểu nhất là Chùa Cầu - biểu tượng của Hội An. Công trình được xây dựng từ thế kỷ XVII với kiến trúc gỗ độc đáo, vừa là cây cầu nối hai khu phố vừa là nơi thờ tự linh thiêng. Đây là minh chứng rõ nét cho sự giao lưu văn hóa quốc tế từng diễn ra tại thương cảng Hội An.`,
                    img2: "/images/check/detail_b_41.jpg",
                    source2: "Chùa cầu (Ảnh: Sưu tầm Internet)",
                      text3: `Không chỉ sở hữu những công trình cổ kính, Hội An còn lưu giữ nhiều giá trị văn hóa phi vật thể đặc sắc. Các lễ hội truyền thống, nghệ thuật Bài Chòi, nghề làm đèn lồng, nghề mộc Kim Bồng, nghề gốm Thanh Hà cùng nền ẩm thực phong phú đã góp phần tạo nên bản sắc riêng của phố Hội.
                    Du khách đến đây có thể thưởng thức những món ăn nổi tiếng như cao lầu, mì Quảng, cơm gà hay bánh mì Hội An; đồng thời trải nghiệm hoạt động thả đèn hoa đăng trên sông Hoài - nét văn hóa đặc trưng gắn liền với đời sống tinh thần của người dân địa phương.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_42.jpg",
                    links: [
                        {
                            url: "https://youtu.be/9nYDcx31DlU?si=O2kpOtmIWFvI48_m",
                            text: " PHỐ CỔ HỘI AN - Flycam 4K (Hoi An Ancient Town in Quang Nam)",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube: Dân Xê Dịch",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Hội An không chỉ kể câu chuyện của một thương cảng từng vang danh trên bản đồ hàng hải châu Á, mà còn cho thấy sức sống bền bỉ của một đô thị di sản giữa nhịp sống hiện đại. Trong từng mái ngói rêu phong, từng chiếc đèn lồng lung linh hay nhịp chèo chậm rãi trên sông Hoài, người ta vẫn cảm nhận được hơi thở của lịch sử đang hiện hữu. Chính sự giao hòa giữa quá khứ và hiện tại đã làm nên sức hấp dẫn riêng có, giúp Hội An trở thành một trong những biểu tượng văn hóa đặc sắc nhất của Việt Nam.",
                }
            },
            {
                imgId: "check_15",
                name: "Cố đô Huế",
                thumb: "/images/check/thumb_15.jpg",
                article: {
                    title: "QUẦN THỂ DI TÍCH CỐ ĐÔ HUẾ",
                    subtitle: "Là kinh đô cuối cùng của chế độ phong kiến Việt Nam, Cố đô Huế lưu giữ một kho tàng di sản kiến trúc, lịch sử và văn hóa đặc sắc được hình thành qua nhiều thế kỷ. Với hệ thống cung điện, thành quách, lăng tẩm và các công trình tín ngưỡng quy mô lớn, Huế không chỉ phản ánh quyền uy của triều Nguyễn mà còn thể hiện đỉnh cao của nghệ thuật kiến trúc truyền thống Việt Nam.",
                    heading1: "GIỚI THIỆU CHUNG VÀ GHI DANH ",
                    text1: ` Quần thể Di tích Cố đô Huế nằm trên địa bàn thành phố Huế và các vùng phụ cận thuộc tỉnh Thừa Thiên Huế, phân bố dọc hai bên bờ sông Hương. Đây là hệ thống di tích gắn liền với triều Nguyễn - triều đại phong kiến cuối cùng trong lịch sử Việt Nam. 
                    Ngày 11/12/1993, tại kỳ họp lần thứ 17 của Ủy ban Di sản Thế giới tổ chức ở Colombia, UNESCO đã ghi danh Quần thể Di tích Cố đô Huế vào Danh mục Di sản Văn hóa Thế giới. Đây cũng là di sản thế giới đầu tiên của Việt Nam được UNESCO công nhận.
                    UNESCO đánh giá Quần thể Di tích Cố đô Huế là một quần thể kiến trúc tiêu biểu cho một giai đoạn lịch sử quan trọng của nhân loại. Đây là minh chứng rõ nét cho sự phát triển của nhà nước phong kiến Việt Nam trong thế kỷ XIX và đầu thế kỷ XX.
                    Giá trị nổi bật của di sản không chỉ nằm ở quy mô và vẻ đẹp kiến trúc mà còn ở sự kết hợp hài hòa giữa công trình nhân tạo với cảnh quan thiên nhiên. Cố đô Huế phản ánh trình độ kỹ thuật xây dựng, nghệ thuật trang trí và tư duy quy hoạch đô thị đặc sắc của người Việt.
                    Lịch sử vùng đất Huế gắn liền với quá trình mở rộng lãnh thổ của dân tộc Việt Nam. Năm 1306, sau cuộc hôn phối giữa Công chúa Huyền Trân và vua Chế Mân của vương quốc Chămpa, vùng đất Thuận Hóa chính thức trở thành một phần lãnh thổ Đại Việt.
                    Đến thế kỷ XVII, các chúa Nguyễn chọn Phú Xuân làm trung tâm chính trị của Đàng Trong. Từ cuối thế kỷ XVIII, nơi đây trở thành kinh đô của triều đại Tây Sơn. Năm 1802, sau khi thống nhất đất nước, vua Gia Long quyết định chọn Huế làm kinh đô của triều Nguyễn. Từ đó đến năm 1945, Huế giữ vai trò là trung tâm chính trị, hành chính và văn hóa của quốc gia dưới sự trị vì của 13 đời vua Nguyễn.
                    Trong suốt hơn một thế kỷ, hàng trăm công trình kiến trúc cung đình, tôn giáo và lăng tẩm đã được xây dựng, tạo nên diện mạo đặc trưng của Cố đô Huế ngày nay.`,
                    img1: "/images/check/detail_b_43.jpg",
                    source1: "Đại Nội Huế  ",
                    heading2: "KIẾN TRÚC ĐẶC SẮC GIỮA CẢNH QUAN THIÊN NHIÊN",
                    text2: ` Một trong những giá trị nổi bật của Cố đô Huế là sự kết hợp hài hòa giữa kiến trúc và thiên nhiên. Các công trình được quy hoạch dựa trên nguyên tắc phong thủy phương Đông, đồng thời tiếp thu những yếu tố của kiến trúc quân sự phương Tây.
                    Toàn bộ kinh thành được đặt trong không gian thiên nhiên đặc biệt với núi Ngự Bình ở phía trước, sông Hương uốn lượn bên cạnh cùng các cồn Giã Viên, Bộc Thanh và hệ thống đồi núi bao quanh. Sự kết hợp giữa kiến trúc và cảnh quan đã tạo nên một tổng thể hài hòa, mang vẻ đẹp riêng biệt không thể nhầm lẫn với bất kỳ kinh đô nào trong khu vực.
                    Kinh thành Huế được khởi công xây dựng từ năm 1805 và hoàn thành vào năm 1832. Công trình có quy mô đồ sộ với hệ thống thành lũy, hào nước và các cổng thành được thiết kế theo kiểu Vauban của phương Tây kết hợp với nguyên tắc quy hoạch truyền thống phương Đông.
                    Trung tâm của Kinh thành là Đại Nội, bao gồm Hoàng thành và Tử Cấm Thành - nơi diễn ra các hoạt động chính trị, hành chính và sinh hoạt của hoàng gia.
                    Nổi bật nhất trong quần thể này là Ngọ Môn, cổng chính phía Nam của Hoàng thành được xây dựng dưới thời vua Minh Mạng. Đây là công trình biểu tượng của Huế với kiến trúc uy nghiêm và lầu Ngũ Phụng nổi tiếng.`,
                    img2: "/images/check/detail_b_44.jpg",
                    source2: "Cổng Ngọ Môn Huế",
                      text3: `Phía sau Ngọ Môn là Điện Thái Hòa, nơi diễn ra các nghi lễ quan trọng của triều đình như lễ đăng quang, đại triều và các dịp quốc lễ. Công trình được xây dựng theo lối kiến trúc truyền thống “trùng thiềm điệp ốc”, nổi bật với hệ thống cột gỗ lim, mái ngói hoàng lưu ly và nghệ thuật trang trí rồng phượng tinh xảo.
                    Bên trong Đại Nội còn có hệ thống miếu thờ các vị vua Nguyễn, cung Diên Thọ, cung Trường Sanh, phủ Nội Vụ, vườn Cơ Hạ và khu vực Tử Cấm Thành, nơi sinh hoạt riêng của nhà vua và hoàng gia.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_45.jpg",
                    links: [
                        {
                            url: "https://youtu.be/0VE0t3u69CI?si=OkNUzanHa1EzvUY",
                            text: "CỐ ĐÔ HUẾ: Vương triều cuối cùng | Welcome to Hue - The Last Imperial ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: " Kênh Youtube The Hippy Family",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Với hệ thống kiến trúc cung đình đồ sộ, cảnh quan thiên nhiên hài hòa và những giá trị lịch sử - văn hóa đặc sắc, Quần thể Di tích Cố đô Huế là một trong những di sản tiêu biểu nhất của Việt Nam. Trải qua nhiều biến động của thời gian, Cố đô Huế vẫn giữ được vẻ đẹp trang nghiêm và cổ kính, trở thành minh chứng sống động cho một giai đoạn huy hoàng trong lịch sử dân tộc cũng như một di sản quý giá của nhân loại.",
                }
            },
            {
                imgId: "check_16",
                name: "Thánh địa Mỹ Sơn",
                thumb: "/images/check/thumb_16.jpg",
                article: {
                    title: "THÁNH ĐỊA MỸ SƠN - DẤU ẤN HUY HOÀNG CỦA VƯƠNG QUỐC CHĂM PA",
                    subtitle: "Nằm giữa một thung lũng xanh thuộc huyện Duy Xuyên, tỉnh Quảng Nam, Thánh địa Mỹ Sơn là quần thể đền tháp Chăm Pa tiêu biểu và quan trọng bậc nhất còn tồn tại ở Việt Nam. Với lịch sử hình thành kéo dài gần một thiên niên kỷ, nơi đây không chỉ phản ánh đời sống tín ngưỡng của vương quốc Chăm Pa cổ đại mà còn là minh chứng đặc sắc cho sự giao lưu văn hóa giữa Ấn Độ và Đông Nam Á.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: ` Thánh địa Mỹ Sơn được xây dựng từ khoảng thế kỷ IV và liên tục được mở rộng, tu bổ cho đến thế kỷ XIII dưới các vương triều Chăm Pa. Đây là trung tâm tôn giáo quan trọng nhất của vương quốc Chăm Pa, nơi diễn ra các nghi lễ tín ngưỡng và thờ phụng thần Shiva - vị thần tối cao của Ấn Độ giáo.
                    Tọa lạc trong một thung lũng có đường kính khoảng 2 km, được bao bọc bởi núi non và rừng cây, Mỹ Sơn sở hữu vị trí linh thiêng theo quan niệm của người Chăm xưa. Trong suốt gần 9 thế kỷ, nơi đây giữ vai trò là khu đền thờ chính của vương quốc, đồng thời phản ánh những biến đổi về lịch sử, văn hóa và nghệ thuật của nền văn minh Chăm Pa.
                    Ngày 1/12/1999, tại kỳ họp lần thứ 23 của Ủy ban Di sản Thế giới tổ chức tại Marrakesh (Morocco), UNESCO đã ghi danh Thánh địa Mỹ Sơn là Di sản Văn hóa Thế giới. Di sản được công nhận theo hai tiêu chí nổi bật: là minh chứng tiêu biểu cho sự giao lưu văn hóa giữa văn minh Ấn Độ và văn hóa bản địa Đông Nam Á; đồng thời phản ánh sinh động tiến trình phát triển của nền văn minh Chăm Pa trong lịch sử khu vực.`,
                    img1: "/images/check/detail_b_46.jpg",
                    source1: "Thánh địa Mỹ Sơn (Ảnh: Sưu tầm Internet) ",
                    heading2: "THÁNH ĐỊA MỸ SƠN CÓ GÌ ĐẶC SẮC?",
                    text2: `Thánh địa Mỹ Sơn là quần thể kiến trúc đền tháp cổ độc đáo của người Chăm, được xem là một trong những trung tâm Ấn Độ giáo quan trọng nhất tại Đông Nam Á. Đây cũng là loại hình di sản duy nhất của Việt Nam thuộc nhóm đền tháp Hindu giáo cổ còn được bảo tồn tương đối nguyên vẹn.
                    Các công trình tại Mỹ Sơn chủ yếu được xây dựng bằng gạch nung với kỹ thuật xây dựng đặc biệt mà đến nay vẫn còn nhiều bí ẩn. Những khối gạch được ghép khít với nhau mà hầu như không nhìn thấy chất kết dính, tạo nên độ bền đáng kinh ngạc qua hàng trăm năm tồn tại.
                    Kiến trúc đền tháp Mỹ Sơn mang dáng vẻ vươn cao, tượng trưng cho núi Meru – ngọn núi thiêng trong Ấn Độ giáo. Mỗi công trình đều được trang trí bằng hệ thống phù điêu, tượng tròn và hoa văn chạm khắc trên đá sa thạch vô cùng tinh xảo, tái hiện các vị thần, linh vật và những câu chuyện thần thoại Hindu giáo.
                    Điểm đặc biệt của Mỹ Sơn nằm ở sự kết hợp hài hòa giữa ảnh hưởng văn hóa Ấn Độ và yếu tố bản địa Chăm Pa. Qua từng giai đoạn lịch sử, người Chăm đã tiếp thu có chọn lọc các giá trị ngoại lai để hình thành nên một phong cách kiến trúc và nghệ thuật riêng biệt, góp phần tạo nên bản sắc độc đáo của quần thể di tích.`,
                    img2: "/images/check/detail_b_47.jpg",
                    source2: "Thánh địa Mỹ Sơn với kiến trúc độc đáo. Nguồn ảnh: Traveloka",
                      text3: `Thánh địa Mỹ Sơn là bằng chứng tiêu biểu cho sự phát triển rực rỡ của nền văn minh Chăm Pa trong lịch sử Đông Nam Á. Đây là khu di tích duy nhất trong khu vực phản ánh quá trình phát triển liên tục của một trung tâm tôn giáo suốt gần 9 thế kỷ.
                    Không chỉ mang giá trị lịch sử, Mỹ Sơn còn là kho tàng nghệ thuật và kiến trúc đặc sắc. Các đền tháp nơi đây thể hiện trình độ kỹ thuật xây dựng cao, tư duy thẩm mỹ tinh tế cùng đời sống tín ngưỡng phong phú của cư dân Chăm cổ.
                    Dù chịu nhiều tác động của thời gian và chiến tranh, quần thể di tích vẫn lưu giữ được những giá trị nổi bật toàn cầu, góp phần quan trọng trong việc nghiên cứu lịch sử, khảo cổ học, kiến trúc và văn hóa khu vực Đông Nam Á.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_48.jpg",
                    links: [
                        {
                            url: "https://youtu.be/guWPa3Pu6lk?si=vCeKI27-cTovIDQ0",
                            text: " Thánh địa Mỹ Sơn: Dấu ấn Chăm Pa giữa lòng xứ Quảng",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Vietnam Plus",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Với lịch sử hình thành kéo dài gần một thiên niên kỷ cùng những giá trị nổi bật về kiến trúc, nghệ thuật và tôn giáo, Thánh địa Mỹ Sơn là một trong những di sản văn hóa đặc sắc nhất của Việt Nam. Không chỉ là niềm tự hào của người Chăm và vùng đất Quảng Nam, Mỹ Sơn còn là minh chứng sống động cho sự đa dạng và phong phú của các nền văn minh từng tồn tại trên lãnh thổ Việt Nam.",
                }
            },
            {
                imgId: "check_17",
                name: "Hát Xoan Phú Thọ",
                thumb: "/images/check/thumb_17.jpg",
                article: {
                    title: "HÁT XOAN PHÚ THỌ - ÂM VANG TỪ MIỀN ĐẤT TỔ HÙNG VƯƠNG",
                    subtitle: "Mỗi độ xuân về, khi những lễ hội truyền thống rộn ràng diễn ra trên vùng đất Tổ, tiếng trống, tiếng phách và những làn điệu Hát Xoan lại vang lên trong các đình, đền cổ kính. Không chỉ là một loại hình nghệ thuật dân gian đặc sắc, Hát Xoan còn là sợi dây kết nối cộng đồng với tín ngưỡng thờ cúng Hùng Vương, lưu giữ những giá trị văn hóa đã được trao truyền qua nhiều thế hệ người Việt.",
                    heading1: "NGUỒN GỐC, LỊCH SỬ HÌNH THÀNH VÀ GHI DANH ",
                    text1: `Hát Xoan là loại hình dân ca nghi lễ gắn với tục thờ cúng các Vua Hùng và tín ngưỡng thờ Thành hoàng làng, được hình thành và phát triển từ lâu đời trên vùng đất Phú Thọ. Loại hình nghệ thuật này thường được trình diễn vào mùa xuân, đặc biệt trong các lễ hội đầu năm và dịp Giỗ Tổ Hùng Vương.
                    Theo truyền thống, Hát Xoan được thực hành bởi các phường Xoan - những tổ chức văn nghệ dân gian có tính cộng đồng cao. Đứng đầu mỗi phường là Trùm Xoan, người giữ vai trò truyền dạy các làn điệu cổ, tổ chức sinh hoạt và gìn giữ những quy tắc biểu diễn truyền thống.
                    Trải qua nhiều thế kỷ, Hát Xoan không chỉ là tiếng hát dâng lên thần linh để cầu mong mùa màng tốt tươi, cuộc sống bình an mà còn là không gian giao lưu văn hóa, gắn kết cộng đồng và thể hiện tình cảm giữa con người với con người.
                    Ngày 24/11/2011, tại Hội nghị lần thứ 6 của Ủy ban Liên Chính phủ Công ước 2003 của UNESCO tổ chức tại Bali (Indonesia), Hát Xoan Phú Thọ được ghi danh vào Danh sách Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp. Sau nhiều năm triển khai các chương trình bảo tồn hiệu quả, ngày 8/12/2017, tại kỳ họp lần thứ 12 của Ủy ban Liên Chính phủ Công ước 2003 diễn ra tại Jeju (Hàn Quốc), UNESCO chính thức đưa Hát Xoan ra khỏi Danh sách cần bảo vệ khẩn cấp và ghi danh vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại. Đây là trường hợp đầu tiên trên thế giới một di sản được chuyển từ Danh sách cần bảo vệ khẩn cấp sang Danh sách đại diện của nhân loại, trở thành một câu chuyện thành công tiêu biểu về bảo tồn di sản văn hóa phi vật thể.`,
                    img1: "/images/check/detail_b_49.jpg",
                    source1: "Hát Xoan Phú Thọ (Ảnh: Sưu tầm Internet) ",
                    heading2: "HÁT XOAN CÓ GÌ ĐẶC SẮC?",
                    text2: ` Hát Xoan là loại hình nghệ thuật trình diễn tổng hợp, kết hợp giữa hát, múa, gõ trống và phách. Trong mỗi tiết mục, lời ca, động tác múa và nhịp điệu âm nhạc hòa quyện với nhau tạo nên một không gian nghệ thuật đậm đà bản sắc dân gian.
                    Hát Xoan truyền thống được chia thành ba chặng chính gồm hát nghi lễ, hát quả cách và hát giao duyên. Nếu hát nghi lễ mang tính trang nghiêm để thờ cúng thần linh, thì hát quả cách thể hiện kỹ thuật thanh nhạc và nghệ thuật trình diễn đặc sắc. Trong khi đó, hát giao duyên lại mang màu sắc vui tươi, phóng khoáng với những màn hát đối đáp giao duyên giữa đào Xoan và trai làng.`,
                    img2: "/images/check/detail_b_50.jpg",
                    source2: "Các nghệ nhân biểu diễn Hát Xoan tại Đình Hùng Lô (Ảnh: Vietnam tourism)",
                      text3: `Nội dung các bài hát phản ánh đời sống lao động, tín ngưỡng, tình yêu đôi lứa và khát vọng về cuộc sống no đủ, hạnh phúc. Nhiều tiết mục nổi tiếng như Mời rượu, Ngư tiều canh mục, Mò cá hay Đố huê vẫn được lưu truyền và biểu diễn cho đến ngày nay.
                    Điểm đặc biệt của Hát Xoan nằm ở mối liên hệ chặt chẽ với tín ngưỡng thờ cúng Hùng Vương - một trong những tín ngưỡng có ý nghĩa sâu sắc trong đời sống tinh thần của người Việt.
                    Thông qua các làn điệu cổ, Hát Xoan góp phần gìn giữ đạo lý “Uống nước nhớ nguồn”, bồi đắp ý thức về cội nguồn dân tộc và tăng cường sự gắn kết cộng đồng. Các phường Xoan không chỉ là nơi thực hành nghệ thuật mà còn là môi trường để trao truyền tri thức dân gian, phong tục tập quán và các giá trị văn hóa truyền thống.
                    Từng đứng trước nguy cơ mai một do số lượng nghệ nhân ngày càng ít và không gian thực hành bị thu hẹp, Hát Xoan đã được cộng đồng và các cơ quan chức năng nỗ lực bảo tồn bằng nhiều giải pháp đồng bộ.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_51.jpg",
                    links: [
                        {
                            url: "https://youtu.be/lUd7s59CFo4?si=_8NkG4C8Waaj1CAH",
                            text: " Hát Xoan Phú Thọ - Kiều Giang Cách | Hát Quả Cách",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Nhạc Trữ Tình Chọn Lọc",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Không vang vọng trên những sân khấu lớn hay dựa vào sự cầu kỳ của kỹ thuật biểu diễn hiện đại, Hát Xoan chạm đến người nghe bằng sự mộc mạc và chiều sâu văn hóa được tích lũy qua nhiều thế hệ. Giữa những mái đình cổ kính của vùng đất Tổ, những câu hát đầu xuân vẫn tiếp tục được cất lên, như một lời nhắc nhớ về cội nguồn dân tộc và sức sống bền bỉ của di sản trong đời sống đương đại.",
                }
            },
            {
                imgId: "check_18",
                name: "Chợ Bến Thành",
                thumb: "/images/check/thumb_18.jpg",
                article: {
                    title: "CHỢ BẾN THÀNH",
                    subtitle: "Giữa nhịp sống sôi động của Thành phố Hồ Chí Minh, Chợ Bến Thành từ lâu đã trở thành một biểu tượng quen thuộc gắn liền với hình ảnh Sài Gòn. Không chỉ là trung tâm mua bán nổi tiếng, nơi đây còn lưu giữ nhiều dấu ấn lịch sử, văn hóa và đời sống đô thị của thành phố hơn một thế kỷ qua.",
                    heading1: "GIỚI THIỆU VỀ CHỢ BẾN THÀNH ",
                    text1: `Nằm tại phường Bến Thành, Quận 1, Chợ Bến Thành tọa lạc ngay khu vực trung tâm thành phố, gần nhiều công trình nổi tiếng như Nhà hát Thành phố và phố đi bộ Nguyễn Huệ. Tiền thân của chợ là một khu buôn bán ven sông Bến Nghé hình thành từ trước khi người Pháp chiếm Gia Định. 
                    Năm 1912, chính quyền Pháp tiến hành xây dựng khu chợ mới tại vị trí hiện nay và chính thức khánh thành vào năm 1914. Trải qua hơn 100 năm tồn tại, Chợ Bến Thành đã trở thành một trong những biểu tượng văn hóa và thương mại tiêu biểu của Thành phố Hồ Chí Minh.
                    Chợ Bến Thành nổi bật với phong cách kiến trúc thuộc địa Pháp kết hợp hài hòa với đặc trưng khí hậu nhiệt đới. Công trình có diện tích khoảng 13.000m², gồm bốn cổng chính và mười hai cổng phụ. Điểm nhấn nổi bật nhất là tháp đồng hồ ba mặt ở cửa Nam, hình ảnh đã trở thành biểu tượng quen thuộc của thành phố.
                    Mỗi cổng chính của chợ gắn với một nhóm ngành hàng khác nhau. Cổng Nam là khu vực buôn bán đa dạng nhất, cổng Đông nổi tiếng với mỹ phẩm và hóa mỹ phẩm, cổng Tây tập trung đồ thủ công mỹ nghệ và quà lưu niệm, trong khi cổng Bắc là nơi bày bán hoa tươi và trái cây nhiệt đới.`,
                    img1: "/images/check/detail_b_52.jpg",
                    source1: "Chợ Bến Thành (Ảnh: Sưu tầm Internet) ",
                    heading2: "KHÔNG GIAN THƯƠNG MẠI VÀ ẨM THỰC ĐẶC SẮC",
                    text2: ` Từ lâu, Chợ Bến Thành được xem là một trong những trung tâm thương mại truyền thống lớn nhất của Sài Gòn. Hàng nghìn mặt hàng từ quần áo, vải vóc, đồ thủ công mỹ nghệ, thực phẩm khô đến các sản phẩm lưu niệm đều được bày bán tại đây.
                    Bên cạnh hoạt động mua sắm, khu ẩm thực trong chợ cũng là điểm thu hút đông đảo du khách. Những món ăn đặc trưng của Nam Bộ và Sài Gòn như phở, cơm tấm, bánh xèo, gỏi cuốn hay các loại chè truyền thống góp phần tạo nên sức hấp dẫn riêng cho khu chợ. Đây được xem như một "bản đồ thu nhỏ" của văn hóa ẩm thực Thành phố Hồ Chí Minh.`,
                    img2: "/images/check/detail_b_53.jpg",
                    source2: "Bên trong Chợ Bến Thành. Ảnh: Vietnamtourism",
                      text3: ` Không chỉ là nơi giao thương, Chợ Bến Thành còn phản ánh nhịp sống và bản sắc văn hóa của người dân Sài Gòn qua nhiều thế hệ. Hình ảnh tháp đồng hồ, những gian hàng tấp nập và không khí mua bán nhộn nhịp đã trở thành ký ức quen thuộc đối với người dân địa phương cũng như du khách trong và ngoài nước.
                    Khi đêm xuống, khu vực chợ đêm Bến Thành tiếp tục hoạt động sôi nổi với các gian hàng lưu niệm, thời trang và ẩm thực đường phố, mang đến một diện mạo khác đầy sức sống cho trung tâm thành phố.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_54.jpg",
                    links: [
                        {
                            url: "https://youtu.be/k4_jR-BgeB0?si=WkuOk0L4Z-ZsBTx7",
                            text: " Chợ Bến Thành | Trung tâm thương mại đầy màu sắc của Sài Gòn",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube 63 Travel Vietnam",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Hơn một thế kỷ tồn tại, Chợ Bến Thành không chỉ chứng kiến sự phát triển của Thành phố Hồ Chí Minh mà còn trở thành một phần trong ký ức và bản sắc của đô thị này. Giữa những tòa nhà hiện đại và nhịp sống không ngừng đổi thay, ngôi chợ cổ vẫn giữ được sức hút riêng, như một dấu ấn đặc trưng của Sài Gòn mà bất kỳ ai ghé thăm cũng muốn một lần trải nghiệm.",
                }
            },
            {
                imgId: "check_19",
                name: "Nghi lễ và trò chơi kéo co",
                thumb: "/images/check/thumb_19.jpg",
                article: {
                    title: "NGHI LỄ VÀ TRÒ CHƠI KÉO CO",
                    subtitle: "Từ bao đời nay, kéo co không chỉ là một trò chơi dân gian quen thuộc mà còn là một nghi lễ mang ý nghĩa văn hóa và tâm linh sâu sắc đối với nhiều cộng đồng cư dân nông nghiệp ở Việt Nam. Gắn liền với đời sống sản xuất và tín ngưỡng cầu mùa, nghi lễ và trò chơi kéo co đã trở thành biểu tượng của tinh thần đoàn kết cộng đồng, phản ánh mối quan hệ hài hòa giữa con người với thiên nhiên trong nền văn minh lúa nước.",
                    heading1: "GIỚI THIỆU CHUNG VÀ GHI DANH ",
                    text1: `Nghi lễ và Trò chơi Kéo co là loại hình di sản văn hóa phi vật thể được thực hành rộng rãi tại nhiều địa phương ở Việt Nam, đặc biệt tập trung ở vùng trung du, đồng bằng sông Hồng và Bắc Trung Bộ. Đây là những khu vực gắn liền với lịch sử hình thành và phát triển của nền nông nghiệp trồng lúa nước lâu đời.
                    Ngoài cộng đồng người Kinh, di sản còn được duy trì trong đời sống văn hóa của nhiều dân tộc thiểu số như Tày, Thái, Giáy ở miền núi phía Bắc. Mỗi địa phương có cách thức tổ chức, tên gọi và hình thức kéo co khác nhau, tạo nên sự đa dạng văn hóa nhưng vẫn cùng hướng đến những giá trị chung về đoàn kết, cầu mùa và khát vọng cuộc sống no đủ.
                    Ngày 02/12/2015, tại Kỳ họp lần thứ 10 của Ủy ban Liên Chính phủ Công ước 2003 về bảo vệ di sản văn hóa phi vật thể diễn ra tại thành phố Windhoek (Namibia), UNESCO đã chính thức ghi danh Nghi lễ và Trò chơi Kéo co của Việt Nam, Campuchia, Hàn Quốc và Philippines vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại. 
                    Việc UNESCO ghi danh đã khẳng định giá trị nổi bật của kéo co như một di sản văn hóa chung của khu vực Đông Á và Đông Nam Á, đồng thời ghi nhận vai trò của cộng đồng trong việc gìn giữ và trao truyền di sản qua nhiều thế hệ.`,
                    img1: "/images/check/detail_b_55.jpg",
                    source1: "Nghi lễ và trò chơi kéo co (Ảnh: Sưu tầm Internet) ",
                    heading2: "NGUỒN GỐC, Ý NGHĨA VĂN HÓA VÀ HÌNH THỨC KÉO CO",
                    text2: ` Theo các nhà nghiên cứu, nghi lễ và trò chơi kéo co bắt nguồn từ những nghi thức nông nghiệp cổ truyền của cư dân trồng lúa nước. Trong đời sống sản xuất phụ thuộc nhiều vào điều kiện tự nhiên, người dân thường tổ chức các nghi lễ cầu mưa thuận gió hòa, mùa màng bội thu và cuộc sống ấm no.
                    Kéo co thường diễn ra trong các lễ hội đầu xuân hoặc sau mùa vụ như một nghi thức đánh dấu sự khởi đầu của chu kỳ sản xuất mới. Không đơn thuần là cuộc tranh tài về sức mạnh, kéo co còn mang ý nghĩa biểu tượng cho sự cân bằng của các lực lượng tự nhiên, cho khát vọng sinh sôi, phát triển và sự gắn kết của cộng đồng làng xã.
                    Tại Việt Nam, kéo co có nhiều tên gọi khác nhau như kéo song, kéo mây, kéo mỏ, kéo co ngồi, Nhanh vai, So vai hay Nạ bai tùy theo từng vùng miền và cộng đồng dân tộc.
                    Có hai hình thức kéo co phổ biến:
                        - Kéo co đứng: Người chơi đứng thành hai đội đối diện, dùng dây hoặc vật kéo để tranh sức.
                        - Kéo co ngồi: Người tham gia ngồi trong các hố đào sẵn dưới đất, chân tỳ vào điểm tựa để kéo dây về phía mình.`,
                    img2: "/images/check/detail_b_56.jpg",
                    source2: "Kéo co ngồi” được đặt theo tư thế ngồi của các đô kéo khi kéo co, trò diễn nghi lễ trong hội đền Trấn Vũ phường Thạch Bàn, quận Long Biên, TP Hà Nội. (Ảnh: Khánh Hoà /TTXVN)",
                      text3: `Vật liệu dùng để kéo cũng rất đa dạng, từ dây thừng, dây song, dây mây cho đến những cây tre dài. Mỗi cộng đồng đều sáng tạo nên những quy tắc và nghi thức riêng, phản ánh đặc điểm văn hóa địa phương.
                    Một số hình thức tiêu biểu hiện nay gồm kéo co ngồi ở đền Trấn Vũ (Hà Nội), kéo song ở Hương Canh (Vĩnh Phúc), kéo co tre ở Hữu Chấp (Bắc Ninh) hay nghi lễ kéo co của người Tày tại Lào Cai.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_57.jpg",
                    links: [
                        {
                            url: "https://www.youtube.com/watch?v=3aULnqVZrUA",
                            text: " Phát huy những giá trị của nghi lễ và trò chơi kéo co",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Báo Quân đội nhân dân Điện tử",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Nghi lễ và Trò chơi Kéo co là một di sản văn hóa độc đáo phản ánh sâu sắc đời sống tinh thần của cư dân nông nghiệp Việt Nam. Vượt lên ý nghĩa của một trò chơi dân gian, kéo co còn là biểu tượng của tinh thần đoàn kết, sự gắn bó cộng đồng và niềm tin vào cuộc sống no đủ, thịnh vượng. ",
                }
            },
            {
                imgId: "check_20",
                name: "Nghệ thuật Xòe Thái",
                thumb: "/images/check/thumb_20.jpg",
                article: {
                    title: "NGHỆ THUẬT XÒE THÁI ",
                    subtitle: "Nghệ thuật Xòe Thái là loại hình nghệ thuật trình diễn dân gian đặc sắc của cộng đồng người Thái ở vùng Tây Bắc Việt Nam. Không chỉ là những điệu múa mang tính giải trí, Xòe còn phản ánh đời sống văn hóa, tín ngưỡng, thế giới quan và khát vọng về sự đoàn kết, hạnh phúc của cộng đồng. Qua nhiều thế hệ, những vòng xòe đã trở thành biểu tượng tiêu biểu cho tinh thần cởi mở, hiếu khách và bản sắc văn hóa của người Thái.",
                    heading1: "NGUỒN GỐC, QUÁ TRÌNH HÌNH THÀNH VÀ GHI DANH ",
                    text1: `Theo quan niệm của người Thái, Xòe bắt nguồn từ chính đời sống lao động và sinh hoạt cộng đồng. Từ xa xưa, sau những mùa vụ bội thu, những cuộc săn bắt thành công hay các dịp lễ hội, cư dân trong bản thường nắm tay nhau múa hát quanh đống lửa để chia sẻ niềm vui và gắn kết cộng đồng. Từ đó, các điệu Xòe dần hình thành và phát triển thành một loại hình nghệ thuật dân gian độc đáo.
                    Trong tiếng Thái, “Xòe” có nghĩa là múa. Các động tác múa thường mô phỏng hoạt động sản xuất, sinh hoạt và những nét đẹp trong đời sống thường ngày như trồng lúa, lấy nước, tung khăn, mời rượu hay nắm tay đoàn kết. Xòe được thực hành rộng rãi trong các nghi lễ truyền thống, đám cưới, lễ hội bản mường và các sự kiện văn hóa cộng đồng.
                    Hiện nay, Nghệ thuật Xòe Thái được lưu truyền chủ yếu tại bốn tỉnh Yên Bái, Sơn La, Điện Biên và Lai Châu, trong đó Mường Lò (Yên Bái) được xem là một trong những trung tâm tiêu biểu của loại hình di sản này.
                    Ngày 15/12/2021, tại kỳ họp của Ủy ban Liên Chính phủ Công ước 2003 về bảo vệ Di sản văn hóa phi vật thể, UNESCO đã chính thức ghi danh Nghệ thuật Xòe Thái của Việt Nam vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại. Sự kiện này không chỉ khẳng định giá trị đặc sắc của Nghệ thuật Xòe Thái mà còn góp phần quảng bá bản sắc văn hóa của cộng đồng người Thái nói riêng và văn hóa Việt Nam nói chung đến với bạn bè quốc tế.`,
                    img1: "/images/check/detail_b_58.jpg",
                    source1: "Nghệ thuật Xòe Thái (Ảnh: Sưu tầm Internet) ",
                    heading2: "NGHỆ THUẬT XÒE THÁI CÓ GÌ ĐẶC SẮC?",
                    text2: ` Nghệ thuật Xòe Thái gồm ba loại hình chính: Xòe nghi lễ, Xòe vòng và Xòe biểu diễn. Trong đó, Xòe vòng là hình thức phổ biến nhất, nơi mọi người nắm tay nhau tạo thành vòng tròn, cùng hòa mình vào điệu múa trong không khí vui tươi và gắn kết.
                    Các động tác múa Xòe tương đối đơn giản nhưng giàu tính biểu tượng. Người múa thường giơ tay lên cao, dang rộng, hạ xuống và nắm tay người bên cạnh trong những bước chân nhịp nhàng theo tiếng nhạc. Những động tác ấy thể hiện khát vọng về cuộc sống ấm no, đoàn kết và hòa hợp giữa con người với thiên nhiên.
                    Âm nhạc giữ vai trò quan trọng trong mỗi cuộc Xòe. Các nhạc cụ truyền thống như tính tẩu, khèn bè, kèn loa, trống, chiêng, chũm chọe, pí pặp hay bẳng bu tạo nên những giai điệu rộn ràng, góp phần làm nên sức hấp dẫn của điệu múa. Cùng với đó là trang phục truyền thống, đặc biệt là áo cóm và các loại trang sức bạc của phụ nữ Thái, tạo nên vẻ đẹp duyên dáng và đậm đà bản sắc dân tộc.
                    Một nét đặc sắc khác của Nghệ thuật Xòe Thái là hệ thống sáu điệu Xòe cổ, được xem là nền tảng của nghệ thuật dân vũ người Thái. Mỗi điệu múa đều mang một ý nghĩa riêng, phản ánh những giá trị văn hóa, tinh thần và triết lý sống của cộng đồng.`,
                    img2: "/images/check/detail_b_59.jpg",
                    source2: "Xòe vòng (Ảnh: Sưu tầm)",
                      text3: `Đối với người Thái, Xòe không chỉ là nghệ thuật trình diễn mà còn là phương thức kết nối cộng đồng và thể hiện bản sắc văn hóa dân tộc. Những vòng Xòe xuất hiện trong hầu hết các sự kiện quan trọng của đời sống, từ nghi lễ tín ngưỡng, lễ hội truyền thống đến các cuộc gặp gỡ, giao lưu và đón tiếp khách quý.
                    Nghệ thuật Xòe phản ánh thế giới quan và nhân sinh quan của người Thái, thể hiện sự gắn bó giữa con người với thiên nhiên, thần linh và cộng đồng. Đồng thời, di sản còn góp phần củng cố tinh thần đoàn kết, tăng cường mối quan hệ giữa các thế hệ và gìn giữ những giá trị văn hóa truyền thống trong đời sống đương đại.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_60.jpg",
                    links: [
                        {
                            url: "https://youtu.be/P_zk3y7MUDI?si=RdjcHT1623brnnW3",
                            text: " Xòe Thái - Tinh hoa dân tộc",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  - Kênh Youtube Văn hóa - Ẩm thực dân tộc Thái",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Từ những bản làng giữa núi rừng Tây Bắc đến các sự kiện văn hóa lớn trong nước và quốc tế, vòng xòe vẫn luôn mở rộng để chào đón mọi người cùng hòa nhịp. Không phân biệt tuổi tác, nghề nghiệp hay dân tộc, những bàn tay nối liền trong điệu xòe đã trở thành biểu tượng đẹp về tinh thần đoàn kết và sức sống bền bỉ của văn hóa Thái giữa cuộc sống hiện đại. ",
                }
            },
            {
                imgId: "check_21",
                name: "Nghệ thuật tuồng",
                thumb: "/images/check/thumb_21.jpg",
                article: {
                    title: "NGHỆ THUẬT TUỒNG XỨ QUẢNG ",
                    subtitle: "Giữa dòng chảy sôi động của các loại hình giải trí hiện đại, tiếng trống chầu, làn điệu hát nam hay những khuôn mặt hóa trang rực rỡ của nghệ thuật Tuồng vẫn âm thầm kể lại những câu chuyện về lòng trung nghĩa, khí tiết và bản lĩnh con người. Trên vùng đất Quảng Nam - Đà Nẵng, Tuồng không chỉ là một loại hình sân khấu truyền thống mà còn là một phần ký ức văn hóa được gìn giữ qua nhiều thế hệ.",
                    heading1: "LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN ",
                    text1: `Nghệ thuật Tuồng xứ Quảng được cho là xuất hiện từ khoảng thế kỷ XVII và phát triển mạnh mẽ trong suốt nhiều thế kỷ sau đó. Từ những gánh hát dân gian như Đức Giáo (Quế Sơn) và Khánh Thọ (Tam Kỳ), Tuồng dần lan rộng khắp vùng Quảng Nam (Đà Nẵng), trở thành loại hình nghệ thuật quen thuộc trong đời sống cộng đồng.
                    Đến đầu thế kỷ XX, Tuồng bước vào giai đoạn phát triển rực rỡ với sự ra đời của nhiều trường đào tạo và rạp hát nổi tiếng như Chú Châu, Vĩnh Điện, Bàu Toa hay Miếu Bông. Đây là thời kỳ nghệ thuật Tuồng chuyển mình từ không gian sân đình, làng xã sang sân khấu đô thị chuyên nghiệp, thu hút đông đảo công chúng trong khu vực miền Trung.
                    Dù từng trải qua những giai đoạn thăng trầm trước sự cạnh tranh của cải lương và các loại hình giải trí mới, Tuồng xứ Quảng vẫn được các nghệ sĩ, nghệ nhân bền bỉ gìn giữ và phát triển cho đến ngày nay.
                    Ngày 8/6/2015, Nghệ thuật Tuồng xứ Quảng ở Đà Nẵng được đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia. `,
                    img1: "/images/check/detail_b_61.jpg",
                    source1: "Nghệ thuật Tuồng (Ảnh: Danang fantasticity) ",
                    heading2: "ĐẶC TRƯNG NGHỆ THUẬT",
                    text2: ` Tuồng là loại hình sân khấu tổng hợp, kết tinh nhiều yếu tố nghệ thuật như văn học, âm nhạc, múa, hóa trang, phục trang và diễn xuất.Kịch bản Tuồng thường xoay quanh các đề tài lịch sử, trung quân ái quốc, lòng hiếu nghĩa và những bài học đạo đức sâu sắc. Các nhân vật được xây dựng theo những tuyến tính cách rõ nét như trung thần, gian thần, tướng lĩnh, đào thương hay nhân vật hài.
                    Một trong những nét độc đáo của Tuồng xứ Quảng là phong cách “thiện hát nam”, với những làn điệu mềm mại, giàu cảm xúc và đậm chất trữ tình. Hệ thống âm nhạc được xây dựng chặt chẽ với các hình thức như nói lối, hát nam, hát khách cùng nhiều làn điệu mang sắc thái biểu cảm khác nhau.`,
                    img2: "/images/check/detail_b_62.jpg",
                    source2: "Cảnh trong trích đoạn Ôn Đình chém Tá, vở tuồng Sơn Hậu - Ảnh: An Dy ",
                      text3: `Bên cạnh đó, nghệ thuật múa giữ vai trò quan trọng trong việc thể hiện nội tâm và tính cách nhân vật. Từng động tác tay, bước chân hay ánh mắt đều mang tính biểu tượng cao, giúp người xem hiểu được hoàn cảnh và diễn biến câu chuyện ngay cả khi sân khấu tối giản đạo cụ.
                    Nếu âm nhạc là linh hồn của Tuồng thì hóa trang chính là dấu ấn thị giác nổi bật nhất. Chỉ cần nhìn màu sắc và đường nét trên khuôn mặt diễn viên, khán giả có thể nhận biết đâu là nhân vật chính trực, đâu là kẻ gian tà hay võ tướng dũng mãnh.
                    Phục trang Tuồng cũng rất phong phú với các loại mão, giáp, áo bào, cờ lệnh và nhiều phụ kiện đặc trưng. Tất cả góp phần tạo nên vẻ uy nghi, trang trọng và giàu tính biểu tượng cho sân khấu truyền thống.
                    Đằng sau ánh đèn sân khấu, người nghệ sĩ Tuồng luôn dành sự tôn kính đặc biệt đối với nghề nghiệp của mình thông qua tục thờ Tổ nghề. Trong mỗi đoàn hát đều có bàn thờ Tổ, nơi nghệ sĩ thành tâm cầu mong một đêm diễn thuận lợi và thành công.
                    Nghề Tuồng cũng lưu giữ nhiều tập tục, kiêng kỵ độc đáo liên quan đến việc hóa trang, sử dụng nhạc cụ hay ứng xử trong hậu trường. Những quy tắc này phản ánh sự trân trọng đối với nghề diễn và góp phần tạo nên bản sắc riêng của cộng đồng nghệ sĩ Tuồng.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_63.jpg",
                    links: [
                        {
                            url: "https://youtu.be/57hAGNCgC7I?si=6jMbiKGxCwdUPXVb",
                            text: "  Nghệ thuật Tuồng xứ Quảng ở Đà Nẵng",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Bao Tang Da Nang - Da Nang Museum",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Có những loại hình nghệ thuật được lưu giữ trong sách vở, nhưng Tuồng chỉ thực sự sống khi tiếng trống chầu vang lên và người nghệ sĩ bước ra sân khấu. Sau hàng trăm năm tồn tại, Tuồng xứ Quảng vẫn là nơi lưu giữ tinh thần nghĩa khí, lòng tự hào và tài năng sáng tạo của cư dân miền Trung. Mỗi vở diễn hôm nay không chỉ là một cuộc trình diễn nghệ thuật, mà còn là sự tiếp nối của một truyền thống văn hóa đã bền bỉ đi cùng lịch sử vùng đất Quảng qua nhiều thế kỷ.",
                }
            },
            {
                imgId: "check_22",
                name: "Vịnh Hạ Long",
                thumb: "/images/check/thumb_22.jpg",
                article: {
                    title: "VỊNH HẠ LONG",
                    subtitle: "Giữa vùng biển Đông Bắc của Tổ quốc, Vịnh Hạ Long hiện lên như một tuyệt tác thiên nhiên được kiến tạo qua hàng triệu năm lịch sử Trái Đất. Với cảnh quan kỳ vĩ của hàng nghìn đảo đá và hệ thống hang động độc đáo, nơi đây được xem là một trong những biểu tượng thiên nhiên nổi bật nhất của Việt Nam.",
                    heading1: "GIỚI THIỆU VÀ GHI DANH ",
                    text1: ` Nằm thuộc tỉnh Quảng Ninh, Vịnh Hạ Long có diện tích khoảng 1.553 km² với gần 2.000 hòn đảo lớn nhỏ. Không chỉ sở hữu vẻ đẹp ngoạn mục, khu vực này còn chứa đựng những giá trị đặc biệt về địa chất, địa mạo và đa dạng sinh học. 
                    Năm 1994, UNESCO công nhận Vịnh Hạ Long là Di sản Thiên nhiên Thế giới theo tiêu chí (vii) về giá trị thẩm mỹ và cảnh quan. Đến năm 2000, di sản tiếp tục được ghi danh lần thứ hai theo tiêu chí (viii) về giá trị địa chất, địa mạo toàn cầu.
                    Vịnh Hạ Long nổi tiếng với hàng nghìn đảo đá vôi mang nhiều hình dáng độc đáo, được hình thành qua quá trình phong hóa và vận động địa chất kéo dài hàng triệu năm. Các đảo đá, tháp karst và hang động tạo nên một bức tranh thiên nhiên sống động giữa mặt biển xanh rộng lớn.
                    Nhiều hang động nổi tiếng như Sửng Sốt, Thiên Cung, Đầu Gỗ hay Trinh Nữ không chỉ hấp dẫn bởi vẻ đẹp kỳ ảo của hệ thống nhũ đá mà còn phản ánh quá trình phát triển địa chất lâu dài của khu vực. Chính sự kết hợp hài hòa giữa biển, đảo và hang động đã tạo nên giá trị thẩm mỹ đặc biệt, đưa Hạ Long trở thành một trong những cảnh quan nổi bật của thế giới.`,
                    img1: "/images/check/detail_b_64.jpg",
                    source1: "Cảnh quan thiên nhiên hùng vĩ tại vịnh Hạ Long. Ảnh: funtime  ",
                    heading2: "GIÁ TRỊ ĐỊA CHẤT VÀ ĐỊA MẠO TOÀN CẦU",
                    text2: ` Vịnh Hạ Long là một trong những khu vực karst đá vôi tiêu biểu nhất thế giới. Những đảo đá, thung lũng ngập nước, hồ kín và hang động nơi đây là minh chứng rõ nét cho quá trình tiến hóa địa chất kéo dài hàng trăm triệu năm.
                    Các nhà khoa học đánh giá Hạ Long là mẫu hình điển hình của địa hình karst nhiệt đới ẩm, phản ánh những biến đổi của môi trường tự nhiên và lịch sử phát triển của Trái Đất. Đây cũng là lý do giúp di sản được UNESCO công nhận lần thứ hai vào năm 2000.`,
                    img2: "/images/check/detail_b_65.jpg",
                    source2: "Kỳ quan thiên nhiên vịnh Hạ Long còn nằm trong danh sách 4 điểm ngắm bình minh và hoàng hôn đẹp nhất châu Á. Ảnh: Chính quyền điện tử Quảng Ninh ",
                      text3: `Bên cạnh giá trị cảnh quan và địa chất, Vịnh Hạ Long còn là nơi sinh sống của nhiều hệ sinh thái đặc trưng như rừng ngập mặn, rạn san hô, thảm cỏ biển, tùng áng và hệ sinh thái hang động. Khu vực này ghi nhận hàng trăm loài cá, san hô, rong biển, động vật đáy cùng nhiều loài thực vật và động vật quý hiếm. Sự phong phú về sinh học góp phần làm nên giá trị toàn diện của di sản, đồng thời giữ vai trò quan trọng trong việc duy trì cân bằng sinh thái vùng biển Đông Bắc Việt Nam.
                    Ngày nay, Vịnh Hạ Long là một trong những điểm đến du lịch hàng đầu của Việt Nam, thu hút du khách bởi các hoạt động tham quan hang động, du thuyền, chèo kayak, tắm biển và khám phá hệ sinh thái biển đảo.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_66.jpg",
                    links: [
                        {
                            url: "https://youtu.be/vt9OL_sJ5gA?si=f6X4ulzVQ869NaLG",
                            text: " Ha Long Bay - The UNESCO World Heritage Site (4K)",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Welcome to Vietnam",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Hai lần được UNESCO vinh danh cùng những giá trị nổi bật về cảnh quan, địa chất và đa dạng sinh học đã đưa Vịnh Hạ Long trở thành niềm tự hào của Việt Nam trên bản đồ di sản thế giới. Không chỉ là kỳ quan thiên nhiên đặc sắc, Hạ Long còn là minh chứng cho vẻ đẹp và sức sáng tạo kỳ diệu của thiên nhiên, để lại dấu ấn sâu đậm trong lòng mỗi người khi đặt chân đến vùng biển đảo này.",
                }
            },
            {
                imgId: "check_23",
                name: "Múa rối nước",
                thumb: "/images/check/thumb_23.jpg",
                article: {
                    title: "MÚA RỐI NƯỚC HẢI DƯƠNG",
                    subtitle: "Giữa kho tàng nghệ thuật dân gian Việt Nam, múa rối nước là loại hình biểu diễn độc đáo phản ánh sinh động đời sống và tâm hồn của cư dân nông nghiệp vùng đồng bằng Bắc Bộ. Tại Hải Dương, nghệ thuật này đã được lưu truyền qua nhiều thế hệ, trở thành một nét văn hóa đặc sắc gắn liền với cộng đồng làng xã và góp phần làm phong phú bản sắc văn hóa dân tộc.",
                    heading1: "GIỚI THIỆU CHUNG VÀ GHI DANH ",
                    text1: `Múa rối nước ở Hải Dương hiện được bảo tồn và thực hành chủ yếu tại ba phường rối truyền thống: Bồ Dương (xã Hồng Phong, huyện Ninh Giang), An Liệt (xã Thanh Hải, huyện Thanh Hà) và Bùi Thượng (xã Lê Lợi, huyện Gia Lộc). Đây là loại hình nghệ thuật trình diễn dân gian sử dụng mặt nước làm sân khấu, kết hợp giữa kỹ thuật điều khiển con rối, âm nhạc truyền thống, lời ca và các tích trò dân gian để tái hiện đời sống lao động, tín ngưỡng và sinh hoạt văn hóa của người Việt.
                    Năm 2012, Múa rối nước ở Hải Dương được Bộ Văn hóa, Thể thao và Du lịch đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia, loại hình Nghệ thuật trình diễn dân gian. Việc ghi danh khẳng định giá trị đặc sắc của loại hình nghệ thuật này trong kho tàng di sản văn hóa Việt Nam, đồng thời tạo cơ sở quan trọng cho công tác bảo tồn và phát huy di sản trong đời sống đương đại.
                    Múa rối nước Hải Dương có lịch sử hình thành từ nhiều thế kỷ trước. Theo các tư liệu còn lưu giữ, phường rối nước Bồ Dương được cho là xuất hiện từ thế kỷ XIV khi nghề rối nước được truyền từ vùng Kinh Bắc về địa phương. Phường rối Bùi Thượng gắn với truyền thuyết về vị tướng Trương Công Tế thời Lý, người được nhân dân tôn là Thành hoàng làng và là người truyền nghề múa rối cho dân địa phương. Trong khi đó, phường rối nước An Liệt được cho là hình thành từ thời Hậu Lê, do người dân học nghề từ nơi khác rồi mang về truyền dạy trong làng.
                    Trải qua nhiều biến động lịch sử, các phường rối vẫn duy trì hoạt động biểu diễn trong các dịp lễ hội, tế lễ và sinh hoạt cộng đồng, góp phần lưu giữ những giá trị văn hóa truyền thống của vùng đồng bằng sông Hồng.`,
                    img1: "/images/check/detail_b_67.jpg",
                    source1: "Nguồn: Tạp chí Người Hà Nội",
                    heading2: "NGHỆ THUẬT ĐỘC ĐÁO VÀ NHỮNG TÍCH TRÒ MANG ĐẬM HỒN QUÊ VIỆT TRÊN MẶT NƯỚC",
                    text2: ` Điểm đặc biệt tạo nên sức hấp dẫn của múa rối nước là việc sử dụng mặt nước làm không gian biểu diễn. Sân khấu thường được dựng giữa ao làng với thủy đình mô phỏng kiến trúc đình làng truyền thống. Người điều khiển đứng phía sau tấm phông trong thủy đình, sử dụng hệ thống sào và dây được giấu dưới nước để điều khiển các con rối chuyển động.
                    Những con rối được chế tác chủ yếu từ gỗ sung, loại gỗ nhẹ, dễ nổi và có độ bền cao trong môi trường nước. Mỗi nhân vật đều được chạm khắc, sơn màu sinh động, thể hiện rõ tính cách và vai trò riêng. Trong đó, chú Tễu là nhân vật quen thuộc nhất, thường xuất hiện đầu mỗi buổi diễn để giới thiệu chương trình và mang đến tiếng cười vui nhộn cho khán giả.`,
                    img2: "/images/check/detail_b_68.jpg",
                    source2: "Nghệ thuật rối nước Việt (Ảnh: Báo Chính Phủ)",
                      text3: `Âm nhạc giữ vai trò đặc biệt quan trọng trong nghệ thuật rối nước. Tiếng trống, mõ, thanh la cùng các làn điệu chèo và dân ca Bắc Bộ không chỉ tạo không khí sôi động mà còn góp phần dẫn dắt nội dung, nhịp điệu và cảm xúc của từng tiết mục biểu diễn.
                    Nội dung các trò diễn thường phản ánh cuộc sống lao động và sinh hoạt của người dân nông thôn Bắc Bộ. Các tiết mục tiêu biểu như Tễu giáo đầu, Đấu vật, Đánh bắt cá, Múa rồng, Múa lân hay Múa bát tiên đều mang ý nghĩa ca ngợi tinh thần lao động, sức mạnh cộng đồng và khát vọng về cuộc sống bình yên, no đủ.
                    Bên cạnh các tích trò truyền thống, các nghệ nhân ngày nay còn sáng tạo thêm nhiều nội dung mới gắn với đời sống hiện đại như bảo vệ di sản văn hóa, giáo dục cộng đồng hay các câu chuyện lịch sử, góp phần làm phong phú kho tàng tiết mục của nghệ thuật rối nước.
                    Múa rối nước không chỉ là hình thức giải trí dân gian mà còn là kết tinh của trí tuệ, óc sáng tạo và tâm hồn người nông dân Việt Nam. Loại hình nghệ thuật này phản ánh sâu sắc nền văn minh lúa nước, đời sống làng quê và những giá trị văn hóa truyền thống được truyền từ thế hệ này sang thế hệ khác.`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_69.jpg",
                    links: [
                        {
                            url: "https://youtu.be/WikyZNdtx3w?si=4gOa3DzAplttcC5J",
                            text: "  Thưởng thức sân khấu Múa Rối nước Độc Đáo",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube HTV - Đài Hà Nội",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Từ những ao làng bình dị của vùng đồng bằng Bắc Bộ, múa rối nước đã trở thành một loại hình nghệ thuật độc đáo mang đậm bản sắc văn hóa Việt Nam. Tại Hải Dương, di sản này không chỉ lưu giữ những ký ức về đời sống nông nghiệp truyền thống mà còn phản ánh sự sáng tạo, tài hoa và tinh thần gắn kết cộng đồng của người dân qua nhiều thế hệ. Trong bối cảnh hiện đại, việc bảo tồn và phát huy giá trị múa rối nước không chỉ góp phần gìn giữ bản sắc văn hóa dân tộc mà còn mở ra cơ hội quảng bá hình ảnh quê hương Hải Dương và văn hóa Việt Nam đến với bạn bè quốc tế. ",
                }
            },
            {
                imgId: "check_24",
                name: "Ca trù",
                thumb: "/images/check/thumb_24.jpg",
                article: {
                    title: "CA TRÙ",
                    subtitle: "Ca trù là một loại hình nghệ thuật trình diễn độc đáo trong kho tàng văn hóa truyền thống Việt Nam, kết hợp giữa thơ ca, âm nhạc và diễn xướng. Không chỉ là một hình thức ca hát đơn thuần, Ca trù còn phản ánh đời sống tinh thần, tư tưởng, văn chương và triết lý sống của người Việt qua nhiều thế kỷ lịch sử. Với những giá trị nghệ thuật đặc sắc và sức ảnh hưởng sâu rộng trong đời sống văn hóa dân tộc, Ca trù được UNESCO ghi danh vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại năm 2009.",
                    heading1: "NGUỒN GỐC ",
                    text1: ` Ca trù được cho là xuất hiện vào khoảng thế kỷ XIII đến XIV tại kinh thành Thăng Long (nay là Hà Nội). Ban đầu, loại hình nghệ thuật này chủ yếu được biểu diễn trong cung đình, dinh thự của tầng lớp quý tộc và các không gian văn hóa trang trọng. Người thể hiện thường là những đào nương tài sắc, sở hữu giọng hát tinh tế cùng kỹ năng diễn xướng điêu luyện. Trải qua nhiều thế kỷ phát triển, Ca trù dần trở thành một loại hình nghệ thuật đặc sắc, gắn bó với đời sống văn hóa và tinh thần của người Việt.
                    Trải qua nhiều thế kỷ phát triển, Ca trù từng hiện diện trong nhiều không gian văn hóa khác nhau như đình làng, đền miếu, nhà thờ tổ nghề, dinh quan và các ca quán. Loại hình nghệ thuật này còn được biết đến với nhiều tên gọi khác nhau như Ả đào, Hát cô đầu, Hát nhà trò hay Hát cửa quyền, tùy theo môi trường diễn xướng và đối tượng thưởng thức.
                    Không chỉ gắn với đời sống cộng đồng, Ca trù còn có vị trí đặc biệt trong sinh hoạt của tầng lớp trí thức và văn nhân. Nhiều tác phẩm thơ ca nổi tiếng, đặc biệt là thể thơ Hát nói, đã ra đời và phát triển mạnh mẽ trong môi trường nghệ thuật Ca trù.`,
                    img1: "/images/check/detail_b_70.jpg",
                    source1: "Nguồn gốc ca trù (Ảnh: Sưu tầm Internet) ",
                    heading2: "HÌNH THỨC BIỂU DIỄN VÀ YẾU TỐ TRONG HÁT CA TRÙ",
                    text2: ` Ca trù thường được biểu diễn trong không gian tương đối nhỏ, tạo sự gần gũi giữa nghệ nhân và người thưởng thức. Một chầu hát Ca trù truyền thống là sự kết hợp hài hòa giữa giọng hát, tiếng đàn và tiếng trống.
                    Khác với nhiều loại hình âm nhạc dân gian khác, Ca trù đề cao sự tinh tế trong cách hát, cách nhả chữ và khả năng cảm thụ thơ ca. Người nghe không chỉ thưởng thức âm nhạc mà còn cảm nhận vẻ đẹp của ngôn từ, thi ca và chiều sâu cảm xúc mà nghệ nhân truyền tải.`,
                    img2: "/images/check/detail_b_71.jpg",
                    source2: "Ả đào, kép đàn và quan viên trong biểu diễn ca trù (Ảnh: Tất Sơn/VNP) ",
                      text3: `Một chầu hát Ca trù truyền thống thường có ba thành phần chính.
                        - Ả đào (đào nương) là người giữ vai trò trung tâm của buổi diễn. Nghệ nhân vừa cất giọng hát vừa gõ phách để dẫn dắt toàn bộ tiết tấu và cảm xúc của tác phẩm.
                        - Kép đàn là người sử dụng đàn đáy để đệm cho đào nương. Tiếng đàn không chỉ hỗ trợ giai điệu mà còn góp phần tạo nên sắc thái nghệ thuật đặc trưng của Ca trù.
                        - Quan viên là người đánh trống chầu. Tiếng trống vừa có chức năng chấm câu, vừa thể hiện sự tán thưởng đối với những đoạn hát hay hoặc những câu thơ đắc ý.
                        Sự kết hợp giữa giọng hát của đào nương, tiếng đàn đáy của kép đàn và tiếng trống chầu của quan viên đã tạo nên một không gian nghệ thuật đặc biệt mà ít loại hình diễn xướng nào có được.
`,
                    heading3: "TƯ LIỆU MINH HỌA",

                    img3: "/images/check/detail_b_72.jpg",
                    links: [
                        {
                            url: "https://youtu.be/wpnlG--lgqA?si=KsAwTpiHK1IVPV-X",
                            text: " Ca trù: Tây Hồ hoài cổ",
                            type: "card" // Render dạng nút bo tròn có icon YouTube đỏ
                        },
                        {
                            url: "https://www.tiktok.com/@example",
                            text: "  Kênh Youtube Bùi Quang Tuấn (Van hoa Viet Nam)",
                            type: "text" // Render dòng chữ text nguồn tiếp theo
                        }
                    ],
                    heading4: "KẾT LUẬN",
                    text4: "Ca trù là một trong những loại hình nghệ thuật mang tính bác học tiêu biểu của Việt Nam. Đây không chỉ là nơi hội tụ của âm nhạc, thơ ca và diễn xướng mà còn góp phần hình thành nhiều giá trị văn hóa đặc sắc của dân tộc. Từ Ca trù, thể thơ Hát nói đã phát triển và trở thành một trong những thành tựu nổi bật của văn học chữ Nôm. Về âm nhạc, đàn đáy và phách đã trở thành những nhạc cụ mang tính biểu tượng, góp phần tạo nên bản sắc riêng cho loại hình nghệ thuật này.",
                }
            },
            
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
                name: "Cô gái ví phường vải",
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
                            text: "Các nhân vật trong múa rối nước",
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