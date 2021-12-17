const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageURL: "https://nypost.com/wp-content/uploads/sites/2/2020/10/012420Starbucks7HS.jpg?quality=90&strip=all&w=1488",
		description: "This is a school in NYC.",
		address: "695 Park Ave, New York, NY 10065"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		imageURL: "https://image.cnbcfm.com/api/v1/image/106604493-1594057373282harvarduniversitysdunsterhouseincambridgema.jpg?v=1594057738&w=630&h=354",
		description: "This is a school in MA.",
		address: "86 Brattle Street Cambridge, MA 02138"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email: "joeshmo@abc.com",
	  gpa: 0.0
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;