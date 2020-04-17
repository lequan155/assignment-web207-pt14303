export class School {
  id: number;
  name: string;
  logo: string;
  address: string;
  principal: string;
  province: string;
  constructor(id: number, name: string, logo: string, address: string, principal: string, province: string){
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.address = address;
    this.principal = principal;
    this.province = province;
  }
}