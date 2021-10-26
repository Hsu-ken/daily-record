const fs = require('fs');

const timeMemory = {
    async read(process) {
        let processData = {}
        processData.test = process
        // process.foreach(e => {

        //     console.log(e)

        // }
        // );

        fs.readFile('time-data.json', (err, data) => {

            if (err) {

                let data = JSON.stringify(processData);
                fs.writeFileSync('time-data.json', data);
                if (err.code === 'ENOENT') {
                    console.log("firstTime create data")
                }
                else
                    throw err;

            }

            // let student = JSON.parse(data);
            // console.log(student.ss);

        });

    }
}

module.exports = timeMemory