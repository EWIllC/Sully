const { green, red } = require('chalk');
const { db, 
    models: {
    Property
}, } = require('../server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    // seed your database here!
    await Property.create({ name: "slum1", description: "this is a description", imageURL: "https://images.theconversation.com/files/197319/original/file-20171201-17371-svywr4.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"});

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    })
};
