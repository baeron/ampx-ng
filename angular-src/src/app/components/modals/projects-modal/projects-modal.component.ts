import { Component, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { IProject } from '../../../models/IProject';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.css']
})
export class ProjectsModalComponent {
  project: IProject;
  projectNameLength: number;
  @Input() creatorEmail;
  @Input() dataValue;
  @Input() userGuid;
  @Input() selectedValue;
  @Input() title: string;

  itemElement: string;
  projectName: string;
  visible = false;
  dropFlag = false;
  changeFlag = false;
  createFlag = false;
  visibleAnimate = false;

  constructor(private projectService: ProjectService) {
    this.projectNameLength = 40;
  }

  /**
   * Method for displaying ADD modal window to a user.
   * @param createElementFlag
   */
  public showAddModal(createElementFlag: boolean): void {
    this.createFlag = createElementFlag;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * Method for displaying DELETE modal window to a user
   * @param deleteElementFlag
   * @param itemProject
   */
  public showDropModal(deleteElementFlag: boolean, itemProject: any): void {
    this.dropFlag = deleteElementFlag;
    this.project = itemProject;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * Method to display to the user a modal window for changing the project name.
   * @param chengeProject
   * @param itemProject
   */
  public showChangeProjectModal(chengeProject: boolean, itemProject: any) {
    this.changeFlag = chengeProject;
    this.project = itemProject;
    this.projectName = itemProject.title;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * Add a new project for a previously registered user.
   * @param projectName Data received from the user using input
   * @returns Return data from project.service.ts
   */
  public addNewProject(projectName: string) {
    const userProject = {};
    userProject['title'] = projectName;
    userProject['date_create'] = new Date().getMilliseconds;
    userProject['updated_date'] = new Date().getMilliseconds;
    userProject['creator'] = this.userGuid;
    userProject['creatorEmail'] = this.creatorEmail;
    this.projectService.postProject(userProject).subscribe(data => {
      if (data.status === 'success') {
        this.dataValue.push(userProject);
      } else {
        console.error(data.message);
      }
      this.clearVariables();
    });
  }

  /**
   * Method to change the name of the project
   * @param project
   * @param projectTitle Data received from the user using input
   * @returns HTTP success status or error message from project.servise.ts
   */
  public changeItem(project: any, projectTitle: string) {
    for (const key in this.dataValue) {
      if (this.dataValue[key]._id === project._id) {
        this.dataValue[key].title = projectTitle;
        this.projectService.updateProject(project._id, this.dataValue[key]).subscribe(data => {
          if (data.status !== 'success') {
            console.error(data.message);
          }
          this.clearVariables();
        });
      }
    }
  }

  /**
   * Method to delete a project
   * @param project
   * @returns HTTP success status or error message from project.servise.ts
   */
  public deleteItem(project: IProject) {
    debugger;
    const elementIndex = project._id;
    this.projectService.deleteProject(elementIndex).subscribe(data => {
      if (data.status === 'success') {
        this.dataValue.splice(0, 1);
      } else {
        console.log(data.error);
      }
      this.clearVariables();
    });
  }

  /**
   * Method for closing a modal window and cleaning a form
   */
  public close(): void {
    debugger;
    if (this.project) {
      this.project.title = this.projectName;
    }
   this.clearVariables();
  }

  /**
   * Method to reset all local variables
   */
  public clearVariables() {
    this.visible = false;
    this.dropFlag = false;
    this.changeFlag = false;
    this.createFlag = false;
    this.itemElement = null;
    this.project = null;
    debugger;
  }

  /*
  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
  */
}
