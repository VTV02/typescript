"use strict";
class User {
    constructor(name, email, role) {
        this.name_ = name;
        this.email_ = email;
        this.role_ = role ?? "student";
    }
}
