import { Author } from './author.model';

export class GoogleBook {
    public bookId: number;

    constructor(
        public availableQuantity: number,
        public categorie: string,
        public codeIsbn: string,
        public description: string,
        public imgThumbnail: string,
        public isEbook: boolean,
        public langage: string,
        public pageCount: number,
        public price: number,
        public publishReleased: string,
        public gendleId: number,
        public textSnippet: string,
        public title: string,
        public publisher: string,
        public authors: Author[]
    ) { }
}
