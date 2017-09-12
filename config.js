'use strict'

module.exports = {
  mailer: {
    service: 'Gmail',
    auth: {
      user: 'YOUR_GMAIL_ADDRESS',
      pass: 'YOUR_GMAIL_PASSWORD'
    }
  },
  dbConnstring: 'mongodb://admin:123@ds131914.mlab.com:31914/collabode',
  sessionKey: 'HaloCollabode'
}
