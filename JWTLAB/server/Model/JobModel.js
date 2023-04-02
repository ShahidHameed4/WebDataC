import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  jobTags: {
    type: [String],
    required: true
  },
  postedBy: {
    type: String,
    ref: 'Employer',
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

export default JobPosting;
