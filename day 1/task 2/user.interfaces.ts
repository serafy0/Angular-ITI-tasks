import { UserRole } from "./user-roles.enum";

export interface BaseUser {
  id: number;
  name: string;
  role: UserRole;
}

export interface AdminUser extends BaseUser {
  adminLevel: number;
}

export interface RegularUser extends BaseUser {
  subscriptionType: string;
}
