pdfMake.fonts = {
    // download default Roboto font from cdnjs.com
    Droid: {
        normal: 'http://themes.googleusercontent.com/static/fonts/droidarabicnaskh/v4/DoPHb5-mRxBWLB7ak7r4l-vEXaiLhZejxijdYJV8mI4.ttf',
        bold:'http://themes.googleusercontent.com/static/fonts/droidarabicnaskh/v4/DoPHb5-mRxBWLB7ak7r4l-vEXaiLhZejxijdYJV8mI4.ttf',
        italics:'http://themes.googleusercontent.com/static/fonts/droidarabicnaskh/v4/DoPHb5-mRxBWLB7ak7r4l-vEXaiLhZejxijdYJV8mI4.ttf' ,
        bolditalics:'http://themes.googleusercontent.com/static/fonts/droidarabicnaskh/v4/DoPHb5-mRxBWLB7ak7r4l-vEXaiLhZejxijdYJV8mI4.ttf' 

    },

    d: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
      },
};


var docDefinition = {
    defaultStyle: {
        font: 'Droid'
    }
};
// open the PDF in a new window
pdfMake.createPdf(docDefinition).open();

// download the PDF
pdfMake.createPdf(docDefinition).download('optionalName.pdf');