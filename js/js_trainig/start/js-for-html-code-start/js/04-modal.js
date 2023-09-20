const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
		const modalId = this.dataset.modalButton;
		const modal = document.querySelector('#' + modalId);
		modal.classList.remove('hidden');

		// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
		modal.querySelector('.modal-window').addEventListener('click', function (e) {
			e.stopPropagation();
		});
	})
})

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})

// Закрытие модалок по фейду
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
	});
});
