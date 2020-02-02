import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipientExist = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExist) {
      return res.status(400).json({ erro: 'Recipient already exists.' });
    }

    const {
      name,
      logradouro,
      numero,
      cidade,
      estado,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      adress: {
        logradouro,
        numero,
        cidade,
        estado,
        cep,
      },
    });
  }

  async update(req, res) {
    const { name } = req.body;

    const recipient = await Recipient.findOne({
      where: { name },
    });

    if (!recipient) {
      return res.status(400).json({ erro: 'Recipient does not exist.' });
    }

    const {
      id,
      logradouro,
      numero,
      cidade,
      estado,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      adress: {
        logradouro,
        numero,
        cidade,
        estado,
        cep,
      },
    });
  }
}

export default new RecipientController();
