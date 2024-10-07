

# **Schema Sketchers**

Schema Sketchers is a React-based tool designed to simplify the process of designing, visualizing, and managing database schemas. With an intuitive interface and a comprehensive feature set, users can easily define fields, manage table relationships, and create modular schemas for database design.

## **Features**

- **Table Creation**: Easily create and manage tables with custom fields.
- **Relationship Visualization**: Intuitively define and view relationships between tables.
- **Field Customization**: Set data types, lengths, constraints, and other field properties.
- **Undo/Redo**: Built-in support for undo and redo actions.
- **Notes**: Add descriptive notes to tables, fields, or relationships for better documentation.
- **To-Do Lists**: Keep track of tasks and schema improvements with a built-in to-do list.
- **Subject Areas**: Group related database components into logical sections for better organization and scalability.
- **Keyboard Shortcuts**: Speed up your workflow with quick actions using keyboard shortcuts.
- **User-friendly Interface**: A drag-and-drop interface for managing schema elements with ease.
- **Pre-built Templates**: Use pre-built database schema templates to get started quickly.
- **React Components**: Modular design that allows easy customization and feature expansion.

## **Project Structure**

Here's an overview of the project structure:

```bash
Ai_For_Earth/
└── Schema_Sketcher/
    ├── dist/
    ├── node_modules/
    ├── public/
    │   ├── animations/
    │   ├── assets/
    ├── src/
    │   ├── components/
    │   │   ├── EditorCanvas.jsx
    │   │   ├── EditorHeader.jsx
    │   │   ├── EditorSidePanel.jsx
    │   │   ├── LexicalEditor.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Workspace.jsx
    │   ├── context/
    │   │   ├── AreasContext.jsx
    │   │   ├── CanvasContext.jsx
    │   │   ├── EnumsContext.jsx
    │   │   ├── LayoutContext.jsx
    │   │   ├── NotesContext.jsx
    │   │   ├── SaveStateContext.jsx
    │   │   ├── SettingsContext.jsx
    │   │   ├── TasksContext.jsx
    │   │   └── UndoRedoContext.jsx
    │   ├── hooks/
    │   │   ├── useAreas.js
    │   │   ├── useCanvas.js
    │   │   ├── useSaveState.js
    │   │   ├── useTasks.js
    │   │   ├── useUndoRedo.js
    │   ├── pages/
    │   │   ├── Editor.jsx
    │   │   ├── LandingPage.jsx
    │   │   └── Templates.jsx
    ├── templates/
    ├── utils/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── package.json
```


### **Deploy Link**
- https://ai-for-earth-no4l.vercel.app/


### **Key Components**

- **EditorCanvas.jsx**: The primary component for editing and visualizing database schemas.
- **Workspace.jsx**: Manages multiple layouts for schema design.
- **Templates.jsx**: Offers pre-built schema templates for users to kickstart their designs.
- **NotesContext.jsx**: Handles notes that can be added to tables, fields, and relationships.
- **TasksContext.jsx**: Manages the to-do list feature.
- **AreasContext.jsx**: Organizes tables into subject areas for better structure.
- **Shortcuts.jsx**: Handles keyboard shortcuts for faster navigation and interactions.

## **How to Get Started**

Follow these steps to set up and run *Schema Sketchers* locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/mohammadkaifshaikh01/Ai_For_Earth.git
```

### **2. Install Dependencies**

Navigate to the project directory and install the required dependencies using npm:

```bash
cd Ai_For_Earth/Schema_Sketcher
npm install
```

### **3. Run the Development Server**

Start the development server:

```bash
npm run build
```

Visit the app at `http://localhost:3000` to start designing your database schema.

## **Usage**

- Use the drag-and-drop interface to create tables and define relationships.
- Customize fields, data types, and other properties of each table.
- Add notes and use the to-do list to keep track of your design process.
- Group tables into subject areas for better organization and scalability.
- Use the undo/redo functionality to easily manage changes.

## **Future Enhancements**

We have several exciting features planned for future releases:

- **Collaborative Editing**: Allow multiple users to collaborate on schema designs in real-time.
- **Database Export**: Export schema designs into SQL scripts.
- **Real-time Validation**: Automatically validate table relationships and field properties.
- **Version Control**: Implement version control for schema designs, allowing users to track changes.

## **Contributing**

We welcome contributions! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

### **Steps to Contribute:**

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch to your fork.
5. Open a pull request to the main branch.

## **Team**

- **Project Leader**: Mohammad Kaif
- **Team Name**: AI for Earth
- **Team Members**:
  - Sayan
  - Prakash
  - Anand
  - Arohi

