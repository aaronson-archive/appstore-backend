export class CreateAccountDto {
  phone: string;
  password: string;
  nickName: string;
  age: number;
  encKey: string;
  phoneVerify: boolean;
  privacyCheck: boolean;
}
