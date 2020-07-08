import mongoose from 'mongoose';


const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Cannot insert negative values for grades')
      }
    }
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('grade', gradeSchema, 'grade');

const gradeModel = mongoose.model('grade');

export default gradeModel;