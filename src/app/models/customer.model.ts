export class Customer{
    constructor (
        public username : string,
        public cityDomicile: string,
        public cityLivraison: string,
        public civility: string,
        public countryDomicile: string,
        public countryLivraison: string,
        public cpDomicile: number,
        public cpLivraison: number,
        public yyyy: number,
        public mm: number,
        public dd: number

    ) {}
}