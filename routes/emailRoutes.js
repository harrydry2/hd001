var nodemailer = require("nodemailer");

module.exports = app => {
  app.post("/contact", (req, res) => {
    const { firstName, lastName, School, Phone, Email, Message } = req.body;
    // nodemailer Stuff
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harrydry1996@gmail.com",
        pass: "DavidLuiz4"
      }
    });
    const mailOptions = {
      from: `${firstName} ${lastName}<harrydry1996@gmail.com>`, // sender address
      to: "info@maximizeyourpotential.co.uk", // list of receivers
      subject: "Enquiry from our Brand New Website!", // Subject line
      html: `
        Name: ${firstName} ${lastName} <br><br>
        School: ${School} <br><br>
        Email: ${Email} <br><br>
        Phone: ${Phone} <br><br>
        Message: ${Message}
      `
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.json(req.body);
  });
};