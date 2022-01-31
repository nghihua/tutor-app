DROP DATABASE IF EXISTS vgudb;
CREATE DATABASE vgudb
	DEFAULT CHARACTER SET utf8
	DEFAULT COLLATE utf8_general_ci;

use vgudb;

DROP TABLE IF EXISTS module;
CREATE TABLE module (
   	module_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    code VARCHAR(50),
    CONSTRAINT module_code_name UNIQUE (code, name)
) ENGINE=InnoDB;


ALTER TABLE module ADD UNIQUE (code); 
ALTER TABLE module ADD UNIQUE (code, name); 



INSERT INTO module (name, code) VALUES ("Elective course: Organizational Behavior", "62BBA353");
INSERT INTO module (name, code) VALUES ("Management", "62BFA203");
INSERT INTO module (name, code) VALUES ("Microeconomics", "62BBA201");
INSERT INTO module (name, code) VALUES ("Human Resource Management", "62BFA317");
INSERT INTO module (name, code) VALUES ("Elective course: Organizational Behavior", "62BFA353");
INSERT INTO module (name, code) VALUES ("Microeconomics", "62BFA201");
INSERT INTO module (name, code) VALUES ("Human Resource Management", "62BBA317");
INSERT INTO module (name, code) VALUES ("Elective course: Research Methodology", "62BBA308");
INSERT INTO module (name, code) VALUES ("Management", "62BBA203");
INSERT INTO module (name, code) VALUES ("Elective course: Research Methodology", "62BFA308");
INSERT INTO module (name, code) VALUES ("Mathematics for Economists", "62BBA101");
INSERT INTO module (name, code) VALUES ("Mathematics for Economists", "62BFA101");
INSERT INTO module (name, code) VALUES ("Descriptive Geometry", "61ARC103.1");
INSERT INTO module (name, code) VALUES ("Information Technology Essentials", "61BIS505.1");
INSERT INTO module (name, code) VALUES ("Advanced Finite Element Methods", "61COM604");
INSERT INTO module (name, code) VALUES ("Verification, Validation, and Uncertainty Quantification", "61COM602");
INSERT INTO module (name, code) VALUES ("Statistics", "61CSE212");
INSERT INTO module (name, code) VALUES ("Software Engineering - Analysis", "61CSE211");
INSERT INTO module (name, code) VALUES ("Object-oriented Programming Java", "61CSE213");
INSERT INTO module (name, code) VALUES ("Project", "61CSE324");
INSERT INTO module (name, code) VALUES ("Algebra", "61CSE101");
INSERT INTO module (name, code) VALUES ("Business Administration", "61CSE105");
INSERT INTO module (name, code) VALUES ("Calculus", "61CSE102");
INSERT INTO module (name, code) VALUES ("Introduction to Computer Science", "61CSE103");
INSERT INTO module (name, code) VALUES ("Compulsory Elective Subject", "61CSE325");
INSERT INTO module (name, code) VALUES ("Digital Systems", "61EIT303");
INSERT INTO module (name, code) VALUES ("Digital Signal Processing", "61EIT205");
INSERT INTO module (name, code) VALUES ("Digital Cicruit Design", "61EIT203");
INSERT INTO module (name, code) VALUES ("Electrical Engineering Materials", "61EIT201");
INSERT INTO module (name, code) VALUES ("Electronics 1", "61EIT202.1");
INSERT INTO module (name, code) VALUES ("Communications Engineering", "61EIT301");
INSERT INTO module (name, code) VALUES ("Control Engineering 2", "61EIT208.2");
INSERT INTO module (name, code) VALUES ("Digital Routing", "61EIT302");
INSERT INTO module (name, code) VALUES ("Special Topics in Electrical Engineering", "61EIT305");
INSERT INTO module (name, code) VALUES ("Experimental Physics 1", "61EIT102.1");
INSERT INTO module (name, code) VALUES ("Engineering Design", "61EIT104");
INSERT INTO module (name, code) VALUES ("Electric Circuits", "61EIT103");
INSERT INTO module (name, code) VALUES ("Fundamentals of Engineering Maths", "61EIT101");
INSERT INTO module (name, code) VALUES ("Engineering Design and CAD Modeling", "61GPE502");
INSERT INTO module (name, code) VALUES ("Information Systems Management", "61GPE602");
INSERT INTO module (name, code) VALUES ("International Business Communication", "62MBA506");
INSERT INTO module (name, code) VALUES ("Marketing in SMEs", "62MBA502");
INSERT INTO module (name, code) VALUES ("Mathematics 1", "61MEN111");
INSERT INTO module (name, code) VALUES ("Chemistry", "61MEN216.l");
INSERT INTO module (name, code) VALUES ("Fluid Mechanics", "61MEN229");
INSERT INTO module (name, code) VALUES ("Mechanics A", "61MEN121.l");
INSERT INTO module (name, code) VALUES ("Quality Management", "61MEN252");
INSERT INTO module (name, code) VALUES ("Basics of Materials Technology 1", "61MEN123");
INSERT INTO module (name, code) VALUES ("Modern Intelligent Control", "61MST602.1");
INSERT INTO module (name, code) VALUES ("Project Management", "61MST603.1");
INSERT INTO module (name, code) VALUES ("Analog Electronic Lab", "61MST502.1");
INSERT INTO module (name, code) VALUES ("Digital Signal Processing", "61MST504.2");
INSERT INTO module (name, code) VALUES ("Instruments of spatial planning", "61SUD601");
INSERT INTO module (name, code) VALUES ("Urban development and architecture of cities", "61SUD504");
INSERT INTO module (name, code) VALUES ("Development Planning and Governance", "61SUD603");
/* 22/2/2020 */

INSERT INTO module (name, code) VALUES ("Urban Transport Planning", "61SUD604");
INSERT INTO module (name, code) VALUES ("Digital Electronics Lab", "61MST502.2.lb");
INSERT INTO module (name, code) VALUES ("Exploring Engineering", "61ECE101");
INSERT INTO module (name, code) VALUES ("Advanced Programming", "61MST504.1");
INSERT INTO module (name, code) VALUES ("Human Resource Management", "62MBA504");
INSERT INTO module (name, code) VALUES ("Finance 2", "62BBA206");
INSERT INTO module (name, code) VALUES ("Finance 2", "62BFA206");
INSERT INTO module (name, code) VALUES ("Introduction to Programming with C", "61CSE104.1.l");
INSERT INTO module (name, code) VALUES ("Theoretical Computer Science", "61CSE110");
INSERT INTO module (name, code) VALUES ("Law and Data Proctection", "61CSE322");
INSERT INTO module (name, code) VALUES ("Mathematics 2", "61MEN112");
INSERT INTO module (name, code) VALUES ("Global Development GPE Seminar-Scientific Writing", "61GPE512");
INSERT INTO module (name, code) VALUES ("English 1", "61CSE106.1");
INSERT INTO module (name, code) VALUES ("Current Topics in Computer Science", "61CSE323.l.1");
INSERT INTO module (name, code) VALUES ("Technology of Sensors", "61MST503.2");
INSERT INTO module (name, code) VALUES ("Advanced Control System", "61MST505.1");
INSERT INTO module (name, code) VALUES ("Fundamentals of Telecommunications", "61EIT209.C");
INSERT INTO module (name, code) VALUES ("Management Skils in IT", "61BIS603.1");
INSERT INTO module (name, code) VALUES ("Production Technology I and II", "61GPE501");
INSERT INTO module (name, code) VALUES ("Systematic Product Development", "61GPE603");

	
/* ADD */

INSERT INTO module (name, code) VALUES ("Methodology of Empirical Analysis", "61SUD501");
INSERT INTO module (name, code) VALUES ("IELTS 2", "60IEL002");
INSERT INTO module (name, code) VALUES ("IELTS 3", "60IEL003");
INSERT INTO module (name, code) VALUES ("IELTS 4", "60IEL004");
INSERT INTO module (name, code) VALUES ("German 1 (A1.1)", "60GER001");
INSERT INTO module (name, code) VALUES ("Business English 1", "60AEP009.1");
INSERT INTO module (name, code) VALUES ("Engineering English 1", "60AEP011.1");
INSERT INTO module (name, code) VALUES ("Academic Writing 1", "60AEP003.1");
INSERT INTO module (name, code) VALUES ("Academic Writing 2", "60AEP003.2");
INSERT INTO module (name, code) VALUES ("Mathematics 1 (Pre-Calculus)", "60SCN001");
INSERT INTO module (name, code) VALUES ("Matlab", "60SCN023");
INSERT INTO module (name, code) VALUES ("Surveying", "61ARC103.2");
INSERT INTO module (name, code) VALUES ("International and Intercultural Project Management", "61GPE510");
INSERT INTO module (name, code) VALUES ("Modern Programming Concepts in Engineering", "61COM601");
INSERT INTO module (name, code) VALUES ("System Identification", "61MST605.2");
INSERT INTO module (name, code) VALUES ("Vietnamese laws of property and planning", "61SUD502");
INSERT INTO module (name, code) VALUES ("International and Intercultural Project Management", "61GPE510");
INSERT INTO module (name, code) VALUES ("WPMM Decision Making and Business Information", "62BFA343");
INSERT INTO module (name, code) VALUES ("Basics of Machine Dynamics and Drive System Technology", "61MEN331");
INSERT INTO module (name, code) VALUES ("Smart Materials", "61MST503.1");
INSERT INTO module (name, code) VALUES ("Additive manufacturing Lecture/Project", "61GPE511");
INSERT INTO module (name, code) VALUES ("Data-Warehouse and Business Intelligence", "61BIS507.2");
