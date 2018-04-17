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
|-- htdocs
    |-- server
    |   |-- index.js // настройка сервера
    |-- src
        |-- common // Главный уровень
        |   |-- Button
        |   |   |-- Button.css
        |   |   |-- Button.js
        |   |   |-- _icon_actions
        |   |   |   |-- Actions.png
        |   |   |   |-- Button_icon_actions.css
        |   |   |   |-- Button_icon_actions.js
        |   |   |-- _icon_heart
        |   |       |-- Button_icon_heart.css
        |   |       |-- Button_icon_heart.js
        |   |       |-- Heart.png
        |   |-- Buttons
        |   |   |-- Buttons.css
        |   |   |-- Buttons.js
        |   |   |-- _type_horizontal
        |   |   |   |-- Buttons_type_horizontal.css
        |   |   |   |-- Buttons_type_horizontal.js
        |   |   |-- _type_vertical
        |   |       |-- Buttons_type_vertical.css
        |   |       |-- Buttons_type_vertical.js
        |   |-- Container
        |   |   |-- Container.css
        |   |   |-- Container.js
        |   |-- Header
        |   |   |-- Header.css
        |   |   |-- Header.js
        |   |-- Item
        |   |   |-- Item.css
        |   |   |-- Item.js
        |   |   |-- Author
        |   |   |   |-- Item-Author.css
        |   |   |-- Description
        |   |   |   |-- Item-Description.css
        |   |   |-- Footer
        |   |   |   |-- Item-Footer.css
        |   |   |-- Image
        |   |   |   |-- Item-Image.css
        |   |   |   |-- Item-Image.js
        |   |   |-- ImageWrapper
        |   |   |   |-- Item-ImageWrapper.css
        |   |   |   |-- Item-ImageWrapper.js
        |   |   |-- Text-col
        |   |   |   |-- Item-Text-col.css
        |   |   |-- Title
        |   |   |   |-- Item-Title.css
        |   |   |-- _size_l
        |   |   |   |-- Item_size_l.css
        |   |   |   |-- Item_size_l.js
        |   |   |-- _size_m
        |   |   |   |-- Item_size_m.css
        |   |   |   |-- Item_size_m.js
        |   |   |-- _size_s
        |   |   |   |-- Item_size_s.css
        |   |   |   |-- Item_size_s.js
        |   |   |-- _size_text
        |   |   |   |-- Item_size_text.css
        |   |   |   |-- Item_size_text.js
        |   |   |-- images
        |   |       |-- Actions.png
        |   |       |-- Heart.png
        |   |-- Logo
        |   |   |-- Logo.css
        |   |   |-- Logo.js
        |   |   |-- Logo.png
        |   |   |-- Logo@2x.png
        |   |   |-- Logo@3x.png
        |   |-- Main
        |   |   |-- Data.js
        |   |   |-- Main.css
        |   |   |-- Main.js
        |   |-- Page
        |   |   |-- Page.css
        |   |-- YSText // шрифты
        |-- phone
        |   |-- Container
        |   |   |-- Container.css
        |   |-- Header
        |   |   |-- Header.css
        |   |-- Item
        |   |   |-- Description
        |   |   |   |-- Item-Description.css
        |   |   |-- Title
        |   |   |   |-- Item-Title.css
        |   |   |-- _size_l
        |   |   |   |-- Item_size_l.css
        |   |   |-- _size_m
        |   |   |   |-- Item_size_m.css
        |   |   |-- _size_s
        |   |   |   |-- Item_size_s.css
        |   |   |-- _size_text
        |   |       |-- Item_size_text.css
        |   |-- Main
        |       |-- Main.css
        |-- tablet
            |-- Container
            |   |-- Container.css
            |-- Header
            |   |-- Header.css
            |-- Item
            |   |-- _size_l
            |       |-- Item_size_l.css
            |       |-- Item_size_l.js
            |-- Main
                |-- Main.css
