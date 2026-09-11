const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// HOME
app.get("/", (req, res) => {
  res.json({
    message: "Capacity Connect backend is running!"
  });
});


// AI-ASSISTED COMPETENCY RECOMMENDATION
app.post("/api/recommend", (req, res) => {

  const { learningNeed } = req.body;

  const text = learningNeed.toLowerCase();

  let recommendation;


  // =====================================================
  // 1. PYTHON + OCEAN / MARINE DATA
  // =====================================================

  if (
    text.includes("python") &&
    (text.includes("ocean") ||
      text.includes("marine") ||
      text.includes("oceanography"))
  ) {

    recommendation = {
      competencies: [
        "Python Programming",
        "Data Analysis",
        "Ocean Data Processing"
      ],
      course: "Ocean Data Analysis with Python",
      trainer: "Dr. Ananya Sen",
      expertise: "Ocean Data Analytics · Python"
    };

  }


  // =====================================================
  // 2. WEB DEVELOPMENT
  // =====================================================

  else if (
    text.includes("web development") ||
    text.includes("web developer") ||
    text.includes("frontend") ||
    text.includes("front end") ||
    text.includes("backend development") ||
    text.includes("full stack")
  ) {

    recommendation = {
      competencies: [
        "HTML & CSS",
        "JavaScript",
        "Web Application Development"
      ],
      course: "Full Stack Web Development",
      trainer: "Dr. Neha Sharma",
      expertise: "Web Development · JavaScript · Full Stack"
    };

  }


  // =====================================================
  // 3. APP DEVELOPMENT
  // =====================================================

  else if (
    text.includes("app development") ||
    text.includes("android development") ||
    text.includes("mobile development") ||
    text.includes("mobile app")
  ) {

    recommendation = {
      competencies: [
        "Mobile Application Development",
        "UI Development",
        "Application Programming"
      ],
      course: "Modern Mobile App Development",
      trainer: "Dr. Rohan Kapoor",
      expertise: "Android · Mobile Applications · UI Development"
    };

  }


  // =====================================================
  // 4. ARTIFICIAL INTELLIGENCE / MACHINE LEARNING
  // =====================================================

  else if (
    text.includes("machine learning") ||
    text.includes("deep learning") ||
    text.includes("artificial intelligence") ||
    text.includes("neural network") ||
    text.includes("computer vision") ||
    text.includes("natural language processing") ||
    text.includes("nlp")
  ) {

    recommendation = {
      competencies: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Modelling"
      ],
      course: "Applied Artificial Intelligence & Machine Learning",
      trainer: "Dr. Priya Nair",
      expertise: "AI · Machine Learning · Deep Learning"
    };

  }


  // =====================================================
  // 5. DATA SCIENCE / DATA ANALYTICS
  // =====================================================

  else if (
    text.includes("data science") ||
    text.includes("data analysis") ||
    text.includes("data analytics") ||
    text.includes("data visualization") ||
    text.includes("statistics")
  ) {

    recommendation = {
      competencies: [
        "Data Analysis",
        "Statistical Analysis",
        "Data Visualization"
      ],
      course: "Data Science & Analytics",
      trainer: "Dr. Kavita Rao",
      expertise: "Data Science · Statistics · Data Visualization"
    };

  }


  // =====================================================
  // 6. CYBERSECURITY
  // =====================================================

  else if (
    text.includes("cybersecurity") ||
    text.includes("cyber security") ||
    text.includes("network security") ||
    text.includes("ethical hacking") ||
    text.includes("information security") ||
    text.includes("cryptography")
  ) {

    recommendation = {
      competencies: [
        "Cybersecurity",
        "Network Security",
        "Information Security"
      ],
      course: "Fundamentals of Cybersecurity",
      trainer: "Dr. Arvind Menon",
      expertise: "Cybersecurity · Network Security · Cryptography"
    };

  }


  // =====================================================
  // 7. CLOUD COMPUTING
  // =====================================================

  else if (
    text.includes("cloud computing") ||
    text.includes("cloud") ||
    text.includes("aws") ||
    text.includes("azure") ||
    text.includes("cloud architecture")
  ) {

    recommendation = {
      competencies: [
        "Cloud Computing",
        "Cloud Architecture",
        "Cloud Services"
      ],
      course: "Cloud Computing & Architecture",
      trainer: "Dr. Vikram Sethi",
      expertise: "Cloud Computing · AWS · Cloud Architecture"
    };

  }


  // =====================================================
  // 8. DEVOPS
  // =====================================================

  else if (
    text.includes("devops") ||
    text.includes("ci/cd") ||
    text.includes("continuous integration") ||
    text.includes("continuous deployment") ||
    text.includes("docker") ||
    text.includes("kubernetes")
  ) {

    recommendation = {
      competencies: [
        "DevOps",
        "CI/CD",
        "Containerization"
      ],
      course: "DevOps & Cloud Deployment",
      trainer: "Dr. Sameer Joshi",
      expertise: "DevOps · Docker · Kubernetes · CI/CD"
    };

  }


  // =====================================================
  // 9. DATABASE / BACKEND
  // =====================================================

  else if (
    text.includes("database") ||
    text.includes("sql") ||
    text.includes("mongodb") ||
    text.includes("backend") ||
    text.includes("server development")
  ) {

    recommendation = {
      competencies: [
        "Database Management",
        "Backend Development",
        "Data Storage"
      ],
      course: "Database & Backend Systems",
      trainer: "Dr. Meera Iyer",
      expertise: "Databases · Backend Systems · SQL · MongoDB"
    };

  }


  // =====================================================
  // 10. IOT / EMBEDDED SYSTEMS
  // =====================================================

  else if (
    text.includes("iot") ||
    text.includes("internet of things") ||
    text.includes("embedded") ||
    text.includes("arduino") ||
    text.includes("raspberry pi")
  ) {

    recommendation = {
      competencies: [
        "Internet of Things",
        "Embedded Systems",
        "Sensor Programming"
      ],
      course: "IoT & Embedded Systems",
      trainer: "Dr. S. Banerjee",
      expertise: "IoT · Embedded Systems · Sensor Networks"
    };

  }


  // =====================================================
  // 11. COMPUTER NETWORKS
  // =====================================================

  else if (
    text.includes("computer networks") ||
    text.includes("networking") ||
    text.includes("tcp") ||
    text.includes("ip address") ||
    text.includes("routing")
  ) {

    recommendation = {
      competencies: [
        "Computer Networks",
        "Network Protocols",
        "Network Architecture"
      ],
      course: "Computer Networks & Network Architecture",
      trainer: "Dr. Amit Verma",
      expertise: "Computer Networks · TCP/IP · Network Architecture"
    };

  }


  // =====================================================
  // 12. PROGRAMMING / SOFTWARE DEVELOPMENT
  // =====================================================

  else if (
    text.includes("programming") ||
    text.includes("software development") ||
    text.includes("coding") ||
    text.includes("c++") ||
    text.includes("java") ||
    text.includes("c programming")
  ) {

    recommendation = {
      competencies: [
        "Programming Fundamentals",
        "Problem Solving",
        "Software Development"
      ],
      course: "Programming & Software Development",
      trainer: "Dr. Nitin Gupta",
      expertise: "Programming · Software Engineering · Problem Solving"
    };

  }


  // =====================================================
  // 13. REMOTE SENSING / GIS
  // =====================================================

  else if (
    text.includes("remote sensing") ||
    text.includes("gis") ||
    text.includes("geospatial") ||
    text.includes("satellite data")
  ) {

    recommendation = {
      competencies: [
        "Remote Sensing",
        "Geospatial Analysis",
        "Satellite Data Processing"
      ],
      course: "Remote Sensing & Geospatial Analysis",
      trainer: "Dr. Arjun Das",
      expertise: "Remote Sensing · GIS · Satellite Data"
    };

  }


  // =====================================================
  // 14. PYTHON
  // =====================================================

  else if (text.includes("python")) {

    recommendation = {
      competencies: [
        "Python Programming",
        "Programming Fundamentals",
        "Problem Solving"
      ],
      course: "Python Programming & Applications",
      trainer: "Dr. Rahul Mehta",
      expertise: "Python · Programming · Data Applications"
    };

  }


  // =====================================================
  // DEFAULT
  // =====================================================

  else {

    recommendation = {
      competencies: [
        "Digital Skills",
        "Problem Solving",
        "Technical Competency"
      ],
      course: "Foundations of Digital Technology",
      trainer: "Dr. Kavita Rao",
      expertise: "Digital Skills · Data & Technology"
    };

  }


  res.json(recommendation);
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});