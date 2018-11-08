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
}
