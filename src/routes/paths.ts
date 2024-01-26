interface Paths {
   [key: string]: string;
}

export default {
   HOME: '/',
   LIST: '/list/:id?',
   NOT_FOUND: '*'
} as Paths;
