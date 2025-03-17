import { validationServerForm } from '@/actions/validationServer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;
        const [erreurServeur, newStateServeur, messageServeur, typeMessage] = await validationServerForm(formData);

        if (erreurServeur) {
            return res.status(400).json({ message: messageServeur, type: typeMessage });
        }

        return res.status(200).json({ message: messageServeur, type: typeMessage });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}