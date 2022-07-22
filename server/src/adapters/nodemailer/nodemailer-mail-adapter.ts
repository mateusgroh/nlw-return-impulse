import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6998de07fca742",
      pass: "eda65e91a47bf5"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: sendMailData) {
        await transport.sendMail({
            from: 'equipe feedget <oi@feedget.com>',
            to: 'Mateus Groh <mateus.groh@hotmail.com>',
            subject,
            html: body,
        });
    };
}