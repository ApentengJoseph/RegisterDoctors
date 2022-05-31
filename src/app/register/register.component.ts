import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  doctorsForm!: FormGroup;

  websitePattern = 'https://.*';
  phonePattern = '[0-9]{3}-[0-9]{3}-[0-9]{5}';

  constructor(private fb: FormBuilder, private dataService: UsersService) {}

  ngOnInit(): void {
    this.doctorsForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern]],
      city: ['', [Validators.required]],
      website: [, [Validators.required]],
    });
  }

  //Method to register new doctors
  register() {
    this.dataService.registerDoc(this.doctorsForm.value).subscribe();
    this.doctorsForm.reset();
  }
}
