export default async function handler(req, res) {
    const user = {
        'name': 'samuel',
        "age": 19

    }
    res.status(200).json(user)
}