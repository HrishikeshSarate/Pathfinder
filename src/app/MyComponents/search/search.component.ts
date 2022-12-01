import { Component, EventEmitter, Output } from '@angular/core';
import { Rooms } from 'src/app/Room';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
//   enteredSearchValue: string = ' ';
    
//   course: Rooms[] = [];
//   constructor(){
//     this.course=[
//       {
//       Room : 'Hrishikesh'
//     },
//     {
//       Room : 'Akash'
//     },
//     {
//       Room : 'Kavita'
//     },
//     {
//       Room : 'Uttam'
//     },
//     {
//       Room : 'Khilchand'
//     }
//   ]
// }


  // @Output()
  // searchTextChanged: EventEmitter<string> =new EventEmitter<string>();
  
  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.enteredSearchValue);
  // }

}
