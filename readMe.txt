1)Не используя statemanager(redux,reduxToolkit, mobX), мы уменьшаем вес приложения, уменьшаем кол-во кода
2)Для небольшого приложения без объемной бизнес-логики данный подход считаю вполне удачным.
3)Если же речь идет о 100 тысячах записей, которые предположительно должны храниться в бд(считаю необходимым использование statemanager`а).
4)В моем мини-проекте представлен SPA + SSR, с небольшим кол-вом логики, в связи с чем посчитал необходимостью использовать react-router-dom
5)При возникновении доп вопросов, готов обосновать свои технические и архитектурные решения.
6)Использую vite, тк он обладает высокой скоротью разработки благодаря использованию ES-модулей для сборки проекта