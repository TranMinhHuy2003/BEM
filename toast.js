function toast ({
    title= '',
    message= '',
    type= '',
    duration= 2000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-skull-crossbones'
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slidefromright ease 1s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML= `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__header">${title}</h3>
                <p class="toast__mess">
                    ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const timeout = duration + 1000;
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, timeout);
    }
}