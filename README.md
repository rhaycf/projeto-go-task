# GoTask

Aplicação web para gerenciar tarefas, desenvolvida com Angular 19. Permite criar, editar e organizar tarefas por status, além de registrar comentários em cada tarefa.

<img width="1279" height="817" alt="image" src="https://github.com/user-attachments/assets/4a26a1e5-1887-4d19-9962-5dea0e695e96" />

## Tecnologias

- [Angular](https://angular.dev) 19 (componentes standalone)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Angular CDK](https://material.angular.io/cdk) (Dialog)
- Reactive Forms
- RxJS

## Funcionalidades

- Organização de tarefas por status:
  - **TODO:** A fazer
  - **DOING:** Em andamento
  - **DONE:** Concluídas
- Criação e edição de tarefas.
- Adição de comentários às tarefas.
- Persistência de tarefas no LocalStorage.
- Recuperação dos dados armazenados no navegador.

## Como rodar

**Pré-requisitos:** Node.js e npm.

```bash
git clone https://github.com/rhaycf/projeto-go-task.git
cd projeto-go-task
npm install
ng serve
```

Acesse `http://localhost:4200/`.

## Decisões técnicas

- **Service para abrir os modais:** centraliza a responsabilidade de abrir os modais, mantendo essa lógica fora dos componentes.
- **Modal reutilizável para criação e edição:** utiliza o mesmo componente para as duas operações, recebendo o modo de abertura e os valores iniciais por meio de data.
- **LocalStorage:** o service centraliza a persistência dos dados, salvando as alterações nas tarefas e recuperando as informações armazenadas ao iniciar a aplicação.
