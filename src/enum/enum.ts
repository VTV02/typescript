export {};

// type TRole = string | number;

// type TSuperRole = "ADMIN" | "USER" | "GUEST";

// const user: TRole = "USER";
// const admin: TRole = "ADMIN";

// const superUser: TSuperRole = "ADMIN";

enum ERole {
  USER,
  ADMIN,
  GUEST,
}

const myRole: ERole = ERole.ADMIN;
console.log(myRole);
