## Тестовые сценарии для формы обратной связи

1. Базовые сценарии отправки формы:

• Успешная отправка формы:
  * Ввод корректных данных во все поля:
    * Имя: "Иван"
    * Email: "ivan.ivanov@example.com"
    * Телефон: "+79991112233"
    * Цель обращения: "Заказ" 
    * Сообщение: "Пример сообщения"
  * Проверка отправки формы:
    * Появление сообщения об успешной отправке.
    * Переход на другую страницу или показ благодарности.
• Некорректная отправка формы:
  * Пустое поле: 
    * Оставить пустым одно из полей (имя, email, телефон, сообщение).
    * Проверка: Появление сообщения об ошибке для пустого поля. 
  * Отсутствие выбора цели обращения:
    * Не выбрать цель обращения.
    * Проверка: Появление сообщения об ошибке для поля "Цель обращения".