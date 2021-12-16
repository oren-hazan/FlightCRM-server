const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
    format: combine(
      label({ label: 'testing mode' }),
      timestamp(),
      prettyPrint()
    ),
    transports: [new transports.Console(),
      new transports.File({
          filename: './log/allErrorLogs.log'})
      ]
  })
  
  module.exports=logger;