import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleBookService } from '../services/google-book.service';
import { GoogleBook } from '../models/google-book.model';
import { Author } from '../models/author.model';
import { AuthorService } from '../services/author.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-google-book-detail',
  templateUrl: './google-book-detail.component.html',
  styleUrls: ['./google-book-detail.component.css']
})


export class GoogleBookDetailComponent implements OnInit {


  idGooglebooks: number;                      //id du live que dont on souhaite le détail
  editedGooglebook: GoogleBook;               //instance d'un googlebook
  okImg: boolean;                             // boolean affichant le logo d'une catégorie si présent, sinon affichage d'un logo générique
  assetImg: string[];                         //source des logos disponibles
  authorsList: BehaviorSubject<Author[]>;     //souscription à une source  Subject (écouter et mettre à jour la dataSource)

  constructor(private route: ActivatedRoute,
    private googleBookService: GoogleBookService,
    private router: Router,
    private authorService: AuthorService) { }

  ngOnInit() {
    this.idGooglebooks = +this.route.snapshot.params.idGooglebooks;

    this.authorService.publishAuthorsByBook(this.idGooglebooks);

    this.authorsList = this.authorService.availableAuthorByBook$;

    this.googleBookService.findGoogleBook(this.idGooglebooks).subscribe(GoogleBook => {
      this.editedGooglebook = GoogleBook;

      this.assetImg = ["comics", "cooking", "economics", "novels", "thriller"]
      this.okImg = this.ifNoAsset(this.editedGooglebook.categorie);

    });

  }

  /**
   * 
   * @param file Nom du fichier image dont on veut vérifier la présence dans les assets.
   * Retourne une valeur bouléene qui indique la présence ou non du logo
   */
  ifNoAsset(file: string) {
    return this.assetImg.find(fileApi => fileApi === file).length > 0;

  }

}
