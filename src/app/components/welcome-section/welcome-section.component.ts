import { Component, inject } from '@angular/core';
import { ModalControllerService } from '../../services/modal-controller.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-welcome-section',
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css'
})
export class WelcomeSectionComponent {
  // injeta o service que centraliza a abertura dos modais
  private readonly _modalControllerService = inject(ModalControllerService);
  private readonly _taskService = inject(TaskService);

  //abre o modal de criar tarefa e fica esperando o resultado
  openNewTaskModal() {
    // pede ao service para abrir o modal e guarda a referencia dele (DialogRef)
    const dialogRef = this._modalControllerService.openNewTaskModal();

    // closed é um Observable que emite UMA vez, quando o modal fecha
    // o valor é o que o modal passou no close(): os dados do formulario
    // ao salvar, ou undefined se o usuário cancelou
    dialogRef.closed.subscribe((taskForm) => {
      if(taskForm) {
        this._taskService.addTask(taskForm);
      }
    });
  }
}
