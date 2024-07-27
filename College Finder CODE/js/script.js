const colleges = [
    {
        name: "Indian Institute of Technology Bombay",
        description: "Indian Institute of Technology Bombay (IIT Bombay) is one of India's premier institutes for higher education in engineering and technology. It is renowned for its research and innovation and offers a comprehensive range of undergraduate, postgraduate, and doctoral programs across various engineering disciplines. The institute boasts a vibrant campus life, cutting-edge research facilities, and a strong alumni network. With a focus on academic excellence and interdisciplinary research, IIT Bombay is consistently ranked among the top engineering institutes in India and globally.",
        courses: "Courses: \n1. B.Tech - Rs. 2,50,000 per semester\n 2. M.Tech - Rs. 1,50,000 per semester\n3. Ph.D. - Rs. 50,000 per semester",
        contact: "022-2572-2545",
        address: "Powai, Mumbai, Maharashtra 400076",
        website: "https://www.iitb.ac.in"
    },

    { name: "College of Engineering Pune", description: "One of the oldest engineering colleges in India.", courses: "B.Tech, M.Tech, Ph.D.", contact: "020-25507000", address: "Shivajinagar, Pune, Maharashtra 411005", image: "images/coep.jpg", website: "https://www.coep.org.in" },

    { name: "Veermata Jijabai Technological Institute", description: "A premier institute offering engineering education.", courses: "B.Tech, M.Tech, Ph.D.", contact: "022-24198101", address: "H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019", website: "http://www.vjti.ac.in" },

    { name: "Visvesvaraya National Institute of Technology", description: "An institute of national importance for engineering.", courses: "B.Tech, M.Tech, Ph.D.", contact: "0712-2222828", address: "South Ambazari Road, Nagpur, Maharashtra 440010", website: "http://www.vnit.ac.in" },

    { name: "Sardar Patel Institute of Technology", description: "A leading institute for technical education.", courses: "B.Tech, M.Tech", contact: "022-26707440", address: "Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058", website: "http://www.spit.ac.in" },

    { name: "Walchand College of Engineering", description: "A leading institute in the field of engineering education.", courses: "B.Tech, M.Tech", contact: "0233-2300383", address: "Vishrambag, Sangli, Maharashtra 416415", image: "images/wce.jpg", website: "http://www.walchandsangli.ac.in" },

    { name: "Shri Ramdeobaba College of Engineering and Management", description: "One of the top engineering colleges in Nagpur.", courses: "B.Tech, M.Tech", contact: "0712-2582844", address: "Katol Road, Gittikhadan, Nagpur, Maharashtra 440013", image: "images/rcoem.jpg", website: "http://www.rknec.edu" },

    { name: "KJ Somaiya College of Engineering", description: "A prestigious engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-66449191", address: "Vidyanagar, Vidyavihar East, Mumbai, Maharashtra 400077", image: "images/kjsce.jpg", website: "https://kjsce.somaiya.edu" },

    { name: "MIT World Peace University", description: "A leading university offering engineering courses.", courses: "B.Tech, M.Tech, Ph.D.", contact: "020-71177104", address: "S.No.124, Paud Road, Kothrud, Pune, Maharashtra 411038", image: "images/mitwpu.jpg", website: "https://mitwpu.edu.in" },

    { name: "Bharati Vidyapeeth Deemed University College of Engineering", description: "An institute known for quality engineering education.", courses: "B.Tech, M.Tech, Ph.D.", contact: "020-24107390", address: "Dhankawadi, Pune, Maharashtra 411043", image: "images/bvdu.jpg", website: "http://bvucoepune.edu.in" },

    { name: "Symbiosis Institute of Technology", description: "A renowned institute for engineering and technology.", courses: "B.Tech, M.Tech", contact: "020-61936200", address: "Lavale, Mulshi, Pune, Maharashtra 412115", image: "images/sit.jpg", website: "https://www.sitpune.edu.in" },

    { name: "Sinhgad College of Engineering", description: "A leading engineering college in Pune.", courses: "B.Tech, M.Tech", contact: "020-24354705", address: "Vadgaon Budruk, Pune, Maharashtra 411041", image: "images/sinhgad.jpg", website: "http://www.sinhgad.edu" },

    { name: "Pimpri Chinchwad College of Engineering", description: "An institute dedicated to engineering education.", courses: "B.Tech, M.Tech", contact: "020-27653168", address: "Sector 26, Nigdi, Pradhikaran, Pune, Maharashtra 411044", image: "images/pccoep.jpg", website: "http://www.pccoepune.com" },

    { name: "Rajiv Gandhi Institute of Technology", description: "A well-established engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-26287250", address: "Juhu-Versova Link Rd, Andheri West, Mumbai, Maharashtra 400053", image: "images/rgit.jpg", website: "http://www.rgit.co.in" },

    { name: "Rizvi College of Engineering", description: "A premier institute for engineering studies.", courses: "B.Tech, M.Tech", contact: "022-26052070", address: "Rizvi Complex, Off Carter Road, Bandra West, Mumbai, Maharashtra 400050", image: "images/rizvi.jpg", website: "http://www.eng.rizvi.edu.in" },

    { name: "D.J. Sanghvi College of Engineering", description: "A prestigious engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-26287042", address: "J.V.P.D. Scheme, Vile Parle West, Mumbai, Maharashtra 400056", image: "images/djsce.jpg", website: "https://www.djsce.ac.in" },

    { name: "Dwarkadas J. Sanghvi College of Engineering", description: "A leading engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-42335000", address: "Plot No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Rd, Vile Parle West, Mumbai, Maharashtra 400056", image: "images/djscoe.jpg", website: "http://www.djscoe.org" },

    { name: "Fr. Conceicao Rodrigues College of Engineering", description: "An institute with a legacy of engineering education.", courses: "B.Tech, M.Tech", contact: "022-24461957", address: "Fr. Agnel Ashram, Bandstand, Bandra West, Mumbai, Maharashtra 400050", image: "images/frcrce.jpg", website: "http://www.frcrce.ac.in" },

    { name: "K.J. Somaiya Institute of Engineering and Information Technology", description: "An engineering institute focused on technology education.", courses: "B.Tech, M.Tech", contact: "022-24091001", address: "Ayurvihar Complex, Eastern Express Hwy, Sion, Mumbai, Maharashtra 400022", image: "images/kjsieit.jpg", website: "https://kjsieit.somaiya.edu" },

    { name: "A.C. Patil College of Engineering", description: "A premier engineering college in Navi Mumbai.", courses: "B.Tech, M.Tech", contact: "022-27745722", address: "Sector-4, Kharghar, Navi Mumbai, Maharashtra 410210", image: "images/acpce.jpg", website: "http://www.acpce.org" },

    { name: "Sardar Patel College of Engineering", description: "An autonomous engineering college in Mumbai.", courses: "B.Tech, M.Tech, Ph.D.", contact: "022-26232192", address: "Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058", image: "images/spce.jpg", website: "http://www.spce.ac.in" },

    { name: "Vishwakarma Institute of Technology", description: "A reputed engineering institute in Pune.", courses: "B.Tech, M.Tech, Ph.D.", contact: "020-24262231", address: "666, Upper Indiranagar, Bibwewadi, Pune, Maharashtra 411037", image: "images/vitpune.jpg", website: "http://www.vit.edu" },

    { name: "Smt. Kashibai Navale College of Engineering", description: "A renowned engineering college in Pune.", courses: "B.Tech, M.Tech", contact: "020-24107000", address: "S.No. 44/1, Pune-Mumbai Bypass Highway, Narhe, Pune, Maharashtra 411041", image: "images/skncoe.jpg", website: "http://www.skncoe.ac.in" },

    { name: "Sinhgad Institute of Technology", description: "A leading institute for engineering studies.", courses: "B.Tech, M.Tech", contact: "020-24355045", address: "Gut No.309, Kusgaon (Bk), Off Sinhgad Road, Lonavala, Maharashtra 410401", image: "images/sit.jpg", website: "http://www.sinhgad.edu" },

    { name: "Datta Meghe College of Engineering", description: "An engineering college in Navi Mumbai.", courses: "B.Tech, M.Tech", contact: "022-27541148", address: "Sector 3, Airoli, Navi Mumbai, Maharashtra 400708", image: "images/dmce.jpg", website: "http://www.dmce.ac.in" },

    { name: "Rajarambapu Institute of Technology", description: "A well-known engineering college in Sangli.", courses: "B.Tech, M.Tech, Ph.D.", contact: "02342-220329", address: "Rajaramnagar, Islampur, Sangli, Maharashtra 415414", image: "images/rit.jpg", website: "http://www.ritindia.edu" },

    { name: "Dr. Babasaheb Ambedkar Technological University", description: "A unitary engineering university in Raigad.", courses: "B.Tech, M.Tech, Ph.D.", contact: "02140-275081", address: "Vidyavihar, Lonere, Maharashtra 402103", image: "images/dbatu.jpg", website: "http://www.dbatu.ac.in" },

    { name: "Jawaharlal Nehru Engineering College", description: "A renowned engineering college in Aurangabad.", courses: "B.Tech, M.Tech", contact: "0240-2481436", address: "CIDCO, N-6, Aurangabad, Maharashtra 431003", image: "images/jnec.jpg", website: "http://www.jnec.org" },

    { name: "Shivaji University", description: "A prestigious university offering engineering courses.", courses: "B.Tech, M.Tech, Ph.D.", contact: "0231-2609063", address: "Vidyanagar, Kolhapur, Maharashtra 416004", image: "images/shivajiuniversity.jpg", website: "http://www.unishivaji.ac.in" },

    { name: "Sant Gadge Baba Amravati University", description: "An esteemed university in Amravati.", courses: "B.Tech, M.Tech, Ph.D.", contact: "0721-2662173", address: "Camp Area, Amravati, Maharashtra 444602", image: "images/sgbau.jpg", website: "http://www.sgbau.ac.in" },

    { name: "Kavayitri Bahinabai Chaudhari North Maharashtra University", description: "A university in Jalgaon offering engineering courses.", courses: "B.Tech, M.Tech, Ph.D.", contact: "0257-2257331", address: "Jalgaon, Maharashtra 425001", image: "images/nmu.jpg", website: "http://www.nmu.ac.in" },

    { name: "MGM College of Engineering and Technology", description: "An engineering college in Navi Mumbai.", courses: "B.Tech, M.Tech", contact: "022-27432471", address: "Sector 18, Kamothe, Navi Mumbai, Maharashtra 410209", image: "images/mgmcet.jpg", website: "http://www.mgmmumbai.ac.in" },

    { name: "Vidyalankar Institute of Technology", description: "A reputed engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-24161126", address: "Wadala (East), Mumbai, Maharashtra 400037", image: "images/vidyalankar.jpg", website: "http://www.vit.edu.in" },

    { name: "Rajiv Gandhi College of Engineering, Research and Technology", description: "A well-established engineering college in Chandrapur.", courses: "B.Tech, M.Tech", contact: "07172-225134", address: "Ballarpur Road, Babupeth, Chandrapur, Maharashtra 442403", image: "images/rcert.jpg", website: "http://www.rcert.ac.in" },

    { name: "Marathwada Institute of Technology", description: "A prestigious engineering college in Aurangabad.", courses: "B.Tech, M.Tech", contact: "0240-2375137", address: "Beed Bypass Rd, Satara Parisar, Aurangabad, Maharashtra 431010", image: "images/mit.jpg", website: "http://www.mit.asia" },

    { name: "G.H. Raisoni College of Engineering", description: "A premier engineering college in Nagpur.", courses: "B.Tech, M.Tech", contact: "0712-2580011", address: "CRPF Gate No.3, Hingna Rd, Digdoh Hills, Nagpur, Maharashtra 440016", image: "images/ghrce.jpg", website: "http://ghrce.raisoni.net" },

    { name: "Rajarshi Shahu College of Engineering", description: "An engineering college in Pune.", courses: "B.Tech, M.Tech", contact: "020-24611180", address: "Tathawade, Pune, Maharashtra 411033", image: "images/rscoe.jpg", website: "http://www.jspmrscoe.edu.in" },

    { name: "Maharashtra Institute of Technology", description: "A leading engineering college in Pune.", courses: "B.Tech, M.Tech, Ph.D.", contact: "020-30273500", address: "S.No. 124, Paud Road, Kothrud, Pune, Maharashtra 411038", image: "images/mitpune.jpg", website: "http://www.mitpune.com" },

    { name: "Lokmanya Tilak College of Engineering", description: "An engineering college in Navi Mumbai.", courses: "B.Tech, M.Tech", contact: "022-27541005", address: "Sector 4, Vikas Nagar, Koparkhairane, Navi Mumbai, Maharashtra 400709", image: "images/ltce.jpg", website: "http://www.ltce.in" },

    { name: "St. Francis Institute of Technology", description: "A reputed engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-28928585", address: "Mount Poinsur, S.V.P. Road, Borivali West, Mumbai, Maharashtra 400103", image: "images/sfit.jpg", website: "http://www.sfit.ac.in" },

    { name: "Atharva College of Engineering", description: "An engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-20898909", address: "Malad-Marve Road, Charkop Naka, Malad West, Mumbai, Maharashtra 400095", image: "images/ace.jpg", website: "http://www.atharvacoe.ac.in" },

    { name: "Mukesh Patel School of Technology Management and Engineering", description: "An institute focused on technology management and engineering.", courses: "B.Tech, M.Tech", contact: "022-26717700", address: "Bhaktivedanta Swami Marg, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400056", image: "images/mpstme.jpg", website: "http://engineering.nmims.edu" },

    { name: "Terna Engineering College", description: "A leading engineering college in Navi Mumbai.", courses: "B.Tech, M.Tech", contact: "022-27728777", address: "Sector 22, Nerul West, Navi Mumbai, Maharashtra 400706", image: "images/terna.jpg", website: "http://www.ternaengg.ac.in" },

    { name: "Xavier Institute of Engineering", description: "An engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-24226882", address: "Mahim Causeway, Mahim West, Mumbai, Maharashtra 400016", image: "images/xavier.jpg", website: "http://www.xavierengg.com" },

    { name: "Saraswati College of Engineering", description: "An engineering college in Navi Mumbai.", courses: "B.Tech, M.Tech", contact: "022-27743732", address: "Sector 5, Kharghar, Navi Mumbai, Maharashtra 410210", image: "images/scoe.jpg", website: "http://www.sce.edu.in" },

    { name: "Shree L.R. Tiwari College of Engineering", description: "An engineering college in Mumbai.", courses: "B.Tech, M.Tech", contact: "022-65657715", address: "Mira Road (E), Thane, Maharashtra 401107", image: "images/lrtiwari.jpg", website: "http://www.slrtce.in" },

    { name: "MIT Academy of engineering, Alandi", description: "An engineering college in Pune.", courses: "B.Tech, M.Tech", contact: "020-30273400", address: "Dehu Phata, Alandi, Pune, Maharashtra 412105", image: "images/mitae.jpg", website: "http://www.mitpune.com" }
];

/*
// Function to search for colleges
function searchCollege() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const results = colleges.filter(college => college.name.toLowerCase().includes(searchInput));

    // Store results in local storage
    localStorage.setItem('searchResults', JSON.stringify(results));

    // Redirect to results page
    window.location.href = 'results.html';
}
*/


function searchCollege() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    // Check if input is empty
    if (searchInput === "") {
        alert("Enter college name");
        return; // Exit the function if input is empty
    }

    // Filter colleges based on search input
    const results = colleges.filter(college => college.name.toLowerCase().includes(searchInput));

    // Check if there are no results
    if (results.length === 0) {
        alert("College not found");
        return; // Exit the function if no colleges are found
    }

    // Store results in local storage
    localStorage.setItem('searchResults', JSON.stringify(results));

    // Redirect to results page
    window.location.href = 'results.html';
}

// Attach searchCollege function to search button click event
document.getElementById('searchButton').addEventListener('click', searchCollege);
