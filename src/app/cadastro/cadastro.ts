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
import { IUser } from '../interfaces/IUser';
import { CadastroService } from '../services/cadastro';


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

  constructor(private fb: FormBuilder, private cadastro_service: CadastroService) { }

  listaCurso: string[] = [ 'Angular',
  'React',
  'Vue',
  'Node.js',
  'Java',
  'Python',
  'C#',
  'Kotlin',
  'Swift',
  'Spring Boot',
  'SQL',
  'DevOps',
  'Docker',
  'Linux',
  'Machine Learning'
]

  curso_filtrado = [...this.listaCurso]

  textoBusca: string = ''

  filtra(){
      const busca = this.textoBusca.toLowerCase()

      this.curso_filtrado = this.listaCurso.filter(filtro => {
        return filtro.toLowerCase().includes(busca)
      })
  }
  

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['',Validators.required],
      matricula: ['',[Validators.minLength(7),Validators.maxLength(7),Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required],
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
      
      const formValue = this.cadastroForm.value;

      const usuarioParaCadastro: IUser = {
        nome: formValue.nome,
        sobrenome: formValue.sobrenome,
        matricula: formValue.matricula,
        curso: formValue.curso,
        email: formValue.email,
        senha: formValue.senhas.senha 
      };

    this.cadastrar(usuarioParaCadastro)

    } else {
      console.error('🛑 Formulário Inválido. Verifique os campos.');
      this.cadastroForm.markAllAsTouched();
    }
  }

  
  cadastrar(usuario: IUser): void {
  this.cadastro_service.getCadastro(usuario.matricula).subscribe({
    next: (matricula) => {
      if (matricula === usuario.matricula) {
        alert("Usuário já cadastrado!");
        console.log("Usuário já cadastrado");
        return;
      }

      this.cadastro_service.cadastra(usuario).subscribe(() => {
        console.log("Usuário cadastrado com sucesso!");
      });
    },
    error: (err) => {
      if (err.status === 404) {
        this.cadastro_service.cadastra(usuario).subscribe(() => {
          console.log("Usuário cadastrado com sucesso!");
        });
      } else {
        console.error("Erro inesperado:", err);
      }
    }
  });
}

  }