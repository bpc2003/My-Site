const mongoose = require('mongoose');

const CertSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});

module.exports = Cert = mongoose.model('cert', CertSchema);