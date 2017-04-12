var doc = new jsPDF();
var specialElementHandlers = {
    '#pdf': function (element, renderer) {   /* #pdf is the id of div in which the 'saveaspdf' button/link is placed */
        return true;
    }
};

$('#sapdf').click(function () {       /* #sapdf is the id of link/button of 'save as pdf' option */
    doc.fromHTML($('#mainDiv').html(), 15, 15, {  /* #mainDiv is the id of the Div whose content is to be saved as pdf */
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('comparisonOfNeighborhoods.pdf');
});