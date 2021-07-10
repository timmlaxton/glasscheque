import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
const nodemailer = "nodemailer";
const path = "path";

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// const contactEmail = nodemailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		user: process.env.NODEMAILER_USER,
// 		pass: process.env.NODEMAILER_PASSWORD
// 	}
// });

// contactEmail.verify((error) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log('Ready to Send');
// 	}
// });

// app.post('/api/contact', (req, res) => {
// 	const name = req.body.name;
// 	const email = req.body.email;
// 	const message = req.body.message;
// 	const mail = {
// 		from: name,
// 		to: 'timmlaxton@gmail.com',
// 		subject: 'Contact Form Submission',
// 		html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`
// 	};
// 	contactEmail.sendMail(mail, (error) => {
// 		if (error) {
// 			res.json({ status: 'ERROR' });
// 		} else {
// 			res.json({ status: 'Thanks for getting in touch, I will get back to you soon' });
// 		}
// 	});
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
