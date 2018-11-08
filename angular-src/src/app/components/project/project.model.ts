export interface IProject {
  _id: string;
  title: string;
  creator: string;
  date_create: string;
  updated_date: string;
  team_project: string[];
  brows_team_project: string[];
  electricals: any;
  cabels: any;
  controllers: any;
  instrumentations: any;
  ioAssignments: any;
  sldschedules: any;
}
