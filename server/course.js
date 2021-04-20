const { modifier } = require('ansi-styles');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseSchema = new Schema({
    pageId:[Schema.Types.ObjectId],

            name:{
                type:String,
                trim:true,
                required:true,
                unique:true
            },
            category:[String],
            duration:{
                type:Number,
                default:"0"
            },
            rating:{
                type:Schema.Types.Decimal128,
                default:"0"
            },
            members:{
                total:Number,
                mems:[
                    {
                        membid:[Schema.Types.ObjectId],
                        name:String,
                        validity:Date,
                    }
                ]
            }
},{ collection : 'course' },{timestamps: true})

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
