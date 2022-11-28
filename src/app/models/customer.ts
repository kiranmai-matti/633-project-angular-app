export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: number;
  billingAddr: Address;
  shippingAddr: Address;
}
export interface Address{
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;

}
