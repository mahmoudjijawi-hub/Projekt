// تهيئة  التاريخ الحالي في الفوتر
document.getElementById('currentYear').textContent= new Date().getFullYear();
// تبديل القائمة المتنقلة
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if(navLinks.classList.contains('active')){
        icon.classlist.remove('fa-bars');
        icon.classlist.add('fa-times');
    }
    else{
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
// إغلاق القائمة عند النقر على الرابط
navItems.forEach(item =>{
    item.addEventListener('click',() =>{
        navLinks.classList.remove('active');
        const icon =menuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
// تبديل إلى الوضع الداكن
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
if(localStorage.getItem('darkMode')==='enebled'){
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode','disabled');
    }
});
// التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// نموذج الإتصال
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('شكرا لك تم استلام رسالتك وسيتم الرد عليك قريبا.');
    contactForm.reset();

});
