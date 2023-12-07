import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""

  Login(){
    if(this.email || this.password){
      alert("Proceed to login")
    }else{
      alert("Please fill the form completely")
    }
  }
  
}
