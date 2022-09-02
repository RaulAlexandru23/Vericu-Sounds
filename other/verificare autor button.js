// Verificare pentru autorul butonului

if(interaction.customId.includes(interaction.user.id)) {
    if (!interaction.customId.endsWith(interaction.user.id)) {
        // This is not the sender
        console.log(false);
        return;
    } else {
        // This is the sender
        interaction.channel.send({
            content: "This button works!",
        });
        console.log(true);
    }
}