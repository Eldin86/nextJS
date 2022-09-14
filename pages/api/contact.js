import { MongoClient } from 'mongodb'


const handler = async (req, res) => {
    let client

    if (req.method === 'POST') {
        const { email, name, message } = req.body

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }
        const newMessage = {
            email, name, message
        }

        try {
            client = await MongoClient.connect('mongodb+srv://nextjs:LExfMyt7zncXjhO9@cluster0.hbztljx.mongodb.net/events?retryWrites=true&w=majority')
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database' })
            return
        }

        const db = client.db()

        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Storring message failed' })
            return
        }

        client.close()

        res.status(201).json({ message: 'Successufully stored message!', message: newMessage })
    }
}

export default handler