import Users from '../../DB/User.js'
import Posts from '../../DB/Post.js'
export const resolvers = {
    Query: {
      findUser:async()=>{
        return await Users.find()
        },
        findUserById:async(_,arg)=>{
        return await Users.findOne({_id:arg._id})
        },
        findPost:async()=>{
        return await Posts.find()
        },
        
        findPostById:async(_,arg)=>{
        return await Posts.findOne({_id:arg._id})
        },
    },
   
    Mutation:{
        createUser:async(_,arg)=>{
            
         try {
          const user= new Users({
            ...arg
           })
          return await user.save()
         } catch (error) {
          console.log(error)
         }   
           
    },
    createPost:async(parent,arg)=>{
    
     const post=new Posts({
       ...arg
     })
     return await post.save()
    },


    UpdateUser:async(parent,arg)=>{
      return await Users.findByIdAndUpdate(arg.id,{
        ...arg
      },{new:true})
    },

    DeleteUser:async(parent,arg)=>{
      return await Users.findByIdAndDelete(arg.id)
    }
  }
}