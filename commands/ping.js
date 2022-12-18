/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : SHANZ-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : SHANZ,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const SHANZ = require('../lib')
SHANZ.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        await citel.reply('```Ping!!!```');
        var final = new Date().getTime();
        return await citel.reply('*Pong*\n *' + (final - inital) + ' ms* ');
    }
);