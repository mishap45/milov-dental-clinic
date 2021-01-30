var axios = require('axios');
var querystring = require('querystring');
var response_code = require('./response_code');

function delayedSMS({ number, text, time }) {
    this.API_ID = 'E410A5CF-309E-432B-788E-796EBD35FF5F';
    this.isTest = process.env.DEVELOPMENT === 'TRUE';
    console.log(this.API_ID);

    var params = {
        api_id: this.API_ID,
        to: number,
        msg: text,
        json: 1,
        test: +this.isTest,
        time
    };

    return axios.get(`https://sms.ru/sms/send?${querystring.stringify(params)}`)
}

module.exports = delayedSMS;