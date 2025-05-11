import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // component directive
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userName:string='ramy ahmed'
  age:number=23
  password:string='asd123'
  isAdmin:boolean=true
  profileImg='https://cdn.vectorstock.com/i/500p/97/32/man-silhouette-profile-picture-vector-2139732.jpg'


  sayHello(data:string){
    alert(data)
  }
}

