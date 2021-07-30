const router = require("express").Router();
const { sendEmail, Utils } = require("../utils");

// Email Sending
router.post("/email/sending", async (req, res) => {
  let data = req.body;

  try {
    await sendEmail({
      address: data.email,
      subject: data.subject,
      html: `<P>${data.fullName}<br/> ${data.message}</p>`,
    });
    res.json({ requestCode: 1, msg: "Email has been sent" });
  } catch (e) {
    res.json({ requestCode: 0, msg: "Email sending failed!" });
  }
});

module.exports = router;
