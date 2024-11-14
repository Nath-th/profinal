"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const axios_1 = __importDefault(require("axios"));
// Función para obtener un post aleatorio y sus comentarios
async function getRandomPost() {
    try {
        const response = await axios_1.default.get('https://tu-api/posts/random'); // Reemplaza con la URL correcta
        const post = response.data;
        console.log(post);
    }
    catch (error) {
        console.error('Error al obtener el post:', error);
    }
}
// Función para obtener los posts de un usuario
async function getPostsByUser(userId) {
    try {
        const response = await axios_1.default.get(`https://tu-api/users/${userId}/posts`);
        const posts = response.data;
        console.log(posts);
    }
    catch (error) {
        console.error('Error al obtener los posts del usuario:', error);
    }
}
async function main() {
    while (true) {
        console.log('Menú:');
        console.log('1. Obtener un post aleatorio');
        console.log('2. Obtener posts de un usuario');
        console.log('3. Salir');
        const option = prompt('Ingrese una opción:');
        switch (option) {
            case '1':
                await getRandomPost();
                break;
            case '2':
                const userId = Number(prompt('Ingrese el ID del usuario:'));
                await getPostsByUser(userId);
                break;
            case '3':
                console.log('Saliendo...');
                return;
            default:
                console.log('Opción inválida.');
        }
    }
}
main();
