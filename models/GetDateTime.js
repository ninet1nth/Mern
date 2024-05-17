import mongoose from "mongoose";

const GetDateTimeSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    serviceName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const DateRecording = mongoose.model('DateRecording', GetDateTimeSchema, 'dateRecording');

export default DateRecording;
