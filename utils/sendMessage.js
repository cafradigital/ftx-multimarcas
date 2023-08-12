let buttons = window.document.querySelectorAll('.buttonsWhatsApp');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    
        const userAgent = navigator.userAgent.toLowerCase();
    
        if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i) !== -1 ){
            window.location.href = `http://api.whatsapp.com/send/?text=Olá, tudo bem? Estou entrando em contato pelo site da CAFRA.&phone=5511956556096`;
        } else {
            window.location.href = `http://web.whatsapp.com/send/?text=Olá, tudo bem? Estou entrando em contato pelo site da CAFRA.&phone=5511956556096`;
        };
    
    })
})