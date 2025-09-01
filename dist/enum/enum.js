// type TRole = string | number;
// type TSuperRole = "ADMIN" | "USER" | "GUEST";
// const user: TRole = "USER";
// const admin: TRole = "ADMIN";
// const superUser: TSuperRole = "ADMIN";
var ERole;
(function (ERole) {
    ERole[ERole["USER"] = 0] = "USER";
    ERole[ERole["ADMIN"] = 1] = "ADMIN";
    ERole[ERole["GUEST"] = 2] = "GUEST";
})(ERole || (ERole = {}));
const myRole = ERole.ADMIN;
console.log(myRole);
export {};
