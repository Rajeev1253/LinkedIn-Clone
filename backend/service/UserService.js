import { postModel } from "../models/postModel.js"

export const getUsersPaginated =  async(page)=>{
        let resultsPerPage = 10
        return postModel.find({})
          .sort({ createdAt: 'descending' })
          .lean()
          .limit(resultsPerPage)
          .skip(page * resultsPerPage)
      
}
