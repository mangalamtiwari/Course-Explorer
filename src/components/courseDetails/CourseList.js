function CourseList()
{
const coursesArray = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      instructor: 'Michael Thompson',
      description: 'Comprehensive course covering both front-end and back-end development.',
      enrollmentStatus: 'Open',
      thumbnail: 'full_stack_thumbnail.jpg',
      duration: '12 weeks',
      schedule: 'Mondays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['HTML', 'CSS', 'JavaScript'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Web Development',
          content: 'Overview of web development and setting up a development environment.',
        },
        {
          week: 2,
          topic: 'Front-end Development with React',
          content: 'Building responsive and interactive user interfaces with React.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Sarah Davis',
          email: 'sarah@example.com',
        },
        {
          id: 102,
          name: 'Jake Miller',
          email: 'jake@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 2,
      name: 'Python for Data Science',
      instructor: 'Jennifer Lee',
      description: 'Learn Python programming for data analysis, visualization, and machine learning.',
      enrollmentStatus: 'Open',
      thumbnail: 'python_data_science_thumbnail.jpg',
      duration: '10 weeks',
      schedule: 'Tuesdays and Fridays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python Knowledge'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Python for Data Science',
          content: 'Setting up Python environment and basic data types.',
        },
        {
          week: 2,
          topic: 'Data Analysis with Pandas',
          content: 'Exploring and manipulating data using the Pandas library.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 103,
          name: 'Emma Rodriguez',
          email: 'emma@example.com',
        },
        {
          id: 104,
          name: 'Ryan Brown',
          email: 'ryan@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 3,
      name: 'Mobile App Development with Flutter',
      instructor: 'Daniel Garcia',
      description: 'Build cross-platform mobile apps with the Flutter framework.',
      enrollmentStatus: 'Open',
      thumbnail: 'flutter_mobile_dev_thumbnail.jpg',
      duration: '8 weeks',
      schedule: 'Wednesdays, 5:30 PM - 7:30 PM',
      location: 'Online',
      prerequisites: ['Dart Programming Language'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Flutter',
          content: 'Setting up Flutter, understanding widgets, and basic app structure.',
        },
        {
          week: 2,
          topic: 'Building UI with Flutter',
          content: 'Creating beautiful user interfaces with Flutter widgets.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 105,
          name: 'Olivia White',
          email: 'olivia@example.com',
        },
        {
          id: 106,
          name: 'David Turner',
          email: 'david@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 4,
      name: 'Machine Learning Fundamentals',
      instructor: 'Sophie Johnson',
      description: 'Explore the basics of machine learning and its applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'machine_learning_thumbnail.jpg',
      duration: '10 weeks',
      schedule: 'Mondays and Thursdays, 7:30 PM - 9:30 PM',
      location: 'Online',
      prerequisites: ['Python for Data Science'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Machine Learning',
          content: 'Overview of machine learning concepts and types of machine learning.',
        },
        {
          week: 2,
          topic: 'Supervised Learning',
          content: 'Understanding supervised learning algorithms and applications.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 107,
          name: 'Liam Harris',
          email: 'liam@example.com',
        },
        {
          id: 108,
          name: 'Ava Martinez',
          email: 'ava@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 5,
      name: 'Cybersecurity Essentials',
      instructor: 'Nathan Brown',
      description: 'Learn the fundamental concepts of cybersecurity and best practices.',
      enrollmentStatus: 'Open',
      thumbnail: 'cybersecurity_thumbnail.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Fridays, 6:30 PM - 8:30 PM',
      location: 'Online',
      prerequisites: ['Basic Computer Skills'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Cybersecurity',
          content: 'Overview of cybersecurity threats, vulnerabilities, and countermeasures.',
        },
        {
          week: 2,
          topic: 'Network Security',
          content: 'Understanding network security principles and protocols.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 109,
          name: 'Isabella Taylor',
          email: 'isabella@example.com',
        },
        {
          id: 110,
          name: 'Ethan Turner',
          email: 'ethan@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 6,
      name: 'Blockchain Basics',
      instructor: 'Christopher Clark',
      description: 'Introduction to blockchain technology and its applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'blockchain_basics_thumbnail.jpg',
      duration: '6 weeks',
      schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic Understanding of Cryptocurrencies'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Blockchain',
          content: 'Understanding the basics of blockchain technology and its components.',
        },
        {
          week: 2,
          topic: 'Smart Contracts',
          content: 'Exploring smart contracts and their implementation.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 111,
          name: 'Mia Garcia',
          email: 'mia@example.com',
        },
        {
          id: 112,
          name: 'Logan Davis',
          email: 'logan@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 7,
      name: 'UI/UX Design Principles',
      instructor: 'Avery Wilson',
      description: 'Learn the principles of user interface and user experience design.',
      enrollmentStatus: 'Open',
      thumbnail: 'ui_ux_design_thumbnail.jpg',
      duration: '8 weeks',
      schedule: 'Thursdays, 5:00 PM - 7:00 PM',
      location: 'Online',
      prerequisites: ['Basic Design Skills'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to UI/UX Design',
          content: 'Understanding the role of design in user experience.',
        },
        {
          week: 2,
          topic: 'User Research and Prototyping',
          content: 'Conducting user research and creating interactive prototypes.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 113,
          name: 'Jackson White',
          email: 'jackson@example.com',
        },
        {
          id: 114,
          name: 'Abigail Martinez',
          email: 'abigail@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 8,
      name: 'DevOps Essentials',
      instructor: 'Samuel Turner',
      description: 'Explore the essential concepts of DevOps and continuous integration/continuous deployment (CI/CD).',
      enrollmentStatus: 'Open',
      thumbnail: 'devops_essentials_thumbnail.jpg',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 5:30 PM - 7:30 PM',
      location: 'Online',
      prerequisites: ['Basic Understanding of Software Development'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to DevOps',
          content: 'Understanding the principles and benefits of DevOps.',
        },
        {
          week: 2,
          topic: 'CI/CD Pipelines',
          content: 'Setting up and managing continuous integration/continuous deployment pipelines.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 115,
          name: 'Aiden Clark',
          email: 'aiden@example.com',
        },
        {
          id: 116,
          name: 'Chloe Wilson',
          email: 'chloe@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 9,
      name: 'Artificial Intelligence and Ethics',
      instructor: 'Ella Davis',
      description: 'Explore the ethical considerations in the development and deployment of artificial intelligence.',
      enrollmentStatus: 'Open',
      thumbnail: 'ai_ethics_thumbnail.jpg',
      duration: '8 weeks',
      schedule: 'Tuesdays, 5:30 PM - 7:30 PM',
      location: 'Online',
      prerequisites: ['Basic Understanding of Artificial Intelligence'],
      syllabus: [
        {
          week: 1,
          topic: 'Ethical Considerations in AI',
          content: 'Understanding the ethical challenges in artificial intelligence.',
        },
        {
          week: 2,
          topic: 'AI Governance',
          content: 'Exploring frameworks for governing and regulating artificial intelligence.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 117,
          name: 'Zoe Turner',
          email: 'zoe@example.com',
        },
        {
          id: 118,
          name: 'Gabriel Wilson',
          email: 'gabriel@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 10,
      name: 'Data Visualization with D3.js',
      instructor: 'Owen Garcia',
      description: 'Learn the art of data visualization using the D3.js library.',
      enrollmentStatus: 'Open',
      thumbnail: 'data_visualization_thumbnail.jpg',
      duration: '6 weeks',
      schedule: 'Thursdays, 6:30 PM - 8:30 PM',
      location: 'Online',
      prerequisites: ['Basic Understanding of JavaScript'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Data Visualization',
          content: 'Understanding the importance of data visualization and its impact.',
        },
        {
          week: 2,
          topic: 'Creating Interactive Charts with D3.js',
          content: 'Building interactive and dynamic charts using D3.js.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 119,
          name: 'Harper Brown',
          email: 'harper@example.com',
        },
        {
          id: 120,
          name: 'Leo Turner',
          email: 'leo@example.com',
        },
        // Additional enrolled students...
      ],
    },
  ];
  return (coursesArray);
}
export default CourseList;