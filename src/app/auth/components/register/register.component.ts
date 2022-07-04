import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    form: FormGroup = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    })

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        
    }

    onSubmit(): void {
        console.log('submint', this.form.value, this.form.valid);
        
    }

    
}