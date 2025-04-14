# 🚀 Ikernell System

### 🌐 Sistema de Gestión Integral para Ikernell S.A.S

> Proyecto desarrollado con Spring Boot bajo el modelo MVC para automatizar y controlar los procesos internos de la empresa Ikernell.

---

## 📚 Descripción del Proyecto |

**🇪🇸 Español:**  
Ikernell System es una plataforma empresarial que permite gestionar usuarios, personal, proyectos y actividades dentro de la empresa, además de ofrecer información institucional y servicios a través de internet.

---

## 🎯 Módulos del sistema | System Modules

### 🏢 Información Empresarial
- Misión, visión y valores
- Portafolio de servicios
- Noticias, FAQs, links de interés, contacto

### 🔐 Autenticación y Gestión de Usuarios
- Login seguro con roles
- Correo y chat corporativo
- Biblioteca de programas y tutoriales

### 👥 Gestión de Personal
- Registro y actualización de desarrolladores
- Asignación de proyectos
- Generación de reportes y control de estado

### 📁 Gestión de Proyectos
- Registro y edición de proyectos
- Etapas, actividades, interrupciones
- Reportes y archivos planos

### 🛠️ Actividades del Desarrollador
- Registro de avances, errores e interrupciones
- Vista personalizada de tareas asignadas

---

## 🛠️ Tecnologías | Technologies

- **Java 17**
- **Spring Boot**
- **Spring Web, Spring Data JPA, Spring Security**
- **Thymeleaf (opcional para vistas)**
- **MySQL**
- **Maven**
- **Lombok**
- **Swagger (para documentación de APIs)**

---

## ⚙️ Cómo ejecutar el proyecto | How to run

```bash
# 1. Clona el repositorio
git clone https://github.com/Julian7689/Ikernell.git

# 2. Abre el proyecto en IntelliJ IDEA

# 3. Configura la base de datos en application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/ikernell_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña

# 4. Ejecuta la clase principal:
IkernellSystemApplication.java
