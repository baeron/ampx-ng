import { IProject } from './../../../models/IProject';
import { Component, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { UsersService } from '../../../services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-team-work-modal',
  templateUrl: './team-work-modal.component.html',
  styleUrls: ['./team-work-modal.component.css']
})
export class TeamWorkModalComponent {
  @Input() dataValue;
  @Input() title: string;

  teamUserEmail: string;
  browseUserEmail: string;
  itemElement: string;
  project: IProject;
  visible = false;
  addUserInTeam = false;
  addUserForBrowse = false;
  visibleAnimate = false;

  constructor(
    private projectService: ProjectService,
    private usersService: UsersService,
    private flashMessage: FlashMessagesService
  ) { }

/**
   * Method to display a modal window with a form where the user
   * can specify the user's email with which he wants to continue working on his project
 * @param addTeamUser boolean flag for display to the user necessary part
 * @param itemProject item project fron project.component.ts
 */
  public addTeamUser(addTeamUser: boolean, itemProject: IProject): void {
    this.addUserInTeam = addTeamUser;
    this.project = itemProject;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * The method of displaying a modal window with a form in which the user can specify
   * the email address of the user to whom he wants to provide
   * the ability to view data about the project without editing them
   * @param addTeamUser boolean flag to for display to the user the necessary part
   * @param itemProject
   */
  public addViewerUser(addTeamUser: boolean, itemProject: IProject) {
    this.addUserForBrowse = addTeamUser;
    this.project = itemProject;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * Method to remove a user from a project collaboration team
   * @param userguid unique user guid
   * @returns HTTP response code or error message
   */
  public deleteUserFromTeam(userguid: string): void {
    const projectId = this.project._id;
    const projectTeamData = this.project.team_project;
    const itemTeamUserGuid = userguid;
    for (let i = 0; i < projectTeamData.length; ++i) {
      const itemTeamPlayer = projectTeamData[i];
      if ( itemTeamUserGuid === itemTeamPlayer.guid) {
        projectTeamData.splice(i, 1);
        this.project['updated_date'] = new Date().toLocaleDateString();
        this.updateProject(projectId, this.project);
        this.hide();
        return;
      }
    }
  }

  /**
   * Method of moving a user from an editing group to a project viewing group
   * @param teamUser user data email and guid
   */
  public moveUserFromTeamToBrouse(teamUser) {
    const projectId = this.project._id;
    const projectTeamData = this.project.team_project;
    const projectBrowsData = this.project.brows_team_project;
    const teamUserData = teamUser;
    for (let i = 0; i < projectTeamData.length; ++i) {
      const itemTeamPlayer = projectTeamData[i];
      if (teamUserData.guid === itemTeamPlayer.guid) {
        for (let k = 0; k < projectBrowsData.length; ++k) {
          const itemBrowsingProjectData = projectBrowsData[k];
          if (itemBrowsingProjectData.guid === teamUser.guid) {
            this.hide();
            return;
          }
        }
        projectTeamData.splice(i, 1);
        projectBrowsData.push(teamUserData);
        this.project['updated_date'] = new Date().toLocaleDateString();
        this.updateProject(projectId, this.project);
        this.hide();
        return;
      }
    }
  }

  /**
   * Method to remove a user from a collaborative group
   * @param isTeam boolean flag for separate team and view grop
   * @param userGuid unic user identifier
   */
  deleteUserFromFolowers(isTeam: boolean, userGuid: string): void {
    let projectTeamData = null;
    const projectId = this.project._id;
    if (isTeam) {
      projectTeamData = this.project.team_project;
    } else {
      projectTeamData = this.project.brows_team_project;
    }
    for ( let i = 0; i < projectTeamData.length; ++i) {
      const itemTeamData = projectTeamData[i];
      if (itemTeamData.guid === userGuid) {
        projectTeamData.splice(i, 1);
        this.project['updated_date'] = new Date().toLocaleDateString();
        this.updateProject(projectId, this.project);
        this.hide();
        return;
      }
    }
  }

  /**
   * Method for moving a user from a view group to a project editing group
   * @param itemViewerUser
   */
  moveUserFromFoloversToTeam(itemViewerUser) {
    const projectId = this.project._id;
    const projectTeamData = this.project.team_project;
    const projectBrowsData = this.project.brows_team_project;
    const viewerUserData = itemViewerUser;
    for (let i = 0; i < projectBrowsData.length; ++i) {
      const itemBrowsingUser = projectBrowsData[i];
      if (viewerUserData.guid === itemBrowsingUser.guid) {
        for (let k = 0; k < projectTeamData.length; ++k) {
          const itemTeamProjectData = projectTeamData[k];
          if (itemTeamProjectData.guid === itemViewerUser.guid) {
            this.hide();
            return;
          }
        }
        projectBrowsData.splice(i, 1);
        projectTeamData.push(itemViewerUser);
        this.project['updated_date'] = new Date().toLocaleDateString();
        this.updateProject(projectId, this.project);
        this.hide();
        return;
      }
    }
  }

  /**
   * Method of adding a user to a group to collaborate on a project
   * @param teamUser
   */
  public addUserToTeam(userEmail: string) {
    if (userEmail === this.project.creatorEmail) {
      this.flashMessage.show(
        'You cannot add yourself to a group to collaborate on a project.',
        { cssClass: 'alert-danger', timeout: 3000 }
      );
      this.hide();
      return;
    }
    const isUserInTeamGroup = this.isUserInItemGroup(this.project.brows_team_project, userEmail);
    if (isUserInTeamGroup) {
      this.hide();
      return;
    }
    const isUserInBrowsingTeam = this.isUserInItemGroup(this.project.team_project, userEmail);
    if (isUserInBrowsingTeam) {
      this.hide();
      return;
    }
    this.teamUserEmail = userEmail;
    this.usersService.getItemUserByEmail(this.teamUserEmail).subscribe(data => {
      if (data.guid) {
        const teamUserData = {guid: '', email: ''};
        teamUserData.guid = data.guid;
        teamUserData.email = userEmail;
        this.project.team_project.push(teamUserData);
        this.updateProject(this.project._id, this.project);
      } else {
        this.flashMessage.show(
          'We did not find a registered user with such email on our website.',
          { cssClass: 'alert-danger', timeout: 3000 }
        );
        this.hide();
      }
    });
  }

  /**
   * The method of adding a user to a group that can view the selected project without editing it.
   * @param browseEmail
   */
  public addBrowseUser (browseEmail: string): void {
    if (browseEmail === this.project.creatorEmail) {
      this.flashMessage.show(
        'You can not add yourself to the list of users to view the project.',
        { cssClass: 'alert-danger', timeout: 3000 }
      );
      this.hide();
      return;
    }
    const isUserInTeamGroup = this.isUserInItemGroup(this.project.brows_team_project, browseEmail);
    if (isUserInTeamGroup) {
      this.hide();
      return;
    }
    const isUserInBrowsingTeam = this.isUserInItemGroup(this.project.team_project, browseEmail);
    if (isUserInBrowsingTeam) {
      this.hide();
      return;
    }
    this.browseUserEmail = browseEmail;
    this.usersService.getItemUserByEmail(this.browseUserEmail).subscribe(data => {
      if (data.guid) {
        const viewerUserData = {guid: '', email: ''};
        viewerUserData.email = this.browseUserEmail;
        viewerUserData.guid = data.guid;
        this.project.brows_team_project.push(viewerUserData);
        this.updateProject(this.project._id, this.project);
      } else {
        this.flashMessage.show(
          'We did not find a registered user with such email on our website.',
          { cssClass: 'alert-danger', timeout: 3000 }
        );
        this.hide();
      }
    });
  }

  /**
   * Method for checking the availability of the specified user in the group
   * @param groupUserList array userGroup {email; guid}
   * @param userEmail user email entered in text field
   */
  public isUserInItemGroup(groupUserList, userEmail: string) {
    for (let i = 0; i < groupUserList.length; ++i) {
      const itemViewerUser = groupUserList[i];
      if (itemViewerUser.email === userEmail) {
        this.flashMessage.show('User is already on this list.', { cssClass: 'alert-danger', timeout: 3000 });
        return true;
      }
      return false;
    }
  }

  /**
   * Method of sending updated data to the Project Service
   * @param projectId
   * @param project
   */
  public updateProject(projectId: string, project: IProject) {
    this.projectService.updateProject(projectId, project).subscribe(response => {
      if (response.status === 'success') {
        this.flashMessage.show('Project has been updated.', { cssClass: 'alert-success', timeout: 3000 });
        this.hide();
      } else {
        this.flashMessage.show('Project has not been updated.', { cssClass: 'alert-danger', timeout: 3000 });
        this.hide();
      }
    });
  }

  /**
   * The method of cleaning the form fields and hiding the modal window
   */
  public hide(): void {
    this.itemElement = null;
    this.project = null;
    this.addUserInTeam = false;
    this.addUserForBrowse = false;
    this.teamUserEmail = null;
    this.visible = false;
  }

  /**
   * The method of tracking mouse clicks outside the modal window
   * @param event keeps track of the mouse
   */
  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  /**
   * Method for closing a modal window and clearing all values in inputs
   */
  public close(): void {
    this.hide();
  }
}
