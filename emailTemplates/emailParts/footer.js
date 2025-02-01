const i18n = require("i18next");

function getEmailFooter(currentYear) {
  return `
    <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
        <tr>
            <td align="center" style="padding:0;Margin:0">
                <table align="center" cellpadding="0" cellspacing="0" class="es-footer-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                    role="none">
                    <tr>
                        <td align="left"
                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:20px;padding-bottom:20px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            role="presentation"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" class="es-m-txt-c"
                                                    style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                                    <table cellpadding="0" cellspacing="0"
                                                        class="es-table-not-adapt es-social"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" valign="top"
                                                                class="es-m-p40r"
                                                                style="padding:0;Margin:0;padding-right:40px">
                                                                <a target="_blank"
                                                                    href="https://www.facebook.com/profile.php?id=61568548149477"
                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                        title="Facebook"
                                                                        src="https://images-pickup2.s3.eu-north-1.amazonaws.com/facebook-logo-black.png"
                                                                        alt="Facebook" width="36"
                                                                        height="36"
                                                                        style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a>
                                                            </td>
                                                            <td align="center" valign="top"
                                                                class="es-m-p40r es-m-p34r"
                                                                style="padding:0;Margin:0;padding-right:38px">
                                                                <a target="_blank"
                                                                    href="https://www.linkedin.com/company/pickup2/"
                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                        src="https://images-pickup2.s3.eu-north-1.amazonaws.com/linkedin-logo-black.png"
                                                                        alt="LinkedIn" width="36"
                                                                        height="36" title="LinkedIn"
                                                                        style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a>
                                                            </td>
                                                            <td align="center" valign="top"
                                                                class="es-m-p34r es-m-p40r"
                                                                style="padding:0;Margin:0;padding-right:38px">
                                                                <a target="_blank"
                                                                    href="https://x.com/PickUp2468"
                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                        height="36" title="X"
                                                                        src="https://images-pickup2.s3.eu-north-1.amazonaws.com/x-logo-black.png"
                                                                        alt="X" width="36"
                                                                        style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a>
                                                            </td>
                                                            <td align="center" valign="top"
                                                                class="es-m-p34r"
                                                                style="padding:0;Margin:0;padding-right:38px">
                                                                <a target="_blank"
                                                                    href=" https://www.instagram.com/pickup26011/"
                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                        height="36" title="Instagram"
                                                                       src="https://images-pickup2.s3.eu-north-1.amazonaws.com/instagram-logo-black.png"
                                                                        alt="Instagram" width="36"
                                                                        style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a>
                                                              
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center"
                                                    style="padding:0;Margin:0;padding-bottom:20px">
                                                    <p
                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px !important;letter-spacing:0;color:#333333;font-size:12px">
                                                        ${i18n.t(
                                                          "email.emailFooter.allRightsReserved",
                                                          {
                                                            year: currentYear,
                                                          }
                                                        )}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0;Margin:0">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        class="es-menu" role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr class="links">
                                                            <td align="center" valign="top"
                                                                width="33.33%"
                                                                style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px">
                                                                <div
                                                                    style="vertical-align:middle;display:block">
                                                                    <a target="_blank"
                                                                        href="https://pickup2.com"
                                                                        style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px"> ${i18n.t(
                                                                          "email.emailFooter.visitUs"
                                                                        )}</a>
                                                                </div>
                                                            </td>
                                                            <td align="center" valign="top"
                                                                width="33.33%"
                                                                style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc">
                                                                <div
                                                                    style="vertical-align:middle;display:block">
                                                                    <a target="_blank"
                                                                        href="https://pickup2.com/Privacy-Policy"
                                                                        style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px"> ${i18n.t(
                                                                          "email.emailFooter.privacyPolicy"
                                                                        )}</a>
                                                                </div>
                                                            </td>
                                                            <td align="center" valign="top"
                                                                width="33.33%"
                                                                style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc">
                                                                <div
                                                                    style="vertical-align:middle;display:block">
                                                                    <a target="_blank"
                                                                        href="https://pickup2.com/terms-and-conditions"
                                                                        style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px"> ${i18n.t(
                                                                          "email.emailFooter.termsOfService"
                                                                        )}</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
  `;
}

module.exports = { getEmailFooter };
