
export {};

interface IUsers {
    id: number;
    name: string;
    email: string
}

const fetchUser = async() => {
    const res = await fetch("http://localhost:8000/users");
    const data = (await res.json()) as IUsers[];
    data.forEach(dt => {
        console.log(`id: ${dt.id}`);
        console.log(`name: ${dt.name}`);
        console.log(`email: ${dt.email}`);
    })
}

fetchUser();
