/* eslint-disable no-undef */
const Queue = require('bull')

class JobsClient {
    constructor(redisConfig) {
        this.redisConfig = redisConfig
        this.queueConfig = {}
        this.queueName = ''
        this.job = () => null
        this.cron = null
    }

    createQueue() {
        this.queue = new Queue(this.queueName, this.redisConfig)
    }

    cleanQueue() {
        this.queue.clean(0, 'wait');
        this.queue.clean(0, 'active');
        this.queue.clean(0, 'completed');
        this.queue.clean(0, 'delayed');
        this.queue.clean(0, 'failed');

        let multi = this.queue.multi();
        multi.del(this.queue.toKey('repeat'));
        multi.exec();
    }

    createJob() {
        this.queue.add({},   {
            repeat: { cron: this.cron }
          })
    }

    process() {
        this.queue.process((job, done) => {
            console.log(`Start process ${this.queueName} job`)
            this.job()
            done()
        })
    }

    run() {
        this.createQueue()
        this.process()
        this.cleanQueue()
        this.createJob()
    }

    create(job, name) {
        this.job = job
        this.name = name
        this.cron = process.env[`CRON_${this.name}`]

        if (!this.cron) throw `CRON_${this.name} not found in .env 🥱`

        this.run()
    }
}

module.exports = JobsClient