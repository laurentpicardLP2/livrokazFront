export class Customer{
    public customerId: number;
    public enabled: boolean;

    constructor (
        public fullName: string,
        public username: string,
        public email: string,
        public password: string,
        public domesticAddress: string,
        public domesticCp: string,
        public domesticCity: string,
        public domesticCountry: string,
        public deliveryAddress: string,
        public deliveryCp: string,
        public deliveryCity: string,
        public deliveryCountry: string,
        public telephone: string,
        public dateOfBirth: Date,
    ) {}
}