const projects = [];

class ProjectController {
  index(req, res) {
    return res.json(projects);
  }

  store(req, res) {
    const { id, title } = req.body;

    if (!id || !title) {
      return res.status(400).json({ error: 'You should provide id and title' });
    }

    const projectFound = projects.findIndex(project => project.id === id);

    if (projectFound !== -1) {
      return res
        .status(400)
        .json({ error: 'Project ID is already being used!' });
    }

    projects.push({
      id,
      title,
      tasks: [],
    });

    return res.json(projects);
  }

  update(req, res) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'You should provide an title' });
    }

    const projectFound = projects.findIndex(
      project => project.id === req.params.id
    );

    if (projectFound === -1) {
      return res.status(400).json({
        error: 'Project ID not found',
      });
    }

    projects[projectFound].title = title;

    return res.json(projects[projectFound]);
  }

  delete(req, res) {
    const projectFound = projects.findIndex(
      project => project.id === req.params.id
    );

    if (projectFound === -1) {
      return res.status(400).json({ error: 'Project ID not found' });
    }

    projects.splice(projectFound, 1);
    return res.json(projects);
  }

  edit(req, res) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'You must provide an task title' });
    }

    const projectFound = projects.findIndex(
      project => project.id === req.params.id
    );

    if (projectFound === -1) {
      return res.status(400).json({ error: 'Project ID not found ' });
    }

    projects[projectFound].tasks.push(title);

    return res.json(projects[projectFound]);
  }
}

export default new ProjectController();
