import { Component, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { IProject } from '../../../models/IProject';

@Component({
  selector: 'app-copy-project-modal',
  templateUrl: './copy-project-modal.component.html',
  styleUrls: ['./copy-project-modal.component.css']
})
export class CopyProjectModalComponent {
  projectData: IProject;
  nameCopiedProject: string;
  projectNameLength: number;
  copyFlag: boolean;
  isVisible: boolean;
  isAnimateVisible: boolean;

  @Input() title: string;
  @Input() dataValue: IProject[];
  @Input() guid: string;

  constructor(private projectService: ProjectService) {
    this.projectNameLength = 40;
  }

  /**
   * Display a modal window for copying a user-created project.
   * @param itemProject
   */
  public showSimpleCopyModal(copyProjectFlag: boolean, itemProject: IProject): void {
    this.copyFlag = copyProjectFlag;
    this.isVisible = true;
    this.projectData = itemProject;
    setTimeout(() => this.isAnimateVisible = true, 100);
  }

  /**
   * Method to copy the project selected by the user
   * @param nameForCopiedProject name for the copied project
   */
  public simpleCopyProject (nameForCopiedProject: string): void {
    const projectNameId = {
      _id:  this.projectData._id,
      name: nameForCopiedProject,
      creator: this.projectData.creator,
      guid: this.guid
    };
    this.projectService.postCopiedProject(projectNameId).subscribe(data => {
      if (data.status === 'created') {
        this.dataValue.push(data.project);
      } else {
        console.error(data.message);
      }
      this.clearVariables();
    });
  }

  /**
   * Method to close the modal window
   */
  public close(): void {
    this.clearVariables();
  }

  /**
  * Method to reset all local variables
  */
  public clearVariables(): void {
    this.isVisible = false;
    this.isAnimateVisible = false;
    this.copyFlag = false;
    this.projectData = null;
    this.nameCopiedProject = null;
  }
}
