import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Work Sans',
      styles: [
        'Regular',
        'Light'
      ]
    },
    {
      name: 'Montserrat',
      styles: [
        'Regular',
        'Light'
      ]
    }
  ],
  headerFontFamily: [ 'Work Sans' ],
  bodyFontFamily: [ 'Montserrat' ],
})

export default typography