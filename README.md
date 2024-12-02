# API de Gestión de Proyectos

## **Denominación del ciclo:** Desarrollo de Aplicaciones Web (DAW)  
**Alumno:** [José Pérez Rico]

---

## Índice

1. Introducción
2. Justificación
3. Objetivos y Motivación
4. Funcionalidades del Proeycto
5. Tecnologias Utilizadas
6. Guía de Instalación y Uso
7. Conclusión
8. Contribuciones, Agradecimientos y Referencias
9. Licencia
10. Contacto

---

## Introducción

La **API de Gestión de Proyectos** es un servicio web RESTful creado con el propósito de gestionar y administrar proyectos, desarrolladores y tecnologías asociadas. Este sistema permite a los usuarios gestionar información sobre proyectos, asignar desarrolladores a proyectos, y asociar tecnologías a proyectos. A través de este sistema, los administradores pueden realizar tareas como la creación, actualización, eliminación de proyectos, y la gestión de asignaciones de desarrolladores y tecnologías. 

### Justificación

La creación de esta API responde a la necesidad de contar con un sistema automatizado para gestionar proyectos de desarrollo de manera eficiente, lo que permite un mejor control y organización del flujo de trabajo en el ámbito de desarrollo de software. Además, facilita la colaboración entre equipos de desarrollo al integrar tanto a los desarrolladores como las tecnologías utilizadas en los proyectos.

---

## Objetivos y Motivación

El principal objetivo de este proyecto es ofrecer una API robusta y flexible que permita la gestión de proyectos de desarrollo. Las funcionalidades incluyen:

- **Gestión de proyectos**: Crear, actualizar, eliminar y visualizar proyectos.
- **Gestión de desarrolladores**: Asignar desarrolladores a proyectos y gestionar su información.
- **Tecnologías en proyectos**: Asociar tecnologías a proyectos para su correcta documentación y seguimiento.

Motivación principal: Automatizar tareas repetitivas y mejorar la gestión interna de proyectos dentro de un equipo de desarrollo de software.

---

## Funcionalidades del Proyecto

La API permite las siguientes funcionalidades principales:

1. **Gestión de Proyectos**:
    - Crear, actualizar, eliminar y consultar proyectos.
    - Mover proyectos entre diferentes estados: `Testing`, `Production`.
    - Filtrar proyectos por tecnología asociada.

2. **Gestión de Desarrolladores**:
    - Crear y eliminar desarrolladores.
    - Asignar desarrolladores a proyectos específicos.

3. **Tecnologías Asociadas a Proyectos**:
    - Asociar tecnologías a los proyectos para asegurar que se documenta qué herramientas están siendo utilizadas.

4. **Consultas Avanzadas**:
    - Consultar proyectos por tecnología o nombre.

---

## Tecnologías Utilizadas

Esta API se ha desarrollado utilizando las siguientes tecnologías:

- **Lenguaje de Programación**: Java
- **Framework**: Spring Boot
- **Base de Datos**: MySQL
- **ORM**: Hibernate
- **Patrón de Arquitectura**: MVC (Modelo-Vista-Controlador)
- **Autenticación**: No implementada en esta versión
- **Dependencias adicionales**:
  - Spring Data JPA
  - MySQL Driver
  - Lombok
  - Spring Web
  - Spring Boot DevTools

---

## Guía de Instalación y Uso

Para instalar y ejecutar esta API, sigue estos pasos:

1. **Clonar el repositorio o descargar ZIP**:

   ```bash
   git clone https://github.com/pepepeerez/ApiProyectoServidor.git

2. **Configurar datos de tu Base de Datos**

3. **Arrancar la API y hacer la funcionalidad deseada**


## Conclusión

Este proyecto es una API RESTful construida con Spring Boot y MySQL, diseñada para ofrecer servicios web escalables y eficientes. Utiliza JPA para la gestión de la base de datos, Spring Security para la autenticación, y Hibernate como proveedor de persistencia. La API sirve como base para aplicaciones más complejas, demostrando la integración de tecnologías y frameworks de manera eficiente.

## Contribuciones, Agradecimientos y Referencias

- SpringBoot Documentation
- Spring Data JPA
- MySQL Documentation
- GitHub

## Licencia 
GNU GENERAL PUBLIC LICENSE

## Contacto

- Correo Electrónico: jose.perez@a.vedrunasevillasj.es
- GitHub: https://github.com/pepepeerez/ApiProyectoServidor