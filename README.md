# ШРИ-2018. Домашнее задание Bem

## Описание

Приложение построено на основе bem-react-boilerplate.

Уровни переопределения:
  - Common
  - Tablet
  - Phone

С помощью пакета device реализовано определение девайся пользователя на сервере.

## Запуск

```
npm i
npm run build
npm run server
http://localhost:3001
```


## Структура проекта
|-src
  |-common /* десктопные блоки */
    |-Button /* кнопка */
      |-_icon_actions
      |-_icon_heart
    |-Buttons /* несколько кнопок ??? */
      |-_type_horizontal
      |-_type_vertical
    |-Container /* обвязка */
    |-Header /*  шапка */
    |-Item /* карточка материала */
      |-_size_s
      |-_size_text
      |-_size_m
      |-_size_l
      ...
      |-Images /* картинки карточек */
    |-Logo /* логотип */
    |-Main /* родитеский блок карточек материалов */
    |-Page /* стили страницы */
    |-YSText /* шрифты */
  |-tablet /* переопределение для планшетов */
    ...
  |-phone /* переопределение для мобильных */
    ...


