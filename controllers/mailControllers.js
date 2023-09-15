import nodemailer from 'nodemailer';
import { findxPath, postxPath } from '../utils.js';

export const mailSender = async (req, res, ) => {
    const {websiteName} = req.body
    const {xPath} = req.body
    const result = await findxPath(xPath)
    console.log(result)
    if (result.length === 0) {
        await postxPath(xPath)
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ali@truenation.ai',
                pass: 'dikehuuccihduuat'
            }
        });
    
        let mailDetails = {
            from: 'ali@truenation.ai',
            to: 'ali@truenation.ai',
            subject: 'xPath not found',
            text: `Website Name: ${websiteName}
            Missing xPath: ${xPath}`
        };
    
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs');
                res.send(err)
            } else {
                console.log('Email sent successfully');
                res.status(200).send("Mail Sent Successfully");
            }
        });
    }
    else {
        res.send("Email has already been sent")
    }

}
