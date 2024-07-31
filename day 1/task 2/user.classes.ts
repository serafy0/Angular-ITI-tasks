import { UserRole } from "./user-roles.enum";
import { BaseUser, AdminUser, RegularUser } from "./user.interfaces";
export class User implements BaseUser {
  id: number;
  name: string;
  role: UserRole;

  constructor(id: number, name: string, role: UserRole) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}

export class Admin extends User implements AdminUser {
  adminLevel: number;
  subscriptionType: string;

  constructor(id: number, name: string, adminLevel: number = 1) {
    super(id, name, UserRole.Admin);
    this.adminLevel = adminLevel;
  }
}

export class RegularUserClass extends User implements RegularUser {
  subscriptionType: string;

  constructor(id: number, name: string, subType: string = "free") {
    super(id, name, UserRole.User);
    this.subscriptionType = subType;
  }
}
