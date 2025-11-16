import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- 1. Importar CommonModule do @angular/common
import { 
  FormGroup, 
  FormBuilder, 
  Validators, 
  ValidatorFn, 
  AbstractControl, 
  ValidationErrors,
  ReactiveFormsModule // <-- 2. Importar ReactiveFormsModule (como um módulo)
} from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  standalone: true, 
  imports: [
    CommonModule, 
    ReactiveFormsModule 
  ]
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senhas: this.fb.group({ 
        
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmaSenha: ['', Validators.required]
        
      }, {
        validators: this.matchPasswordsValidator 
      }) 
    });
  }


  matchPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha');
    const confirmaSenha = control.get('confirmaSenha');

    if (!senha || !confirmaSenha || senha.value === null || confirmaSenha.value === null) {
      return null;
    }

    if (senha.value !== confirmaSenha.value) {
      confirmaSenha.setErrors({ passwordsDoNotMatch: true });
      return { passwordsDoNotMatch: true };
    } else {
      confirmaSenha.setErrors(null);
      return null;
    }
  };

  get f() {
    return this.cadastroForm.controls;
  }
  
  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('✅ Cadastro Enviado com Sucesso! Dados:', this.cadastroForm.value);
    } else {
      console.error('🛑 Formulário Inválido. Verifique os campos.');
      this.cadastroForm.markAllAsTouched();
    }
  }
}