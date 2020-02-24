import Project from '../models/Project';

class ProjectController {
  index(req, res) {
    return res.json(Project);
  }

  store(req, res) {
    const { id, title } = req.body;

    if (!id || !title) {
      return res.status(400).json({ error: 'You should provide id and title' });
    }

    const projectFound = Project.findIndex(project => project.id === id);

    if (projectFound !== -1) {
      return res
        .status(400)
        .json({ error: 'Project ID is already being used!' });
    }

    Project.push({
      id,
      title,
      tasks: [],
    });

    return res.json(Project);
  }

  update(req, res) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'You should provide an title' });
    }

    Project[req.projectId].title = title;

    return res.json(Project[req.projectId]);
  }

  destroy(req, res) {
    const projectToDestroy = Project[req.projectId];
    Project.splice(req.projectId, 1);
    return res.json(projectToDestroy);
  }

  edit(req, res) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'You must provide an task title' });
    }

    Project[req.projectId].tasks.push(title);

    return res.json(Project[req.projectId]);
  }
}

export default new ProjectController();
