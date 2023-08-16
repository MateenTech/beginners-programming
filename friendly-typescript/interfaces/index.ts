// Interface declaration is another way to name objects;

interface AuthorUI {
    firstName: string;
    lastName: string;
    age: number;
    gender: string
}

const author: AuthorUI = {
    firstName: "Eric",
    lastName: "Ries",
    age: 44,
    gender: "Male"
}

console.log(author)