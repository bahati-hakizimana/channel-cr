const client = require('pg');


const postSchema = client.Schema({
     title:{
       type: String,
       required:[true, 'Title is required'],
       trim:true,
     },
     description:{
       type: String,
       required:[true, 'Description is required'],
       trim:true,
     },

     userId:{
        type:client.Schema.types.objectId,
        ref: ' User',
        required: true,

          
     }
}, {
    timestamps:true
})

module.exports = client.model("Post", postSchema);