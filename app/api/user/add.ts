import connectMongo from '../utility/connectionDB';
import User from '@/app/models/user';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(name : string, email : string) {
  try {
    await connectMongo();
    var existing = await User.findOne({email: email});
    if (existing == null){
        existing = await User.create({name:name, email: email});
    }
    return existing._id
  } catch (error) {
    console.log(error);
  }
}
