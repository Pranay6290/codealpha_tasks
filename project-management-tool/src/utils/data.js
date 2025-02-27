export const initialProjects = [{
  id: 1,
  name: 'Website Redesign',
  tasks: [
    {
      id: 1,
      title: 'Create wireframes',
      assignee: 'John Doe',
      comments: [
        { user: 'John', text: 'Started working on homepage', timestamp: new Date() }
      ],
      status: 'in-progress'
    }
  ],
  members: ['John Doe', 'Jane Smith'],
  created: new Date()
}];

export const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Manager' },
  { id: 2, name: 'Jane Smith', role: 'Developer' }
];