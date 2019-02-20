import { GoogleBookService } from './../services/google-book.service';
import { GoogleBook } from './../models/google-book.model';
import { Author } from './../models/author.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup, FormGroupDirective, FormArray, Validators, FormBuilder, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  newBook: GoogleBook;
  bookRegistrationForm: FormGroup;
  imgThumbnail: string;
  authors: Author[] = [];
  srcResult: any
  isEbook: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private googleBookService: GoogleBookService,
    private router: Router,
    private httpClient: HttpClient
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.imgThumbnail='';
  }

  createForm(){
    this.bookRegistrationForm = this.formBuilder.group({
      title: ['', [
          Validators.required
      ]],
      categorie: ['', [
          Validators.required
      ]],
      publisher: ['', [
        Validators.required
      ]],
      pageCount: [null, [
          Validators.required
      ]],
      price: [null, [
        Validators.required
      ]],
      langage: [null, [
        Validators.required
      ]],
      description : [null, [
      ]],
      publishReleased: [(new Date()).getFullYear(), [
      ]],
      isEbook: ['', [ Validators.required
      ]],
      availableQuantity: [1, [ Validators.required
      ]],
      codeIsbn: ['', [
      ]],
      imgThumbnail: [null, [
      ]],
      authors: this.formBuilder.array([])
    });
  }
  
  getAuthors(): FormArray {
    return this.bookRegistrationForm.get('authors') as FormArray;
  }

  onAddAuthor() {
    const newAuthorControl = this.formBuilder.control(null, Validators.required);
    this.getAuthors().push(newAuthorControl);
  }

  register(): void {
    // API call to register your user
    const formValue = this.bookRegistrationForm.value;

    if (formValue['isEbook'] == "false") {
      this.isEbook = false;
    } else {
      this.isEbook = true;
    }
    this.newBook = new GoogleBook(
      formValue['availableQuantity'],
      formValue['categorie'],
      formValue['codeIsbn'],
      formValue['description'],
      formValue['imgThumbnail'],
      this.isEbook,
      formValue['langage'],
      formValue['pageCount'],
      formValue['price'],
      formValue['publishReleased'],
      1,
      '',
      formValue['title'],
      formValue['publisher'],
      formValue['authors']

    )
     this.httpClient.post<GoogleBook>('http://localhost:8080/livrokaz/addbook', this.newBook).subscribe(
         (newBook) =>{ console.log("création newBook OK : ", newBook); this.router.navigate(['']);},
         (error) => console.log("création newBook pb : ", error) 
     );
  }

}

// onFileSelected() {
  //   const inputNode: any = document.querySelector('#file');
  
  //   if (typeof (FileReader) !== 'undefined') {
  //     const reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       this.srcResult = e.target.result;
  //     };
  
  //     reader.readAsArrayBuffer(inputNode.files[0]);
  //   }
  // }


