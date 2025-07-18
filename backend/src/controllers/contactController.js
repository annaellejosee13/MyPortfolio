// const { console } = require('inspector');
// const nodemailer = require('nodemailer');

// exports.sendMessage = async (req, res) => {
//     const { firstName, lastName, email, subject, message } = req.body;
//     console.log('Reçu:', req.body); // ← Ajoute cette ligne pour déboguer

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.MAIL_USER,
//             pass: process.env.MAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: email,
//         to: process.env.MAIL_USER,
//         subject: `[Portfolio] ${subject}`,
//         text: `De: ${firstName} ${lastName} <${email}>\n\n${message}`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ success: true, message: 'Message envoyé avec succès !' });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message.' });
//     }
// };