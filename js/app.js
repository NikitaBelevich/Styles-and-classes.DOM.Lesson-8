'use strict';

//Напишите функцию showNotification(options), которая создаёт уведомление: div class="notification" с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

const btnCreate = document.querySelector('.task1 button');

let dataStyle = {
    top: '10px', // 10px от верхней границы окна (по умолчанию 5px)
    right: '10px', // 10px от правого края окна (по умолчанию 5px)
    html: "Hello!", // HTML-уведомление
    className: "notifi-mod" // дополнительный класс для div (необязательно)
};

btnCreate.addEventListener('click', () => {
    createNotification(dataStyle);
});

function createNotification({
    top: topPosition = '5px',
    right: rightPosition = '5px',
    html: notificationText,
    className: classModified 
}) {
    const notificationNode = document.createElement('div');
    document.body.prepend(notificationNode);
    notificationNode.classList.add('notification-default');
    if (classModified) {
        notificationNode.classList.add(classModified); //* если в параметр попало значение(класс), добавляем его
    } 
    notificationNode.textContent = notificationText; 
    
    setTimeout(() => {
        notificationNode.style.cssText = `
            top: ${topPosition}; 
            right: ${rightPosition}; 
            opacity: 1; 
            visibility: visible;
        `; //* позиционируем и проявляем

        setTimeout(() => {removeNotification();}, 2000); // через 2с хотим удалять
    });

    function removeNotification() {
        notificationNode.style.opacity = 0; // для красоты
        setTimeout(() => {notificationNode.remove();}, 1000); // и удаляем из потока
    }
}









