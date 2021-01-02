const jobClient = require('./jobsClient')

const REDIS_HOST = process.env.REDIS_HOST
const REDIS_PORT = process.env.REDIS_PORT
const redisConfig = { redis: { port: REDIS_PORT, host: REDIS_HOST } }

const jobClient = new JobsClient(redisConfig)

const { JOB_1, JOB_2 } = require('./constants')
const job1 = require('./jobs/job1')
const job2 = require('./jobs/job2')
jobClient.create(job1, JOB_1)
jobClient.create(job2, JOB_2)