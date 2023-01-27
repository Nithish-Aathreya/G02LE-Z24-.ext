import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes:string[] = [];
  constructor(private cookie:CookieService) { }
    Addnote(notes:string) : void {
      this.notes.push(notes)
      this.savetocookie()
    }

    removenote() : void {

    }

    savetocookie() {

    }

    loadfromcookie() {

    }

  

  ngOnInit(): void {
  }

}
