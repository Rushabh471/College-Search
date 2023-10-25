// document.addEventListener("DOMContentLoaded", function () {
//     const searchBtn = document.getElementById("searchBtn");

//     searchBtn.addEventListener("click", function () {
//         const location = document.getElementById("location").value;
//         const course = document.getElementById("course").value;

//         // You can perform an API request here to fetch college data based on the filters
//         // and then populate the results in the ".colleges" div.
//         // For simplicity, let's assume you have a sample data object:

//         const sampleColleges = [
            
//             { name: "VJTI", location: "Mumbai", course: "Engineering", rating: 4 },
//             { name: "MIT", location: "Koiambatore", course: "Engineering", rating: 4 },
//             { name: "COEP", location: "Pune", course: "Engineering", rating: 4.5 },
//             { name: "IIT", location: "Mumbai", course: "Engineering", rating: 5 },
//             { name: "KIT", location: "Kolhapur", course: "Engineering", rating: 3.5 },
//             { name: "XLRI", location: "Jamshedpur", course: "Business", rating: 4.8 },
//             { name: "IIM Ahmedabad", location: "Ahmedabad", course: "Business", rating: 4.9 },
//             { name: "ISB", location: "Hyderabad", course: "Business", rating: 4.7 },
//             { name: "SPJIMR", location: "Mumbai", course: "Business", rating: 4.6 },
//             { name: "IIM Bangalore", location: "Bangalore", course: "Business", rating: 4.9 },
//             { name: "AIIMS Delhi", location: "Delhi", course: "Medical", rating: 4.8 },
//             { name: "CMC Vellore", location: "Vellore", course: "Medical", rating: 4.7 },
//             { name: "Maulana Azad Medical College", location: "Delhi", course: "Medical", rating: 4.6 },
//             { name: "Armed Forces Medical College", location: "Pune", course: "Medical", rating: 4.9 },
//             { name: "JIPMER", location: "Puducherry", course: "Medical", rating: 4.5 },
//             // Add more sample data here
//         ];

//         const collegesContainer = document.querySelector(".colleges");
//         collegesContainer.innerHTML = "";

//         sampleColleges.forEach(college => {
//             if ((location === "" || college.location === location) && (course === "" || college.course === course)) {
//                 const collegeDiv = document.createElement("div");
//                 collegeDiv.classList.add("college-item");

//                 let programsInfo = '';
//                                 college.programs.forEach(program => {
//                                     programsInfo += `${program.name} (Intake: ${program.intake})<br>`;
//                                 });

//                 collegeDiv.innerHTML = `
//                     <p class="college-name">${college.name}</p>
//                     <p class="college-details">Location: ${college.location} | Course: ${college.course} | Rating: ${college.rating}/5</p>
//                     <p class="college-programs"><strong>Programs Offered:</strong><br>${programsInfo}</p>
//                 `;

//                 collegesContainer.appendChild(collegeDiv);
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const searchBtn = document.getElementById("searchBtn");

//     searchBtn.addEventListener("click", function () {
//         const location = document.getElementById("location").value;
//         const course = document.getElementById("course").value;

//         // You can perform an API request here to fetch college data based on the filters
//         // and then populate the results in the ".colleges" div.
//         // For simplicity, let's assume you have a sample data object:

//         const sampleColleges = [
//             { name: "VJTI", location: "Mumbai", course: "Engineering", programs: [
//                 { name: "Computer Science Engineering", intake: 120 },
//                 { name: "Electronics & Telecommunication Engineering", intake: 120 },
//                 { name: "Mechanical Engineering", intake: 120 },
//                 { name: "Civil Engineering", intake: 120 },
//                 { name: "Electrical Engineering", intake: 120 },
//             ], rating: 4 },
//             { name: "MIT", location: "Koiambatore", course: "Engineering", programs: [
//                 { name: "Computer Science Engineering", intake: 120 },
//                 { name: "Electronics & Telecommunication Engineering", intake: 120 },
//                 { name: "Mechanical Engineering", intake: 120 },
//                 { name: "Civil Engineering", intake: 120 },
//                 { name: "Electrical Engineering", intake: 120 },
//             ], rating: 4 },
//             // Add more colleges here
//         ];

//         const collegesContainer = document.querySelector(".colleges");
//         collegesContainer.innerHTML = "";

//         sampleColleges.forEach(college => {
//             if ((location === "" || college.location === location) && (course === "" || college.course === course)) {
//                 const collegeDiv = document.createElement("div");
//                 collegeDiv.classList.add("college-item");

//                 let programsInfo = '';
//                 college.programs.forEach(program => {
//                     programsInfo += `${program.name} (Intake: ${program.intake})<br>`;
//                 });

//                 collegeDiv.innerHTML = `
//                     <p class="college-name">${college.name}</p>
//                     <p class="college-details">Location: ${college.location} | Course: ${college.course} | Rating: ${college.rating}/5</p>
//                     <p class="college-programs"><strong>Programs Offered:</strong><br>${programsInfo}</p>
//                 `;

//                 collegesContainer.appendChild(collegeDiv);
//             }
//         });
//     });
// });




//Showing all courses colleges even filtered
// document.addEventListener("DOMContentLoaded", function () {
//     const searchBtn = document.getElementById("searchBtn");

//     searchBtn.addEventListener("click", function () {
//         const location = document.getElementById("location").value;
//         const course = document.getElementById("course").value;

//         // You can perform an API request here to fetch college data based on the filters
//         // and then populate the results in the ".colleges" div.
//         // For simplicity, let's assume you have a sample data object:

//         const sampleColleges = [
//             { name: "VJTI", location: "Mumbai", course: "Engineering", programs: [
//                  { name: "Computer Science Engineering", intake: 120 },
//                  { name: "Electronics & Telecommunication Engineering", intake: 120 },
//                  { name: "Mechanical Engineering", intake: 120 },
//                  { name: "Civil Engineering", intake: 120 },
//                  { name: "Electrical Engineering", intake: 120 },
//             ], rating: 4.5 },
            
//             //{ name: "MIT", location: "Koiambatore", course: "Engineering", rating: 4 },
//             { name: "MIT", location: "Koiambatore", course: "Engineering", programs: [
//                 { name: "Computer Science Engineering", intake: 60 },
//                 { name: "Information Technology", intake: 60 },
//                 { name: "Electronics & Telecommunication Engineering", intake: 120 },
//                 { name: "Mechanical Engineering", intake: 120 },
//                 { name: "Civil Engineering", intake: 120 },
//                 { name: "Electrical Engineering", intake: 120 },
//            ], rating: 4 },
            
//             //{ name: "COEP", location: "Pune", course: "Engineering", rating: 4.5 },
//             { name: "COEP", location: "Pune", course: "Engineering", programs: [
//                 { name: "Computer Science Engineering", intake: 60 },
//                 //{ name: "Information Technology", intake: 60 },
//                 { name: "Electronics & Telecommunication Engineering", intake: 60 },
//                 { name: "Mechanical Engineering", intake: 60 },
//                 { name: "Civil Engineering", intake: 60 },
//                 { name: "Electrical Engineering", intake: 60 },
//            ], rating: 4.5 },

//             { name: "IIT", location: "Mumbai", course: "Engineering", rating: 5 },
//             { name: "KIT", location: "Kolhapur", course: "Engineering", rating: 3.5 },
//             { name: "XLRI", location: "Jamshedpur", course: "Business", rating: 4.8 },
//             { name: "IIM Ahmedabad", location: "Ahmedabad", course: "Business", rating: 4.9 },
//             { name: "ISB", location: "Hyderabad", course: "Business", rating: 4.7 },
//             { name: "SPJIMR", location: "Mumbai", course: "Business", rating: 4.6 },
//             { name: "IIM Bangalore", location: "Bangalore", course: "Business", rating: 4.9 },
//             { name: "AIIMS Delhi", location: "Delhi", course: "Medical", rating: 4.8 },
//             { name: "CMC Vellore", location: "Vellore", course: "Medical", rating: 4.7 },
//             { name: "Maulana Azad Medical College", location: "Delhi", course: "Medical", rating: 4.6 },
//             { name: "Armed Forces Medical College", location: "Pune", course: "Medical", rating: 4.9 },
//             { name: "JIPMER", location: "Puducherry", course: "Medical", rating: 4.5 },
//             // Add more sample data here
//         ];

//         const collegesContainer = document.querySelector(".colleges");
//         collegesContainer.innerHTML = "";

//         sampleColleges.forEach(college => {
//             if (
//                 (location === "" || college.location === location) &&
//                 (course === "" || college.course === course || !college.programs)
//             ) {
//                 const collegeDiv = document.createElement("div");
//                 collegeDiv.classList.add("college-item");

//                 let programsInfo = '';
//                 if (college.programs) {
//                     college.programs.forEach(program => {
//                         programsInfo += `${program.name} (Intake: ${program.intake})<br>`;
//                     });
//                 }

//                 collegeDiv.innerHTML = `
//                     <p class="college-name">${college.name}</p>
//                     <p class="college-details">Location: ${college.location} | Course: ${college.course} | Rating: ${college.rating}/5</p>
//                     <p class="college-programs"><strong>Programs Offered:</strong><br>${programsInfo}</p>
//                 `;

//                 collegesContainer.appendChild(collegeDiv);
//             }
//         });
//     });
// });


//Almost 
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", function () {
        const location = document.getElementById("location").value;
        const course = document.getElementById("course").value;

        // You can perform an API request here to fetch college data based on the filters
        // and then populate the results in the ".colleges" div.
        // For simplicity, let's assume you have a sample data object:

        const sampleColleges = [
        // Engineering Colleges
            { name: "Veermata Jijabai Technological Institute (VJTI)", location: "Mumbai", course: "Engineering", programs: [
                { name: "Computer Science Engineering", intake: 120 },
                { name: "Electronics & Telecommunication Engineering", intake: 120 },
                { name: "Mechanical Engineering", intake: 120 },
                { name: "Civil Engineering", intake: 120 },
                { name: "Electrical Engineering", intake: 120 },
            ], rating: 4, website: "https://www.vjti.ac.in/" },
            
            { name: "Madras Institute of Technology (MIT)", location: "Chennai", course: "Engineering", programs: [
                { name: "Computer Science Engineering", intake: 120 },
                { name: "Information Technology", intake: 60 },
                { name: "Electronics Engineering", intake: 120 },
                { name: "Automobile Engineering", intake: 120 },
                { name: "Aerospace Engineering", intake: 60 },
                { name: "Production Technology", intake: 60 },
            ], rating: 4, website: "https://mitindia.edu/en" },
            
            { name: "College of Engineering Pune (COEP)", location: "Pune", course: "Engineering", programs: [
                { name: "Computer Science Engineering", intake: 60 },
                { name: "Electronics & Telecommunication Engineering", intake: 120 },
                { name: "Mechanical Engineering", intake: 60 },
                { name: "Civil Engineering", intake: 60 },
                { name: "Electrical Engineering", intake: 60 },
            ], rating: 4.5, website: "https://www.coep.org.in/" },

            { name: "Indian Institute of Technology (IIT Bombay)", location: "Mumbai", course: "Engineering", programs: [
                { name: "Computer Science Engineering", intake: 120 },
                { name: "Information Technology", intake: 60 },
                { name: "Artificial Intelligence & Machine Learning", intake: 60 },
                { name: "Cyber Security", intake: 60 },
                { name: "Data Science", intake: 60 },
                { name: "Block-chain", intake: 60 },
                { name: "Electronics & Telecommunication Engineering", intake: 60 },
                { name: "Mechanical Engineering", intake: 60 },
                { name: "Civil Engineering", intake: 60 },
                { name: "Electrical Engineering", intake: 60 },
            ], rating: 4.9, website: "https://www.iitb.ac.in/" },

            { name: "Bharti Vidyapeeth's College of Engineering Delhi (BVCOEND)", location: "Delhi", course: "Engineering", programs: [
                { name: "Computer Science Engineering", intake: 120 },
                { name: "Information Technology", intake: 120 },
                { name: "Electronics & Telecommunication Engineering", intake: 180 },
                { name: "Instrumentation & Control Engineering", intake: 60 },
                { name: "Electrical Engineering", intake: 60 },
            ], rating: 4, website: "https://bvcoend.ac.in/" },
            // Add more colleges here

        // Business Colleges
            { name: "SP Jain Institute of Management & Research (SPJIMR)", location: "Mumbai", course: "Business",  programs: [
                { name: "Post Graduate Diploma in Management", intake: 200},
                { name: "Post Graduate Diploma in Management (Business Management", intake: 250},
                { name: "Post Graduate Programme in Management", intake: 150},
                {name: "Global Management Programme", intake: 150},
                {name: "Fellow Programme in Management", intake: 150},
            ], rating: 4.5, website: "https://www.spjimr.org/" },

            { name: "Indian Institute of Management Ahemdabad (IIMA)", location: "Ahemdabad", course: "Business",  programs: [
                { name: "Ph.D. Programme in Management", intake: 150},
                { name: "Post Graduate Diploma in Management (Business Management", intake: 250},
                { name: "Post Graduate Programme in Management", intake: 200},
                {name: "Post Graduate Programme in Food & Agri-Business Management", intake: 150},
                {name: "Post Graduate Programme in Management for Exexutives", intake: 150},
            ], rating: 4.9, website: "https://www.iima.ac.in/" },

            { name: "Indian School of Business (ISB)", location: "Hyderabad", course: "Business",  programs: [
                { name: "Fellow Programme in Management", intake: 150},
                { name: "Post Graduate Diploma in Management (Business Management", intake: 250},
                { name: "Post Graduate Programme in Management", intake: 200},
                {name: "Advanced Management Programme", intake: 150},
                {name: "Post Graduate Programme in Management for Exexutives", intake: 150},
                {name: "Post Graduate Programme in Family Managed Business", intake: 150},
            ], rating: 4, website: "https://www.isb.edu/en.html" },

            { name: "Indian Institute of Management Bangalore (IIMB)", location: "Bangalore", course: "Business",  programs: [
                { name: "Fellow Programme in Management", intake: 150},
                { name: "Post Graduate Diploma in Management (Business Management", intake: 250},
                { name: "Post Graduate Programme in Management", intake: 200},
                {name: "Advanced Management Programme", intake: 150},
                {name: "Post Graduate Programme in Management for Exexutives", intake: 150},
                {name: "Post Graduate Programme in Family Managed Business", intake: 150},
            ], rating: 4.9, website: "https://www.iimb.ac.in/" },

            { name: "Narsee Monjee Institute of Management Studies (NMIMS)", location: "Mumbai", course: "Business",  programs: [
                { name: "Fellow Programme in Management", intake: 150},
                { name: "Post Graduate Diploma in Management (Business Management", intake: 250},
                { name: "Post Graduate Programme in Management", intake: 200},
                {name: "Advanced Management Programme", intake: 150},
                {name: "Post Graduate Programme in Management for Exexutives", intake: 150},
                {name: "Post Graduate Programme in Family Managed Business", intake: 150},
            ], rating: 4.5, website: "https://nmims.edu/mumbaicampus" },

        // Medical Colleges
        { name: "All India Institute of Medical Sciences (AIIMS)", location: "Delhi", course: "Medicine",  programs: [
            { name: "M.B.B.S", intake: 80},
            { name: "Doctorate of Medicine [DM]", intake: 120},
            { name: "Master of Surgery [MS]", intake: 120},
            {name: "Bachelor of Optometry [B.Optom]", intake: 120},
            {name: "Master of Dental Surgery [MDS]", intake: 120},
            { name: "Bachelor in Medical Radiology & Imaging Technology [BMRIT]", intake: 120},
            {name: "Master of Chirurgiae [M.Ch]", intake: 120},
        ], rating: 4.9, website: "https://www.aiims.edu/index.php?lang=en" },

        { name: "Armed Forces Medical College (AFMC)", location: "Pune", course: "Medicine",  programs: [
            { name: "M.B.B.S", intake: 80},
            { name: "Doctorate of Medicine [DM]", intake: 120},
            { name: "Doctorate of Medicine [DM] (Cardiology)", intake: 120},
            { name: "Master of Surgery [MS]", intake: 120},
            {name: "Master of Chirurgiae [M.Ch]", intake: 120},
            {name: "Master of Dental Surgery [MDS]", intake: 120},
            {name: "Master in Hospital Administration [MHA]", intake: 120},
        ], rating: 4.5, website: "https://afmc.nic.in/" },

        { name: "Mahatma Gandhi Mission's Medical College (MGMMCNM)", location: "Mumbai", course: "Medicine",  programs: [
            { name: "M.B.B.S", intake: 80},
            { name: "Doctorate of Medicine [DM]", intake: 120},
            { name: "Doctorate of Medicine [DM] (Cardiology)", intake: 120},
            { name: "Master of Surgery [MS]", intake: 120},
            {name: "Master of Chirurgiae [M.Ch]", intake: 120},
            {name: "Bachelor of Physiotherapy [BPT]", intake: 120},
        ], rating: 4, website: "https://mgmmcnm.edu.in/" },

        { name: "Kasturba Medical College (KMC)", location: "Manipal (Karnataka)", course: "Medicine",  programs: [
            { name: "M.B.B.S", intake: 80},
            { name: "Doctorate of Medicine [DM]", intake: 120},
            { name: "Doctorate of Medicine [DM] (Cardiology)", intake: 120},
            { name: "Master of Surgery [MS]", intake: 120},
            {name: "Master of Chirurgiae [M.Ch]", intake: 120},
            {name: "Bachelor of Physiotherapy [BPT]", intake: 120},
        ], rating: 4.5, website: "https://manipal.edu/kmc-manipal.html" },

        { name: "D.Y. Patil Medical College", location: "Kolhapur", course: "Medicine",  programs: [
            { name: "M.B.B.S", intake: 80},
            { name: "Doctorate of Medicine [DM]", intake: 120},
            { name: "Doctorate of Medicine [DM] (Cardiology)", intake: 120},
            { name: "Master of Surgery [MS]", intake: 120},
        ], rating: 4, website: "https://www.dypatilmedicalkop.org/" },


        ];

        const collegesContainer = document.querySelector(".colleges");
        collegesContainer.innerHTML = "";

        sampleColleges.forEach(college => {
            if ((location === "" || college.location === location) && (course === "" || college.course === course)) {
                const collegeDiv = document.createElement("div");
                collegeDiv.classList.add("college-item");

                let programsInfo = '';
                college.programs.forEach(program => {
                    programsInfo += `${program.name} (Intake: ${program.intake})<br>`;
                });

                collegeDiv.innerHTML = `
                    <p class="college-name">${college.name}</p>
                    <p class="college-details">Location: ${college.location} | Course: ${college.course} | Rating: ${college.rating}/5</p>
                    <p class="college-programs"><strong>Programs Offered:</strong><br>${programsInfo}</p>
                    <p class="college-website"><a href="${college.website}" target="_blank">Official Website</a></p>
                `;

                collegesContainer.appendChild(collegeDiv);
            }
        });
    });
});


