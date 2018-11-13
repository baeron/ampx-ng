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
  visible = false;
  dropFlag = false;
  changeFlag = false;
  createFlag = false;
  visibleAnimate = false;

  constructor(private projectService: ProjectService) {
   }

  public showAddModal(flag): void {
    this.projectNameLength = 40;
    this.createFlag = flag;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public showDropModal(flag, itemProject): void {
    this.dropFlag = flag;
    this.project = itemProject;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public showChangeProjectModal(chengeProject, itemProject) {
    debugger;
    this.changeFlag = chengeProject;
    this.project = itemProject;
    this.visible = true;
    debugger;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.dropFlag = false;
    this.changeFlag = false;
    this.createFlag = false;
    this.itemElement = null;
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  /**
   * Add a new project for a previously registered user.
   * @param {string} projectName Data received from the user using input
   * @returns Return data from project.service.ts
   */
  public addNewProject(projectName: string) {
    const userProject = {};
    userProject['title'] = projectName;
    userProject['date_create'] = new Date().toLocaleDateString();
    userProject['updated_date'] = new Date().toLocaleDateString();
    userProject['creator'] = this.userGuid;
    userProject['creatorEmail'] = this.creatorEmail;
    this.projectService.postProject(userProject).subscribe(data => {
      if (data.status === 'success') {
        this.dataValue.push(userProject);
      } else {
        console.error(data.message);
      }
    });
    this.visible = false;
    this.createFlag = false;
    this.itemElement = null;
  }

  /**
   * Method to change the name of the project
   * @param project
   * @param projectTitle Data received from the user using input
   * @returns HTTP success status or error message from project.servise.ts
   */
  public changeItem(project: IProject, projectTitle: string) {
    debugger;
    for (const key in this.dataValue) {
      if (this.dataValue[key]._id === project._id) {
        this.dataValue[key].title = projectTitle;
        this.projectService.updateProject(project._id, this.dataValue[key]).subscribe(data => {
          if (data.status === 'success') {
          } else {
            console.error(data.message);
          }
        });
      }
    }
    this.visible = false;
    this.changeFlag = false;
    this.createFlag = false;
    this.itemElement = null;
  }

  /**
   * Method to delete a project
   * @param project
   * @returns HTTP success status or error message from project.servise.ts
   */
  public deleteItem(project: IProject) {
    const elementIndex = project._id;
    this.projectService.deleteProject(elementIndex).subscribe(data => {
      if (data.status === 'success') {
        this.dataValue.splice(0, 1);
      } else {
        // console.log(false);
      }
    });
    this.visible = false;
    this.dropFlag = false;
    this.changeFlag = false;
    this.createFlag = false;
    this.itemElement = null;
  }

  /**
   * Method for closing a modal window and cleaning a form
   */
  public close(): void {
    this.visible = false;
    // setTimeout(() => this.visible = false, 300);
    this.dropFlag = false;
    this.changeFlag = false;
    this.createFlag = false;
    this.itemElement = null;
  }
}
