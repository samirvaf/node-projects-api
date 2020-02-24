class ProjectController {
  async index(req, res) {
    return res.json({ teste: 'ok' });
  }

  async store(req, res) {
    return res.json();
  }

  async update(req, res) {
    return res.json();
  }

  async delete(req, res) {
    return res.json();
  }
}

export default new ProjectController();
