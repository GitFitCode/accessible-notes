let g = $('Stefan', 'Lemak', 'en');
console.log(`G$: ${G$.getfullName()}`);

console.log('?? :', G$.greet('sirrele', 'steinfeld'));


$('#login').click(() => {
    let loginGreetr = G$('Stefan', 'Lemak')
   loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})