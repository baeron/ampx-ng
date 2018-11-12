import { environment } from '../../environments/environment';

export class Availability {
    static CanUserChange(teamList, userGuid: string): boolean {
        for (let i = 0; i < teamList.length; ++i) {
            const itemUser = teamList[i];
            if (itemUser.guid === userGuid) {
              return true;
            }
        }
        return false;
    }
    static CanUserView (viewersList, userGuid: string): boolean {
        for (let i = 0; i < viewersList.length; ++i) {
            const itemViewer = viewersList[i];
            if (itemViewer.guid === userGuid) {
                return false;
            }
        }
        return false;
    }
    static CheckIsAdmin (localStorage: any): boolean {
        let isAdmin = false;
        const superAdminEmail = environment.sadmin;
        const adminEmail = environment.admin;
        const user = localStorage.getItem('user');
        const u = JSON.parse(user);
        const userGuid = u.guid;
        const userEmail = u.email;

        const isItAdmin = (userGuid === adminEmail);
        const isItSuperadmin = (userEmail === superAdminEmail);
        isAdmin = isItAdmin || isItSuperadmin;
        return isAdmin;
    }

    static GetUserGuid (localStorage: any): string {
        const user = localStorage.getItem('user');
        const u = JSON.parse(user);
        return u.guid;
    }
}
