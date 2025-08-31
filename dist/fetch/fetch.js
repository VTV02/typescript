"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = (await res.json());
    data.forEach(dt => {
        console.log(`id: ${dt.id}`);
        console.log(`name: ${dt.name}`);
        console.log(`email: ${dt.email}`);
    });
};
fetchUser();
