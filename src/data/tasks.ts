type TaskAssignment = {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  role: string;
  priority: "High" | "Medium" | "Low";
  status: "Not Started" | "In Progress" | "Completed" | "On Hold";
  startDate: string;
  endDate: string;
  progress: number;
  remarks?: string;
};

const taskData: TaskAssignment[] = [
  {
    id: 1,
    title: "Prepare Project Plan",
    description: "Outline the project scope, objectives, and milestones.",
    assignedTo: "Jane Doe",
    role: "Project Manager",
    priority: "High",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2024-01-30",
    progress: 60,
    remarks: "On track but may need additional resources.",
  },
  {
    id: 2,
    title: "Site Survey",
    description: "Conduct a survey of the project location to assess requirements.",
    assignedTo: "John Smith",
    role: "Civil Engineer",
    priority: "Medium",
    status: "Not Started",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    progress: 0,
  },
  {
    id: 3,
    title: "Design Architecture",
    description: "Design the building architecture with detailed floor plans.",
    assignedTo: "Alice Johnson",
    role: "Architect",
    priority: "High",
    status: "Not Started",
    startDate: "2024-02-06",
    endDate: "2024-02-20",
    progress: 0,
  },
  {
    id: 4,
    title: "Procure Materials",
    description: "Procure all necessary construction materials for the project.",
    assignedTo: "Robert Brown",
    role: "Procurement Officer",
    priority: "Medium",
    status: "In Progress",
    startDate: "2024-02-10",
    endDate: "2024-02-25",
    progress: 40,
  },
  {
    id: 5,
    title: "Foundation Work",
    description: "Excavate and lay the foundation for the building.",
    assignedTo: "Michael Lee",
    role: "Construction Supervisor",
    priority: "High",
    status: "Not Started",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    progress: 0,
  },
  {
    id: 6,
    title: "Electrical Wiring",
    description: "Install electrical wiring and outlets in the building.",
    assignedTo: "Emily Davis",
    role: "Electrician",
    priority: "High",
    status: "In Progress",
    startDate: "2024-03-05",
    endDate: "2024-03-20",
    progress: 30,
  },
  {
    id: 7,
    title: "Plumbing Installation",
    description: "Install all plumbing systems including pipes and fixtures.",
    assignedTo: "David Harris",
    role: "Plumber",
    priority: "Medium",
    status: "Not Started",
    startDate: "2024-03-10",
    endDate: "2024-03-25",
    progress: 0,
  },
  {
    id: 8,
    title: "Interior Painting",
    description: "Paint the interior of the building.",
    assignedTo: "Laura Wilson",
    role: "Painter",
    priority: "Low",
    status: "Not Started",
    startDate: "2024-03-20",
    endDate: "2024-04-05",
    progress: 0,
  },
  {
    id: 9,
    title: "Exterior Finishing",
    description: "Complete the exterior finishing work including painting and siding.",
    assignedTo: "James Moore",
    role: "Exterior Contractor",
    priority: "Low",
    status: "Not Started",
    startDate: "2024-03-25",
    endDate: "2024-04-10",
    progress: 0,
  },
  {
    id: 10,
    title: "Install Windows and Doors",
    description: "Install windows and doors throughout the building.",
    assignedTo: "George Clark",
    role: "Carpenter",
    priority: "Medium",
    status: "In Progress",
    startDate: "2024-02-25",
    endDate: "2024-03-10",
    progress: 50,
  },
  {
    id: 11,
    title: "Flooring Installation",
    description: "Install flooring in all rooms.",
    assignedTo: "Sarah Adams",
    role: "Flooring Specialist",
    priority: "Medium",
    status: "Not Started",
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    progress: 0,
  },
  {
    id: 12,
    title: "Roof Installation",
    description: "Install the roof structure and cover the building.",
    assignedTo: "Kevin Martinez",
    role: "Roofer",
    priority: "High",
    status: "In Progress",
    startDate: "2024-03-01",
    endDate: "2024-03-20",
    progress: 60,
  },
  {
    id: 13,
    title: "Install HVAC System",
    description: "Install heating, ventilation, and air conditioning systems.",
    assignedTo: "Olivia Jackson",
    role: "HVAC Technician",
    priority: "High",
    status: "Not Started",
    startDate: "2024-03-10",
    endDate: "2024-03-25",
    progress: 0,
  },
  {
    id: 14,
    title: "Security System Installation",
    description: "Install security cameras and alarms throughout the building.",
    assignedTo: "Daniel Thompson",
    role: "Security Specialist",
    priority: "Low",
    status: "Not Started",
    startDate: "2024-03-30",
    endDate: "2024-04-05",
    progress: 0,
  },
  {
    id: 15,
    title: "Final Inspection",
    description: "Conduct a thorough inspection of the project before handover.",
    assignedTo: "Nancy Scott",
    role: "Project Inspector",
    priority: "High",
    status: "Not Started",
    startDate: "2024-04-01",
    endDate: "2024-04-10",
    progress: 0,
  },
  {
    id: 16,
    title: "Staff Training",
    description: "Conduct training for staff on building operation and maintenance.",
    assignedTo: "Sophia Walker",
    role: "Trainer",
    priority: "Low",
    status: "Not Started",
    startDate: "2024-04-05",
    endDate: "2024-04-15",
    progress: 0,
  },
  {
    id: 17,
    title: "Project Handover",
    description: "Hand over the completed project to the client.",
    assignedTo: "William King",
    role: "Project Manager",
    priority: "High",
    status: "Not Started",
    startDate: "2024-04-12",
    endDate: "2024-04-15",
    progress: 0,
  },
  {
    id: 18,
    title: "Document Finalization",
    description: "Prepare and finalize all project documentation for handover.",
    assignedTo: "Mary White",
    role: "Document Specialist",
    priority: "Medium",
    status: "Not Started",
    startDate: "2024-04-10",
    endDate: "2024-04-15",
    progress: 0,
  },
  {
    id: 19,
    title: "Post-Project Evaluation",
    description: "Evaluate the project's success and lessons learned.",
    assignedTo: "Benjamin Perez",
    role: "Project Evaluator",
    priority: "Medium",
    status: "Not Started",
    startDate: "2024-04-16",
    endDate: "2024-04-20",
    progress: 0,
  },
  {
    id: 20,
    title: "Feedback Collection",
    description: "Collect feedback from the client on the project.",
    assignedTo: "Charlotte Moore",
    role: "Client Relations",
    priority: "Low",
    status: "Not Started",
    startDate: "2024-04-18",
    endDate: "2024-04-22",
    progress: 0,
  },
];
export default taskData