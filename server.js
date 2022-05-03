const { prompt } = require("inquirer");
const mysql = require('mysql2/promise');
let db;
  
awaitMySqlWithInquirer();

async function init(){
    db =await mysql.createConnection(
        {
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'business_db'
        },
        console.log(`Connected to the business_db database.`)
      );


}
async function awaitMySqlWithInquirer(){
    await init()

    const [employees] =  await db.execute("select * from employee")

    console.table(employees);
    
       const {employee} = await prompt([{
                type: 'list',
                name: 'employee',
                message: 'Which employee',
                choices: employees.map(employee=> ({name:employee.first_name + " "+ employee.last_name, value: employee}))
              }])
        
              console.log(employee)

              
            }






