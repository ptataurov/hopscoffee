import Inputmask from 'inputmask'

window.addEventListener('DOMContentLoaded', () => {
  Inputmask({ mask: '+7 (999) 999-9999' }).mask('._input-phone')
})
