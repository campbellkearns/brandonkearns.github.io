import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Karma',
      styles: [
           
      ]
    },
    {
      name: 'Work Sans',
      styles: [
        'Light',
        'Regular'
      ]
    },
  ],
  headerFontFamily: [ 'Karma' ],
  bodyFontFamily: [ 'Work Sans' ],
  bodyWeight: 300
})

export default typography