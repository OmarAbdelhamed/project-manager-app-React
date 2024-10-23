import { NewProject } from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';
import { SideBar } from './components/SideBar';
import { useState } from 'react';

function App() {
  const [ProjectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  };

  function handleStartAddingProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleSelectProject = (projectId) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };

  const handleCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAdd = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = ProjectState.projects.find(
    (project) => project.id === ProjectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask}
      project={selectedProject}
      onDelete={handleDelete}
      tasks={ProjectState.tasks}
    />
  );

  if (ProjectState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleAdd} />;
  } else if (ProjectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAdd={handleStartAddingProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBar
        onAdd={handleStartAddingProject}
        projects={ProjectState.projects}
        selectedProject={handleSelectProject}
        selectedProjectId={ProjectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
