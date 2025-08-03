

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Submit Report",
        description: "Submit the monthly performance report.",
        date: "2025-07-21",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Attend project meeting with client.",
        date: "2025-07-20",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests on GitHub.",
        date: "2025-07-19",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      accepted: 1
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Backup production database.",
        date: "2025-07-18",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Wireframes",
        description: "Design wireframes for new dashboard.",
        date: "2025-07-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixing",
        description: "Fix bugs in the login module.",
        date: "2025-07-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Conduct basic security audit.",
        date: "2025-07-19",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
      accepted: 1
    }
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Team Meeting",
        description: "Weekly sync-up with team members.",
        date: "2025-07-21",
        category: "Team",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Document APIs",
        description: "Write API documentation for the new service.",
        date: "2025-07-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Reduce image sizes for web performance.",
        date: "2025-07-17",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
      accepted: 1
    }
  },
  {
    id: 4,
    firstName: "Yuvraj",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Feedback Session",
        description: "Give feedback on UI redesign.",
        date: "2025-07-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Setup CI/CD",
        description: "Integrate CI/CD pipeline with GitHub.",
        date: "2025-07-19",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Onboard Interns",
        description: "Help onboard new interns.",
        date: "2025-07-18",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update README",
        description: "Update project README file.",
        date: "2025-07-17",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
      accepted: 1
    }
  },
  {
    id: 5,
    firstName: "Kunal",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy App",
        description: "Deploy the latest version to production.",
        date: "2025-07-20",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add tests for user service.",
        date: "2025-07-21",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Merge Conflicts",
        description: "Resolve merge conflicts in main branch.",
        date: "2025-07-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Schedule Meeting",
        description: "Set up next sprint planning meeting.",
        date: "2025-07-19",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Component Library",
        description: "Start building reusable component library.",
        date: "2025-07-23",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1,
      accepted: 2
    }
  }
];



const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees =JSON.parse(localStorage.getItem("employees"))
    const admin =JSON.parse(localStorage.getItem("admin"))
    
    return {employees,admin}
    
    
    
}
