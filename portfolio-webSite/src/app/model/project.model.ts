


export interface Project {
  id: number;          // Unique identifier for the project
  name: string;        // Project name
  description: string; // Project description
  startDate: string;   // Start date (ISO format string)
  endDate?: string;    // End date (optional, ISO format string)
  status: string;      // Current status (e.g., 'Active', 'Completed')
}
