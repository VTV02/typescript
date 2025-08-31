
type TStudent = {
    id: number;
    name: string
}

type TCoder = {
    address: string;
    language: string;
}

type TProgrammer = TStudent & TCoder;

const information: TProgrammer = {
    id: 1,
    name: "Andrew",
    address: "New York",
    language: "Javascript"
}   