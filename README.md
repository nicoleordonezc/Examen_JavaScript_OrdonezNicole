
# 📖 Aplicación Web de Gestión de Recetas

Una aplicación web sencilla que permite a los usuarios registrar, visualizar, modificar y eliminar recetas culinarias. Desarrollada utilizando **JavaScript puro**, **HTML** y **CSS**, esta app ofrece una experiencia sin frameworks, ideal para aprender y practicar fundamentos del desarrollo web.

## 🚀 Características Principales

- **CRUD de Recetas**: Crea, lee, actualiza y elimina recetas fácilmente.
- **Formulario Validado**: Asegura que todos los datos ingresados cumplan con reglas básicas de validación.
- **Interfaz Amigable**: Utiliza HTML y CSS para ofrecer una experiencia visual clara y organizada.
- **Gestión Dinámica**: Todo se gestiona en el navegador, sin base de datos ni backend.

## 🧾 Campos de la Receta

Cada receta incluye los siguientes datos:

- 📛 **Nombre de la receta**
- 🥗 **Ingredientes**
- 🧑‍🍳 **Instrucciones de preparación**
- ⏱️ **Tiempo de preparación** (en minutos)
- 🍽️ **Número de porciones**
- 📂 **Categoría**: Desayuno, Almuerzo, Cena, Postre, etc.
- 🎯 **Nivel de dificultad**: Fácil, Medio, Difícil

## ✅ Validaciones Implementadas

- El **nombre** de la receta no puede estar vacío.
- El **tiempo de preparación** debe ser un número positivo.
- El **número de porciones** debe ser un entero positivo.
- La **categoría** y el **nivel de dificultad** deben seleccionarse de listas predefinidas.

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## 📂 Estructura del Proyecto

```
/recetas-app
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── scr.js           # Lógica en JavaScript
└── README.md           # Documentación del proyecto
```

## 🧪 Cómo Usar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/recetas-app.git
   ```
2. Abre `index.html` en tu navegador.
3. Empieza a añadir, editar y eliminar recetas.

## 📌 Notas

- Esta aplicación almacena los datos en memoria (por ahora no usa almacenamiento persistente como LocalStorage o bases de datos).
- Ideal para quienes están aprendiendo desarrollo web desde cero.
