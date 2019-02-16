import { Author } from './author.model';

export class GoogleBook {
    public bookId: number;

    constructor(
        public availableQuantity: number,
        public categorie: string,
        public codeISBN: string,
        public description: string,
        public imgThumbnail: string,
        public isEbook: boolean,
        public langage: string,
        public pageCount: number,
        public price: number,
        public publishReleased: string,
        public textSnippet: string,
        public title: string,
        public gendleId: number,
        public publishedId: number,
        public authors: Author[]
    ) { }
}
