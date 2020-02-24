import Project from '../models/Project';

export default (req, res, next) => {
  const projectFound = Project.findIndex(
    project => project.id === req.params.id
  );

  if (projectFound === -1) {
    return res.status(400).json({ error: 'Project ID not found!' });
  }

  req.projectId = projectFound;

  try {
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Failed verification' });
  }
};
