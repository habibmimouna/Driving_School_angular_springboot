import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../entity/user';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule,NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user: User = {
    id: null,
    adresse: '',
    role: 'USER',
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '',
  };
  onSubmit(){

  }
  

}
