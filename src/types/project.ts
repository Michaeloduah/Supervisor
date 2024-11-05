export type PROJECT = {
  id: number;
  name: string;
  department: string;
  budget: string;
  location: string;
  status: string;
  date: string;
};

export type PROJECT_DETAILS = {
  id: number;
  name: string;
  department: string;
  location: string;
  startDate: string;
  endDate: string;
  status: string;
  budget: string;
  expenditure: string;
  teams: string;
  projectManager: string;
  progress: number;
  remarks: string;
}