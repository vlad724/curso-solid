import { PostService } from './05-dependency-b(noaplicado)';


// Main
(async () => {

    const postService = new PostService();

    const posts = await postService.getPosts();

    console.log({ posts })


})();