import { User, Admin, RegularUserClass } from "./user.classes";

function main(): void {
  let exampleAdmin: User = new Admin(1, "ramy");
  let exampleRegularUser: User = new RegularUserClass(2, "mo");

  console.log(exampleAdmin);

  console.log(exampleRegularUser);
}
main();
