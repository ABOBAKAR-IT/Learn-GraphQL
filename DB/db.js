import mongoose from "mongoose"
mongoose.Promise = global.Promise ;
const db=`mongodb+srv://abobakar:abobakar786@fyp.ktjybxr.mongodb.net/graphql`;
const db1=`mongodb://127.0.0.1:27017/graphql`;
export const connection=async()=>{ return await mongoose.connect(db1).then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });
}

