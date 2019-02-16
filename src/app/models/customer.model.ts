export class Customer{
    public customerId: number;
    public enabled: boolean;

    constructor (
        public username : string,
        public password: string,
        public civility: string,
        public firstName: string,
        public lastName: string,
        public mail: string,
        public tel: string,
        public numVoieDomicile: string,
        public nomVoieDomicile: string,
        public cpDomicile: number,
        public cityDomicile: string,
        public countryDomicile: string,
        public numVoieLivraison: string,
        public nomVoieLivraison: string,
        public cpLivraison: number,
        public cityLivraison: string,
        public countryLivraison: string,
        public yyyy: number,
        public mm: number,
        public dd: number
    ) {}
}