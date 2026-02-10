// منع النقر بالزر الأيمن للفأرة
document.addEventListener('contextmenu', event => event.preventDefault());

// منع اختصارات لوحة المفاتيح الخاصة بفحص الكود (F12, Ctrl+Shift+I, etc)
document.onkeydown = function(e) {
    if(e.keyCode == 123) { return false; } // F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // View Source
};

console.log("%cتوقف! هذا المشروع محمي بحقوق المطور أحمد.", "color: red; font-size: 30px; font-weight: bold;");
