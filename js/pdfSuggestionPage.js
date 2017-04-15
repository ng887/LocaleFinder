var doc = new jsPDF();
var specialElementHandlers = {
    '#pdf': function (element, renderer) {   
        return true;
    }
};

$('#sapdf').click(function () {      
    doc.fromHTML($('#suggestionMain').html(), 15, 15, {  
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('Suggestions.pdf');
});