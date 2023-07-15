import {User} from '../../fakeDB/fakeUser.js'
import {Post} from '../../fakeDB/fakePost.js'
export const resolvers = {
    Query: {
     getUser:(_,arg)=>User.find(user=>user.id==arg.id),
     getAllUsers:()=>User,
     getPost:(_,arg)=>Post.find(post=>post.id==arg.id),
     getAllPosts:()=>Post
    },
    User:{posts:(parent)=>Post.filter(post=>post.userId==parent.id)},
    Post:{user:(parent)=>User.find(user=>user.id==parent.userId)},
    Mutation:{
        createUser:(_,arg)=>{
              const  id=User.length+1;
              const newUser={id,...arg};
              User.push(newUser);
              return newUser
    }
  }
}