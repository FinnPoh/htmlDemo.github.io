let slideIndex = 0; // 初始化当前图片索引

// 初始化并开始轮播
showSlides();

// 自动轮播功能
function showSlides() {
    let slides = document.querySelectorAll('.carousel-images img');
    let dots = document.querySelectorAll('.dot');
    
    // 隐藏所有图片
    slides.forEach((slide) => slide.style.display = 'none');
    
    // 移除所有圆点的 'active' 类
    dots.forEach((dot) => dot.classList.remove('active'));
    
    // 增加 slideIndex，每次调用切换到下一张图片
    slideIndex++;
    
    // 如果 slideIndex 超过图片数量，则回到第一张图片
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    
    // 显示当前索引对应的图片，并为相应的圆点添加 'active' 类
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    console.log(dots[slideIndex - 1]); // 检查是否添加了 'active' 类
    
    // 每隔3秒自动切换图片
    setTimeout(showSlides, 3000);
}

// 点击圆点时切换到相应图片
function currentSlide(n) {
    let slides = document.querySelectorAll('.carousel-images img');
    let dots = document.querySelectorAll('.dot');
    
    // 隐藏所有图片
    slides.forEach((slide) => slide.style.display = 'none');
    
    // 移除所有圆点的 'active' 类
    dots.forEach((dot) => dot.classList.remove('active'));
    
    // 设置当前的图片索引为用户点击的圆点
    slideIndex = n;
    
    // 显示用户点击的圆点对应的图片，并将该圆点激活
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    console.log(dots[slideIndex - 1]); // 检查是否添加了 'active' 类
    
    // 停止当前的自动轮播，重启计时器
    clearTimeout(timer); // 停止当前的计时器
    timer = setTimeout(showSlides, 3000); // 重启自动轮播
}


// // 导航栏边框变化
// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section'); // 所有部分
//     const navLinks = document.querySelectorAll('.navLink'); // 导航栏链接
//     const homeLink = document.getElementById('homeLink');

//     function changeNavLink() {
//         let scrollPos = window.scrollY + 113; // 滚动位置，113是为了给导航栏留出空间

//         // 清除所有链接的激活状态
//         navLinks.forEach(link => link.classList.remove('linkActive'));
//         homeLink.classList.remove('linkActive'); // 清除首页链接状态

//         // 检查是否在首页
//         if (scrollPos < sections[0].offsetTop) {
//             homeLink.classList.add('linkActive'); // 激活首页链接
//             return; // 退出函数，避免后续代码执行
//         }

//         // 遍历每个 section
//         sections.forEach((section, index) => {
//             if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
//                 navLinks[index].classList.add('linkActive'); // 为当前部分的链接添加激活状态
//             }
//         });
//     }

//     // 监听滚动事件
//     window.addEventListener('scroll', changeNavLink);
// });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // 所有部分
    const navLinks = document.querySelectorAll('.navLink'); // 导航栏链接
    const homeLink = document.getElementById('homeLink');

    function changeNavLink() {
        let scrollPos = window.scrollY + window.innerHeight / 2; // 计算屏幕中间的位置

        // 清除所有链接的激活状态
        navLinks.forEach(link => link.classList.remove('linkActive'));
        homeLink.classList.remove('linkActive'); // 清除首页链接状态

        // 检查是否在首页（滚动位置小于第一个 section 的顶部）
        if (scrollPos < sections[0].offsetTop) {
            homeLink.classList.add('linkActive'); // 激活首页链接
            return; // 退出函数，避免后续代码执行
        }

        // 遍历每个 section，检查屏幕中间是否在该 section 内
        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop;
            let sectionBottom = sectionTop + section.offsetHeight;

            // 如果屏幕中间在当前 section 范围内
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks[index].classList.add('linkActive'); // 为当前部分的链接添加激活状态
            }
        });
    }

    // 监听滚动事件
    window.addEventListener('scroll', changeNavLink);
});


function noDevelope(event) {
    event.preventDefault();  // 阻止链接跳转
    alert('很抱歉，该功能当前暂未开发');  // 弹出提示框
}
