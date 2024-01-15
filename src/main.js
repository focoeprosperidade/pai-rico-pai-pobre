import './toggle-header.js';
import './toggle-dark-mode.js'
import './open-modal.js'


document.getElementById('copyPixButton').addEventListener('click', function () {
    var pixData = '00020126330014br.gov.bcb.pix0111669488942915204000053039865802BR5924Roberto Dias De Oliveira6009Sao Paulo62070503***6304286C';
    navigator.clipboard.writeText(pixData);
    alert('Pix copiado!');
});

