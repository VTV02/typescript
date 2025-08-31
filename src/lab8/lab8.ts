
class User {
    name_: string | undefined;
    private email_: string | undefined;
    protected role_:"student" | "teacher" | undefined;

    constructor(name:string, email: string, role: "student" | "teacher") {
        this.name_ = name;
        this.email_ = email;
        this.role_ = role??"student";
    }
}

