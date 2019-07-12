import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { MustMatch } from 'src/app/shared/password.validators';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:ServiceService) { }
  registrationForm:FormGroup;
  submitted = false;
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      mobileNumber:['',[Validators.required,Validators.minLength(10)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
    
  }
  get f() { return this.registrationForm.controls; }
  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
}
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return;
    }
    else{
      console.log(this.registrationForm.value)
      this.service.register(this.registrationForm.value)
      .subscribe(
        response => alert('SUCCESS!! :-)\n\n'+response),
        error => alert('Registration Failed!'+error)
      );   
    }

}
}
