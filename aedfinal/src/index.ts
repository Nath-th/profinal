
import axios from 'axios';

interface Post {
    id: number;
    comments: Comment[];
}

interface Comment {
    id: number;
}

interface User {
    id: number;
}

async function getRandomPost() {
    try {
        const response = await axios.get('https://tu-api/posts/random'); 
        const post = response.data as Post;
        console.log(post);
    } catch (error) {
        console.error('Error al obtener el post:', error);
    }
}
async function getPostsByUser(userId: number) {
    try {
        const response = await axios.get(`https://tu-api/users/${userId}/posts`);
        const posts = response.data as Post[];
        console.log(posts);
    } catch (error) {
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