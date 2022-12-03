import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Rooms } from 'src/app/Room';
import * as $ from 'jquery'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit {
  
  ngOnInit() {

    $("#myinput").keyup(function() {
      var val = (document.getElementById(this.id) as HTMLInputElement).value
      if (val === "")
          $('img').show();
      else {
          $('img').hide();
          $("img[alt*=" + val + "]").show();
      }
  });
  
  }
}
