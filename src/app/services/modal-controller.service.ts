import { inject, Injectable } from "@angular/core";
import { Dialog } from '@angular/cdk/dialog';
import { TaskFormModalComponent } from "../components/task-form-modal/task-form-modal.component";
import { TaskCommentsModalComponent } from "../components/task-comments-modal/task-comments-modal.component";
import { ITaskFormControls } from "../interfaces/task-form-controls.interface";
import { ITask } from "../interfaces/task.interface";

// torna a classe injetável (service)
@Injectable({
  providedIn: 'root'
})
export class ModalControllerService {
  // configuracoes de largura dos modais: ocupa 95% da tela, até o maximo de 620px
  private readonly modalSizeOptions = {
    maxWidth: '620px',
    width: '95%',
  };

  // injeta o Dialog do CDK para abrir modais
  private readonly _dialog = inject(Dialog);

  // abre modal para criar uma nova tarefa
  openNewTaskModal() {
    return this._dialog.open<ITaskFormControls>(TaskFormModalComponent, {
      ...this.modalSizeOptions,
      disableClose: true, // só fecha o modal pelos botões e não clicando fora ou no ESC
      // dados enviados ao modal: modo 'criar' e o formulario vazio
      data: {
        mode: 'create',
        formValues: {
          name: '',
          description: '',
        }
      },
    });
  }

  // abre modal para editar uma tarefa
  openEditTaskModal(formValues: ITaskFormControls) {
    return this._dialog.open<ITaskFormControls>(TaskFormModalComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      // dados enviados ao modal: modo 'editar' e valores atuais da tarefa
      data: {
        mode: 'edit',
        formValues,
      },
    });
  }

  // abre modal de comentarios
  openTaskCommentsModal(task: ITask) {
    return this._dialog.open(TaskCommentsModalComponent, {
      ...this.modalSizeOptions,
      disableClose: true,
      data: task,
    });
  }
}
